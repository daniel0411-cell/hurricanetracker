import type { APIRoute } from "astro";
import { cachedWeather } from "../../../lib/weatherCache";

const RAINVIEWER_URL = "https://api.rainviewer.com/public/weather-maps.json";
const CACHE_KEY = "radar:rainviewer:weather-maps";
const CACHE_TTL_SECONDS = 60 * 5;
const UPSTREAM_TIMEOUT_MS = 8_000;
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
      "cache-control": (init.status ?? 200) >= 400 ? "no-store" : "public, max-age=120, s-maxage=300",
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
    const { value: payload, cacheStatus } = await cachedWeather(CACHE_KEY, CACHE_TTL_SECONDS, async () => {
      const response = await fetch(RAINVIEWER_URL, {
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
        headers: {
          accept: "application/json",
          "user-agent": "HurricaneHub/1.0 (https://www.hurricanetracker.cc; weather data cache)",
        },
      });

      if (!response.ok) {
        throw new Error(`RainViewer returned ${response.status}`);
      }

      const data = await response.json();
      if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("RainViewer returned invalid JSON");
      }

      return {
        ...data,
        cached: false,
        fetchedAt: new Date().toISOString(),
      };
    });
    return jsonResponse({ ...payload, cached: cacheStatus === "hit" }, {
      headers: { "x-hurricanehub-cache": cacheStatus, "x-hurricanehub-cache-store": "edge" }
    });
  } catch (error) {
    console.error("HurricaneHub RainViewer proxy failed", { error });
    return jsonResponse({ error: "RainViewer radar timeline unavailable." }, { status: 502 });
  }
};
