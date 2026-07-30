import { defineMiddleware } from "astro:middleware";

const canonicalHost = "www.hurricanetracker.cc";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.hostname === "hurricanetracker.cc") {
    url.hostname = canonicalHost;
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
