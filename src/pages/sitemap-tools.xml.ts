import type { APIRoute } from "astro";
import { renderUrlset, routesBySection } from "../lib/sitemapRoutes";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(renderUrlset(routesBySection("tools")), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
