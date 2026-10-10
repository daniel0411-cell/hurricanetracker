import type { APIRoute } from "astro";
import { cachedWeather } from "../../../lib/weatherCache";

const SOURCE = "https://api.weather.gov/alerts/active";
const CACHE_KEY = "nws:states:counts";
const CACHE_TTL_SECONDS = 300;
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
      "cache-control": (init.status ?? 200) >= 400 ? "no-store" : "public, max-age=120",
      ...(init.headers ?? {})
    }
  });
}

export const OPTIONS: APIRoute = () =>
  new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });

/**
 * Aggregate active NWS alerts per US state using the UGC geocode prefix
 * (e.g. "ILC001" -> "IL"). NWS does not accept area=US, so we pull the full
 * active feed and bucket by UGC prefix. Returns the full count map plus a
 * top-N ranking so the radar sidebar can render a compact alert heatmap.
 */
export const GET: APIRoute = async () => {
  try {
    const { value: body, cacheStatus } = await cachedWeather(CACHE_KEY, CACHE_TTL_SECONDS, async () => {
      const response = await fetch(SOURCE, {
        signal: AbortSignal.timeout(8_000),
        headers: {
          accept: "application/geo+json",
          "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)",
        },
      });

      if (!response.ok) {
        console.error("NWS US alert feed returned an error", { status: response.status });
        throw new Error(`NWS US alert feed returned HTTP ${response.status}`);
      }

      const raw = (await response.json()) as { features?: any[]; updated?: string };
      if (!Array.isArray(raw.features)) throw new Error("NWS US alert feed is missing features");
      const features = raw.features;
      const counts: Record<string, number> = {};

      for (const feature of features) {
        const geocode: string[] = feature?.properties?.geocode?.UGC ?? [];
        const seen = new Set<string>();
        for (const code of geocode) {
          const match = /^([A-Z]{2})/.exec(code);
          if (!match) continue;
          const state = match[1];
          if (seen.has(state)) continue;
          seen.add(state);
          counts[state] = (counts[state] ?? 0) + 1;
        }
      }

      const states = Object.entries(counts)
        .map(([code, count]) => ({ code, count }))
        .sort((a, b) => b.count - a.count);
      const total = features.length;
      return {
        source: SOURCE,
        total,
        states,
        top: states.slice(0, 8),
        updatedAt: raw.updated ?? new Date().toISOString(),
        fetchedAt: new Date().toISOString(),
        cacheTtlSeconds: CACHE_TTL_SECONDS,
      };
    });
    return jsonResponse({ ...body, cached: cacheStatus === "hit" }, {
      headers: { "x-hurricanehub-cache": cacheStatus, "x-hurricanehub-cache-store": "edge" }
    });
  } catch (error) {
    console.error("NWS state aggregation failed", { error });
    return jsonResponse({ error: "NWS state aggregation failed" }, { status: 502 });
  }
};
