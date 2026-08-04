import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

const ZIP_PATTERN = /^\d{5}$/;
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 30;
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
      "cache-control": "public, max-age=86400",
      ...(init.headers ?? {})
    }
  });
}

export const OPTIONS: APIRoute = () =>
  new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });

export const GET: APIRoute = async ({ url }) => {
  const zip = (url.searchParams.get("zip") ?? "").trim();
  if (!ZIP_PATTERN.test(zip)) {
    return jsonResponse({ error: "Enter a valid five-digit US ZIP code." }, { status: 400 });
  }

  const cache = env.HURRICANEHUB_CACHE;
  const cacheKey = `location:zip:${zip}`;
  const cached = await cache?.get(cacheKey);
  if (cached) {
    return new Response(cached, {
      headers: {
        ...CORS_HEADERS,
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=86400",
        "x-hurricanehub-cache": "hit"
      }
    });
  }

  try {
    const response = await fetch(`https://api.zippopotam.us/us/${zip}`, {
      headers: {
        accept: "application/json",
        "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)"
      }
    });

    if (!response.ok) {
      return jsonResponse({ error: "ZIP code location lookup is temporarily unavailable." }, { status: 502 });
    }

    const data = await response.json() as {
      "post code"?: string;
      places?: Array<{
        "place name"?: string;
        "state abbreviation"?: string;
        state?: string;
      }>;
    };
    const place = data.places?.[0];
    if (!place?.["state abbreviation"] || !place.state) {
      return jsonResponse({ error: "No US state was returned for that ZIP code." }, { status: 404 });
    }

    const body = JSON.stringify({
      zip,
      city: place["place name"] ?? "",
      state: place["state abbreviation"],
      stateName: place.state,
      source: "Zippopotam.us ZIP lookup",
      fetchedAt: new Date().toISOString()
    });

    await cache?.put(cacheKey, body, { expirationTtl: CACHE_TTL_SECONDS });

    return new Response(body, {
      headers: {
        ...CORS_HEADERS,
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=86400",
        "x-hurricanehub-cache": "miss"
      }
    });
  } catch (error) {
    console.error("HurricaneHub ZIP lookup failed", { zip, error });
    return jsonResponse({ error: "ZIP code location lookup is temporarily unavailable." }, { status: 502 });
  }
};
