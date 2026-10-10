import { env } from "cloudflare:workers";
import type { NhcStorm } from "./weather";
import { consolidateStormRecords, stormIdentity } from "./stormRegistryIdentity";

const REGISTRY_KEY = "nhc:storm-registry:v1";

export type ArchivedStorm = NhcStorm & {
  slug: string;
  aliases?: string[];
  firstSeen: string;
  lastSeen: string;
  active: boolean;
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function readStormRegistry(): Promise<ArchivedStorm[]> {
  try {
    return (await env.HURRICANEHUB_CACHE?.get(REGISTRY_KEY, "json") as ArchivedStorm[] | null) ?? [];
  } catch (error) {
    console.error("Storm registry read failed", { error });
    return [];
  }
}

export async function recordActiveStorms(storms: NhcStorm[], observedAt: string) {
  const cache = env.HURRICANEHUB_CACHE;
  if (!cache) return;
  const existing = await readStormRegistry();
  const byIdentity = new Map(consolidateStormRecords(existing).map((storm) => [stormIdentity(storm), storm]));
  for (const storm of storms) {
    if (!storm.name) continue;
    const slug = slugify(storm.name);
    const key = stormIdentity({ id: storm.id, slug });
    const previous = byIdentity.get(key);
    const aliases = [...new Set([
      ...(previous?.aliases ?? []),
      ...(previous?.slug && previous.slug !== slug ? [previous.slug] : [])
    ])];
    byIdentity.set(key, {
      ...previous,
      ...storm,
      slug,
      aliases,
      firstSeen: previous?.firstSeen ?? observedAt,
      lastSeen: storm.lastUpdate ?? observedAt,
      active: true
    });
  }
  const records = [...byIdentity.values()].sort((a, b) => b.lastSeen.localeCompare(a.lastSeen)).slice(0, 120);
  const previousValue = JSON.stringify(existing);
  if (JSON.stringify(records) === previousValue) return;
  try {
    await cache.put(REGISTRY_KEY, JSON.stringify(records));
  } catch (error) {
    console.error("Storm registry write failed", { error });
  }
}
