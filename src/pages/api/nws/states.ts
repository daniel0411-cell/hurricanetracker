import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

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

/**
 * Aggregate active NWS alerts per US state using the UGC geocode prefix
 * (e.g. "ILC001" -> "IL"). NWS does not accept area=US, so we pull the full
 * active feed and bucket by UGC prefix. Returns the full count map plus a
 * top-N ranking so the radar sidebar can render a compact alert heatmap.
 */
export const GET: APIRoute = async () => {
  const cache = env.HURRICANEHUB_CACHE;
  const cached = await cache?.get(CACHE_KEY, "json");
  if (cached) {
    return jsonResponse({ ...(cached as object), cached: true });
  }

  try {
    const response = await fetch(SOURCE, {
      headers: {
        accept: "application/geo+json",
        "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)"
      }
    });

    if (!response.ok) {
      console.error("NWS US alert feed returned an error", { status: response.status });
      return jsonResponse({ error: "NWS US alert feed unavailable", status: response.status }, { status: 502 });
    }

    const raw = (await response.json()) as { features?: any[]; updated?: string };
    const features = raw.features ?? [];
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
    const body = {
      source: SOURCE,
      total,
      states,
      top: states.slice(0, 8),
      updatedAt: raw.updated ?? new Date().toISOString(),
      fetchedAt: new Date().toISOString(),
      cacheTtlSeconds: CACHE_TTL_SECONDS
    };

    await cache?.put(CACHE_KEY, JSON.stringify(body), { expirationTtl: CACHE_TTL_SECONDS });
    return jsonResponse(body);
  } catch (error) {
    console.error("NWS state aggregation failed", { error });
    return jsonResponse({ error: "NWS state aggregation failed" }, { status: 502 });
  }
};
