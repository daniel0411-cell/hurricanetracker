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
  officialResources?: Array<{
    name: string;
    description: string;
    url: string;
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
    officialResources: [
      {
        name: "Miami-Dade Hurricane Readiness",
        description: "Official Miami-Dade evacuation, alert, shelter, and hurricane preparedness information.",
        url: "https://www.miamidade.gov/global/emergency/hurricane/home.page"
      },
      {
        name: "NWS Miami-South Florida",
        description: "Official National Weather Service alerts and forecasts for Miami and South Florida.",
        url: "https://www.weather.gov/mfl/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
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
    officialResources: [
      {
        name: "Hillsborough County Disaster Planning",
        description: "Official Hillsborough County evacuation, shelter, alert, and disaster preparedness information.",
        url: "https://hcfl.gov/residents/stay-safe"
      },
      {
        name: "NWS Tampa Bay",
        description: "Official National Weather Service alerts and forecasts for the Tampa Bay area.",
        url: "https://www.weather.gov/tbw/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
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
    officialResources: [
      {
        name: "ReadyHarris",
        description: "Official Harris County emergency alerts, preparedness, evacuation, and recovery information.",
        url: "https://www.readyharris.org/"
      },
      {
        name: "NWS Houston/Galveston",
        description: "Official National Weather Service alerts and forecasts for Houston, Galveston, and southeast Texas.",
        url: "https://www.weather.gov/hgx/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
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
    officialResources: [
      {
        name: "NOLA Ready",
        description: "Official New Orleans emergency alerts, evacuation, shelter, and hurricane preparedness information.",
        url: "https://ready.nola.gov/"
      },
      {
        name: "NWS New Orleans/Baton Rouge",
        description: "Official National Weather Service alerts and forecasts for southeast Louisiana.",
        url: "https://www.weather.gov/lix/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
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
    officialResources: [
      {
        name: "Virginia Beach Emergency Management",
        description: "Official Virginia Beach emergency alerts, evacuation zone, shelter, and preparedness information.",
        url: "https://emergency.vbgov.com/"
      },
      {
        name: "NWS Wakefield",
        description: "Official National Weather Service alerts and forecasts for Virginia Beach and Hampton Roads.",
        url: "https://www.weather.gov/akq/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 36.8529,
    lon: -75.9779
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    stateCode: "FL",
    stateName: "Florida",
    region: "Southwest Florida Gulf Coast",
    risks: ["Caloosahatchee flooding", "storm surge", "barrier-island access", "extended outages"],
    nearbyCounties: ["Lee", "Charlotte", "Collier"],
    planningNote:
      "Fort Myers households should treat storm surge, river flooding, and barrier-island access as early decisions because routes can become limited before peak wind.",
    overview:
      "Fort Myers hurricane risk centers on the shallow Gulf shelf, the Caloosahatchee River, low-lying neighborhoods, and nearby barrier islands such as Sanibel, Captiva, and Fort Myers Beach. Hurricane Ian showed how a major Gulf hurricane can combine destructive surge, wind, debris, bridge impacts, and long recovery timelines across Lee County. Residents should use official evacuation zones and local orders instead of judging risk by inland distance alone.",
    localHazards: [
      {
        heading: "Gulf Surge and Barrier Islands",
        body:
          "Fort Myers Beach, Sanibel, Captiva, Pine Island, and coastal Lee County can face severe surge and access problems when Gulf water is pushed toward shore. Bridge timing and island evacuation orders can matter before wind peaks."
      },
      {
        heading: "River and Urban Flooding",
        body:
          "The Caloosahatchee and local drainage systems can worsen flooding during heavy tropical rain, especially when surge or high tide slows water movement. Vehicles should be moved from low streets when officials advise."
      },
      {
        heading: "Long Recovery Needs",
        body:
          "Southwest Florida hurricanes can disrupt power, cell service, bridges, fuel, and medical access. Households should prepare documents, medicine, cooling plans, and backup destinations before a warning becomes urgent."
      }
    ],
    evacuationFocus: [
      "Check the Lee County evacuation zone for your exact address.",
      "Leave early if you are on a barrier island, in a mobile home, or near surge-prone water.",
      "Plan for bridge access and post-storm reentry restrictions.",
      "Pack insurance records, photos, prescriptions, chargers, cash, and pet supplies."
    ],
    localSearches: [
      "Fort Myers hurricane tracker",
      "Fort Myers storm surge",
      "Lee County evacuation zone",
      "Fort Myers Beach hurricane alerts",
      "Fort Myers hurricane recovery"
    ],
    faqs: [
      {
        question: "Why is Fort Myers storm surge risk so high?",
        answer:
          "The shallow Gulf shelf, low-lying coastline, barrier islands, and river connections can allow hurricane-driven water to move far inland. Official surge forecasts and evacuation zones should guide decisions."
      },
      {
        question: "Should Fort Myers residents evacuate from barrier islands early?",
        answer:
          "Yes, residents on barrier islands or in surge zones should follow Lee County orders and leave early enough to avoid bridge, traffic, and shelter constraints."
      },
      {
        question: "What should Fort Myers households prepare first?",
        answer:
          "Start with evacuation zone, documents, medication, fuel, pet supplies, chargers, and a destination outside the surge area."
      }
    ],
    officialResources: [
      {
        name: "Lee County Emergency Management",
        description: "Official Lee County evacuation zones, alerts, shelters, and hurricane preparedness information.",
        url: "https://www.leegov.com/publicsafety/emergencymanagement"
      },
      {
        name: "NWS Tampa Bay",
        description: "Official National Weather Service alerts and forecasts for much of southwest Florida.",
        url: "https://www.weather.gov/tbw/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 26.6406,
    lon: -81.8723
  },
  {
    slug: "key-west",
    name: "Key West",
    stateCode: "FL",
    stateName: "Florida",
    region: "Florida Keys and Lower Keys",
    risks: ["island evacuation timing", "storm surge", "limited routes", "marine hazards"],
    nearbyCounties: ["Monroe", "Miami-Dade"],
    planningNote:
      "Key West residents should decide early because the Overseas Highway, bridges, shelters, fuel, and medical access can become constrained before severe weather arrives.",
    overview:
      "Key West hurricane risk is different from mainland Florida because the city sits at the end of a long island chain with one primary road connection to the mainland. Tropical systems moving through the Florida Straits, western Caribbean, or Gulf can bring surge, wind, marine hazards, and supply interruptions. The most important decision is often when to leave, not whether the storm center is aimed exactly at Key West.",
    localHazards: [
      {
        heading: "Overseas Highway Timing",
        body:
          "U.S. 1 and the bridges through the Keys are critical evacuation and supply routes. Traffic, fuel limits, bridge restrictions, and emergency orders can reduce options well before peak wind."
      },
      {
        heading: "Storm Surge and Marine Exposure",
        body:
          "Low elevation and surrounding water make surge, wave action, and marina damage central hazards. Boat owners and waterfront residents should complete preparations before conditions make docks unsafe."
      },
      {
        heading: "Medical and Supply Constraints",
        body:
          "Island residents should plan for prescriptions, oxygen, mobility needs, pet evacuation, fuel, and backup lodging earlier than mainland households because local resources can tighten quickly."
      }
    ],
    evacuationFocus: [
      "Follow Monroe County evacuation orders and timing for residents and visitors.",
      "Do not wait until the last safe travel window on U.S. 1.",
      "Secure boats and waterfront property while conditions are still calm.",
      "Pack IDs, prescriptions, pet records, cash, chargers, water, and lodging details."
    ],
    localSearches: [
      "Key West hurricane tracker",
      "Florida Keys evacuation hurricane",
      "Key West storm surge",
      "Monroe County hurricane alerts",
      "Overseas Highway hurricane evacuation"
    ],
    faqs: [
      {
        question: "Why should Key West residents decide earlier than mainland residents?",
        answer:
          "Key West depends on limited island routes, bridge access, fuel, shelters, and long travel time to safer inland areas. Waiting can reduce options quickly."
      },
      {
        question: "Is Key West vulnerable to storm surge?",
        answer:
          "Yes. Low elevation and water on all sides make storm surge and marine hazards serious even when wind category is not the only concern."
      },
      {
        question: "Should visitors leave Key West before residents?",
        answer:
          "Visitors should follow Monroe County guidance. Tourist evacuations may be ordered earlier to reduce traffic and preserve resources for residents."
      }
    ],
    officialResources: [
      {
        name: "Monroe County Emergency Management",
        description: "Official Florida Keys evacuation, alerts, shelter, and hurricane preparedness information.",
        url: "https://www.monroecounty-fl.gov/897/Emergency-Management"
      },
      {
        name: "NWS Key West",
        description: "Official National Weather Service alerts and forecasts for the Florida Keys.",
        url: "https://www.weather.gov/key/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 24.5551,
    lon: -81.78
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    stateCode: "FL",
    stateName: "Florida",
    region: "Northeast Florida and St. Johns River",
    risks: ["St. Johns River flooding", "coastal surge", "bridge impacts", "tree damage"],
    nearbyCounties: ["Duval", "St. Johns", "Nassau", "Clay"],
    planningNote:
      "Jacksonville households should watch both Atlantic coastal alerts and St. Johns River flooding because water impacts can arrive from multiple directions.",
    overview:
      "Jacksonville hurricane risk includes Atlantic beach surge, St. Johns River flooding, heavy rainfall, tornado warnings, bridge restrictions, and widespread tree-related outages. A storm does not need to make direct landfall in Duval County to push water up the river or create hazardous travel across the metro area.",
    localHazards: [
      {
        heading: "St. Johns River Flooding",
        body:
          "Wind, tide, rain, and river flow can combine to raise water levels along the St. Johns. Riverfront neighborhoods should monitor flood statements and local emergency guidance even after the storm center passes."
      },
      {
        heading: "Beaches and Coastal Surge",
        body:
          "Jacksonville Beach, Atlantic Beach, Neptune Beach, and Mayport can face ocean surge, erosion, and road closures during coastal tropical systems."
      },
      {
        heading: "Bridge and Power Disruption",
        body:
          "Jacksonville's bridges and tree canopy can turn wind and flooding into transportation and outage problems. Households should prepare for route changes and multi-day power interruptions."
      }
    ],
    evacuationFocus: [
      "Check Duval County evacuation zones and beach community instructions.",
      "Watch river flood alerts in addition to coastal warnings.",
      "Choose routes that do not rely on low bridges or flood-prone roads.",
      "Prepare for tree damage, outages, charging, medicine, and safe generator use."
    ],
    localSearches: [
      "Jacksonville hurricane tracker",
      "Jacksonville St Johns River flooding",
      "Duval County evacuation zone",
      "Jacksonville Beach storm surge",
      "Jacksonville hurricane alerts"
    ],
    faqs: [
      {
        question: "Can Jacksonville flood from the St. Johns River during a hurricane?",
        answer:
          "Yes. Wind, tide, rainfall, and river flow can combine to create flooding along the St. Johns even when the storm center is not directly over Jacksonville."
      },
      {
        question: "Do Jacksonville beach communities have different hurricane risk?",
        answer:
          "Yes. The beaches and Mayport have greater ocean surge and erosion exposure, while inland Jacksonville may face river flooding, wind, and outages."
      },
      {
        question: "What should Jacksonville residents check first?",
        answer:
          "Check Duval County evacuation zones, NWS coastal and river flood alerts, bridge guidance, and your household's power and medical needs."
      }
    ],
    officialResources: [
      {
        name: "JaxReady",
        description: "Official Jacksonville and Duval County emergency preparedness, evacuation, shelter, and alert information.",
        url: "https://www.jaxready.com/"
      },
      {
        name: "NWS Jacksonville",
        description: "Official National Weather Service alerts and forecasts for northeast Florida.",
        url: "https://www.weather.gov/jax/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 30.3322,
    lon: -81.6557
  },
  {
    slug: "galveston",
    name: "Galveston",
    stateCode: "TX",
    stateName: "Texas",
    region: "Upper Texas Coast and Galveston Island",
    risks: ["island surge", "causeway access", "coastal evacuation", "bay flooding"],
    nearbyCounties: ["Galveston", "Harris", "Brazoria", "Chambers"],
    planningNote:
      "Galveston residents should treat island evacuation, storm surge, and causeway access as early decisions because road options can narrow well before landfall.",
    overview:
      "Galveston hurricane risk is defined by island exposure, Galveston Bay, the Gulf shoreline, and evacuation timing over limited routes. A Gulf hurricane can push dangerous surge across the island and bay communities while also creating traffic and shelter pressure toward Houston and inland Texas.",
    localHazards: [
      {
        heading: "Island Storm Surge",
        body:
          "Galveston Island can face life-threatening surge, wave action, and overwash. Residents should use official evacuation orders and surge forecasts rather than storm category alone."
      },
      {
        heading: "Causeway and Route Timing",
        body:
          "The causeway and mainland routes are critical for evacuation. Traffic, flooding, wind restrictions, and local orders can make late departures dangerous."
      },
      {
        heading: "Bay and Mainland Impacts",
        body:
          "Nearby bay communities can experience surge and flooding even when island conditions differ. Galveston residents should track county alerts and Houston-area route conditions together."
      }
    ],
    evacuationFocus: [
      "Know whether your address is under Galveston County evacuation guidance.",
      "Leave early when island or coastal zones are ordered out.",
      "Plan fuel, lodging, pets, medical equipment, and mainland destination before traffic builds.",
      "Do not drive through water on island, bay, or mainland roads."
    ],
    localSearches: [
      "Galveston hurricane tracker",
      "Galveston storm surge",
      "Galveston evacuation route",
      "Galveston County hurricane alerts",
      "Galveston Island hurricane"
    ],
    faqs: [
      {
        question: "Why is Galveston evacuation timing so important?",
        answer:
          "Galveston is an island with limited route options. Surge, traffic, bridge restrictions, and official orders can reduce safe travel time before landfall."
      },
      {
        question: "Is Galveston storm surge risk different from Houston risk?",
        answer:
          "Yes. Galveston has direct Gulf and island surge exposure, while Houston often faces more inland rainfall, bayou flooding, and outages."
      },
      {
        question: "Should Galveston residents wait for a major hurricane forecast?",
        answer:
          "No. Evacuation decisions should follow official local orders and surge risk, not only category. Water can be dangerous in lower-category storms."
      }
    ],
    officialResources: [
      {
        name: "Galveston County Emergency Management",
        description: "Official Galveston County emergency alerts, evacuation, preparedness, and recovery information.",
        url: "https://www.gcoem.org/"
      },
      {
        name: "NWS Houston/Galveston",
        description: "Official National Weather Service alerts and forecasts for Galveston and southeast Texas.",
        url: "https://www.weather.gov/hgx/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 29.3013,
    lon: -94.7977
  },
  {
    slug: "corpus-christi",
    name: "Corpus Christi",
    stateCode: "TX",
    stateName: "Texas",
    region: "Middle Texas Coast and Coastal Bend",
    risks: ["coastal surge", "barrier-island access", "wind damage", "long outages"],
    nearbyCounties: ["Nueces", "San Patricio", "Kleberg", "Aransas"],
    planningNote:
      "Corpus Christi residents should plan around Coastal Bend surge, barrier-island access, wind exposure, and long travel distances to safer inland shelter.",
    overview:
      "Corpus Christi hurricane risk is shaped by the Coastal Bend, Corpus Christi Bay, Padre Island, low-lying coastal roads, and long evacuation distances. Storms approaching the middle Texas coast can intensify over very warm Gulf water and create surge, damaging wind, and extended outages across Nueces County and nearby communities.",
    localHazards: [
      {
        heading: "Bay and Gulf Surge",
        body:
          "Corpus Christi Bay, Padre Island, Mustang Island, and coastal neighborhoods can face surge and wave impacts that differ from inland wind risk. Evacuation-zone guidance should drive decisions."
      },
      {
        heading: "Barrier-Island and Road Access",
        body:
          "Island roads, bridges, and low coastal routes can become unsafe before peak wind. Residents should choose a destination and departure time before traffic and weather deteriorate."
      },
      {
        heading: "Wind and Utility Recovery",
        body:
          "The Coastal Bend can experience damaging wind and long utility restoration timelines. Households should prepare water, food, cooling, medicine, communication, and generator safety plans."
      }
    ],
    evacuationFocus: [
      "Check Nueces County and city evacuation instructions for your exact location.",
      "Leave early if you are on Padre Island, Mustang Island, or in a surge zone.",
      "Plan fuel and inland lodging before Gulf threats become urgent.",
      "Secure outdoor items and prepare for multi-day power and water disruption."
    ],
    localSearches: [
      "Corpus Christi hurricane tracker",
      "Corpus Christi storm surge",
      "Nueces County evacuation hurricane",
      "Coastal Bend hurricane alerts",
      "Padre Island hurricane evacuation"
    ],
    faqs: [
      {
        question: "What makes Corpus Christi hurricane risk different?",
        answer:
          "Corpus Christi combines bay surge, Gulf exposure, barrier-island access, wind, and long inland travel distances. Those factors make early planning important."
      },
      {
        question: "Should Padre Island residents leave early?",
        answer:
          "Residents on Padre Island, Mustang Island, or other surge-prone areas should follow local evacuation orders and leave early enough to avoid route constraints."
      },
      {
        question: "What should Corpus Christi households prepare for after landfall?",
        answer:
          "Prepare for outages, limited fuel, water disruption, debris, heat, and communication problems, especially if power restoration takes several days."
      }
    ],
    officialResources: [
      {
        name: "Corpus Christi Emergency Management",
        description: "Official Corpus Christi emergency alerts, evacuation, preparedness, and hurricane information.",
        url: "https://www.cctexas.com/services/public-safety/emergency-management"
      },
      {
        name: "NWS Corpus Christi",
        description: "Official National Weather Service alerts and forecasts for the Coastal Bend.",
        url: "https://www.weather.gov/crp/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 27.8006,
    lon: -97.3964
  },
  {
    slug: "charleston",
    name: "Charleston",
    stateCode: "SC",
    stateName: "South Carolina",
    region: "South Carolina Lowcountry",
    risks: ["Lowcountry surge", "tidal flooding", "evacuation traffic", "freshwater flooding"],
    nearbyCounties: ["Charleston", "Berkeley", "Dorchester", "Georgetown"],
    planningNote:
      "Charleston residents should plan around surge, tidal flooding, bridge access, and evacuation-route timing before Lowcountry roads become crowded or flooded.",
    overview:
      "Charleston hurricane risk is driven by the Lowcountry's tidal creeks, marshes, barrier islands, historic flood-prone streets, and evacuation routes toward inland South Carolina. A coastal hurricane or strong tropical storm can combine surge, rain, tide, and river flooding, making water the main decision driver for many neighborhoods.",
    localHazards: [
      {
        heading: "Lowcountry Surge and Tide",
        body:
          "Charleston can flood when storm surge, astronomical tide, and heavy rainfall overlap. Downtown, barrier islands, marsh-edge communities, and low roads should watch coastal flood alerts closely."
      },
      {
        heading: "Barrier Islands and Bridges",
        body:
          "Folly Beach, Isle of Palms, Sullivan's Island, and other coastal communities depend on routes that can become limited by wind, flooding, and official evacuation orders."
      },
      {
        heading: "Evacuation Traffic",
        body:
          "Charleston evacuations can place pressure on I-26 and inland routes. Households with pets, medical needs, or limited transportation should decide before traffic peaks."
      }
    ],
    evacuationFocus: [
      "Check Charleston County evacuation zones and local emergency management updates.",
      "Leave early from barrier islands, mobile homes, or surge-prone neighborhoods.",
      "Plan around I-26 traffic, lodging, fuel, pets, and medication needs.",
      "Move vehicles from low streets and avoid flooded roads after rainfall or tide peaks."
    ],
    localSearches: [
      "Charleston hurricane tracker",
      "Charleston storm surge",
      "Charleston evacuation zone",
      "Lowcountry hurricane alerts",
      "Charleston tidal flooding"
    ],
    faqs: [
      {
        question: "Why does Charleston flood during tropical systems?",
        answer:
          "Charleston can flood from surge, tide, rainfall, rivers, and drainage limits. These water hazards can overlap even when wind is not the only threat."
      },
      {
        question: "When should Charleston barrier-island residents evacuate?",
        answer:
          "Barrier-island residents should follow official county orders and leave early because bridges and coastal routes can become unsafe before peak storm conditions."
      },
      {
        question: "Is downtown Charleston hurricane risk mostly wind or water?",
        answer:
          "Water is often the primary concern downtown because tidal flooding, surge, and heavy rain can combine. Wind and outages still matter."
      }
    ],
    officialResources: [
      {
        name: "Charleston County Emergency Management",
        description: "Official Charleston County evacuation, shelter, alerts, and hurricane preparedness information.",
        url: "https://www.charlestoncounty.org/departments/emergency-management/"
      },
      {
        name: "NWS Charleston",
        description: "Official National Weather Service alerts and forecasts for Charleston and the Lowcountry.",
        url: "https://www.weather.gov/chs/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 32.7765,
    lon: -79.9311
  },
  {
    slug: "wilmington",
    name: "Wilmington",
    stateCode: "NC",
    stateName: "North Carolina",
    region: "Southeast North Carolina coast",
    risks: ["Cape Fear flooding", "coastal surge", "island access", "inland rainfall"],
    nearbyCounties: ["New Hanover", "Brunswick", "Pender"],
    planningNote:
      "Wilmington residents should monitor Cape Fear River flooding, coastal surge, island access, and inland rainfall because hazards can continue after landfall.",
    overview:
      "Wilmington hurricane risk includes Atlantic surge near beaches, Cape Fear River flooding, heavy inland rainfall, tree damage, and access issues for barrier communities. Storms like Florence showed that southeast North Carolina can face days of flooding after landfall, so preparedness must extend beyond the first wind forecast.",
    localHazards: [
      {
        heading: "Cape Fear River and Rainfall",
        body:
          "Heavy rain upstream can keep flooding risk high after the storm center moves away. Wilmington residents should monitor river forecasts and road closures during and after tropical systems."
      },
      {
        heading: "Beaches and Barrier Access",
        body:
          "Wrightsville Beach, Carolina Beach, Kure Beach, and nearby coastal areas can face surge, overwash, and bridge or road constraints. Evacuation timing should follow local orders."
      },
      {
        heading: "Tree Damage and Outages",
        body:
          "Saturated soil and tropical wind can bring down trees across New Hanover and surrounding counties. Prepare for blocked roads, outages, and communication disruption."
      }
    ],
    evacuationFocus: [
      "Check New Hanover County evacuation guidance and beach community orders.",
      "Plan for flooding that may continue after landfall.",
      "Choose routes that avoid flood-prone roads and low bridges.",
      "Prepare for outages, trees, medication, pets, and delayed return."
    ],
    localSearches: [
      "Wilmington NC hurricane tracker",
      "Wilmington hurricane flooding",
      "New Hanover evacuation zone",
      "Wrightsville Beach hurricane alerts",
      "Cape Fear River hurricane flooding"
    ],
    faqs: [
      {
        question: "Why can Wilmington flood after a hurricane has passed?",
        answer:
          "Rainfall upstream can drain into rivers and low areas after landfall, keeping road and river flooding dangerous even when wind is decreasing."
      },
      {
        question: "Do Wilmington beach areas have different evacuation needs?",
        answer:
          "Yes. Beach and barrier communities can face surge, overwash, bridge constraints, and earlier evacuation orders than some inland neighborhoods."
      },
      {
        question: "What should Wilmington residents monitor besides the cone?",
        answer:
          "Monitor NWS flood alerts, river forecasts, local evacuation orders, road closures, and county emergency management updates."
      }
    ],
    officialResources: [
      {
        name: "New Hanover County Emergency Management",
        description: "Official New Hanover County emergency alerts, evacuation, shelter, and preparedness information.",
        url: "https://em.nhcgov.com/"
      },
      {
        name: "NWS Wilmington NC",
        description: "Official National Weather Service alerts and forecasts for southeast North Carolina.",
        url: "https://www.weather.gov/ilm/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 34.2104,
    lon: -77.8868
  },
  {
    slug: "savannah",
    name: "Savannah",
    stateCode: "GA",
    stateName: "Georgia",
    region: "Georgia coast and Savannah River",
    risks: ["coastal surge", "river flooding", "barrier-island access", "tree damage"],
    nearbyCounties: ["Chatham", "Bryan", "Effingham", "Glynn"],
    planningNote:
      "Savannah residents should connect Chatham County evacuation zones, Savannah River flooding, barrier-island access, and tree-related outages before a storm approaches.",
    overview:
      "Savannah hurricane risk comes from Atlantic surge, the Savannah River, tidal marshes, barrier islands, low-lying roads, and a tree canopy that can amplify outage problems. Storms tracking up the Southeast coast can bring water, wind, tornado warnings, and inland flooding even if landfall occurs in Florida or the Carolinas.",
    localHazards: [
      {
        heading: "Coastal Surge and Marsh Flooding",
        body:
          "Chatham County's marshes, creeks, and low-lying roads can flood from surge and tide. Tybee Island and coastal communities should follow official evacuation guidance early."
      },
      {
        heading: "Savannah River and Rain",
        body:
          "Heavy tropical rainfall can create river and drainage flooding around Savannah and nearby counties. Flood impacts may continue after the storm center passes."
      },
      {
        heading: "Trees and Outages",
        body:
          "Wind and saturated soil can bring down trees and power lines. Households should prepare for blocked roads, outages, communication issues, and generator safety."
      }
    ],
    evacuationFocus: [
      "Check Chatham County evacuation zone information for your exact address.",
      "Leave early from Tybee Island, coastal zones, mobile homes, or flood-prone areas.",
      "Plan around I-16 evacuation traffic, pets, fuel, and lodging.",
      "Move vehicles away from trees and low streets when local officials advise."
    ],
    localSearches: [
      "Savannah hurricane tracker",
      "Savannah evacuation zone",
      "Chatham County hurricane alerts",
      "Tybee Island hurricane evacuation",
      "Savannah storm surge"
    ],
    faqs: [
      {
        question: "Is Savannah vulnerable to storm surge?",
        answer:
          "Yes. Savannah, Tybee Island, and nearby marsh communities can face surge and tidal flooding during coastal tropical systems."
      },
      {
        question: "Why does I-16 matter for Savannah hurricane evacuation?",
        answer:
          "I-16 is a major inland evacuation route from the Georgia coast. Traffic and lane-control decisions can affect when residents should leave."
      },
      {
        question: "Can Savannah have hurricane impacts without a direct hit?",
        answer:
          "Yes. Storms passing near Florida or the Carolinas can still bring surge, rain, tornado warnings, tree damage, and outages to the Savannah area."
      }
    ],
    officialResources: [
      {
        name: "Chatham Emergency Management Agency",
        description: "Official Chatham County and Savannah area emergency alerts, evacuation, and preparedness information.",
        url: "https://www.chathamemergency.org/"
      },
      {
        name: "NWS Charleston",
        description: "Official National Weather Service alerts and forecasts for coastal Georgia and the Lowcountry.",
        url: "https://www.weather.gov/chs/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 32.0809,
    lon: -81.0912
  },
  {
    slug: "mobile",
    name: "Mobile",
    stateCode: "AL",
    stateName: "Alabama",
    region: "Mobile Bay and Alabama Gulf Coast",
    risks: ["Mobile Bay surge", "flash flooding", "tornadoes", "power outages"],
    nearbyCounties: ["Mobile", "Baldwin", "Washington"],
    planningNote:
      "Mobile residents should watch Mobile Bay surge, rainfall flooding, tornado warnings, and extended outages together because hazards can peak at different times.",
    overview:
      "Mobile hurricane risk is shaped by Mobile Bay, nearby barrier communities, heavy Gulf rainfall, tornado-producing rain bands, and a tree canopy that can drive outages. Storms approaching from the central Gulf can push water into the bay while bringing flooding and wind impacts inland across Mobile and Baldwin counties.",
    localHazards: [
      {
        heading: "Mobile Bay Surge",
        body:
          "The shape of Mobile Bay can concentrate water when Gulf winds push surge northward. Coastal and bayfront neighborhoods should follow evacuation-zone guidance and coastal flood alerts."
      },
      {
        heading: "Rainfall and Tornado Bands",
        body:
          "Hurricanes and tropical storms can produce flash flooding and tornado warnings in outer bands. Residents should have wireless alerts enabled and know where to shelter away from windows."
      },
      {
        heading: "Outages and Heat",
        body:
          "Power outages after Gulf storms can last beyond the wind event. Mobile households should prepare for charging, cooling, food safety, medical equipment, and generator safety."
      }
    ],
    evacuationFocus: [
      "Check Mobile County and Baldwin County evacuation guidance for your address.",
      "Leave early from surge zones, mobile homes, and low-lying roads.",
      "Prepare a tornado shelter spot inside your home or destination.",
      "Plan for power outages, heat, medicine, pets, and safe generator placement."
    ],
    localSearches: [
      "Mobile Alabama hurricane tracker",
      "Mobile Bay storm surge",
      "Mobile County hurricane alerts",
      "Alabama Gulf Coast evacuation",
      "Mobile hurricane power outage"
    ],
    faqs: [
      {
        question: "Why is Mobile Bay storm surge important?",
        answer:
          "Mobile Bay can funnel water northward during Gulf hurricanes, raising surge risk for bayfront and low-lying communities."
      },
      {
        question: "Can Mobile get tornado warnings during hurricanes?",
        answer:
          "Yes. Tropical rain bands can produce quick tornado warnings, especially to the right side of a storm track. Have alerts enabled and a shelter spot ready."
      },
      {
        question: "Should Mobile residents prepare for outages?",
        answer:
          "Yes. Wind, trees, flooding, and utility damage can create multi-day outages, so plan for heat, charging, food, water, medicine, and generator safety."
      }
    ],
    officialResources: [
      {
        name: "Mobile County Emergency Management Agency",
        description: "Official Mobile County emergency alerts, hurricane preparedness, shelter, and response information.",
        url: "https://www.mcema.net/"
      },
      {
        name: "NWS Mobile/Pensacola",
        description: "Official National Weather Service alerts and forecasts for the Alabama Gulf Coast.",
        url: "https://www.weather.gov/mob/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 30.6954,
    lon: -88.0399
  },
  {
    slug: "biloxi",
    name: "Biloxi",
    stateCode: "MS",
    stateName: "Mississippi",
    region: "Mississippi Gulf Coast",
    risks: ["Gulf surge", "low-lying roads", "casino and waterfront exposure", "extended outages"],
    nearbyCounties: ["Harrison", "Jackson", "Hancock"],
    planningNote:
      "Biloxi residents should prepare for Gulf surge, low-lying coastal roads, mobile-home vulnerability, and extended outages before central Gulf storms intensify.",
    overview:
      "Biloxi hurricane risk is defined by the Mississippi Gulf Coast's low elevation, open Gulf exposure, bays, casinos and waterfront infrastructure, and limited high-ground options near the shoreline. Historic storms such as Camille and Katrina show that storm surge can be the dominant hazard even when wind receives more attention.",
    localHazards: [
      {
        heading: "Gulf Surge and Low Elevation",
        body:
          "Biloxi and nearby coastal communities can face severe surge and coastal flooding. Residents should follow Harrison County evacuation guidance and avoid judging safety by wind category alone."
      },
      {
        heading: "Waterfront and Road Exposure",
        body:
          "Beach Boulevard, low roads, marinas, casino areas, and bayfront neighborhoods can become dangerous before peak wind. Vehicle movement and evacuation timing should happen early."
      },
      {
        heading: "Outages and Reentry",
        body:
          "Storms on the Mississippi coast can disrupt power, water, debris removal, fuel, and reentry. Households should prepare for several days of self-sufficiency."
      }
    ],
    evacuationFocus: [
      "Check Harrison County evacuation instructions and local shelter information.",
      "Leave early from surge zones, mobile homes, and low-lying coastal roads.",
      "Move vehicles away from waterfront and flood-prone areas when officials advise.",
      "Pack documents, prescriptions, chargers, cash, pet supplies, and recovery records."
    ],
    localSearches: [
      "Biloxi hurricane tracker",
      "Biloxi storm surge",
      "Harrison County hurricane evacuation",
      "Mississippi Gulf Coast hurricane alerts",
      "Biloxi hurricane recovery"
    ],
    faqs: [
      {
        question: "Why is storm surge the main Biloxi hurricane concern?",
        answer:
          "Biloxi sits on a low Gulf-facing coast where hurricane-driven water can move across roads and waterfront areas. Surge can become life-threatening before or during landfall."
      },
      {
        question: "Should Biloxi mobile-home residents evacuate early?",
        answer:
          "Yes. Mobile homes are vulnerable to wind and flooding. Residents should follow local evacuation guidance and leave early when advised."
      },
      {
        question: "What should Biloxi residents prepare for after a hurricane?",
        answer:
          "Prepare for power and water disruption, debris, limited fuel, reentry delays, insurance documentation, and cleanup safety."
      }
    ],
    officialResources: [
      {
        name: "Harrison County Emergency Management",
        description: "Official Harrison County emergency alerts, evacuation, shelter, and hurricane preparedness information.",
        url: "https://harrisoncountyms.gov/departments/emergency-management-agency/"
      },
      {
        name: "NWS New Orleans/Baton Rouge",
        description: "Official National Weather Service alerts and forecasts for coastal Mississippi.",
        url: "https://www.weather.gov/lix/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 30.396,
    lon: -88.8853
  }
];

export function getCityBySlug(slug: string | undefined) {
  return hurricaneCities.find((city) => city.slug === slug);
}
