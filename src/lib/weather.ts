export type NhcStorm = {
  id?: string;
  name?: string;
  binNumber?: string;
  classification?: string;
  intensity?: string;
  pressure?: string;
  latitude?: string;
  longitude?: string;
  movementDir?: number | string;
  movementSpeed?: number | string;
  lastUpdate?: string;
  publicAdvisory?: string;
  forecastAdvisory?: string;
  windSpeed?: string;
};

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

export function decisionLevel(alerts: NwsAlert[], storms: NhcStorm[]): DecisionLevel {
  const joined = alerts.map((alert) => `${alert.event} ${alert.severity} ${alert.urgency}`).join(" ");
  if (/Evacuation|Extreme Wind|Hurricane Warning|Catastrophic/i.test(joined)) return "Leave";
  if (/Hurricane|Storm Surge|Flash Flood Warning|Tornado Warning|Extreme/i.test(joined)) return "Act";
  if (/Tropical Storm|Flood Watch|Storm Surge Watch|Severe/i.test(joined) || storms.length > 0) return "Prepare";
  return "Monitor";
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

export function summarizeStorm(storm: NhcStorm) {
  const name = storm.name ?? storm.id ?? "Active disturbance";
  const type = storm.classification ?? "Tropical cyclone";
  const motion = storm.movementDir && storm.movementSpeed ? `${storm.movementDir} at ${storm.movementSpeed}` : "motion pending";
  return `${type} ${name}: ${storm.intensity ?? storm.windSpeed ?? "intensity pending"}, ${motion}.`;
}
