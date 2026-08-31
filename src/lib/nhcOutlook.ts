const NHC_ATLANTIC_OUTLOOK = "https://www.nhc.noaa.gov/text/MIATWOAT.shtml";

export type AtlanticOutlook = { issued: string; text: string; source: string };

export async function getAtlanticOutlook(): Promise<AtlanticOutlook | null> {
  try {
    const response = await fetch(NHC_ATLANTIC_OUTLOOK, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) return null;
    const html = await response.text();
    const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    const start = text.indexOf("For the North Atlantic");
    const end = text.indexOf("$$", start);
    if (start < 0 || end < 0) return null;
    const issued = text.match(/\d{3,4} [AP]M (?:EDT|EST) \w{3} \w{3} \d{1,2} \d{4}/)?.[0] ?? "Latest NHC outlook";
    return { issued, text: text.slice(start, end).trim(), source: NHC_ATLANTIC_OUTLOOK };
  } catch {
    return null;
  }
}
