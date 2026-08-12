#!/usr/bin/env node
/**
 * IndexNow auto-submission.
 * Reads the built sitemap (dist/client/sitemap.xml) and notifies search
 * engines (Bing, Yandex, Naver, etc.) of all URLs via the IndexNow protocol.
 *
 * Usage (after `wrangler deploy` so the key file is live):
 *   node scripts/indexnow-submit.mjs
 *
 * Env overrides:
 *   INDEXNOW_KEY   key string (otherwise falls back to the constant below)
 *   SITE_HOST      e.g. www.hurricanetracker.cc
 *   SITEMAP_PATH   local path to sitemap.xml (default dist/client/sitemap.xml)
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

// IndexNow key (public, also hosted at https://<SITE_HOST>/<KEY>.txt)
const KEY =
  process.env.INDEXNOW_KEY ||
  "7429d9b1224488da7dfa4eae2076dd5e382911169c27b9ea39e6dd692305e179";
const HOST = process.env.SITE_HOST || "www.hurricanetracker.cc";
const KEY_LOC = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

function parseSitemap(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const u = m[1].trim();
    if (u) urls.push(u);
  }
  return urls;
}

function loadUrls() {
  const candidates = [
    process.env.SITEMAP_PATH,
    resolve(projectRoot, "dist/client/sitemap.xml"),
    resolve(projectRoot, "public/sitemap.xml"),
  ].filter(Boolean);

  for (const p of candidates) {
    if (existsSync(p)) {
      const xml = readFileSync(p, "utf8");
      const urls = parseSitemap(xml);
      if (urls.length) {
        console.log(`[indexnow] loaded ${urls.length} URLs from ${p}`);
        return urls;
      }
    }
  }
  throw new Error(
    "[indexnow] could not find a sitemap with <loc> entries. Build first or set SITEMAP_PATH."
  );
}

async function submit(urls) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOC,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await res.text().catch(() => "");
  if (res.status >= 200 && res.status < 300) {
    console.log(`[indexnow] OK — ${urls.length} URLs submitted (HTTP ${res.status}).`);
    return true;
  }
  console.error(`[indexnow] FAILED — HTTP ${res.status}: ${text.slice(0, 300)}`);
  return false;
}

(async () => {
  try {
    const urls = loadUrls();
    const ok = await submit(urls);
    process.exit(ok ? 0 : 1);
  } catch (e) {
    console.error(`[indexnow] ${e.message}`);
    process.exit(1);
  }
})();
