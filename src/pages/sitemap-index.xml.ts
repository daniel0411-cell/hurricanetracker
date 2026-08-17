import type { APIRoute } from "astro";
import { site } from "../data/site";

export const prerender = true;

const sitemapPaths = [
  "sitemap.xml",
  "sitemap-pages.xml",
  "sitemap-blog.xml",
  "sitemap-tools.xml",
  "sitemap-locations.xml"
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path) => `  <sitemap>
    <loc>${site.url}/${path}</loc>
    <lastmod>${site.contentLastModified}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>`;
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
};
