// Curated best-track subsets for historical benchmark hurricanes.
// These are simplified point samples (not the full HURDAT2 synoptic record) chosen
// for an educational "how does today's storm compare?" view. Wind is sustained 1-min
// (kt), pressure in hPa. Sources: NHC HURDAT2 / IBTrACS public best track.

export function categoryFromWindKt(kt: number): number {
  if (kt < 34) return -1; // Tropical Depression
  if (kt < 64) return 0; // Tropical Storm
  if (kt < 83) return 1;
  if (kt < 96) return 2;
  if (kt < 113) return 3;
  if (kt < 137) return 4;
  return 5;
}

export function categoryLabel(cat: number): string {
  if (cat <= -1) return "Tropical Depression";
  if (cat === 0) return "Tropical Storm";
  return `Category ${cat}`;
}

export function ktToMph(kt: number): number {
  return Math.round(kt * 1.15078);
}

export type StormPoint = {
  lat: number;
  lon: number;
  windKt: number;
  pressureMb: number | null;
  date: string; // ISO date (YYYY-MM-DD)
};

export type BenchmarkStorm = {
  id: string;
  name: string;
  year: number;
  color: string;
  peakCategory: number;
  minPressureMb: number;
  maxWindKt: number;
  usDamageUsd: number;
  fatalities: number;
  landfall: string;
  track: StormPoint[];
};

export const BENCHMARK_STORMS: BenchmarkStorm[] = [
  {
    id: "katrina-2005",
    name: "Katrina",
    year: 2005,
    color: "#e63946",
    peakCategory: 5,
    minPressureMb: 902,
    maxWindKt: 175,
    usDamageUsd: 125_000_000_000,
    fatalities: 1833,
    landfall:
      "Cat 3 at Buras, LA (Aug 29) and Cat 3 near the LA/MS border; levee failures caused catastrophic New Orleans flooding.",
    track: [
      { lat: 23.2, lon: -75.2, windKt: 45, pressureMb: 1005, date: "2005-08-23" },
      { lat: 24.5, lon: -76.0, windKt: 70, pressureMb: 991, date: "2005-08-24" },
      { lat: 25.6, lon: -79.4, windKt: 70, pressureMb: 987, date: "2005-08-25" },
      { lat: 25.8, lon: -83.5, windKt: 90, pressureMb: 975, date: "2005-08-26" },
      { lat: 25.5, lon: -86.5, windKt: 105, pressureMb: 965, date: "2005-08-27" },
      { lat: 24.5, lon: -87.7, windKt: 150, pressureMb: 909, date: "2005-08-28" },
      { lat: 23.8, lon: -88.6, windKt: 175, pressureMb: 902, date: "2005-08-28" },
      { lat: 23.2, lon: -89.5, windKt: 150, pressureMb: 920, date: "2005-08-29" },
      { lat: 22.8, lon: -89.3, windKt: 125, pressureMb: 920, date: "2005-08-29" },
      { lat: 23.7, lon: -89.3, windKt: 105, pressureMb: 941, date: "2005-08-29" },
      { lat: 27.0, lon: -89.6, windKt: 85, pressureMb: 955, date: "2005-08-30" },
      { lat: 31.0, lon: -89.6, windKt: 60, pressureMb: 980, date: "2005-08-30" },
      { lat: 34.0, lon: -88.0, windKt: 45, pressureMb: 990, date: "2005-08-31" },
      { lat: 37.0, lon: -82.0, windKt: 35, pressureMb: 998, date: "2005-09-01" }
    ]
  },
  {
    id: "ian-2022",
    name: "Ian",
    year: 2022,
    color: "#f4a261",
    peakCategory: 5,
    minPressureMb: 937,
    maxWindKt: 145,
    usDamageUsd: 112_000_000_000,
    fatalities: 156,
    landfall:
      "Cat 4 at Cayo Costa, FL (Sep 28) and Cat 1 near Georgetown, SC (Sep 30); devastating SW Florida storm surge.",
    track: [
      { lat: 13.5, lon: -72.0, windKt: 45, pressureMb: 1002, date: "2022-09-23" },
      { lat: 14.5, lon: -76.5, windKt: 65, pressureMb: 995, date: "2022-09-24" },
      { lat: 15.5, lon: -80.5, windKt: 90, pressureMb: 980, date: "2022-09-25" },
      { lat: 17.0, lon: -83.5, windKt: 105, pressureMb: 970, date: "2022-09-26" },
      { lat: 19.0, lon: -85.0, windKt: 110, pressureMb: 955, date: "2022-09-27" },
      { lat: 21.0, lon: -86.0, windKt: 130, pressureMb: 947, date: "2022-09-28" },
      { lat: 23.0, lon: -87.0, windKt: 140, pressureMb: 941, date: "2022-09-28" },
      { lat: 24.5, lon: -87.5, windKt: 145, pressureMb: 937, date: "2022-09-28" },
      { lat: 26.0, lon: -88.0, windKt: 130, pressureMb: 941, date: "2022-09-28" },
      { lat: 27.5, lon: -89.5, windKt: 80, pressureMb: 975, date: "2022-09-29" },
      { lat: 30.0, lon: -91.0, windKt: 60, pressureMb: 985, date: "2022-09-30" },
      { lat: 32.5, lon: -79.5, windKt: 85, pressureMb: 977, date: "2022-09-30" },
      { lat: 35.0, lon: -75.0, windKt: 50, pressureMb: 990, date: "2022-10-01" }
    ]
  },
  {
    id: "sandy-2012",
    name: "Sandy",
    year: 2012,
    color: "#9b5de5",
    peakCategory: 3,
    minPressureMb: 940,
    maxWindKt: 105,
    usDamageUsd: 65_000_000_000,
    fatalities: 233,
    landfall:
      "Post-tropical (hurricane-force winds) near Atlantic City, NJ (Oct 29); record surge across NY/NJ metro.",
    track: [
      { lat: 14.5, lon: -77.5, windKt: 50, pressureMb: 998, date: "2012-10-22" },
      { lat: 15.5, lon: -79.0, windKt: 70, pressureMb: 990, date: "2012-10-23" },
      { lat: 16.5, lon: -80.5, windKt: 95, pressureMb: 970, date: "2012-10-24" },
      { lat: 17.5, lon: -82.0, windKt: 100, pressureMb: 954, date: "2012-10-25" },
      { lat: 18.5, lon: -83.5, windKt: 105, pressureMb: 940, date: "2012-10-25" },
      { lat: 21.0, lon: -85.0, windKt: 90, pressureMb: 955, date: "2012-10-26" },
      { lat: 25.0, lon: -80.0, windKt: 75, pressureMb: 960, date: "2012-10-27" },
      { lat: 29.0, lon: -77.0, windKt: 65, pressureMb: 950, date: "2012-10-28" },
      { lat: 33.0, lon: -74.0, windKt: 70, pressureMb: 945, date: "2012-10-29" },
      { lat: 37.0, lon: -74.5, windKt: 85, pressureMb: 946, date: "2012-10-29" },
      { lat: 41.0, lon: -74.0, windKt: 70, pressureMb: 950, date: "2012-10-30" }
    ]
  }
];

export function formatDamageUsd(usd: number): string {
  const billions = usd / 1_000_000_000;
  if (billions >= 100) return `$${Math.round(billions)}B`;
  return `$${billions.toFixed(1)}B`;
}
