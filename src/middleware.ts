import { defineMiddleware } from "astro:middleware";
import { TRACKER_SLUG_SET } from "./data/trackerSlugs";

const canonicalHost = "www.hurricanetracker.cc";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Legacy /hurricane-tracker/{state} -> /tracker/{state} (canonical state pages).
  // Combine with the www canonicalization into a single 301 when possible.
  const pathname = url.pathname.replace(/\/+$/, "");
  const match = pathname.match(/^\/hurricane-tracker\/([a-z-]+)$/i);
  if (match && TRACKER_SLUG_SET.has(match[1].toLowerCase())) {
    const destination = new URL(`/tracker/${match[1].toLowerCase()}/`, url);
    destination.hostname = canonicalHost;
    return Response.redirect(destination.toString(), 301);
  }

  // Force canonical host (non-www -> www) for everything else.
  if (url.hostname !== canonicalHost) {
    url.hostname = canonicalHost;
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
