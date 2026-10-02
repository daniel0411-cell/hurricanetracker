#!/usr/bin/env node
/**
 * Checks the production SEO entry points immediately after deployment.
 * A failing sitemap should stop the release process before search engines
 * encounter the same problem.
 */

const site = process.env.SITE_URL || "https://www.hurricanetracker.cc";
const publisherId = "ca-pub-7504167844948264";
const endpoints = [
  { path: "/", contentType: "text/html", marker: publisherId, userAgent: "Mediapartners-Google" },
  { path: "/robots.txt", contentType: "text/plain", marker: "Sitemap:" },
  { path: "/ads.txt", contentType: "text/plain", marker: "pub-7504167844948264" },
  { path: "/favicon.ico", contentType: "image/", marker: null },
  { path: "/privacy/", contentType: "text/html", marker: "Privacy Policy" },
  { path: "/about/", contentType: "text/html", marker: "About HurricaneHub" },
  { path: "/contact/", contentType: "text/html", marker: "Contact HurricaneHub" },
  { path: "/sitemap-index.xml", contentType: "xml", marker: "<sitemapindex" },
  { path: "/sitemap.xml", contentType: "xml", marker: "<urlset" },
  { path: "/sitemap-locations.xml", contentType: "xml", marker: "/hurricane-tracker/storm/" },
];

async function verify({ path, contentType, marker, userAgent = "HurricaneHub SEO health check" }) {
  const url = new URL(path, site).toString();
  const response = await fetch(url, {
    headers: { "user-agent": userAgent },
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
  if (marker && !body.includes(marker)) {
    throw new Error(`${url} did not contain ${marker}`);
  }

  console.log(`[seo-check] OK ${response.status} ${url}`);
}

async function verifyAdSenseEntry() {
  const entry = "http://hurricanetracker.cc/";
  const response = await fetch(entry, {
    headers: { "user-agent": "Mediapartners-Google" },
    redirect: "follow",
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok || response.url !== `${site}/`) {
    throw new Error(`${entry} resolved to ${response.status} ${response.url}`);
  }
  console.log(`[seo-check] OK ${response.status} ${entry} -> ${response.url}`);
}

try {
  await verifyAdSenseEntry();
  for (const endpoint of endpoints) await verify(endpoint);
  console.log("[seo-check] Production SEO endpoints are healthy.");
} catch (error) {
  console.error(`[seo-check] FAILED: ${error.message}`);
  process.exit(1);
}
