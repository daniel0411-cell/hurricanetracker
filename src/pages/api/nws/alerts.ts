import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { decisionLevel, type NwsAlert } from "../../../lib/weather";

const VALID_AREA = /^[A-Z]{2}$/;
const CACHE_TTL_SECONDS = 300;
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

function normalizeAlert(feature: any): NwsAlert {
  const properties = feature.properties ?? {};
  return {
    id: feature.id ?? properties.id ?? crypto.randomUUID(),
    event: properties.event ?? "Weather alert",
    headline: properties.headline ?? "",
    severity: properties.severity ?? "Unknown",
    urgency: properties.urgency ?? "Unknown",
    certainty: properties.certainty ?? "Unknown",
    areaDesc: properties.areaDesc ?? "",
    effective: properties.effective ?? "",
    expires: properties.expires ?? "",
    instruction: properties.instruction ?? ""
  };
}

export const OPTIONS: APIRoute = () =>
  new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });

export const GET: APIRoute = async ({ url }) => {
  const area = (url.searchParams.get("area") ?? url.searchParams.get("state") ?? "FL").trim().toUpperCase();
  if (!VALID_AREA.test(area)) {
    return jsonResponse({ error: "Use a two-letter US state or territory area code." }, { status: 400 });
  }

  const cache = getCache();
  const cacheKey = `nws:alerts:${area}`;
  const cached = await cache?.get(cacheKey);
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

  const source = `https://api.weather.gov/alerts/active?area=${area}`;

  try {
    const response = await fetch(source, {
      headers: {
        accept: "application/geo+json",
        "user-agent": "HurricaneHub/0.1 (https://hurricanehub.pages.dev; weather-data@hurricanehub.pages.dev)"
      }
    });

    if (!response.ok) {
      console.error("NWS alert feed returned an error", { source, status: response.status });
      return jsonResponse({ error: "NWS alert feed unavailable", status: response.status, source }, { status: 502 });
    }

    const raw = await response.json() as { features?: any[]; updated?: string };
    const alerts = (raw.features ?? []).map(normalizeAlert);
    const fetchedAt = new Date().toISOString();
    const body = JSON.stringify({
      source,
      area,
      state: area,
      fetchedAt,
      updatedAt: raw.updated ?? fetchedAt,
      cacheTtlSeconds: CACHE_TTL_SECONDS,
      decisionLevel: decisionLevel(alerts, []),
      alerts
    });

    await cache?.put(cacheKey, body, { expirationTtl: CACHE_TTL_SECONDS });

    return new Response(body, {
      headers: {
        ...CORS_HEADERS,
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=120",
        "x-hurricanehub-cache": "miss"
      }
    });
  } catch (error) {
    console.error("NWS alert proxy failed", { source, error });
    return jsonResponse({ error: "NWS alert proxy failed", source }, { status: 502 });
  }
};
