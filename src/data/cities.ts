export type HurricaneCity = {
  slug: string;
  name: string;
  stateCode: string;
  stateName: string;
  region: string;
  risks: string[];
  planningNote: string;
  nearbyCounties: string[];
  lat: number;
  lon: number;
};

export const hurricaneCities: HurricaneCity[] = [
  {
    slug: "miami",
    name: "Miami",
    stateCode: "FL",
    stateName: "Florida",
    region: "South Florida Atlantic coast",
    risks: ["storm surge", "evacuation traffic", "flash flooding", "tornadoes in rain bands"],
    nearbyCounties: ["Miami-Dade", "Broward", "Monroe"],
    planningNote:
      "Miami households should know their evacuation zone, flood exposure, bridge and causeway routes, and backup destination before a watch becomes a warning.",
    lat: 25.7617,
    lon: -80.1918
  },
  {
    slug: "tampa",
    name: "Tampa",
    stateCode: "FL",
    stateName: "Florida",
    region: "Florida Gulf Coast",
    risks: ["Tampa Bay storm surge", "evacuation route congestion", "freshwater flooding", "power outages"],
    nearbyCounties: ["Hillsborough", "Pinellas", "Pasco", "Manatee"],
    planningNote:
      "Tampa Bay storm surge and bridge access can drive decisions before peak wind, so residents should compare official evacuation zones with household mobility needs.",
    lat: 27.9506,
    lon: -82.4572
  },
  {
    slug: "houston",
    name: "Houston",
    stateCode: "TX",
    stateName: "Texas",
    region: "Upper Texas Gulf Coast",
    risks: ["bayou flooding", "coastal surge", "long-duration rainfall", "extended outages"],
    nearbyCounties: ["Harris", "Galveston", "Brazoria", "Chambers"],
    planningNote:
      "Houston planning should treat inland rainfall and bayou flooding as serious hurricane hazards even when the storm center is not directly over the city.",
    lat: 29.7604,
    lon: -95.3698
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    stateCode: "LA",
    stateName: "Louisiana",
    region: "Southeast Louisiana",
    risks: ["levee and drainage stress", "storm surge", "low-lying roads", "extended outages"],
    nearbyCounties: ["Orleans", "Jefferson", "St. Bernard", "Plaquemines"],
    planningNote:
      "New Orleans households should make route, fuel, medical, pet, and document decisions early because low-lying routes and long-drive evacuations can become constrained.",
    lat: 29.9511,
    lon: -90.0715
  },
  {
    slug: "virginia-beach",
    name: "Virginia Beach",
    stateCode: "VA",
    stateName: "Virginia",
    region: "Hampton Roads and Virginia coast",
    risks: ["tidal flooding", "storm surge", "bridge and tunnel disruption", "tree damage"],
    nearbyCounties: ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton"],
    planningNote:
      "Virginia Beach residents should watch tidal flooding, Chesapeake Bay impacts, bridge and tunnel constraints, and inland tree damage during coastal tropical systems.",
    lat: 36.8529,
    lon: -75.9779
  }
];

export function getCityBySlug(slug: string | undefined) {
  return hurricaneCities.find((city) => city.slug === slug);
}
