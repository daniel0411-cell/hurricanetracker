import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

const RAINVIEWER_URL = "https://api.rainviewer.com/public/weather-maps.json";
const CACHE_KEY = "radar:rainviewer:weather-maps";
const CACHE_TTL_SECONDS = 60 * 5;
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
      "cache-control": "public, max-age=120, s-maxage=300",
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
  const cache = env.HURRICANEHUB_CACHE;

  try {
    const cached = await cache?.get(CACHE_KEY, "json");
    if (cached) {
      return jsonResponse({ ...(cached as object), cached: true });
    }

    const response = await fetch(RAINVIEWER_URL, {
      headers: {
        accept: "application/json",
        "user-agent": "HurricaneHub/1.0 (https://www.hurricanetracker.cc; weather data cache)"
      }
    });

    if (!response.ok) {
      throw new Error(`RainViewer returned ${response.status}`);
    }

    const data = await response.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("RainViewer returned invalid JSON");
    }

    const payload = {
      ...data,
      cached: false,
      fetchedAt: new Date().toISOString()
    };

    await cache?.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL_SECONDS });
    return jsonResponse(payload);
  } catch (error) {
    console.error("HurricaneHub RainViewer proxy failed", { error });
    return jsonResponse({ error: "RainViewer radar timeline unavailable." }, { status: 502 });
  }
};
