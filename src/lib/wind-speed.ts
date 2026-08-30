export const knotsToMph = (knots: number) => knots * 1.15078;
export const knotsToKmh = (knots: number) => knots * 1.852;
export const formatWind = (knots: number) => `${knots} kt (${Math.round(knotsToMph(knots))} mph / ${Math.round(knotsToKmh(knots))} km/h)`;
