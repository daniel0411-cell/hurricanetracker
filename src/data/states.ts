export type CoastalState = {
  code: string;
  slug: string;
  name: string;
  region: string;
  priority: number;
  counties: string[];
  risks: string[];
  preparednessNote: string;
};

export const coastalStates: CoastalState[] = [
  {
    code: "FL",
    slug: "florida",
    name: "Florida",
    region: "Atlantic and Gulf Coast",
    priority: 1,
    counties: ["Miami-Dade", "Broward", "Palm Beach", "Lee", "Pinellas", "Duval"],
    risks: ["storm surge", "evacuation traffic", "freshwater flooding", "tornadoes in rain bands"],
    preparednessNote:
      "Florida households should decide evacuation triggers early because bridge closures, shelter demand, and fuel availability can change before landfall."
  },
  {
    code: "TX",
    slug: "texas",
    name: "Texas",
    region: "Western Gulf Coast",
    priority: 2,
    counties: ["Harris", "Galveston", "Nueces", "Jefferson", "Cameron", "Brazoria"],
    risks: ["coastal surge", "bay flooding", "long-duration rainfall", "power outages"],
    preparednessNote:
      "Texas hurricane planning should include inland flood risk, long drive times from barrier islands, and backup power safety for extended outages."
  },
  {
    code: "LA",
    slug: "louisiana",
    name: "Louisiana",
    region: "Central Gulf Coast",
    priority: 3,
    counties: ["Orleans", "Jefferson", "Plaquemines", "Terrebonne", "Lafourche", "Calcasieu"],
    risks: ["levee and surge risk", "rapid intensification", "low-lying roads", "extended outages"],
    preparednessNote:
      "Louisiana households should treat storm surge and evacuation timing as separate decisions because low-lying routes can close before peak wind arrives."
  },
  {
    code: "NC",
    slug: "north-carolina",
    name: "North Carolina",
    region: "Southeast Atlantic Coast",
    priority: 4,
    counties: ["Dare", "New Hanover", "Carteret", "Brunswick", "Onslow", "Hyde"],
    risks: ["Outer Banks access", "sound-side flooding", "river flooding", "tree damage"],
    preparednessNote:
      "North Carolina planning should account for barrier island access, inland river flooding, and tree-related power interruptions after landfall."
  },
  {
    code: "SC",
    slug: "south-carolina",
    name: "South Carolina",
    region: "Southeast Atlantic Coast",
    priority: 5,
    counties: ["Charleston", "Horry", "Beaufort", "Georgetown", "Berkeley", "Colleton"],
    risks: ["coastal surge", "evacuation lane reversals", "tidal flooding", "freshwater flooding"],
    preparednessNote:
      "South Carolina households should monitor local evacuation zones and move vehicles, documents, and medications before coastal routes become crowded."
  },
  {
    code: "GA",
    slug: "georgia",
    name: "Georgia",
    region: "Southeast Atlantic Coast",
    priority: 6,
    counties: ["Chatham", "Glynn", "Camden", "Liberty", "Bryan", "McIntosh"],
    risks: ["coastal flooding", "tree damage", "river flooding", "tornadoes"],
    preparednessNote:
      "Georgia coastal residents should pair NWS alerts with county evacuation zones because storm surge and inland wind impacts often peak at different times."
  },
  {
    code: "AL",
    slug: "alabama",
    name: "Alabama",
    region: "Central Gulf Coast",
    priority: 7,
    counties: ["Mobile", "Baldwin", "Escambia", "Washington", "Clarke", "Monroe"],
    risks: ["Mobile Bay surge", "tornadoes", "flash flooding", "tree damage"],
    preparednessNote:
      "Alabama households should monitor coastal surge and inland tornado warnings together, especially when landfall occurs west of the state."
  },
  {
    code: "MS",
    slug: "mississippi",
    name: "Mississippi",
    region: "Central Gulf Coast",
    priority: 8,
    counties: ["Hancock", "Harrison", "Jackson", "Pearl River", "Stone", "George"],
    risks: ["coastal surge", "river flooding", "mobile home vulnerability", "extended outages"],
    preparednessNote:
      "Mississippi planning should include early shelter decisions for mobile homes, low-lying roads, and medically dependent household members."
  }
];

export function getStateBySlug(slug: string | undefined) {
  return coastalStates.find((state) => state.slug === slug);
}

export function getStateByCode(code: string | undefined) {
  return coastalStates.find((state) => state.code === code?.toUpperCase());
}
