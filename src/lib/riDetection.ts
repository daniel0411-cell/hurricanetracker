import type { AdvisoryHistoryItem } from "./nhcForecast";

export type RiSignal = {
  riActive: boolean;
  pressureDrop24hMb: number | null;
  windIncrease24hMph: number | null;
  basis: "pressure" | "wind" | "both" | "insufficient-data";
  reason: string;
};

const insufficient = (reason: string): RiSignal => ({ riActive: false, pressureDrop24hMb: null, windIncrease24hMph: null, basis: "insufficient-data", reason });

export function detectRapidIntensification(history: AdvisoryHistoryItem[]): RiSignal {
  const current = history[0];
  const currentTime = current ? new Date(current.time).getTime() : NaN;
  if (!current || !Number.isFinite(currentTime)) return insufficient("Insufficient valid NHC advisory history.");

  const past = history.slice(1)
    .map((item) => ({ item, hours: (currentTime - new Date(item.time).getTime()) / 3_600_000 }))
    .filter(({ hours }) => Number.isFinite(hours) && hours >= 20 && hours <= 30)
    .sort((a, b) => Math.abs(a.hours - 24) - Math.abs(b.hours - 24))[0]?.item;
  if (!past) return insufficient("No NHC observation is available for a 20-30 hour comparison window.");

  const windIncrease24hMph = current.windSpeedMph != null && past.windSpeedMph != null ? current.windSpeedMph - past.windSpeedMph : null;
  const pressureDrop24hMb = current.pressureMb != null && past.pressureMb != null ? past.pressureMb - current.pressureMb : null;
  const wind = windIncrease24hMph != null && windIncrease24hMph >= 35;
  const pressure = pressureDrop24hMb != null && pressureDrop24hMb >= 20;
  const basis = wind && pressure ? "both" : wind ? "wind" : pressure ? "pressure" : windIncrease24hMph == null && pressureDrop24hMb == null ? "insufficient-data" : "wind";
  return {
    riActive: wind || pressure,
    pressureDrop24hMb,
    windIncrease24hMph,
    basis,
    reason: wind && pressure
      ? "Observed wind increase meets the NHC rapid-intensification threshold and pressure also fell sharply."
      : wind
        ? "Observed wind increase meets the NHC rapid-intensification threshold."
        : pressure
          ? "Wind observations are incomplete; a sharp pressure drop provides an auxiliary signal."
          : "Observed changes do not meet the configured rapid-intensification signals."
  };
}
