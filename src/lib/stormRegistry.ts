import { env } from "cloudflare:workers";
import type { NhcStorm } from "./weather";

const REGISTRY_KEY = "nhc:storm-registry:v1";

export type ArchivedStorm = NhcStorm & {
  slug: string;
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
  const bySlug = new Map(existing.map((storm) => [storm.slug, { ...storm, active: false }]));
  for (const storm of storms) {
    if (!storm.name) continue;
    const slug = slugify(storm.name);
    const previous = bySlug.get(slug);
    bySlug.set(slug, {
      ...previous,
      ...storm,
      slug,
      firstSeen: previous?.firstSeen ?? observedAt,
      lastSeen: storm.lastUpdate ?? observedAt,
      active: true
    });
  }
  const records = [...bySlug.values()].sort((a, b) => b.lastSeen.localeCompare(a.lastSeen)).slice(0, 120);
  try {
    await cache.put(REGISTRY_KEY, JSON.stringify(records));
  } catch (error) {
    console.error("Storm registry write failed", { error });
  }
}
