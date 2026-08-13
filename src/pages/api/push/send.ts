import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { sendWebPush, type PushSubscriptionLike } from "../../../lib/webpush";

const RELEVANT = /hurricane|tropical storm|storm surge|potential tropical/i;
const ZIP_PATTERN = /^\d{5}$/;

// Severity ladder. Push is sent on ESCALATION (a higher rank than last time)
// or when the previous push is older than 24h (new storm / re-issued alerts).
// Same-level repeats within 24h are skipped so we never flood a subscriber.
const SEVERITY_RANK: Record<string, number> = {
  "Potential Tropical Cyclone": 1,
  "Tropical Storm Watch": 2,
  "Hurricane Watch": 3,
  "Tropical Storm Warning": 4,
  "Hurricane Warning": 5,
  "Storm Surge Watch": 5,
  "Storm Surge Warning": 6,
  "Extreme Wind Warning": 6
};

// For "warning-only" subscribers, drop watches (reduces noise for users who
// only want to hear about imminent life-threatening conditions).
const WARNING_ONLY_EVENTS = new Set([
  "Tropical Storm Warning",
  "Hurricane Warning",
  "Storm Surge Warning",
  "Extreme Wind Warning"
]);

const STALE_AFTER_MS = 24 * 60 * 60 * 1000;

interface StoredSub {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  zip?: string;
  email?: string;
  mode?: "watch" | "warning-only";
}

async function geocodeZip(zip: string): Promise<{ lat: number; lon: number; city: string; state: string } | null> {
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`, {
      headers: { accept: "application/json", "user-agent": "HurricaneHub/0.1" }
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { places?: Array<{ "place name"?: string; "state abbreviation"?: string; latitude?: string; longitude?: string }> };
    const p = data.places?.[0];
    if (!p?.latitude || !p?.longitude) return null;
    return { lat: Number(p.latitude), lon: Number(p.longitude), city: p["place name"] ?? "", state: p["state abbreviation"] ?? "" };
  } catch {
    return null;
  }
}

async function relevantEventsForPoint(lat: number, lon: number): Promise<string[]> {
  try {
    const res = await fetch(`https://api.weather.gov/alerts/active?point=${lat.toFixed(4)},${lon.toFixed(4)}`, {
      headers: { accept: "application/geo+json", "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc)" }
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { features?: Array<{ properties?: { event?: string; headline?: string; id?: string } }> };
    const events: string[] = [];
    for (const f of data.features ?? []) {
      const ev = f.properties?.event ?? "";
      if (RELEVANT.test(ev)) events.push(ev);
    }
    return events;
  } catch {
    return [];
  }
}

export const GET: APIRoute = async ({ url }) => {
 try {
  const secret = url.searchParams.get("secret") ?? "";
  const expected = (env as any).PUSH_CRON_SECRET as string | undefined;
  if (!expected || secret !== expected) {
    return new Response("Unauthorized", { status: 401 });
  }

  const cache = env.HURRICANEHUB_CACHE;
  if (!cache) return Response.json({ error: "KV unavailable" }, { status: 500 });

  let checked = 0;
  let sent = 0;
  let errors = 0;
  const summaries: string[] = [];

  const listed = await cache.list({ prefix: "pushsub:" });
  for (const item of listed.keys) {
    const raw = await cache.get(item.name);
    if (!raw) continue;
    let sub: StoredSub;
    try {
      sub = JSON.parse(raw);
    } catch {
      continue;
    }
    if (!sub.zip || !ZIP_PATTERN.test(sub.zip)) continue;
    checked++;
    const geo = await geocodeZip(sub.zip);
    if (!geo) {
      errors++;
      continue;
    }
    let events = await relevantEventsForPoint(geo.lat, geo.lon);
    if (sub.mode === "warning-only") {
      events = events.filter((ev) => WARNING_ONLY_EVENTS.has(ev));
    }
    if (events.length === 0) continue;

    const currentRank = Math.max(...events.map((ev) => SEVERITY_RANK[ev] ?? 0), 0);
    if (currentRank <= 0) continue; // events matched but no known severity

    const lastKey = `pushlast:${item.name.replace("pushsub:", "")}`;
    const last = (await cache.get(lastKey)) ?? "";
    // New format "rank:ISO"; legacy rows are event-signature strings → rank 0.
    const [lastRankStr = "0", lastAtStr = ""] = last.split(":");
    const lastRank = Number(lastRankStr) || 0;
    const lastAt = lastAtStr ? Date.parse(lastAtStr) : 0;
    const now = Date.now();
    const stale = lastRank > 0 && (!lastAt || now - lastAt >= STALE_AFTER_MS);

    const escalated = currentRank > lastRank;
    if (!escalated && !stale) continue; // same level, fresh — do not re-notify

    const triggering = events.filter((ev) => (SEVERITY_RANK[ev] ?? 0) === currentRank);
    const body = escalated
      ? `Escalation: ${triggering.join(", ")} for ${geo.city || sub.zip}. Track on /tracker/.`
      : `${triggering.join(", ")} active for ${geo.city || sub.zip}. Track on /tracker/.`;

    const subscription: PushSubscriptionLike = { endpoint: sub.endpoint, keys: sub.keys };
    const payload = {
      title: `Hurricane alert — ${geo.city || sub.zip}, ${geo.state}`,
      body,
      url: "/alerts/"
    };
    try {
      const status = await sendWebPush(subscription, payload, env as any);
      if (status >= 200 && status < 300) {
        sent++;
        await cache.put(lastKey, `${currentRank}:${new Date(now).toISOString()}`, { expirationTtl: 60 * 60 * 24 * 30 });
        summaries.push(`sent to ${sub.zip}: ${body}`);
      } else if (status === 404 || status === 410) {
        // subscription gone — clean up
        await cache.delete(item.name);
        summaries.push(`removed stale sub ${sub.zip}`);
      } else {
        errors++;
        summaries.push(`push ${status} for ${sub.zip}`);
      }
    } catch (e) {
      errors++;
      summaries.push(`error for ${sub.zip}: ${(e as Error).message}`);
    }
  }

  return Response.json({ ok: true, checked, sent, errors, summaries });
 } catch (e) {
  // Never let an unexpected error surface as a raw Cloudflare 1101; return JSON 500.
  return Response.json({ ok: false, error: (e as Error).message ?? "unknown error" }, { status: 500 });
 }
};
