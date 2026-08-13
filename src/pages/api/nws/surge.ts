import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

const ZIP_PATTERN = /^\d{5}$/;
const GEO_CACHE_TTL_SECONDS = 60 * 60 * 24 * 30;
const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-allow-headers": "content-type"
};

const SURGE_EVENTS = new Set(["Storm Surge Warning", "Storm Surge Watch"]);
const HURRICANE_EVENTS = new Set([
  "Hurricane Warning",
  "Hurricane Watch",
  "Tropical Storm Warning",
  "Tropical Storm Watch",
  "Hurricane Force Wind Warning",
  "Extreme Wind Warning",
  "Potential Tropical Cyclone"
]);

type GeoResult = { lat: number; lon: number; city: string; state: string; stateName?: string } | null;

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

async function geocodeZip(zip: string): Promise<GeoResult> {
  const cache = env.HURRICANEHUB_CACHE;
  const cacheKey = `location:zip:${zip}`;
  let cached: string | null = null;
  try {
    cached = (await cache?.get(cacheKey)) ?? null;
  } catch (kvError) {
    console.error("Surge checker cache read failed", { zip, error: kvError });
  }
  if (cached) {
    try {
      const parsed = JSON.parse(cached) as { latitude?: string | null; longitude?: string | null; city?: string; state?: string; stateName?: string };
      if (parsed.latitude && parsed.longitude) {
        return {
          lat: Number(parsed.latitude),
          lon: Number(parsed.longitude),
          city: parsed.city ?? "",
          state: parsed.state ?? "",
          stateName: parsed.stateName
        };
      }
    } catch {
      // fall through to a fresh lookup
    }
  }

  const response = await fetch(`https://api.zippopotam.us/us/${zip}`, {
    headers: {
      accept: "application/json",
      "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)"
    }
  });
  if (!response.ok) return null;
  const data = (await response.json()) as {
    places?: Array<{ "place name"?: string; "state abbreviation"?: string; state?: string; latitude?: string; longitude?: string }>;
  };
  const p = data.places?.[0];
  if (!p?.latitude || !p.longitude) return null;
  const geo = {
    lat: Number(p.latitude),
    lon: Number(p.longitude),
    city: p["place name"] ?? "",
    state: p["state abbreviation"] ?? "",
    stateName: p.state
  };
  try {
    await cache?.put(
      cacheKey,
      JSON.stringify({
        zip,
        city: geo.city,
        state: geo.state,
        stateName: geo.stateName,
        latitude: String(geo.lat),
        longitude: String(geo.lon)
      }),
      { expirationTtl: GEO_CACHE_TTL_SECONDS }
    );
  } catch (kvError) {
    console.error("Surge checker cache write failed", { zip, error: kvError });
  }
  return geo;
}

export const GET: APIRoute = async ({ url }) => {
  const zip = (url.searchParams.get("zip") ?? "").trim();
  if (!ZIP_PATTERN.test(zip)) {
    return jsonResponse({ error: "Enter a valid five-digit US ZIP code." }, { status: 400 });
  }

  try {
    const geo = await geocodeZip(zip);
    if (!geo) {
      return jsonResponse({ error: "ZIP code location lookup is temporarily unavailable." }, { status: 502 });
    }

    const nwsRes = await fetch(`https://api.weather.gov/alerts/active?point=${geo.lat.toFixed(4)},${geo.lon.toFixed(4)}`, {
      headers: { accept: "application/geo+json", "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc)" }
    });
    if (!nwsRes.ok) {
      return jsonResponse({ error: "National Weather Service alert lookup is temporarily unavailable." }, { status: 502 });
    }
    const nwsData = (await nwsRes.json()) as {
      features?: Array<{ properties?: { event?: string; headline?: string; severity?: string; urgency?: string; expires?: string; id?: string } }>;
    };

    const relevantAlerts: Array<{ event: string; headline: string; severity: string; urgency: string; expires: string; isSurge: boolean }> = [];
    for (const f of nwsData.features ?? []) {
      const props = f.properties ?? {};
      const event = props.event ?? "";
      if (SURGE_EVENTS.has(event) || HURRICANE_EVENTS.has(event)) {
        relevantAlerts.push({
          event,
          headline: props.headline ?? event,
          severity: props.severity ?? "",
          urgency: props.urgency ?? "",
          expires: props.expires ?? "",
          isSurge: SURGE_EVENTS.has(event)
        });
      }
    }

    const inSurgeWarning = relevantAlerts.some((a) => a.event === "Storm Surge Warning");
    const inSurgeWatch = relevantAlerts.some((a) => a.event === "Storm Surge Watch");
    const inHurricaneAlert = relevantAlerts.some((a) => !a.isSurge);

    return jsonResponse({
      ok: true,
      zip,
      city: geo.city,
      state: geo.state,
      latitude: geo.lat,
      longitude: geo.lon,
      inSurgeWarning,
      inSurgeWatch,
      inHurricaneAlert,
      surgeLevel: inSurgeWarning ? "warning" : inSurgeWatch ? "watch" : "none",
      relevantAlerts,
      fetchedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("HurricaneHub surge checker failed", { zip, error });
    return jsonResponse({ error: "Storm surge check is temporarily unavailable. Try again in a few minutes." }, { status: 500 });
  }
};
