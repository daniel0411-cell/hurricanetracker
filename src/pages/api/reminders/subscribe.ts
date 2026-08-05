import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_PATTERN = /^\d{5}$/;
const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type"
};

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return Response.json(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      "cache-control": "no-store",
      ...(init.headers ?? {})
    }
  });
}

export const OPTIONS: APIRoute = () =>
  new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json() as { email?: string; zip?: string; state?: string; source?: string };
    const email = (payload.email ?? "").trim().toLowerCase();
    const zip = (payload.zip ?? "").trim();
    const state = (payload.state ?? "").trim().toUpperCase();
    if (!EMAIL_PATTERN.test(email)) {
      return jsonResponse({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (zip && !ZIP_PATTERN.test(zip)) {
      return jsonResponse({ error: "Enter a valid five-digit ZIP code or leave ZIP blank." }, { status: 400 });
    }

    const body = JSON.stringify({
      email,
      zip,
      state,
      source: payload.source ?? "HurricaneHub reminder form",
      createdAt: new Date().toISOString()
    });
    const cache = env.HURRICANEHUB_CACHE;
    await cache?.put(`reminder:${email}`, body, { expirationTtl: 60 * 60 * 24 * 365 });
    return jsonResponse({ ok: true, message: "Reminder request saved. Email delivery provider is not connected yet." });
  } catch (error) {
    console.error("HurricaneHub reminder subscribe failed", { error });
    return jsonResponse({ error: "Reminder request failed." }, { status: 500 });
  }
};
