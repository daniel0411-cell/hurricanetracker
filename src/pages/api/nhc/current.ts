import type { APIRoute } from "astro";
import { getNhcCurrentFeed, NHC_CURRENT_STORMS } from "../../../lib/nhcCurrent";
const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-allow-headers": "content-type"
};

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return Response.json(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      "cache-control": "public, max-age=120",
      ...(init.headers ?? {})
    }
  });
}

export const OPTIONS: APIRoute = () =>
  new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });

export const GET: APIRoute = async () => {
  try {
    const { feed, cacheStatus } = await getNhcCurrentFeed();
    return new Response(JSON.stringify(feed), {
      headers: {
        ...CORS_HEADERS,
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=120",
        "x-hurricanehub-cache": cacheStatus
      }
    });
  } catch (error) {
    console.error("NHC current storms proxy failed", { source: NHC_CURRENT_STORMS, error });
    return jsonResponse({ error: "NHC current storms proxy failed", source: NHC_CURRENT_STORMS }, { status: 502 });
  }
};
