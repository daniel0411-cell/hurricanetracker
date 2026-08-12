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
//   node scripts/gindex-submit.mjs            # submit (skips if no credential)
//   node scripts/gindex-submit.mjs --dry-run  # parse sitemap, print URLs, no auth

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
  return locs;
}

async function publishUrl(url, token) {
  const res = await fetch(INDEX_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  return res;
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
  const CONCURRENCY = 10;
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map(async (u) => {
        try {
          const r = await publishUrl(u, token);
          return { u, status: r.status };
        } catch (e) {
          return { u, status: 0, err: e.message };
        }
      })
    );
    for (const r of results) {
      if (r.status >= 200 && r.status < 300) ok++;
      else {
        fail++;
        log(`  FAILED (${r.status ?? "ERR"}) ${r.u} ${r.err ?? ""}`);
      }
    }
    log(`Progress: ${Math.min(i + CONCURRENCY, urls.length)}/${urls.length} (ok=${ok} fail=${fail})`);
  }
  log(`\nDone. Submitted ${ok} URLs, ${fail} failed.`);
  if (fail > 0) log("Warning: some URLs failed; Google may retry or you can re-run.");
}

main().catch((err) => {
  console.error("gindex warning:", err.message);
  console.error("Indexing API submission skipped; deploy continues.");
  process.exit(0);
});
