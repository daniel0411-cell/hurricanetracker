export type StormRegistryIdentity = {
  id?: string;
  slug: string;
  aliases?: string[];
  firstSeen: string;
  lastSeen: string;
  active: boolean;
};

export function stormIdentity(storm: Pick<StormRegistryIdentity, "id" | "slug">) {
  return storm.id ? `id:${storm.id.toLowerCase()}` : `slug:${storm.slug}`;
}

export function consolidateStormRecords<T extends StormRegistryIdentity>(records: T[]): T[] {
  const byIdentity = new Map<string, T>();
  for (const record of records) {
    const key = stormIdentity(record);
    const previous = byIdentity.get(key);
    if (!previous) {
      byIdentity.set(key, { ...record, active: false } as T);
      continue;
    }

    const newer = previous.lastSeen >= record.lastSeen ? previous : record;
    const older = newer === previous ? record : previous;
    const aliases = [...new Set([
      ...(previous.aliases ?? []),
      ...(record.aliases ?? []),
      previous.slug,
      record.slug
    ])].filter((alias) => alias !== newer.slug);
    byIdentity.set(key, {
      ...older,
      ...newer,
      aliases,
      firstSeen: previous.firstSeen <= record.firstSeen ? previous.firstSeen : record.firstSeen,
      lastSeen: previous.lastSeen >= record.lastSeen ? previous.lastSeen : record.lastSeen,
      active: false
    } as T);
  }
  return [...byIdentity.values()];
}
