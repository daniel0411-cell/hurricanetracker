import type { NhcStorm, NwsAlert } from "./weather";

export const escapeBriefHtml = (value: unknown) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char] ?? char);

export function briefTime(value?: string) {
  if (!value || !Number.isFinite(Date.parse(value))) return "time unavailable";
  return new Date(value).toISOString().replace("T", " ").replace(/\.\d{3}Z$/, " UTC");
}

// Never turn an arbitrary feed value into an executable or lookalike-domain link.
export function officialBriefUrl(value: unknown, hosts: string[]) {
  if (typeof value !== "string") return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password && hosts.includes(url.hostname) ? url.href : "";
  } catch { return ""; }
}

export function briefSourceLink(url: string, label: string) {
  return `<a href="${escapeBriefHtml(url)}" rel="noopener">${escapeBriefHtml(label)}</a><span class="brief-source-url">${escapeBriefHtml(url)}</span>`;
}

export function briefCount(total: number, label: string) {
  return `Showing ${Math.min(total, 5)} of ${total} ${label}; ${Math.max(0, total - 5)} not displayed. Open the full official source for all records and instructions.`;
}

export function briefAlertItems(alerts: Partial<NwsAlert>[]) {
  return alerts.slice(0, 5).map((alert) => {
    const url = officialBriefUrl(alert.id, ["api.weather.gov", "www.weather.gov", "weather.gov"]);
    return `<li><strong>${escapeBriefHtml(alert.event)}</strong><span>${escapeBriefHtml(alert.headline || "Headline unavailable")}</span><span>Affected area: ${escapeBriefHtml(alert.areaDesc || "area unavailable")}</span><span>Sent / effective fallback: ${briefTime(alert.sent)} · Effective: ${briefTime(alert.effective)} · Expires: ${briefTime(alert.expires)}</span>${url ? briefSourceLink(url, "Official NWS alert record") : '<span>Individual alert link unavailable; use the full state source below.</span>'}</li>`;
  }).join("");
}

export function briefStormItems(storms: Array<NhcStorm & { summary?: string }>) {
  return storms.slice(0, 5).map((storm) => {
    const advisory = typeof storm.publicAdvisory === "string" ? storm.publicAdvisory : storm.publicAdvisory?.url;
    const url = officialBriefUrl(advisory, ["www.nhc.noaa.gov", "nhc.noaa.gov"]);
    return `<li><strong>${escapeBriefHtml(storm.name || storm.id || "Active system")}</strong><span>${escapeBriefHtml(storm.classification || "NHC")} · ${escapeBriefHtml(storm.summary || "Current NHC storm data loaded.")}</span><span>Storm record updated: ${briefTime(storm.lastUpdate)} (not the feed retrieval time).</span>${url ? briefSourceLink(url, "Official NHC public advisory") : '<span>Individual advisory link unavailable; use the NHC source below.</span>'}</li>`;
  }).join("");
}
