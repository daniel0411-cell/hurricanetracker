import type { AdvisoryHistoryItem } from "./nhcForecast";

export type RiSignal = {
  observedAt?: string;
  riActive: boolean;
  pressureDrop24hMb: number | null;
  windIncrease24hMph: number | null;
  basis: "pressure" | "wind" | "both" | "insufficient-data";
  reason: string;
};

const insufficient = (reason: string): RiSignal => ({ riActive: false, pressureDrop24hMb: null, windIncrease24hMph: null, basis: "insufficient-data", reason });

export function detectRapidIntensification(history: AdvisoryHistoryItem[], now = Date.now()): RiSignal {
  const ordered = history.filter((item) => Number.isFinite(Date.parse(item.time)))
    .sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
  const current = ordered[0];
  const currentTime = current ? new Date(current.time).getTime() : NaN;
  if (!current || !Number.isFinite(currentTime)) return insufficient("Insufficient valid NHC advisory history.");
  if (now - currentTime > 8 * 3_600_000 || currentTime - now > 15 * 60_000) {
    return insufficient("Latest NHC observation is stale or has a future timestamp.");
  }

  const past = ordered.slice(1)
    .map((item) => ({ item, hours: (currentTime - new Date(item.time).getTime()) / 3_600_000 }))
    .filter(({ hours }) => Number.isFinite(hours) && hours >= 23.5 && hours <= 24.5)
    .sort((a, b) => Math.abs(a.hours - 24) - Math.abs(b.hours - 24))[0]?.item;
  if (!past) return insufficient("No NHC observation is available for an approximately 24-hour comparison.");

  const windIncrease24hMph = current.windSpeedMph != null && past.windSpeedMph != null
    && Number.isFinite(current.windSpeedMph) && Number.isFinite(past.windSpeedMph)
    && current.windSpeedMph >= 0 && past.windSpeedMph >= 0 ? current.windSpeedMph - past.windSpeedMph : null;
  const pressureDrop24hMb = current.pressureMb != null && past.pressureMb != null
    && Number.isFinite(current.pressureMb) && Number.isFinite(past.pressureMb)
    && current.pressureMb > 0 && past.pressureMb > 0 ? past.pressureMb - current.pressureMb : null;
  const wind = windIncrease24hMph != null && windIncrease24hMph >= 35;
  const pressure = pressureDrop24hMb != null && pressureDrop24hMb >= 20;
  const basis = wind && pressure ? "both" : windIncrease24hMph == null ? "insufficient-data" : "wind";
  return {
    observedAt: current.time,
    riActive: wind,
    pressureDrop24hMb,
    windIncrease24hMph,
    basis,
    reason: wind && pressure
      ? "Observed wind increase meets the NHC rapid-intensification threshold and pressure also fell sharply."
      : wind
        ? "Observed wind increase meets the NHC rapid-intensification threshold."
        : windIncrease24hMph == null
          ? "Wind observations are incomplete; pressure changes alone do not establish rapid intensification."
          : "Observed wind change does not meet the rapid-intensification threshold."
  };
}
