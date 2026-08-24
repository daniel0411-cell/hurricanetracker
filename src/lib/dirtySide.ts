export type Quadrant = {
  bearingDeg: number;
  label: "right-front" | "right-rear" | "left-front" | "left-rear";
  dangerous: boolean;
};

const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export function movementBearingDeg(movementDir: number | string | undefined | null): number | null {
  if (typeof movementDir === "number") return movementDir >= 0 && movementDir < 360 ? movementDir : null;
  const value = String(movementDir ?? "").trim().toUpperCase();
  const index = directions.indexOf(value);
  if (index >= 0) return index * 22.5;
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric >= 0 && numeric < 360 ? numeric : null;
}

export function dirtySideQuadrants(bearingDeg: number, isNorthernHemisphere = true): Quadrant[] {
  const right = isNorthernHemisphere ? 90 : -90;
  return [
    { label: "right-front", bearingDeg: (bearingDeg + right + 360) % 360, dangerous: true },
    { label: "right-rear", bearingDeg: (bearingDeg + right + 180 + 360) % 360, dangerous: false },
    { label: "left-front", bearingDeg: (bearingDeg - right + 360) % 360, dangerous: false },
    { label: "left-rear", bearingDeg: (bearingDeg - right + 180 + 360) % 360, dangerous: false }
  ];
}
