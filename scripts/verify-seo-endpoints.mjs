#!/usr/bin/env node
/**
 * Checks the production SEO entry points immediately after deployment.
 * A failing sitemap should stop the release process before search engines
 * encounter the same problem.
 */

const site = process.env.SITE_URL || "https://www.hurricanetracker.cc";
const publisherId = "ca-pub-7504167844948264";
const crawlerUserAgents = [
  "Mediapartners-Google",
  "AdsBot-Google (+http://www.google.com/adsbot.html)",
  "Googlebot/2.1 (+http://www.google.com/bot.html)",
];
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
  const entries = [
    "http://hurricanetracker.cc/",
    "https://hurricanetracker.cc/",
    "http://www.hurricanetracker.cc/",
    "https://www.hurricanetracker.cc/",
  ];

  for (const entry of entries) {
    for (const userAgent of crawlerUserAgents) {
      for (const method of ["GET", "HEAD"]) {
        let current = entry;
        const hops = [];

        for (let hop = 0; hop < 4; hop += 1) {
          const response = await fetch(current, {
            method,
            headers: { "user-agent": userAgent },
            redirect: "manual",
            signal: AbortSignal.timeout(15_000),
          });
          hops.push(`${response.status} ${current}`);

          if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("location");
            if (!location) throw new Error(`${current} returned ${response.status} without Location`);
            current = new URL(location, current).toString();
            continue;
          }

          if (!response.ok || current !== `${site}/`) {
            throw new Error(`${entry} failed for ${userAgent} ${method}: ${hops.join(" -> ")}`);
          }

          const body = method === "GET" ? await response.text() : "";
          if (method === "GET" && (!body.includes(publisherId) || /Just a moment|cf-chl-/i.test(body))) {
            throw new Error(`${entry} returned a challenge or omitted ${publisherId} for ${userAgent}`);
          }

          console.log(`[seo-check] OK ${userAgent} ${method} ${hops.join(" -> ")}`);
          break;
        }

        if (hops.length === 4 && !hops.at(-1)?.startsWith("200 ")) {
          throw new Error(`${entry} exceeded three redirects for ${userAgent} ${method}`);
        }
      }
    }
  }
}

try {
  await verifyAdSenseEntry();
  for (const endpoint of endpoints) await verify(endpoint);
  console.log("[seo-check] Production SEO endpoints are healthy.");
} catch (error) {
  console.error(`[seo-check] FAILED: ${error.message}`);
  process.exit(1);
}
