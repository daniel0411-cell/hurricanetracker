import { summarizeStorm, type NhcStorm } from "./weather";
import { recordActiveStorms } from "./stormRegistry";
import { cachedWeather } from "./weatherCache";

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
  const { value: feed, cacheStatus } = await cachedWeather(CACHE_KEY, NHC_CURRENT_CACHE_TTL_SECONDS, async () => {
    const response = await fetch(NHC_CURRENT_STORMS, {
      signal: AbortSignal.timeout(8_000),
      headers: {
        accept: "application/json",
        "user-agent": "HurricaneHub/0.1 (https://www.hurricanetracker.cc; weather-data@hurricanetracker.cc)"
      }
    });
    if (!response.ok) throw new Error(`NHC feed returned HTTP ${response.status}`);

    const raw = await response.json() as { activeStorms?: NhcStorm[] };
    if (!Array.isArray(raw.activeStorms)) throw new Error("NHC feed is missing activeStorms");
    const fetchedAt = new Date().toISOString();
    const result: NhcCurrentFeed = {
      source: NHC_CURRENT_STORMS,
      fetchedAt,
      updatedAt: fetchedAt,
      cacheTtlSeconds: NHC_CURRENT_CACHE_TTL_SECONDS,
      storms: raw.activeStorms.map((storm) => ({ ...storm, summary: summarizeStorm(storm) }))
    };
    await recordActiveStorms(result.storms, fetchedAt);
    return result;
  });
  return { feed, cacheStatus };
}
