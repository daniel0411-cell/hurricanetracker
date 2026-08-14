#!/usr/bin/env node
// scripts/gindex-submit.mjs
// Submit sitemap URLs to the Google Indexing API (urlNotifications:publish).
//
// Google does NOT support IndexNow, so Bing's pipeline cannot be reused here.
// This script uses the Google Indexing API, which requires an OAuth2 service
// account credential (scope: https://www.googleapis.com/auth/indexing).
//
// Credential sources (in order):
//   1. env GOOGLE_SERVICE_ACCOUNT_JSON  (JSON string)
//   2. file ./gcp-sa.json               (JSON on disk)
//
// If no credential is found, the script SKIPS gracefully (exit 0) so it can be
// wired into the deploy pipeline without blocking when unconfigured.
//
// Pure Node built-ins only (hand-rolled RS256 JWT) — no npm install required.
//
// Usage:
//   node scripts/gindex-submit.mjs                       # submit ALL sitemap URLs
//   node scripts/gindex-submit.mjs --dry-run             # parse sitemap, print URLs, no auth
//   node scripts/gindex-submit.mjs --only slug1,slug2    # submit ONLY the matching blog URLs
//   node scripts/gindex-submit.mjs --only slug1 --only slug2
//
// Note: Node's global fetch (undici) ignores HTTP_PROXY/HTTPS_PROXY. If a proxy
// env var is set, this script auto-routes fetch through it via an optional undici
// ProxyAgent (skips gracefully if undici is not installed).

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://www.hurricanetracker.cc";
const SCOPE = "https://www.googleapis.com/auth/indexing";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const INDEX_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";

const DRY_RUN = process.argv.includes("--dry-run");
const isQuiet = process.argv.includes("--quiet");

// Collect --only <slug> (repeatable, comma-separated also supported)
const onlySlugs = [];
for (let i = 0; i < process.argv.length; i++) {
  const a = process.argv[i];
  if (a === "--only") {
    const next = process.argv[i + 1];
    if (next && !next.startsWith("--")) {
      next.split(",").map((s) => s.trim()).filter(Boolean).forEach((s) => onlySlugs.push(s));
      i++;
    }
  } else if (a.startsWith("--only=")) {
    a.slice("--only=".length).split(",").map((s) => s.trim()).filter(Boolean).forEach((s) => onlySlugs.push(s));
  }
}

function log(...a) { if (!isQuiet) console.log(...a); }

function loadCredential() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    try {
      return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    } catch (e) {
      console.error("GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON:", e.message);
      process.exit(2);
    }
  }
  const p = path.resolve(process.cwd(), "gcp-sa.json");
  if (fs.existsSync(p)) {
    try {
      return JSON.parse(fs.readFileSync(p, "utf8"));
    } catch (e) {
      console.error("gcp-sa.json is not valid JSON:", e.message);
      process.exit(2);
    }
  }
  return null;
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function createJWT(sa) {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: sa.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };
  const seg = base64url(JSON.stringify(header)) + "." + base64url(JSON.stringify(payload));
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(seg);
  const sig = signer.sign(sa.private_key, "base64url");
  return seg + "." + sig;
}

async function getAccessToken(sa) {
  const jwt = createJWT(sa);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OAuth token request failed (${res.status}): ${text}`);
  }
  const json = await res.json();
  return json.access_token;
}

async function loadUrls() {
  const local = path.resolve(process.cwd(), "dist/client/sitemap.xml");
  let xml;
  if (fs.existsSync(local)) {
    xml = fs.readFileSync(local, "utf8");
    log("Loaded sitemap from dist/client/sitemap.xml");
  } else {
    log("dist/client/sitemap.xml not found, fetching live sitemap...");
    const r = await fetch(`${SITE}/sitemap.xml`);
    if (!r.ok) throw new Error(`Failed to fetch live sitemap (${r.status})`);
    xml = await r.text();
  }
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean);
  if (onlySlugs.length) {
    const filtered = locs.filter((u) =>
      onlySlugs.some((s) => u.includes(`/blog/${s}`) || u.endsWith(`/${s}`) || u === `${SITE}/${s}`)
    );
    log(`Filtered to ${filtered.length} URL(s) matching slug(s): ${onlySlugs.join(", ")}`);
    return filtered;
  }
  return locs;
}

async function publishUrl(url, token) {
  const res = await fetch(INDEX_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    // type is REQUIRED by the Indexing API (URL_UPDATED | URL_DELETED)
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  const ok = res.status >= 200 && res.status < 300;
  const text = ok ? "" : (await res.text().catch(() => "")).slice(0, 500);
  return { status: res.status, body: text };
}


async function main() {
  if (DRY_RUN) {
    const urls = await loadUrls();
    log(`Found ${urls.length} URLs in sitemap.`);
    log("DRY RUN — no submissions sent.");
    urls.slice(0, 10).forEach((u) => log("  • " + u));
    if (urls.length > 10) log(`  … and ${urls.length - 10} more`);
    return;
  }

  // Node global fetch (undici) ignores HTTP_PROXY/HTTPS_PROXY. If a proxy is
  // configured, route fetch through it via an optional undici ProxyAgent so the
  // OAuth token request and Indexing API calls can reach Google from sandboxes.
  if (process.env.HTTPS_PROXY || process.env.HTTP_PROXY) {
    try {
      const { ProxyAgent, setGlobalDispatcher } = await import("undici");
      setGlobalDispatcher(new ProxyAgent(process.env.HTTPS_PROXY || process.env.HTTP_PROXY));
      log("Routing fetch through proxy (Node fetch ignores HTTP_PROXY by default).");
    } catch {
      log("Note: proxy env set but undici not available; attempting direct connection.");
    }
  }

  const sa = loadCredential();
  if (!sa) {
    log("SKIP: no Google service-account credential found.");
    log("  Set GOOGLE_SERVICE_ACCOUNT_JSON or place gcp-sa.json in project root to enable.");
    log("  See indexnow-submitter skill for credential setup steps.");
    process.exit(0);
  }
  log(`Using service account: ${sa.client_email}`);

  let token;
  try {
    token = await getAccessToken(sa);
  } catch (e) {
    log("WARN: could not obtain Google access token (" + e.message + ").");
    log("Skipping Indexing API submission — deploy continues. Verify network/credentials later.");
    process.exit(0);
  }
  log("Obtained access token.");

  const urls = await loadUrls();
  log(`Found ${urls.length} URLs in sitemap.`);

  let ok = 0;
  let fail = 0;
  let rateLimited = false;
  const CONCURRENCY = 1; // polite: Indexing API daily quota is 200; burst submissions are wasteful
  const DELAY_MS = 300;  // small pause between requests to avoid looking like a burst
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    if (rateLimited) {
      log(`  STOPPING early: daily quota already exhausted; remaining ${urls.length - i} URLs skipped.`);
      fail += urls.length - i;
      break;
    }
    const batch = urls.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
            batch.map(async (u) => {
        try {
          const r = await publishUrl(u, token);
          return { u, status: r.status, err: r.body };
        } catch (e) {
          return { u, status: 0, err: e.message };
        }
      })

    );
    for (const r of results) {
      if (r.status === 429) rateLimited = true;
      if (r.status >= 200 && r.status < 300) ok++;
      else {
        fail++;
        log(`  FAILED (${r.status ?? "ERR"}) ${r.u} ${r.err ?? ""}`);
      }
    }
    log(`Progress: ${Math.min(i + CONCURRENCY, urls.length)}/${urls.length} (ok=${ok} fail=${fail})`);
    if (i + CONCURRENCY < urls.length && !rateLimited) {
      await new Promise((res) => setTimeout(res, DELAY_MS));
    }
  }
  log(`\nDone. Submitted ${ok} URLs, ${fail} failed.`);
  if (rateLimited) {
    log("Note: hit Google Indexing API daily quota (200 requests/day). The skipped URLs will be retried by the next scheduled run.");
  } else if (fail > 0) {
    log("Warning: some URLs failed; Google may retry or you can re-run.");
  }
}

main().catch((err) => {
  console.error("gindex warning:", err.message);
  console.error("Indexing API submission skipped; deploy continues.");
  process.exit(0);
});
