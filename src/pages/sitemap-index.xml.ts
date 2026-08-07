import type { APIRoute } from "astro";
import { site } from "../data/site";

export const prerender = true;

// Sitemap index — referenced by Google Search Console as:
//   https://www.hurricanetracker.cc/sitemap-index.xml
// Wraps the main /sitemap.xml so GSC can discover all URLs in one place.
export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site.url}/sitemap.xml</loc>
    <lastmod>${site.contentLastModified}</lastmod>
  </sitemap>
</sitemapindex>`;
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
};
