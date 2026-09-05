import { env } from "cloudflare:workers";
import { summarizeStorm, type NhcStorm } from "./weather";
import { recordActiveStorms } from "./stormRegistry";

export const NHC_CURRENT_STORMS = "https://www.nhc.noaa.gov/CurrentStorms.json";
export const NHC_CURRENT_CACHE_TTL_SECONDS = 600;
const CACHE_KEY = "nhc:current-storms";

export type NhcCurrentFeed = {
  source: string;
  fetchedAt: string;
  updatedAt: string;
  cacheTtlSeconds: number;
  storms: Array<NhcStorm & { summary: string }>;
};

export async function getNhcCurrentFeed(): Promise<{ feed: NhcCurrentFeed; cacheStatus: "hit" | "miss" | "stale" }> {
  const cache = env.HURRICANEHUB_CACHE;
  try {
    const cached = await cache?.get(CACHE_KEY);
    if (cached) return { feed: JSON.parse(cached) as NhcCurrentFeed, cacheStatus: "hit" };
  } catch (error) {
    console.error("NHC cache read failed, skipping cache", { error });
  }

  let response: Response;
  try {
    response = await fetch(NHC_CURRENT_STORMS, {
      signal: AbortSignal.timeout(8_000),
      headers: {
        accept: "application/json",
        "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)"
      }
    });
  } catch (error) {
    try {
      const stale = await cache?.get(CACHE_KEY);
      if (stale) return { feed: JSON.parse(stale) as NhcCurrentFeed, cacheStatus: "stale" };
    } catch (cacheError) {
      console.error("NHC stale cache read failed", { cacheError });
    }
    throw error;
  }
  if (!response.ok) throw new Error(`NHC feed returned HTTP ${response.status}`);

  const raw = await response.json() as { activeStorms?: NhcStorm[] };
  const fetchedAt = new Date().toISOString();
  const feed: NhcCurrentFeed = {
    source: NHC_CURRENT_STORMS,
    fetchedAt,
    updatedAt: fetchedAt,
    cacheTtlSeconds: NHC_CURRENT_CACHE_TTL_SECONDS,
    storms: (raw.activeStorms ?? []).map((storm) => ({ ...storm, summary: summarizeStorm(storm) }))
  };
  await recordActiveStorms(feed.storms, fetchedAt);
  try {
    await cache?.put(CACHE_KEY, JSON.stringify(feed), { expirationTtl: NHC_CURRENT_CACHE_TTL_SECONDS });
  } catch (error) {
    console.error("NHC cache write failed, continuing without cache", { error });
  }
  return { feed, cacheStatus: "miss" };
}
