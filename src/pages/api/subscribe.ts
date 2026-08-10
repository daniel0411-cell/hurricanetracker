import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = (await request.json()) as { email?: string; source?: string };
    const email = (payload.email ?? "").trim().toLowerCase();
    if (!EMAIL_PATTERN.test(email)) {
      return jsonResponse({ error: "Enter a valid email address." }, { status: 400 });
    }
    const cache = env.HURRICANEHUB_CACHE;
    const now = new Date().toISOString();
    await cache?.put(
      `newsletter:${email}`,
      JSON.stringify({
        email,
        source: payload.source ?? "HurricaneHub newsletter",
        subscribedAt: now
      }),
      { expirationTtl: 60 * 60 * 24 * 365 * 3 }
    );
    return jsonResponse({
      ok: true,
      message: "You're on the list. We'll email hurricane-season readiness updates."
    });
  } catch (error) {
    console.error("HurricaneHub newsletter subscribe failed", { error });
    return jsonResponse({ error: "Subscription request failed." }, { status: 500 });
  }
};
