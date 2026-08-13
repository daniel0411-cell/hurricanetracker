import type { APIRoute } from "astro";
import { site } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\n\nSitemap: ${site.url}/sitemap-index.xml\nSitemap: ${site.url}/sitemap.xml\n`,
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=3600"
      }
    }
  );
