export type HurricaneCity = {
  slug: string;
  name: string;
  stateCode: string;
  stateName: string;
  region: string;
  risks: string[];
  planningNote: string;
  nearbyCounties: string[];
  overview: string;
  localHazards: Array<{
    heading: string;
    body: string;
  }>;
  evacuationFocus: string[];
  localSearches: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
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
    overview:
      "Miami hurricane risk is shaped by Atlantic storms approaching from the Bahamas, Caribbean systems moving north through the Florida Straits, and Gulf systems that cross South Florida or pull rain bands across the metro area. The biggest household decisions usually involve evacuation zone, storm surge exposure near Biscayne Bay and barrier islands, high-rise wind impacts, flash flooding on urban roads, and whether bridges or causeways could become unsafe before peak conditions.",
    localHazards: [
      {
        heading: "Storm Surge and Bay Flooding",
        body:
          "Miami-Dade neighborhoods near Biscayne Bay, Miami Beach, Key Biscayne, coastal canals, and low-lying shoreline areas should treat storm surge separately from wind category. A lower-category storm can still create life-threatening water if the track, tide, and bay setup are unfavorable."
      },
      {
        heading: "Urban Flooding and Drainage",
        body:
          "Heavy tropical rain can overwhelm streets, parking garages, underpasses, and neighborhood drainage even away from the immediate coast. Miami residents should avoid using ZIP code alone as a risk signal and check official flood and evacuation maps before deciding to stay."
      },
      {
        heading: "High-Rise and Condo Planning",
        body:
          "People in apartments and condos should plan for elevator outages, garage flooding, broken glass risk, limited water pressure, and building-specific instructions. A safe room, charged devices, printed contacts, and stair access can matter as much as supplies."
      }
    ],
    evacuationFocus: [
      "Confirm your Miami-Dade evacuation zone before a watch is issued.",
      "Plan bridge or causeway timing early for barrier islands and coastal neighborhoods.",
      "Move vehicles out of flood-prone garages and low streets when local officials advise.",
      "Keep documents, medications, chargers, cash, and pet supplies ready to leave together."
    ],
    localSearches: [
      "Miami hurricane tracker",
      "Miami storm surge warning",
      "Miami evacuation zone hurricane",
      "Miami NWS alerts",
      "Miami hurricane radar"
    ],
    faqs: [
      {
        question: "Does Miami need to evacuate for every hurricane warning?",
        answer:
          "No. Evacuation depends on your official zone, storm surge forecast, housing type, flood exposure, and local orders. Miami residents in surge zones, barrier islands, mobile homes, or medically dependent households should decide earlier than inland residents in stronger buildings."
      },
      {
        question: "What is the main hurricane danger for Miami?",
        answer:
          "Miami can face storm surge near Biscayne Bay and beaches, damaging wind in high-rises and exposed neighborhoods, flash flooding from heavy rain, and tornadoes in outer bands. The highest danger depends on the storm track and official local alerts."
      },
      {
        question: "Should Miami residents watch the cone or local alerts first?",
        answer:
          "Use the NHC cone for storm-track context, but make decisions from local NWS alerts, Miami-Dade emergency management instructions, and evacuation-zone guidance. The cone does not show every surge, flood, or tornado hazard."
      }
    ],
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
    overview:
      "Tampa hurricane risk is dominated by the shape of Tampa Bay, surrounding low-lying neighborhoods, and the limited time needed for water and traffic problems to build once warnings are issued. Even when the storm center stays offshore, a track that pushes water into the bay can create dangerous surge for Tampa, St. Petersburg, Clearwater, coastal Hillsborough County, Pinellas County, and nearby barrier communities.",
    localHazards: [
      {
        heading: "Tampa Bay Storm Surge",
        body:
          "The bay can amplify water levels when a hurricane's wind field pushes water into the estuary. Residents should check county evacuation zones instead of relying on distance from the coastline or the storm category alone."
      },
      {
        heading: "Bridge and Barrier-Island Access",
        body:
          "Bridges, causeways, and barrier-island routes can become constrained before peak wind. Pinellas and coastal Hillsborough households should plan departure timing around local orders, shelter availability, pets, and medical needs."
      },
      {
        heading: "Rainfall and Power Outages",
        body:
          "Slow-moving tropical systems can bring freshwater flooding and multi-day outages across the metro area. Generator safety, medication cooling, phone charging, and food storage should be part of the local plan."
      }
    ],
    evacuationFocus: [
      "Check the official Hillsborough or Pinellas evacuation zone for your exact address.",
      "Decide early if you live near the bay, a canal, a barrier island, or a mobile home.",
      "Choose a route that does not depend on a single bridge or flood-prone road.",
      "Prepare for outages with safe generator placement, charging, food, and medicine plans."
    ],
    localSearches: [
      "Tampa hurricane tracker",
      "Tampa Bay storm surge",
      "Tampa evacuation zone",
      "Pinellas hurricane alerts",
      "Tampa hurricane radar"
    ],
    faqs: [
      {
        question: "Why is Tampa Bay storm surge a major concern?",
        answer:
          "Tampa Bay's shape can allow hurricane winds to push water into low-lying coastal areas. The surge risk depends on track, wind direction, timing, tide, and local elevation, so residents should use official evacuation-zone maps."
      },
      {
        question: "When should Tampa residents leave?",
        answer:
          "Leave when local officials order your zone to evacuate, or earlier if your household needs extra time for medical needs, pets, transportation, or mobility. Bridge and route constraints can develop before the strongest weather arrives."
      },
      {
        question: "Is being inland from Tampa Bay enough protection?",
        answer:
          "Not always. Inland areas may avoid surge but still face flooding rain, tornado warnings, tree damage, and extended power outages. Match your plan to both coastal water risk and inland weather alerts."
      }
    ],
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
    overview:
      "Houston hurricane risk is often less about the exact landfall point and more about rainfall duration, bayou response, coastal surge around Galveston Bay, and power interruption across a large metro area. A storm can make landfall well away from downtown Houston and still create dangerous flooding, road closures, tornado warnings, and outages for Harris County and surrounding communities.",
    localHazards: [
      {
        heading: "Bayou and Urban Flooding",
        body:
          "Houston's bayou network can rise quickly during tropical rainfall, especially when bands train over the same neighborhoods. Residents should avoid flooded roads, underpasses, and low-water crossings even when winds are below hurricane strength."
      },
      {
        heading: "Galveston Bay and Coastal Surge",
        body:
          "Galveston, Clear Lake, Baytown, and coastal parts of the metro can face surge and bay flooding while inland Houston faces rainfall. These hazards can peak at different times, so one countywide summary may not describe your exact risk."
      },
      {
        heading: "Long-Duration Outages",
        body:
          "Large, slow-moving storms can leave parts of the Houston area without power after the center passes. Households should plan for refrigerated medicine, charging, cooling, food safety, and safe generator use."
      }
    ],
    evacuationFocus: [
      "Do not evacuate from inland Houston unless officials advise it or your household risk requires it.",
      "Know whether you are in a coastal surge zone, mobile home, flood-prone street, or medically vulnerable household.",
      "Pick routes that avoid bayous, underpasses, and historically flooded freeway sections.",
      "Keep water, fuel, medication, chargers, and cooling plans ready for extended outages."
    ],
    localSearches: [
      "Houston hurricane tracker",
      "Houston bayou flooding hurricane",
      "Houston NWS alerts",
      "Galveston Bay storm surge",
      "Houston hurricane power outage"
    ],
    faqs: [
      {
        question: "Should Houston residents evacuate for every hurricane?",
        answer:
          "No. Many inland Houston residents are safer staying off the roads unless local officials issue evacuation guidance or the household has special risk. Coastal surge zones, mobile homes, flood-prone properties, and medical needs require earlier decisions."
      },
      {
        question: "What hurricane hazard matters most in Houston?",
        answer:
          "Flooding is often the biggest Houston hurricane hazard, especially bayou flooding and long-duration rainfall. Surge can be critical near Galveston Bay and the coast, while wind and outages remain important across the metro."
      },
      {
        question: "Why can Houston flood after a storm moves inland?",
        answer:
          "Tropical systems can slow down, pull moisture from the Gulf, and repeatedly send rain bands over the same area. Flooding can worsen after landfall even when the storm is weakening."
      }
    ],
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
    overview:
      "New Orleans hurricane risk combines Gulf storm surge, levee and drainage considerations, low elevation, parish-by-parish evacuation decisions, and long outbound travel times. The city and nearby parishes can face very different timing for surge, rainfall, road closures, and power loss, so residents need a plan that starts before a warning becomes urgent.",
    localHazards: [
      {
        heading: "Levees, Surge, and Low Elevation",
        body:
          "New Orleans residents should follow official parish guidance because levee-protected areas, outside-levee communities, and low-lying roads do not share the same risk. Storm surge can threaten routes and surrounding parishes before the worst wind arrives."
      },
      {
        heading: "Drainage and Street Flooding",
        body:
          "Heavy rain can create street flooding even when surge is not the primary hazard. Parking location, pump conditions, drainage advisories, and road closures should be checked early."
      },
      {
        heading: "Long Evacuation Timing",
        body:
          "Evacuating from southeast Louisiana can mean long drives, fuel planning, pets, medical equipment, and hotel or shelter decisions. Waiting for certainty can leave too little time for households that need assistance."
      }
    ],
    evacuationFocus: [
      "Track Orleans, Jefferson, St. Bernard, and Plaquemines parish instructions separately.",
      "Decide early if you live outside levee protection, in a mobile home, or with medical equipment needs.",
      "Pack documents, prescriptions, chargers, pet records, cash, and route information together.",
      "Plan fuel and lodging before outbound traffic increases."
    ],
    localSearches: [
      "New Orleans hurricane tracker",
      "New Orleans evacuation hurricane",
      "New Orleans storm surge",
      "Orleans Parish hurricane alerts",
      "New Orleans power outage hurricane"
    ],
    faqs: [
      {
        question: "When should New Orleans residents evacuate?",
        answer:
          "Follow parish evacuation orders and leave earlier if your household needs extra time for medical, transportation, mobility, pet, or long-distance travel needs. Low-lying routes and traffic can become constrained before peak wind."
      },
      {
        question: "Is New Orleans protected from hurricane flooding?",
        answer:
          "Levees and drainage systems reduce some risks but do not remove them. Residents should still follow official parish guidance, monitor surge and rainfall alerts, and understand whether they live inside or outside specific protection areas."
      },
      {
        question: "What should New Orleans households prepare first?",
        answer:
          "Start with people and documents: prescriptions, medical equipment plans, IDs, insurance records, pet supplies, fuel, chargers, cash, and a destination or shelter option."
      }
    ],
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
    overview:
      "Virginia Beach hurricane risk comes from Atlantic surge, Chesapeake Bay and tidal flooding, bridge-tunnel constraints, tree damage, and power outages as storms recurve up the coast or move inland from the Carolinas. A weakening tropical system can still push water into low-lying neighborhoods and create dangerous travel conditions across Hampton Roads.",
    localHazards: [
      {
        heading: "Tidal Flooding and Storm Surge",
        body:
          "Virginia Beach can experience oceanfront surge, Chesapeake Bay backwater effects, and tidal flooding in low-lying neighborhoods. Residents should compare NWS coastal flood alerts with city evacuation-zone guidance."
      },
      {
        heading: "Bridge-Tunnel and Route Constraints",
        body:
          "Hampton Roads travel depends on bridges, tunnels, and causeways that can become limited by wind, flooding, or official restrictions. Households should choose routes and destinations before conditions degrade."
      },
      {
        heading: "Trees, Power, and Inland Rain",
        body:
          "Tropical systems moving into Virginia often cause tree damage, scattered tornado warnings, and outages even after losing hurricane strength. Generator safety and communication planning matter across the region."
      }
    ],
    evacuationFocus: [
      "Check Virginia Beach evacuation zone guidance and coastal flood alerts together.",
      "Plan around bridge-tunnel restrictions, not just the storm center location.",
      "Move vehicles away from flood-prone streets and trees when local guidance supports it.",
      "Prepare for outages with chargers, medication plans, radio, and safe generator rules."
    ],
    localSearches: [
      "Virginia Beach hurricane tracker",
      "Virginia Beach tidal flooding",
      "Hampton Roads hurricane alerts",
      "Virginia Beach evacuation zone",
      "Virginia Beach storm surge"
    ],
    faqs: [
      {
        question: "Does Virginia Beach get hurricane storm surge?",
        answer:
          "Yes. Virginia Beach can face oceanfront surge, Chesapeake Bay impacts, and tidal flooding, especially when storm wind direction and tide timing push water into low-lying areas."
      },
      {
        question: "Why do bridge-tunnels matter during a Virginia Beach hurricane threat?",
        answer:
          "Bridge-tunnels can be affected by high wind, flooding, traffic, and official restrictions. Evacuation and shelter decisions should account for those route constraints before weather deteriorates."
      },
      {
        question: "Can a tropical storm still be dangerous for Virginia Beach?",
        answer:
          "Yes. Tropical storms can produce coastal flooding, tornado warnings, heavy rain, tree damage, and outages even without major-hurricane wind at landfall."
      }
    ],
    lat: 36.8529,
    lon: -75.9779
  }
];

export function getCityBySlug(slug: string | undefined) {
  return hurricaneCities.find((city) => city.slug === slug);
}
