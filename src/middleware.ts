import { defineMiddleware } from "astro:middleware";
import { TRACKER_SLUG_SET } from "./data/trackerSlugs";

const canonicalHost = "www.hurricanetracker.cc";
const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);

/**
 * Global exception boundary for the whole Cloudflare Worker.
 *
 * Astro middleware wraps EVERY request — static-asset misses, SSR page
 * rendering, and API routes. If any handler throws an error that escapes its
 * own local try/catch, it would surface as a raw Cloudflare "Error 1101:
 * Worker threw a JavaScript exception". Wrapping `next()` here guarantees we
 * always return a clean Response (JSON for API callers, text for browsers)
 * instead of letting the platform 1101 the whole request.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const url = new URL(context.request.url);

    // Legacy /hurricane-tracker/{state} -> /tracker/{state} (canonical state pages).
    // Combined with the www canonicalization into a single 301 when possible.
    const pathname = url.pathname.replace(/\/+$/, "");
    const match = pathname.match(/^\/hurricane-tracker\/([a-z-]+)$/i);
    if (match && TRACKER_SLUG_SET.has(match[1].toLowerCase())) {
      const destination = new URL(`/tracker/${match[1].toLowerCase()}/`, url);
      destination.hostname = canonicalHost;
      return Response.redirect(destination.toString(), 301);
    }

    // Force canonical host (non-www -> www). Redirect target is upgraded to
    // https://www. in a single hop so crawlers don't follow a chained
    // http://www -> https://www redirect (which Bing distrusts).
    // NOTE: only normalize on a hostname mismatch. Under Cloudflare Flexible
    // SSL the Worker always receives an http:// request, so checking the
    // protocol here would cause an infinite redirect loop.
    if (url.hostname !== canonicalHost && !localHosts.has(url.hostname)) {
      url.hostname = canonicalHost;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return await next();
  } catch (error) {
    console.error("[middleware] unhandled exception escaped to the edge:", error);
    const requestUrl = new URL(context.request.url);
    const acceptsJson =
      context.request.headers.get("accept")?.includes("application/json") ||
      requestUrl.pathname.startsWith("/api/");
    if (acceptsJson) {
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        {
          status: 500,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store"
          }
        }
      );
    }
    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
});
