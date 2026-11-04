export type AdvisoryLink = string | { url?: string };
export type NhcGisLink = {
  advNum?: string;
  issuance?: string;
  fileUpdateTime?: string;
  zipFile?: string;
  kmzFile?: string;
};

export type NhcStorm = {
  id?: string;
  name?: string;
  binNumber?: string;
  classification?: string;
  intensity?: string;
  pressure?: string;
  latitude?: string;
  longitude?: string;
  latitudeNumeric?: number;
  longitudeNumeric?: number;
  movementDir?: number | string;
  movementSpeed?: number | string;
  movementSpeedUnit?: "mph";
  lastUpdate?: string;
  publicAdvisory?: AdvisoryLink;
  forecastAdvisory?: AdvisoryLink;
  forecastTrack?: NhcGisLink;
  trackCone?: NhcGisLink;
  windSpeed?: string;
};

export function advisoryUrl(value: AdvisoryLink | null | undefined) {
  const url = typeof value === "string" ? value : value?.url;
  return typeof url === "string" && /^https?:\/\//i.test(url) ? url : "";
}

export type NwsAlert = {
  id: string;
  event: string;
  headline: string;
  severity: string;
  urgency: string;
  certainty: string;
  areaDesc: string;
  effective: string;
  expires: string;
  instruction?: string;
  /** GeoJSON geometry from NWS, used to draw the alert on the map. */
  geometry?: unknown;
  /** ISO timestamp the alert was first issued, used for the NEW badge. */
  sent?: string;
};

export type DecisionLevel = "Monitor" | "Prepare" | "Act" | "Leave";
export type AlertRisk = "Evacuation" | "Storm surge" | "Hurricane wind" | "Flooding" | "Tornado" | "Tropical storm" | "Other";

type ActionAlert = { event?: string };

export function requiresImmediateShelter(alerts: ActionAlert[]) {
  return alerts.some(({ event }) => /^(Extreme Wind|Tornado) Warning$/i.test(event ?? ""));
}

export function decisionLevel(alerts: ActionAlert[], storms: NhcStorm[]): DecisionLevel {
  const events = alerts.map(({ event }) => event ?? "");
  // Shelter warnings take priority over a generic departure label; read every local instruction.
  if (requiresImmediateShelter(alerts)) return "Act";
  if (events.some((event) => /^(Immediate Evacuation|Evacuation Order)$/i.test(event))) return "Leave";
  if (events.some((event) => /\bWarning\b/i.test(event))) return "Act";
  if (events.some((event) => /\b(Watch|Advisory)\b/i.test(event)) || storms.length > 0) return "Prepare";
  return "Monitor";
}

export function alertActionGuidance(alerts: ActionAlert[]): string[] {
  const events = alerts.map(({ event }) => event ?? "");
  const actions: string[] = [];
  if (events.some((event) => /^Extreme Wind Warning$/i.test(event))) actions.push("If you are in the Extreme Wind Warning area, take immediate shelter in the interior of a well-built structure, away from windows. Do not go outside to secure property.");
  if (events.some((event) => /^Tornado Warning$/i.test(event))) actions.push("If you are in the Tornado Warning area, take shelter now in a basement or small interior room on the lowest safe floor of a sturdy building; protect your head and stay away from windows.");
  if (events.some((event) => /^(Flash Flood|Flood) Warning$/i.test(event))) actions.push("If the Flood or Flash Flood Warning applies to you, move away from rising water to higher ground as directed. Never walk or drive through floodwater; do not shelter in a flood-prone basement.");
  if (requiresImmediateShelter(alerts)) {
    actions.push("If evacuation or flooding instructions also apply, read their area and timing with the shelter warning. Contact local emergency services if you cannot reach safe shelter; this summary cannot choose a safe travel route.");
    return actions;
  }
  if (events.some((event) => /^(Immediate Evacuation|Evacuation Order)$/i.test(event))) actions.push("Follow the issuing authority's evacuation instructions for the specified area and route. Take medication, IDs, pets, and essential supplies; avoid flooded roads.");
  if (events.some((event) => /^Storm Surge Warning$/i.test(event))) actions.push("Life-threatening inundation is expected in the warned area. Check whether your address is in an ordered evacuation zone and follow local officials' departure instructions before routes become unsafe.");
  if (events.some((event) => /^(Hurricane|Tropical Storm) Warning$/i.test(event))) actions.push("Read the warning's affected area and instructions now. Complete outdoor protection only while safe, and shelter before dangerous winds arrive. A wind warning alone is not a local evacuation order.");
  if (events.some((event) => /\bWatch$/i.test(event))) actions.push("Conditions are possible: confirm your evacuation zone, transport, medication, destination, and local decision deadline while preparation is safe.");
  if (!actions.length) actions.push(alerts.length ? "Read each official alert's affected area, timing, and instructions. Match the action to its specific hazard." : "Review your evacuation zone, household contacts, and supplies. Continue checking official forecasts and local emergency instructions.");
  return actions;
}

export function alertRisk(alert: Pick<NwsAlert, "event" | "headline" | "severity" | "urgency">): AlertRisk {
  const text = `${alert.event} ${alert.headline} ${alert.severity} ${alert.urgency}`;
  if (/Evacuation|Mandatory evacuation/i.test(text)) return "Evacuation";
  if (/Storm Surge/i.test(text)) return "Storm surge";
  if (/Hurricane|Extreme Wind/i.test(text)) return "Hurricane wind";
  if (/Flash Flood|Flood/i.test(text)) return "Flooding";
  if (/Tornado/i.test(text)) return "Tornado";
  if (/Tropical Storm/i.test(text)) return "Tropical storm";
  return "Other";
}

export function priorityRisks(alerts: NwsAlert[]) {
  return [...new Set(alerts.map(alertRisk).filter((risk) => risk !== "Other"))];
}

export function formatStormMotion(storm: Pick<NhcStorm, "movementDir" | "movementSpeed">) {
  // CurrentStorms.json and existing advisory history store motion in mph, unlike wind intensity.
  const speed = storm.movementSpeed == null || String(storm.movementSpeed).trim() === "" ? NaN : Number(storm.movementSpeed);
  const direction = storm.movementDir == null || String(storm.movementDir).trim() === "" ? NaN : Number(storm.movementDir);
  if (!Number.isFinite(speed) || speed < 0) return "motion pending";
  if (speed === 0) return "stationary (0 mph)";
  return `${Number.isFinite(direction) && direction >= 0 && direction <= 360 ? `${direction}°` : "direction pending"} at ${speed} mph`;
}

export function summarizeStorm(storm: NhcStorm) {
  const name = storm.name ?? storm.id ?? "Active disturbance";
  const type = storm.classification ?? "Tropical cyclone";
  const motion = formatStormMotion(storm);
  return `${type} ${name}: ${storm.intensity ? `${storm.intensity} kt` : storm.windSpeed ?? "intensity pending"}, ${motion}.`;
}
