import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { summarizeStorm, type NhcStorm } from "../../../lib/weather";

const NHC_CURRENT_STORMS = "https://www.nhc.noaa.gov/CurrentStorms.json";
const CACHE_KEY = "nhc:current-storms";
const CACHE_TTL_SECONDS = 600;
const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-allow-headers": "content-type"
};

function getCache() {
  return env.HURRICANEHUB_CACHE;
}

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
  const cache = getCache();
  let cached: string | null = null;
  try {
    cached = (await cache?.get(CACHE_KEY)) ?? null;
  } catch (kvError) {
    console.error("NHC cache read failed, skipping cache", { error: kvError });
  }
  if (cached) {
    return new Response(cached, {
      headers: {
        ...CORS_HEADERS,
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=120",
        "x-hurricanehub-cache": "hit"
      }
    });
  }

  try {
    const response = await fetch(NHC_CURRENT_STORMS, {
      headers: {
        accept: "application/json",
        "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)"
      }
    });

    if (!response.ok) {
      console.error("NHC current storms feed returned an error", { status: response.status });
      return jsonResponse({ error: "NHC feed unavailable", status: response.status, source: NHC_CURRENT_STORMS }, { status: 502 });
    }

    const raw = await response.json() as { activeStorms?: NhcStorm[] };
    const fetchedAt = new Date().toISOString();
    const storms = (raw.activeStorms ?? []).map((storm) => ({
      ...storm,
      summary: summarizeStorm(storm)
    }));
    const body = JSON.stringify({
      source: NHC_CURRENT_STORMS,
      fetchedAt,
      updatedAt: fetchedAt,
      cacheTtlSeconds: CACHE_TTL_SECONDS,
      storms
    });

    await cache?.put(CACHE_KEY, body, { expirationTtl: CACHE_TTL_SECONDS });

    return new Response(body, {
      headers: {
        ...CORS_HEADERS,
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=120",
        "x-hurricanehub-cache": "miss"
      }
    });
  } catch (error) {
    console.error("NHC current storms proxy failed", { source: NHC_CURRENT_STORMS, error });
    return jsonResponse({ error: "NHC current storms proxy failed", source: NHC_CURRENT_STORMS }, { status: 502 });
  }
};
