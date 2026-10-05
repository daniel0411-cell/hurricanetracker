const NHC_ATLANTIC_OUTLOOK = "https://www.nhc.noaa.gov/text/MIATWOAT.shtml";

export type AtlanticOutlook = {
  issued: string;
  text: string;
  source: string;
  issuedAt: string | null;
  formationChance48h: number | null;
  formationChance7d: number | null;
};

function parseIssuedAt(issued: string): string | null {
  const match = issued.match(/^(\d{1,2})(\d{2}) ([AP]M) (EDT|EST) \w{3} (\w{3}) (\d{1,2}) (\d{4})$/);
  if (!match) return null;
  const [, hourText, minuteText, period, zone, monthText, dayText, yearText] = match;
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(monthText);
  if (month < 0) return null;
  let hour = Number(hourText) % 12;
  if (period === "PM") hour += 12;
  const offsetHours = zone === "EDT" ? 4 : 5;
  return new Date(Date.UTC(Number(yearText), month, Number(dayText), hour + offsetHours, Number(minuteText))).toISOString();
}

function parseChance(text: string, period: "48 hours" | "7 days"): number | null {
  const match = text.match(new RegExp(`Formation chance through ${period}[^%]*?(\\d+) percent`, "i"));
  return match ? Number(match[1]) : null;
}

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
    const outlookText = text.slice(start, end).trim();
    return {
      issued,
      text: outlookText,
      source: NHC_ATLANTIC_OUTLOOK,
      issuedAt: parseIssuedAt(issued),
      formationChance48h: parseChance(outlookText, "48 hours"),
      formationChance7d: parseChance(outlookText, "7 days")
    };
  } catch {
    return null;
  }
}
