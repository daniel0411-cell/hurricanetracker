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

async function hashKey(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const OPTIONS: APIRoute = () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = (await request.json()) as {
      email?: string;
      zip?: string;
      state?: string;
      source?: string;
      mode?: string;
      subscription?: { endpoint: string; keys?: { p256dh?: string; auth?: string } };
    };
    const email = (payload.email ?? "").trim().toLowerCase();
    const zip = (payload.zip ?? "").trim();
    const state = (payload.state ?? "").trim().toUpperCase();
    const mode = payload.mode === "warning-only" ? "warning-only" : "watch";
    const sub = payload.subscription;

    if (sub) {
      if (!sub.endpoint || !sub.keys?.p256dh || !sub.keys?.auth) {
        return jsonResponse({ error: "Invalid push subscription object." }, { status: 400 });
      }
    } else if (!EMAIL_PATTERN.test(email)) {
      return jsonResponse({ error: "Enter a valid email address or enable device alerts." }, { status: 400 });
    }
    if (zip && !ZIP_PATTERN.test(zip)) {
      return jsonResponse({ error: "Enter a valid five-digit ZIP code or leave ZIP blank." }, { status: 400 });
    }

    const cache = env.HURRICANEHUB_CACHE;
    const now = new Date().toISOString();

    if (email) {
      await cache?.put(
        `reminder:${email}`,
        JSON.stringify({ email, zip, state, source: payload.source ?? "HurricaneHub", createdAt: now }),
        { expirationTtl: 60 * 60 * 24 * 365 }
      );
    }

    if (sub) {
      const id = await hashKey(sub.endpoint);
      await cache?.put(
        `pushsub:${id}`,
        JSON.stringify({ endpoint: sub.endpoint, keys: sub.keys, zip, email, mode, createdAt: now }),
        { expirationTtl: 60 * 60 * 24 * 365 }
      );
    }

    return jsonResponse({
      ok: true,
      pushSaved: Boolean(sub),
      message: sub
        ? "Device alerts enabled. We'll notify you when NWS issues a hurricane alert for your area."
        : "Reminder request saved."
    });
  } catch (error) {
    console.error("HurricaneHub subscribe failed", { error });
    return jsonResponse({ error: "Subscription request failed." }, { status: 500 });
  }
};
