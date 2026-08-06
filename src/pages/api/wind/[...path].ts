import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

/**
 * Surface wind tiles are proxied here so the OpenWeatherMap key never reaches
 * the browser. Set OPENWEATHER_API_KEY as a Cloudflare var/secret to enable.
 * Without the key the route returns 404 and the map layer surfaces a friendly
 * "needs key" status instead of crashing.
 */
export const GET: APIRoute = async ({ params }) => {
  const key = (env as unknown as Record<string, string | undefined>).OPENWEATHER_API_KEY;
  const path = (params.path || "").replace(/^\/+/, "");
  if (!key) {
    return new Response("Wind layer disabled: set OPENWEATHER_API_KEY on the server.", {
      status: 404
    });
  }
  const upstream = `https://tile.openweathermap.org/map/wind_new/${path}?appid=${key}`;
  try {
    const res = await fetch(upstream, {
      headers: { "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc)" }
    });
    if (!res.ok) {
      return new Response("Upstream wind tile error", { status: res.status });
    }
    const buf = await res.arrayBuffer();
    return new Response(buf, {
      headers: {
        "content-type": res.headers.get("content-type") || "image/png",
        "cache-control": "public, max-age=600",
        "access-control-allow-origin": "*"
      }
    });
  } catch {
    return new Response("Wind layer upstream unavailable", { status: 502 });
  }
};
