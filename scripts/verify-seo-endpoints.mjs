#!/usr/bin/env node
/**
 * Checks the production SEO entry points immediately after deployment.
 * A failing sitemap should stop the release process before search engines
 * encounter the same problem.
 */

const site = process.env.SITE_URL || "https://www.hurricanetracker.cc";
const endpoints = [
  { path: "/robots.txt", contentType: "text/plain", marker: "Sitemap:" },
  { path: "/sitemap-index.xml", contentType: "xml", marker: "<sitemapindex" },
  { path: "/sitemap.xml", contentType: "xml", marker: "<urlset" },
];

async function verify({ path, contentType, marker }) {
  const url = new URL(path, site).toString();
  const response = await fetch(url, {
    headers: { "user-agent": "HurricaneHub SEO health check" },
    signal: AbortSignal.timeout(15_000),
  });
  const body = await response.text();
  const type = response.headers.get("content-type") || "";

  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`);
  }
  if (!type.includes(contentType)) {
    throw new Error(`${url} returned unexpected content type: ${type || "missing"}`);
  }
  if (!body.includes(marker)) {
    throw new Error(`${url} did not contain ${marker}`);
  }

  console.log(`[seo-check] OK ${response.status} ${url}`);
}

try {
  for (const endpoint of endpoints) await verify(endpoint);
  console.log("[seo-check] Production SEO endpoints are healthy.");
} catch (error) {
  console.error(`[seo-check] FAILED: ${error.message}`);
  process.exit(1);
}
