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
    slug: "orlando",
    name: "Orlando",
    stateCode: "FL",
    stateName: "Florida",
    region: "Central Florida inland metro",
    risks: ["freshwater flooding", "tornadoes in rain bands", "tree damage", "extended outages"],
    nearbyCounties: ["Orange", "Seminole", "Osceola", "Lake", "Volusia"],
    planningNote: "Orlando hurricane planning focuses on rainfall flooding, tornadoes, falling trees, heat, and multi-day outages even when the storm center stays near the coast.",
    overview: "An Orlando hurricane tracker should not be used only to look for a landfall point. Central Florida can face long-duration tropical rain, flash flooding, tornadoes in outer bands, blocked roads, and power outages after a coastal storm moves inland. Check the current NHC path, then use Central Florida NWS alerts and Orange County emergency guidance for local decisions.",
    localHazards: [
      { heading: "Rain and Freshwater Flooding", body: "Tropical systems can produce heavy rain across Central Florida after landfall. Avoid flooded roads and low-water crossings, and check local flood alerts even when winds are weakening." },
      { heading: "Tornadoes in Outer Bands", body: "Fast-moving rain bands can produce short-fuse tornado warnings far from the storm center. Keep phones charged and use official NWS warnings rather than relying on the hurricane category." },
      { heading: "Heat and Extended Outages", body: "Power loss after a storm can create dangerous indoor heat and disrupt refrigeration, medication, traffic signals, and communications. Prepare for several days of backup power and cooling needs." }
    ],
    evacuationFocus: [
      "Follow Orange County and local emergency management instructions rather than coastal evacuation assumptions.",
      "Know alternate routes if flooding, trees, or traffic signals affect major roads.",
      "Prepare water, medication, cooling, chargers, and food for an extended outage.",
      "Monitor tornado and flood warnings as rain bands move through Central Florida."
    ],
    localSearches: ["Orlando hurricane tracker", "is there a hurricane today in Orlando FL", "Orlando hurricane today", "Orlando NWS hurricane alerts", "Orlando hurricane radar"],
    faqs: [
      { question: "Is there a hurricane in Orlando today?", answer: "Check the current NHC storm context and Central Florida NWS alerts. Orlando can face rain, tornadoes, flooding, and outages even when no hurricane center is over the city." },
      { question: "Does Orlando evacuate for hurricanes?", answer: "Evacuation decisions depend on local orders, housing, flooding, medical needs, transportation, and destination. Follow Orange County and local emergency management instructions." },
      { question: "What is the main hurricane risk in Orlando?", answer: "Freshwater flooding, tornadoes in rain bands, falling trees, heat, and extended power outages are often more relevant than storm surge in inland Orlando." }
    ],
    officialResources: [
      { name: "Orange County Emergency Management", description: "Official Orlando-area emergency alerts, shelters, preparedness, and storm information.", url: "https://www.ocfl.net/EmergencySafety/" },
      { name: "NWS Melbourne", description: "Official National Weather Service alerts and forecasts for Orlando and Central Florida.", url: "https://www.weather.gov/mlb/" },
      { name: "National Hurricane Center", description: "Official tropical cyclone advisories, watches, warnings, and forecasts.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 28.5383,
    lon: -81.3792
  },
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
    region: "Tampa Bay and Florida Gulf Coast",
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
        name: "Pinellas County Emergency Information",
        description: "Official Pinellas County evacuation zones, shelters, alerts, and Tampa Bay hurricane preparedness resources.",
        url: "https://pinellas.gov/emergency-information/"
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
    region: "Southeast Louisiana and Mississippi River delta",
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
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    stateCode: "FL",
    stateName: "Florida",
    region: "Broward County Atlantic coast",
    risks: ["storm surge", "canal flooding", "high-rise wind", "evacuation traffic"],
    nearbyCounties: ["Broward", "Miami-Dade", "Palm Beach"],
    planningNote:
      "Fort Lauderdale residents should match Broward evacuation zones with canal, beach, high-rise, and mobile-home risk before Atlantic storms approach.",
    overview:
      "Fort Lauderdale hurricane risk combines Atlantic beach exposure, Intracoastal and canal flooding, high-rise wind, dense evacuation traffic, and power outages across Broward County. A storm tracking near South Florida can create dangerous water and wind conditions even when the center passes north or south of the city.",
    localHazards: [
      { heading: "Beach and Canal Flooding", body: "Storm surge, heavy rain, high tide, and canal drainage can combine around Fort Lauderdale beach, Las Olas Isles, and low-lying neighborhoods." },
      { heading: "High-Rise Wind", body: "Condo and apartment residents should prepare for elevator outages, glass risk, garage flooding, and building-specific instructions." },
      { heading: "Traffic and Shelter Timing", body: "Broward evacuation decisions should be made early for surge zones, mobile homes, pets, medical needs, and households without reliable transportation." }
    ],
    evacuationFocus: [
      "Check Broward County evacuation zone guidance for your address.",
      "Move vehicles away from flood-prone garages and low streets when advised.",
      "Prepare for elevator outages, stair access, documents, medicine, and chargers.",
      "Use local orders and NWS alerts rather than storm category alone."
    ],
    localSearches: [
      "Fort Lauderdale hurricane tracker",
      "Broward County evacuation zone",
      "Fort Lauderdale storm surge",
      "Fort Lauderdale hurricane alerts",
      "Fort Lauderdale canal flooding hurricane"
    ],
    faqs: [
      { question: "Is Fort Lauderdale vulnerable to storm surge?", answer: "Yes. Beach, Intracoastal, canal, and low-lying neighborhoods can face surge and flooding depending on track, tide, and rainfall." },
      { question: "Should Fort Lauderdale condo residents prepare differently?", answer: "Yes. High-rise residents should plan for elevators, garages, windows, stair access, water pressure, and power outages." },
      { question: "What should Broward residents check first?", answer: "Check Broward evacuation zone guidance, NWS alerts, local emergency management updates, and whether your household needs extra travel time." }
    ],
    officialResources: [
      { name: "Broward Emergency Management", description: "Official Broward County emergency alerts, evacuation, shelter, and hurricane preparedness information.", url: "https://www.broward.org/Hurricane/" },
      { name: "NWS Miami-South Florida", description: "Official National Weather Service alerts and forecasts for Fort Lauderdale and South Florida.", url: "https://www.weather.gov/mfl/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 26.1224,
    lon: -80.1373
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    stateCode: "FL",
    stateName: "Florida",
    region: "Palm Beach County Atlantic coast",
    risks: ["coastal surge", "Lake Okeechobee rainfall context", "tornado bands", "outages"],
    nearbyCounties: ["Palm Beach", "Martin", "Broward"],
    planningNote:
      "West Palm Beach residents should monitor Atlantic surge, Palm Beach County evacuation zones, tornado bands, rainfall, and outage risk before a storm nears the coast.",
    overview:
      "West Palm Beach hurricane risk includes Atlantic surge along barrier communities, heavy rainfall, tornado-producing rain bands, and long power outages across Palm Beach County. Storms approaching from the Bahamas or recurving along Florida's east coast can shift risk quickly across coastal and inland neighborhoods.",
    localHazards: [
      { heading: "Atlantic Surge and Barrier Communities", body: "Palm Beach, Singer Island, and low coastal areas should watch evacuation zones and surge alerts separately from wind category." },
      { heading: "Rain Bands and Tornadoes", body: "Outer bands can produce short-fuse tornado warnings and heavy rain before or after the closest approach." },
      { heading: "Outages and Medical Needs", body: "Palm Beach County households with refrigerated medicine, oxygen, or mobility needs should plan power and transportation early." }
    ],
    evacuationFocus: [
      "Check Palm Beach County evacuation zone and shelter guidance.",
      "Prepare for tornado warnings with an interior shelter location.",
      "Pack documents, prescriptions, chargers, pet supplies, and cash.",
      "Move vehicles away from low streets and trees when local guidance supports it."
    ],
    localSearches: [
      "West Palm Beach hurricane tracker",
      "Palm Beach County evacuation zone",
      "West Palm Beach storm surge",
      "Palm Beach hurricane alerts",
      "West Palm Beach hurricane outage"
    ],
    faqs: [
      { question: "Does West Palm Beach face storm surge?", answer: "Yes. Coastal and barrier-island areas can face surge, while inland neighborhoods may face flooding, tornadoes, and outages." },
      { question: "Are tornado warnings common during Palm Beach hurricane threats?", answer: "They can occur in tropical rain bands, so residents should keep alerts enabled and know an interior shelter spot." },
      { question: "What should West Palm Beach residents check first?", answer: "Check Palm Beach County evacuation zones, NWS alerts, NHC advisories, and household power or medical needs." }
    ],
    officialResources: [
      { name: "Palm Beach County Emergency Management", description: "Official Palm Beach County evacuation, alerts, shelter, and hurricane preparedness information.", url: "https://discover.pbcgov.org/publicsafety/dem/Pages/default.aspx" },
      { name: "NWS Miami-South Florida", description: "Official National Weather Service alerts and forecasts for Palm Beach County.", url: "https://www.weather.gov/mfl/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 26.7153,
    lon: -80.0534
  },
  {
    slug: "lake-charles",
    name: "Lake Charles",
    stateCode: "LA",
    stateName: "Louisiana",
    region: "Southwest Louisiana Gulf Coast",
    risks: ["Calcasieu surge", "industrial corridor outages", "rapid intensification", "inland flooding"],
    nearbyCounties: ["Calcasieu", "Cameron", "Beauregard"],
    planningNote:
      "Lake Charles households should plan early for Gulf surge, Calcasieu water impacts, industrial corridor outages, and rapid intensification near the Louisiana coast.",
    overview:
      "Lake Charles hurricane risk is shaped by the southwest Louisiana coast, Calcasieu Lake, nearby Cameron Parish, industrial infrastructure, and a history of intense Gulf landfalls. Storms can intensify late and bring surge, wind, flooding, and long recovery challenges.",
    localHazards: [
      { heading: "Calcasieu and Cameron Surge", body: "Surge can move through coastal waterways and low-lying routes before the strongest winds arrive." },
      { heading: "Wind and Industrial Outages", body: "Strong winds can damage homes, utilities, refineries, and industrial facilities, extending recovery timelines." },
      { heading: "Late Strengthening", body: "Warm Gulf water can allow storms to intensify close to landfall, so households should not wait for perfect forecast certainty." }
    ],
    evacuationFocus: [
      "Follow Calcasieu and Cameron parish evacuation guidance.",
      "Leave early from surge zones, mobile homes, and low-lying communities.",
      "Plan fuel, lodging, pets, medicine, and documents before traffic builds.",
      "Prepare for long outages and delayed return after major landfalls."
    ],
    localSearches: [
      "Lake Charles hurricane tracker",
      "Lake Charles storm surge",
      "Calcasieu Parish hurricane evacuation",
      "Lake Charles hurricane alerts",
      "Southwest Louisiana hurricane tracker"
    ],
    faqs: [
      { question: "Why is Lake Charles vulnerable to rapid hurricane changes?", answer: "Storms approaching southwest Louisiana can intensify over warm Gulf water, reducing decision time before landfall." },
      { question: "Should Lake Charles residents evacuate for surge risk?", answer: "Residents in official surge zones, mobile homes, or low-lying areas should follow parish orders and leave early when advised." },
      { question: "What should Lake Charles households prepare for after landfall?", answer: "Prepare for outages, fuel limits, debris, industrial disruptions, road closures, and delayed reentry." }
    ],
    officialResources: [
      { name: "Calcasieu Parish Emergency Preparedness", description: "Official Calcasieu Parish emergency alerts, evacuation, and preparedness information.", url: "https://www.calcasieu.gov/services/emergency-preparedness" },
      { name: "NWS Lake Charles", description: "Official National Weather Service alerts and forecasts for southwest Louisiana.", url: "https://www.weather.gov/lch/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 30.2266,
    lon: -93.2174
  },
  {
    slug: "outer-banks",
    name: "Outer Banks",
    stateCode: "NC",
    stateName: "North Carolina",
    region: "North Carolina barrier islands",
    risks: ["island access", "sound-side flooding", "ocean overwash", "evacuation timing"],
    nearbyCounties: ["Dare", "Hyde", "Currituck"],
    planningNote:
      "Outer Banks residents and visitors should decide early because ferry, bridge, NC-12, overwash, and sound-side flooding can limit safe travel before peak conditions.",
    overview:
      "The Outer Banks face a distinct hurricane risk because narrow barrier islands can be cut by ocean overwash, sound-side flooding, bridge restrictions, and ferry disruptions. Visitors and residents often receive different evacuation timing, so official Dare, Hyde, and Currituck guidance matters.",
    localHazards: [
      { heading: "NC-12 and Bridge Access", body: "Overwash, sand, standing water, and wind can close key routes before and after a storm." },
      { heading: "Sound-Side Flooding", body: "Wind direction can push water across the sounds even after ocean conditions change." },
      { heading: "Visitor Evacuation Timing", body: "Visitors may be told to leave earlier to reduce road pressure and preserve local resources." }
    ],
    evacuationFocus: [
      "Follow Dare, Hyde, or Currituck evacuation instructions for residents and visitors.",
      "Do not wait for visible severe weather before leaving barrier islands.",
      "Plan fuel, lodging, pets, medication, ferry or bridge access, and reentry delays.",
      "Monitor both ocean overwash and sound-side flooding alerts."
    ],
    localSearches: [
      "Outer Banks hurricane tracker",
      "Outer Banks evacuation",
      "Dare County hurricane alerts",
      "NC 12 hurricane overwash",
      "Outer Banks sound-side flooding"
    ],
    faqs: [
      { question: "Why do Outer Banks evacuations start early?", answer: "Barrier-island routes, bridges, ferries, and NC-12 can become limited by overwash, flooding, wind, and traffic before peak conditions." },
      { question: "Is sound-side flooding dangerous on the Outer Banks?", answer: "Yes. Wind can push water into the sounds and flood areas that may not face the highest ocean surge." },
      { question: "Should visitors watch different instructions?", answer: "Yes. Visitor evacuation orders may come earlier than resident orders, so check county guidance directly." }
    ],
    officialResources: [
      { name: "Dare County Emergency Management", description: "Official Outer Banks evacuation, alerts, and emergency management information for Dare County.", url: "https://www.darenc.gov/departments/emergency-management" },
      { name: "NWS Newport/Morehead City", description: "Official National Weather Service alerts and forecasts for the Outer Banks.", url: "https://www.weather.gov/mhx/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 35.5585,
    lon: -75.4665
  },
  {
    slug: "myrtle-beach",
    name: "Myrtle Beach",
    stateCode: "SC",
    stateName: "South Carolina",
    region: "Grand Strand and Horry County coast",
    risks: ["coastal surge", "tourist evacuation", "river flooding", "power outages"],
    nearbyCounties: ["Horry", "Georgetown", "Brunswick"],
    planningNote:
      "Myrtle Beach households and visitors should watch Horry County evacuation zones, coastal surge, river flooding, and hotel or rental travel timing together.",
    overview:
      "Myrtle Beach hurricane risk includes Grand Strand surge, beach erosion, tourist evacuation pressure, inland river flooding, and power outages across Horry County. Visitors may not know local zones, so clear official guidance matters during every tropical threat.",
    localHazards: [
      { heading: "Grand Strand Surge", body: "Oceanfront, low-lying, and marsh-adjacent areas can face surge, erosion, and road flooding." },
      { heading: "Tourist Evacuation Pressure", body: "Hotels, rentals, traffic, fuel, and unfamiliar routes can complicate evacuation decisions for visitors." },
      { heading: "River Flooding After Landfall", body: "Flooding can continue after a storm moves inland as rainfall drains through regional rivers." }
    ],
    evacuationFocus: [
      "Check Horry County evacuation zones and South Carolina emergency guidance.",
      "Visitors should confirm hotel, rental, and route instructions early.",
      "Plan around coastal routes, fuel, pets, medicine, and lodging.",
      "Do not return until local officials say roads and utilities are safe."
    ],
    localSearches: [
      "Myrtle Beach hurricane tracker",
      "Myrtle Beach evacuation zone",
      "Horry County hurricane alerts",
      "Grand Strand storm surge",
      "Myrtle Beach hurricane evacuation"
    ],
    faqs: [
      { question: "Do Myrtle Beach visitors need to follow evacuation orders?", answer: "Yes. Visitors should follow official Horry County and South Carolina guidance and leave early when visitor evacuation is ordered." },
      { question: "Can Myrtle Beach flood after a hurricane passes?", answer: "Yes. River and rainfall flooding can continue after landfall, especially when water drains through the region." },
      { question: "What should Myrtle Beach residents check first?", answer: "Check evacuation zones, NWS alerts, hotel or rental guidance if applicable, and county emergency management updates." }
    ],
    officialResources: [
      { name: "Horry County Emergency Management", description: "Official Horry County emergency alerts, evacuation, and hurricane preparedness information.", url: "https://www.horrycountysc.gov/departments/emergency-management/" },
      { name: "NWS Wilmington NC", description: "Official National Weather Service alerts and forecasts for the Grand Strand.", url: "https://www.weather.gov/ilm/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 33.6891,
    lon: -78.8867
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    stateCode: "GA",
    stateName: "Georgia",
    region: "Georgia Golden Isles",
    risks: ["coastal surge", "marsh flooding", "island access", "tree damage"],
    nearbyCounties: ["Glynn", "Camden", "McIntosh"],
    planningNote:
      "Brunswick and Golden Isles residents should monitor Glynn County evacuation zones, marsh flooding, island access, and tree-related outage risk before coastal storms arrive.",
    overview:
      "Brunswick hurricane risk is shaped by the Golden Isles, tidal marshes, low-lying roads, causeways, and tree damage across Glynn County. Storms tracking near Florida or the Southeast coast can bring surge, rain, tornado warnings, and long outages.",
    localHazards: [
      { heading: "Golden Isles Access", body: "St. Simons, Sea Island, Jekyll Island, and nearby communities rely on routes that can be limited by flooding, wind, and official orders." },
      { heading: "Marsh and Tidal Flooding", body: "Tidal creeks and marshes can flood roads and neighborhoods when surge, tide, and rainfall overlap." },
      { heading: "Trees and Utility Damage", body: "Wind and saturated soil can bring down trees and lines across coastal Georgia." }
    ],
    evacuationFocus: [
      "Check Glynn County evacuation and reentry guidance.",
      "Leave early from barrier islands, mobile homes, and surge-prone areas.",
      "Plan around causeways, fuel, lodging, pets, medicine, and documents.",
      "Prepare for outages, debris, road closures, and delayed return."
    ],
    localSearches: [
      "Brunswick GA hurricane tracker",
      "Glynn County hurricane evacuation",
      "Golden Isles storm surge",
      "Brunswick hurricane alerts",
      "St Simons hurricane evacuation"
    ],
    faqs: [
      { question: "Is Brunswick vulnerable to storm surge?", answer: "Yes. Brunswick, marsh communities, and the Golden Isles can face surge and tidal flooding during coastal tropical systems." },
      { question: "Why do causeways matter for Brunswick evacuations?", answer: "Barrier-island and coastal routes can be affected by flooding, wind, traffic, and official restrictions." },
      { question: "Can Brunswick have impacts without a direct landfall?", answer: "Yes. Nearby tracks can still bring surge, rain, tornado warnings, tree damage, and outages." }
    ],
    officialResources: [
      { name: "Glynn County Emergency Management", description: "Official Glynn County emergency alerts, evacuation, and preparedness information.", url: "https://www.glynncounty.org/government/departments/emergency-management-agency-ema" },
      { name: "NWS Jacksonville", description: "Official National Weather Service alerts and forecasts for coastal Georgia.", url: "https://www.weather.gov/jax/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 31.1499,
    lon: -81.4915
  },
  {
    slug: "gulf-shores",
    name: "Gulf Shores",
    stateCode: "AL",
    stateName: "Alabama",
    region: "Alabama beach communities",
    risks: ["beach surge", "tourist evacuation", "bridge access", "tornado bands"],
    nearbyCounties: ["Baldwin", "Mobile", "Escambia"],
    planningNote:
      "Gulf Shores residents and visitors should watch Baldwin County evacuation guidance, beach surge, bridge access, tornado bands, and post-storm reentry rules.",
    overview:
      "Gulf Shores hurricane risk includes direct Gulf surge, beach erosion, tourist evacuation pressure, bridge and causeway access, tornado warnings, and outages across coastal Baldwin County. Visitors should treat official evacuation guidance as a travel deadline, not a suggestion.",
    localHazards: [
      { heading: "Beach Surge and Erosion", body: "Gulf-front properties and low roads can face surge, wave action, and overwash before peak wind." },
      { heading: "Visitor and Rental Evacuation", body: "Hotels, rentals, pets, fuel, and long drives inland can make late departures difficult." },
      { heading: "Bridge and Reentry Constraints", body: "Access and reentry may be controlled after a storm because of flooding, debris, utilities, and rescue operations." }
    ],
    evacuationFocus: [
      "Check Baldwin County evacuation and shelter guidance.",
      "Visitors should leave early when tourist evacuation is advised.",
      "Plan fuel, lodging, pets, medication, documents, and route timing.",
      "Wait for official reentry clearance before returning to beach areas."
    ],
    localSearches: [
      "Gulf Shores hurricane tracker",
      "Baldwin County hurricane evacuation",
      "Gulf Shores storm surge",
      "Alabama beach hurricane alerts",
      "Gulf Shores hurricane evacuation"
    ],
    faqs: [
      { question: "Should Gulf Shores visitors evacuate early?", answer: "Yes. Visitors should follow Baldwin County guidance and leave early when advised because beach routes and lodging can become constrained." },
      { question: "Is Gulf Shores storm surge risk high?", answer: "Yes. Gulf-front and low-lying beach areas can face dangerous surge and wave action." },
      { question: "Can Gulf Shores get tornado warnings during hurricanes?", answer: "Yes. Tropical rain bands can produce quick tornado warnings along the Alabama coast." }
    ],
    officialResources: [
      { name: "Baldwin County Emergency Management Agency", description: "Official Baldwin County alerts, evacuation, shelter, and hurricane preparedness information.", url: "https://baldwincountyal.gov/departments/EMA" },
      { name: "NWS Mobile/Pensacola", description: "Official National Weather Service alerts and forecasts for the Alabama Gulf Coast.", url: "https://www.weather.gov/mob/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 30.246,
    lon: -87.7008
  },
  {
    slug: "gulfport",
    name: "Gulfport",
    stateCode: "MS",
    stateName: "Mississippi",
    region: "Mississippi Gulf Coast",
    risks: ["Gulf surge", "low coastal roads", "port disruption", "outages"],
    nearbyCounties: ["Harrison", "Hancock", "Jackson"],
    planningNote:
      "Gulfport residents should prepare for Gulf surge, port and waterfront exposure, low coastal roads, and outages before central Gulf storms approach.",
    overview:
      "Gulfport hurricane risk is defined by open Gulf exposure, low elevation, port and waterfront infrastructure, and storm histories that show how surge can dominate coastal impacts. Residents should follow Harrison County guidance and prepare for disruption beyond landfall day.",
    localHazards: [
      { heading: "Open Gulf Surge", body: "Gulfport's shoreline and low roads can flood from surge and wave action when central Gulf storms push water inland." },
      { heading: "Port and Waterfront Disruption", body: "Industrial, port, marina, and waterfront areas can face debris, access limits, and recovery delays." },
      { heading: "Outages and Heat", body: "Power, water, fuel, and communication problems may continue for days after a severe storm." }
    ],
    evacuationFocus: [
      "Check Harrison County evacuation instructions and shelters.",
      "Leave early from surge zones, mobile homes, and low coastal roads.",
      "Move vehicles away from waterfront and flood-prone areas when advised.",
      "Prepare documents, prescriptions, chargers, cash, pets, and cleanup records."
    ],
    localSearches: [
      "Gulfport hurricane tracker",
      "Gulfport storm surge",
      "Harrison County hurricane evacuation",
      "Mississippi Gulf Coast hurricane alerts",
      "Gulfport hurricane recovery"
    ],
    faqs: [
      { question: "Is Gulfport vulnerable to storm surge?", answer: "Yes. Gulfport sits on a low Gulf-facing coast where surge can move across roads and waterfront areas." },
      { question: "Should Gulfport mobile-home residents leave early?", answer: "Yes. Mobile homes are vulnerable to wind and flooding, so residents should follow evacuation guidance early." },
      { question: "What should Gulfport residents prepare for after landfall?", answer: "Prepare for outages, debris, limited fuel, reentry delays, insurance documentation, and cleanup hazards." }
    ],
    officialResources: [
      { name: "Harrison County Emergency Management", description: "Official Harrison County emergency alerts, evacuation, shelter, and hurricane preparedness information.", url: "https://harrisoncountyms.gov/departments/emergency-management-agency/" },
      { name: "NWS New Orleans/Baton Rouge", description: "Official National Weather Service alerts and forecasts for coastal Mississippi.", url: "https://www.weather.gov/lix/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 30.3674,
    lon: -89.0928
  },
  {
    slug: "norfolk",
    name: "Norfolk",
    stateCode: "VA",
    stateName: "Virginia",
    region: "Hampton Roads and Chesapeake Bay",
    risks: ["tidal flooding", "naval base disruption", "bridge-tunnel access", "power outages"],
    nearbyCounties: ["Norfolk", "Virginia Beach", "Chesapeake", "Hampton"],
    planningNote:
      "Norfolk residents should track tidal flooding, Chesapeake Bay water levels, bridge-tunnel access, and power outages during Mid-Atlantic tropical threats.",
    overview:
      "Norfolk hurricane risk comes from tidal flooding, Chesapeake Bay and Elizabeth River water levels, dense waterfront development, bridge-tunnel constraints, and power outages across Hampton Roads. Tropical storms can be disruptive even after weakening below hurricane strength.",
    localHazards: [
      { heading: "Tidal and River Flooding", body: "Norfolk can flood when wind, tide, surge, and rainfall raise water around the bay, rivers, and low streets." },
      { heading: "Bridge-Tunnel Constraints", body: "Travel around Hampton Roads depends on crossings that can be affected by wind, flooding, traffic, and official restrictions." },
      { heading: "Outages and Essential Services", body: "Tree damage, flooded roads, and utility impacts can disrupt commuting, medical access, and communication." }
    ],
    evacuationFocus: [
      "Check Norfolk and Virginia evacuation zone guidance.",
      "Plan around bridge-tunnel restrictions and alternate routes.",
      "Move vehicles from flood-prone streets when local guidance supports it.",
      "Prepare chargers, medicine, documents, pets, radio, and safe generator rules."
    ],
    localSearches: [
      "Norfolk hurricane tracker",
      "Norfolk tidal flooding",
      "Hampton Roads hurricane alerts",
      "Norfolk evacuation zone",
      "Chesapeake Bay storm surge Norfolk"
    ],
    faqs: [
      { question: "Why does Norfolk flood during tropical systems?", answer: "Norfolk can flood from tide, surge, rainfall, river levels, and wind direction, especially in low-lying waterfront areas." },
      { question: "Do bridge-tunnels affect Norfolk hurricane planning?", answer: "Yes. Crossings can be restricted by wind, flooding, traffic, and emergency operations, so route planning should happen early." },
      { question: "Can a tropical storm still affect Norfolk?", answer: "Yes. Tropical storms can bring tidal flooding, tornado warnings, heavy rain, tree damage, and outages." }
    ],
    officialResources: [
      { name: "Norfolk Emergency Preparedness", description: "Official Norfolk emergency preparedness, alerts, evacuation, and storm information.", url: "https://www.norfolk.gov/1463/Hurricanes-Noreasters" },
      { name: "NWS Wakefield", description: "Official National Weather Service alerts and forecasts for Hampton Roads.", url: "https://www.weather.gov/akq/" },
      { name: "National Hurricane Center", description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.", url: "https://www.nhc.noaa.gov/" }
    ],
    lat: 36.8508,
    lon: -76.2859
  },
  {
    slug: "pensacola",
    name: "Pensacola",
    stateCode: "FL",
    stateName: "Florida",
    region: "Western Florida Panhandle and Escambia Bay",
    risks: ["Gulf surge", "bay flooding", "bridge closures", "tornado bands"],
    nearbyCounties: ["Escambia", "Santa Rosa", "Baldwin"],
    planningNote:
      "Pensacola residents should watch Escambia County hurricane preparedness, Gulf and bay flooding, bridge access, tornado bands, and power outage planning together.",
    overview:
      "Pensacola hurricane risk comes from Gulf surge, Escambia Bay and Pensacola Bay water levels, barrier-island exposure, bridge constraints, tornado-producing bands, and outages across the western Panhandle. Storms moving toward the central Gulf can shift local impacts quickly, so households should rely on official county, state, and NWS guidance instead of waiting for the forecast cone to feel certain.",
    localHazards: [
      {
        heading: "Gulf and Bay Flooding",
        body:
          "Pensacola Beach, Perdido Key, bayfront neighborhoods, and low roads can flood when storm surge, tide, rainfall, and drainage limits overlap."
      },
      {
        heading: "Bridge and Island Access",
        body:
          "Beach bridges and coastal routes can become restricted by wind, water, traffic, debris, or official emergency operations before the strongest weather arrives."
      },
      {
        heading: "Tornado Bands and Outages",
        body:
          "Outer rain bands can produce quick tornado warnings, tree damage, and outages across Escambia and Santa Rosa counties before or after closest approach."
      }
    ],
    evacuationFocus: [
      "Review Escambia hurricane preparedness guidance and local shelter updates.",
      "Leave early from barrier islands, mobile homes, surge zones, or medically dependent households.",
      "Plan alternate routes in case bridges or coastal roads are restricted.",
      "Prepare chargers, prescriptions, documents, pet supplies, radio, and safe generator placement."
    ],
    localSearches: [
      "Pensacola hurricane tracker",
      "Pensacola Beach evacuation",
      "Escambia County hurricane alerts",
      "Pensacola storm surge",
      "Pensacola Bay hurricane flooding"
    ],
    faqs: [
      {
        question: "Is Pensacola vulnerable to both Gulf and bay flooding?",
        answer:
          "Yes. Pensacola can flood from Gulf surge, bay water levels, tide, rainfall, and drainage limits depending on storm track and wind direction."
      },
      {
        question: "Why do bridges matter during a Pensacola hurricane?",
        answer:
          "Beach and bay routes can be affected by wind, flooding, traffic, debris, and emergency restrictions, so route timing should be part of the plan."
      },
      {
        question: "Can Pensacola get tornado warnings during tropical storms?",
        answer:
          "Yes. Tropical rain bands can produce fast-moving tornado warnings across the western Florida Panhandle even when the storm center is offshore."
      }
    ],
    officialResources: [
      {
        name: "Florida Health Escambia Hurricane Preparedness",
        description: "Official Escambia County public health hurricane preparedness information and emergency planning resources.",
        url: "https://escambia.floridahealth.gov/programs-and-services/public-health-preparedness/hurricane-preparedness/"
      },
      {
        name: "NWS Mobile/Pensacola",
        description: "Official National Weather Service alerts and forecasts for Pensacola and the western Panhandle.",
        url: "https://www.weather.gov/mob/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 30.4213,
    lon: -87.2169
  },
  {
    slug: "brownsville",
    name: "Brownsville",
    stateCode: "TX",
    stateName: "Texas",
    region: "Lower Texas Coast and Rio Grande Valley",
    risks: ["Gulf surge", "Rio Grande Valley flooding", "fast intensification", "long travel distances"],
    nearbyCounties: ["Cameron", "Willacy", "Hidalgo"],
    planningNote:
      "Brownsville households should plan around Cameron County emergency resources, Gulf surge, Rio Grande Valley flooding, fast Gulf intensification, and long travel times to safer shelter.",
    overview:
      "Brownsville hurricane risk is shaped by the lower Texas coast, Boca Chica and South Padre Island exposure, Rio Grande Valley rainfall, and the possibility of fast intensification in the western Gulf. Residents may need to make decisions with limited lead time, especially for mobile homes, coastal communities, and households needing transportation, medical support, cooling, or power-dependent care.",
    localHazards: [
      {
        heading: "Lower Coast Surge",
        body:
          "Boca Chica, South Padre Island, low coastal roads, and nearby bay areas can face surge and overwash when western Gulf storms push water inland."
      },
      {
        heading: "Valley Rainfall Flooding",
        body:
          "Slow or wet tropical systems can flood roads and neighborhoods across Cameron, Willacy, and Hidalgo counties even away from the immediate shoreline."
      },
      {
        heading: "Distance and Heat After Landfall",
        body:
          "Evacuation destinations, fuel, cooling, power restoration, and medical access can be challenging across the Rio Grande Valley after a tropical cyclone."
      }
    ],
    evacuationFocus: [
      "Check Cameron County emergency resources and local city updates for your location.",
      "Leave early from mobile homes, coastal areas, flood-prone neighborhoods, or medically vulnerable households.",
      "Plan fuel, inland lodging, pets, prescriptions, documents, and route timing.",
      "Prepare for heat, outages, limited services, and communication disruption after landfall."
    ],
    localSearches: [
      "Brownsville hurricane tracker",
      "Cameron County hurricane evacuation",
      "Brownsville storm surge",
      "Rio Grande Valley hurricane alerts",
      "South Padre Island hurricane evacuation"
    ],
    faqs: [
      {
        question: "Can Brownsville hurricanes intensify quickly?",
        answer:
          "Yes. Western Gulf storms can strengthen quickly, so Brownsville residents should follow official guidance and prepare before forecasts become urgent."
      },
      {
        question: "Does Brownsville face storm surge risk?",
        answer:
          "Yes. Coastal Cameron County, Boca Chica, South Padre Island, and bay areas can face surge and overwash during Gulf tropical systems."
      },
      {
        question: "What should Brownsville residents prepare for after landfall?",
        answer:
          "Prepare for heat, outages, flooded roads, limited fuel, medical access issues, communication disruption, and delayed services after landfall."
      }
    ],
    officialResources: [
      {
        name: "Cameron County Emergency Resources",
        description: "Official Cameron County emergency preparedness, evacuation route, shelter, and disaster resource information.",
        url: "https://www.cameroncounty911.com/emergency-resources/"
      },
      {
        name: "NWS Brownsville/Rio Grande Valley",
        description: "Official National Weather Service alerts and forecasts for Brownsville and the Rio Grande Valley.",
        url: "https://www.weather.gov/bro/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 25.9017,
    lon: -97.4975
  },
  {
    slug: "baton-rouge",
    name: "Baton Rouge",
    stateCode: "LA",
    stateName: "Louisiana",
    region: "Capital Area and lower Mississippi River",
    risks: ["inland wind", "river and bayou flooding", "evacuation traffic", "extended outages"],
    nearbyCounties: ["East Baton Rouge", "Ascension", "Livingston", "Iberville"],
    planningNote:
      "Baton Rouge residents should prepare for inland wind, river and bayou flooding, evacuee traffic, power outages, and medical or cooling needs as Gulf storms move into Louisiana.",
    overview:
      "Baton Rouge hurricane risk is more inland than New Orleans, but it can still be serious. Gulf storms moving through Louisiana can bring damaging wind, heavy rainfall, river and bayou flooding, tornado warnings, long outages, and major traffic from coastal evacuations. Household planning should include sheltering safely, avoiding flooded roads, and preparing for heat, medicine, communication, and power loss after the storm.",
    localHazards: [
      {
        heading: "Inland Wind and Trees",
        body:
          "Baton Rouge can see damaging wind after landfall, especially when saturated soil and tree cover increase outage, blocked-road, and debris risk."
      },
      {
        heading: "River, Bayou, and Street Flooding",
        body:
          "Heavy rain can raise bayous, drainage channels, and low roads across the Capital Area even when coastal storm surge is not the main local hazard."
      },
      {
        heading: "Evacuation Traffic and Shelters",
        body:
          "Traffic from southeast Louisiana and the coast can affect fuel, lodging, shelter capacity, work schedules, and route timing before landfall."
      }
    ],
    evacuationFocus: [
      "Check East Baton Rouge emergency updates and NWS flood alerts.",
      "Avoid unnecessary evacuation unless officials advise it or household risk requires it.",
      "Prepare for outages with cooling, medicine, chargers, food safety, and safe generator placement.",
      "Do not drive through flooded streets, bayou crossings, or blocked roads."
    ],
    localSearches: [
      "Baton Rouge hurricane tracker",
      "Baton Rouge hurricane power outage",
      "East Baton Rouge hurricane alerts",
      "Baton Rouge flood warning",
      "Louisiana hurricane evacuation traffic"
    ],
    faqs: [
      {
        question: "Does Baton Rouge need to worry about hurricanes inland?",
        answer:
          "Yes. Baton Rouge can face damaging wind, flooding rain, tornado warnings, traffic disruption, and long outages from Louisiana hurricane landfalls."
      },
      {
        question: "Should Baton Rouge residents evacuate for coastal surge?",
        answer:
          "Most Baton Rouge residents are not evacuating for coastal surge, but they should follow official guidance if flooding, mobile-home risk, medical needs, or local orders apply."
      },
      {
        question: "What is the biggest Baton Rouge hurricane preparation issue?",
        answer:
          "Power outages, tree damage, flooded roads, heat, medicine, communication, and safe generator use are often the most practical household concerns."
      }
    ],
    officialResources: [
      {
        name: "East Baton Rouge Homeland Security and Emergency Preparedness",
        description: "Official East Baton Rouge emergency preparedness, response, warning, and disaster planning information.",
        url: "https://city.brla.gov/dept/oep/default.asp"
      },
      {
        name: "NWS New Orleans/Baton Rouge",
        description: "Official National Weather Service alerts and forecasts for Baton Rouge and southeast Louisiana.",
        url: "https://www.weather.gov/lix/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 30.4515,
    lon: -91.1871
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    stateCode: "FL",
    stateName: "Florida",
    region: "Pinellas County and Tampa Bay beaches",
    risks: ["Tampa Bay surge", "barrier-island evacuation", "bridge access", "visitor displacement"],
    nearbyCounties: ["Pinellas", "Hillsborough", "Pasco", "Manatee"],
    planningNote:
      "Clearwater residents and visitors should track Pinellas County emergency information, beach and bay surge, bridge access, and hotel or rental instructions before Tampa Bay threats become urgent.",
    overview:
      "Clearwater hurricane risk combines Gulf beach exposure, Tampa Bay surge, barrier-island evacuation timing, bridge routes, high-rise condo planning, and visitor travel pressure. A storm passing near the west coast of Florida can push water into both beach communities and bay-facing neighborhoods, making official zone guidance more useful than distance from the forecast cone.",
    localHazards: [
      {
        heading: "Beach and Bay Surge",
        body:
          "Clearwater Beach, Sand Key, low coastal roads, and bay-side neighborhoods can face surge and flooding from different wind directions during the same storm."
      },
      {
        heading: "Bridge and Causeway Timing",
        body:
          "Access to beach communities depends on bridges and causeways that can be affected by wind, flooding, traffic, and official restrictions before peak conditions."
      },
      {
        heading: "Visitors, Condos, and Garages",
        body:
          "Hotels, rentals, high-rise condos, elevators, parking garages, and unfamiliar routes can complicate evacuation, shelter, and reentry decisions."
      }
    ],
    evacuationFocus: [
      "Check Pinellas County emergency information and evacuation zones for your address.",
      "Visitors should confirm hotel, rental, airline, and route plans early.",
      "Plan bridge timing before coastal roads, wind, or traffic reduce options.",
      "Prepare for outages with chargers, medicine, documents, pet supplies, and safe generator rules."
    ],
    localSearches: [
      "Clearwater hurricane tracker",
      "Clearwater Beach evacuation",
      "Pinellas County hurricane zone",
      "Clearwater storm surge",
      "Tampa Bay hurricane alerts"
    ],
    faqs: [
      {
        question: "Does Clearwater have both Gulf and Tampa Bay hurricane risk?",
        answer:
          "Yes. Clearwater can face Gulf beach surge, bay flooding, bridge constraints, wind, rain, and outages depending on storm track and wind direction."
      },
      {
        question: "Should Clearwater Beach visitors leave early?",
        answer:
          "Visitors should follow Pinellas County and local guidance and leave early when advised because beach routes, hotels, fuel, and flights can become constrained."
      },
      {
        question: "Is a high-rise condo always safe during a Clearwater hurricane?",
        answer:
          "Not always. Wind, glass, elevator outages, garage flooding, water pressure, and building-specific rules should be part of the decision."
      }
    ],
    officialResources: [
      {
        name: "Pinellas County Emergency Information",
        description: "Official Pinellas County evacuation zones, shelters, alerts, and Tampa Bay hurricane preparedness resources.",
        url: "https://pinellas.gov/emergency-information/"
      },
      {
        name: "NWS Tampa Bay",
        description: "Official National Weather Service alerts and forecasts for Clearwater and Tampa Bay.",
        url: "https://www.weather.gov/tbw/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 27.9659,
    lon: -82.8001
  },
  {
    slug: "morehead-city",
    name: "Morehead City",
    stateCode: "NC",
    stateName: "North Carolina",
    region: "Crystal Coast and Carteret County",
    risks: ["sound-side flooding", "barrier-island access", "coastal surge", "marine hazards"],
    nearbyCounties: ["Carteret", "Craven", "Pamlico", "Onslow"],
    planningNote:
      "Morehead City residents should watch Crystal Coast water levels, sound-side flooding, barrier-island access, marine conditions, and NWS Newport/Morehead City alerts together.",
    overview:
      "Morehead City hurricane risk is shaped by Bogue Sound, nearby barrier islands, marina and port exposure, coastal surge, river and sound-side flooding, and road access across Carteret County. Tropical systems affecting eastern North Carolina can bring water impacts before and after closest approach, so residents should combine local emergency resources with NWS Newport/Morehead City alerts.",
    localHazards: [
      {
        heading: "Sound-Side and Coastal Flooding",
        body:
          "Wind direction can push water into Bogue Sound, low roads, marinas, and waterfront neighborhoods even when the strongest ocean surf is elsewhere."
      },
      {
        heading: "Barrier-Island and Bridge Access",
        body:
          "Atlantic Beach, Emerald Isle, and nearby coastal routes can be affected by overwash, bridge restrictions, evacuation timing, and delayed reentry."
      },
      {
        heading: "Marine and Port Hazards",
        body:
          "Boat owners, waterfront businesses, and port users should prepare for surge, debris, dock damage, dangerous seas, and access limits before conditions worsen."
      }
    ],
    evacuationFocus: [
      "Check Morehead City and Carteret County emergency resources before a watch becomes urgent.",
      "Plan around bridges, barrier-island routes, low roads, boats, pets, and medicine.",
      "Move vehicles and marine equipment away from flood-prone waterfront areas when advised.",
      "Prepare for outages, road closures, delayed reentry, and changing sound-side water levels."
    ],
    localSearches: [
      "Morehead City hurricane tracker",
      "Carteret County hurricane alerts",
      "Morehead City storm surge",
      "Crystal Coast hurricane evacuation",
      "NWS Newport Morehead City hurricane"
    ],
    faqs: [
      {
        question: "Why does sound-side flooding matter in Morehead City?",
        answer:
          "Wind direction can push water into sounds, canals, marinas, and low roads, so water impacts may differ from the ocean-side surf forecast."
      },
      {
        question: "Do Morehead City residents need to watch barrier-island access?",
        answer:
          "Yes. Nearby beaches and islands depend on bridges and low roads that can be affected by overwash, flooding, evacuation orders, and reentry controls."
      },
      {
        question: "Which weather office covers Morehead City hurricane alerts?",
        answer:
          "Morehead City is covered by NWS Newport/Morehead City, which issues local tropical, coastal flood, wind, and marine hazard information."
      }
    ],
    officialResources: [
      {
        name: "Morehead City Emergency Resources",
        description: "Official Morehead City emergency resource information for residents, visitors, businesses, and storm planning.",
        url: "https://www.moreheadcitync.gov/275/Resources"
      },
      {
        name: "NWS Newport/Morehead City",
        description: "Official National Weather Service alerts and forecasts for Morehead City and eastern North Carolina.",
        url: "https://www.weather.gov/mhx/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 34.7229,
    lon: -76.726
  },
  {
    slug: "naples",
    name: "Naples",
    stateCode: "FL",
    stateName: "Florida",
    region: "Southwest Florida Gulf Coast",
    risks: ["Gulf storm surge", "canal and bay flooding", "evacuation route congestion", "extended power outages"],
    nearbyCounties: ["Collier", "Lee", "Hendry", "Monroe"],
    planningNote:
      "Naples households should use official Collier County evacuation zones, NWS Miami alerts, and NHC advisories to compare Gulf surge, canal flooding, road timing, and household needs.",
    overview:
      "Naples hurricane risk is shaped by the shallow Gulf shelf, low coastal neighborhoods, bays, canals, and north-south routes across Collier County. This local tracker page points residents toward official evacuation information, current weather alerts, live storm context, radar, outage planning, and household decision tools without replacing local emergency instructions.",
    localHazards: [
      {
        heading: "Gulf Surge and Canal Water Levels",
        body:
          "Naples, Marco Island, and nearby coastal neighborhoods can see water rise through bays, canals, and low roads. Use official evacuation-zone maps and local emergency updates for address-level decisions."
      },
      {
        heading: "Road Timing and Shelter Planning",
        body:
          "US-41, I-75, bridges, and causeways can become more difficult as watches, warnings, or local evacuation orders expand. Households with pets, medical needs, or transportation limits should monitor official guidance early."
      },
      {
        heading: "Outages, Heat, and Recovery Needs",
        body:
          "Southwest Florida storms can leave debris, heat, limited fuel, and utility outages after the strongest weather exits. Charging, cooling, medication, food safety, and generator safety plans should be prepared before conditions worsen."
      }
    ],
    evacuationFocus: [
      "Check Collier County evacuation zones and emergency updates for your exact address.",
      "Compare NWS Miami alerts with the latest National Hurricane Center advisory context.",
      "Use local roads, bridges, pets, medicine, and mobility needs to decide how much time your household needs.",
      "Prepare outage, cooling, document, communication, and generator safety plans before peak impacts."
    ],
    localSearches: [
      "Naples hurricane tracker",
      "Naples storm surge map",
      "Collier County evacuation zones",
      "Naples Florida hurricane alerts",
      "NWS Miami Naples hurricane"
    ],
    faqs: [
      {
        question: "Is this Naples hurricane tracker an official evacuation source?",
        answer:
          "No. This page organizes Naples hurricane context and links to tools, but official evacuation zones, shelters, road closures, and local orders come from Collier County, NWS Miami, and other public agencies."
      },
      {
        question: "Why is storm surge important for Naples?",
        answer:
          "Naples sits along a low Gulf coast with bays, canals, and nearby islands, so surge can affect roads, homes, marinas, and access points even when the strongest wind is not centered over the city."
      },
      {
        question: "Which weather office covers Naples hurricane alerts?",
        answer:
          "Naples is covered by NWS Miami-South Florida for local weather alerts, while the National Hurricane Center provides official tropical cyclone advisories and forecast cones."
      }
    ],
    officialResources: [
      {
        name: "Collier County Emergency Management",
        description: "Official Collier County hurricane preparedness, evacuation, shelter, alert, and recovery information for Naples residents.",
        url: "https://www.colliercountyfl.gov/government/county-manager-operations/divisions/emergency-management"
      },
      {
        name: "NWS Miami-South Florida",
        description: "Official National Weather Service alerts and forecasts for Naples, Collier County, and South Florida.",
        url: "https://www.weather.gov/mfl/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 26.142,
    lon: -81.7948
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    stateCode: "FL",
    stateName: "Florida",
    region: "Sarasota Bay and Florida Gulf Coast",
    risks: ["bay and barrier-island surge", "bridge access", "freshwater flooding", "outage recovery"],
    nearbyCounties: ["Sarasota", "Manatee", "Charlotte", "DeSoto"],
    planningNote:
      "Sarasota residents should use official Sarasota County evacuation levels, NWS Tampa Bay alerts, and NHC advisories to understand bayfront, barrier-island, rain, and outage risk.",
    overview:
      "Sarasota hurricane risk is shaped by Sarasota Bay, barrier islands such as Siesta Key and Lido Key, low coastal roads, and inland neighborhoods that can flood during tropical rain bands. This page gives Sarasota residents a local search landing page for hurricane tracker queries while pointing decisions back to official county, NWS, and NHC sources.",
    localHazards: [
      {
        heading: "Bayfront and Barrier-Island Water Risk",
        body:
          "Sarasota Bay and nearby keys can experience dangerous water levels when Gulf winds push water inland. Official evacuation levels and county alerts should guide address-level decisions."
      },
      {
        heading: "Bridge and Route Constraints",
        body:
          "Barrier-island access, bridge timing, shelter availability, and local road conditions can change before the worst weather arrives. Check official Sarasota County updates before relying on any route."
      },
      {
        heading: "Rain, Outages, and Reentry",
        body:
          "Slow tropical systems can bring inland flooding, tornado warnings, debris, heat, and utility outages. Household plans should include charging, cooling, communication, medication, and safe generator placement."
      }
    ],
    evacuationFocus: [
      "Check Sarasota County evacuation levels and emergency updates for your address.",
      "Compare NWS Tampa Bay alerts with the latest National Hurricane Center advisory.",
      "Use bridge access, pets, medicine, mobility, and shelter needs to estimate household timing.",
      "Keep outage, communication, document, and family contact plans ready before conditions worsen."
    ],
    localSearches: [
      "Sarasota hurricane tracker",
      "Sarasota County evacuation zones",
      "Sarasota storm surge",
      "Siesta Key hurricane evacuation",
      "NWS Tampa Sarasota alerts"
    ],
    faqs: [
      {
        question: "Is this Sarasota hurricane tracker an official alert source?",
        answer:
          "No. HurricaneHub helps organize Sarasota hurricane context and related tools, but official evacuation levels, shelters, road closures, and emergency instructions come from Sarasota County and weather.gov."
      },
      {
        question: "Do Sarasota barrier islands need different hurricane planning?",
        answer:
          "Barrier islands and bayfront areas can face surge, bridge constraints, and local evacuation guidance earlier than inland neighborhoods, so residents should check official county evacuation levels."
      },
      {
        question: "Which weather office covers Sarasota hurricane alerts?",
        answer:
          "Sarasota is covered by NWS Tampa Bay for local alerts and forecasts, while the National Hurricane Center issues official tropical cyclone advisories."
      }
    ],
    officialResources: [
      {
        name: "Sarasota County Emergency Services",
        description: "Official Sarasota County emergency preparedness, evacuation, shelter, alert, and recovery information.",
        url: "https://www.scgov.net/government/emergency-services"
      },
      {
        name: "NWS Tampa Bay",
        description: "Official National Weather Service alerts and forecasts for Sarasota and the west-central Florida coast.",
        url: "https://www.weather.gov/tbw/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 27.3364,
    lon: -82.5307
  },
  {
    slug: "port-charlotte",
    name: "Port Charlotte",
    stateCode: "FL",
    stateName: "Florida",
    region: "Charlotte Harbor and Southwest Florida",
    risks: ["Charlotte Harbor surge", "river and canal flooding", "mobile home vulnerability", "power outages"],
    nearbyCounties: ["Charlotte", "Sarasota", "DeSoto", "Lee"],
    planningNote:
      "Port Charlotte residents should use official Charlotte County evacuation zones, NWS Tampa Bay alerts, and NHC advisories to compare harbor, river, housing, and outage risk.",
    overview:
      "Port Charlotte hurricane risk comes from Charlotte Harbor, the Peace River, canals, low roads, and neighborhoods that may face surge, rain flooding, wind damage, or long outages. This page gives searchers a local Port Charlotte hurricane tracker hub while keeping evacuation, shelter, and road decisions tied to official county and weather sources.",
    localHazards: [
      {
        heading: "Charlotte Harbor and Peace River Water",
        body:
          "Wind direction and rainfall can raise water around Charlotte Harbor, the Peace River, canals, and low roads. Use official evacuation zones and NWS alerts for local water-risk context."
      },
      {
        heading: "Housing and Neighborhood Exposure",
        body:
          "Mobile homes, older buildings, canal-side streets, and flood-prone neighborhoods may need earlier planning. County instructions and shelter information should guide household choices."
      },
      {
        heading: "Outage and Recovery Planning",
        body:
          "Trees, utility damage, heat, limited fuel, and debris can affect Port Charlotte after landfall. Safe generator placement, medication cooling, and communication backups belong in the plan."
      }
    ],
    evacuationFocus: [
      "Check Charlotte County evacuation zones and shelter information for your address.",
      "Compare NWS Tampa Bay alerts with National Hurricane Center storm context.",
      "Plan around canals, bridges, low roads, housing type, pets, medicine, and mobility needs.",
      "Prepare charging, cooling, documents, food safety, and safe generator placement before outages."
    ],
    localSearches: [
      "Port Charlotte hurricane tracker",
      "Charlotte County evacuation zones",
      "Port Charlotte storm surge",
      "Peace River flooding hurricane",
      "NWS Tampa Port Charlotte alerts"
    ],
    faqs: [
      {
        question: "Is this Port Charlotte hurricane tracker official?",
        answer:
          "No. This page helps organize Port Charlotte hurricane context, but official evacuation zones, shelter information, road closures, and emergency orders come from Charlotte County and weather.gov."
      },
      {
        question: "Does Port Charlotte need to worry about surge if it is not on the beach?",
        answer:
          "Yes. Charlotte Harbor, canals, and river-connected areas can bring water impacts inland from open beaches, especially when storm track and wind direction push water into the harbor."
      },
      {
        question: "Which weather office covers Port Charlotte hurricane alerts?",
        answer:
          "Port Charlotte is generally covered by NWS Tampa Bay for local weather alerts, while the National Hurricane Center provides official tropical cyclone advisories."
      }
    ],
    officialResources: [
      {
        name: "Charlotte County Emergency Management",
        description: "Official Charlotte County evacuation zones, alerts, shelter, preparedness, and recovery information for Port Charlotte.",
        url: "https://www.charlottecountyfl.gov/departments/public-safety/emergency-management/"
      },
      {
        name: "NWS Tampa Bay",
        description: "Official National Weather Service alerts and forecasts for Port Charlotte and the surrounding Southwest Florida area.",
        url: "https://www.weather.gov/tbw/"
      },
      {
        name: "National Hurricane Center",
        description: "Official NHC advisories, forecast cones, watches, warnings, and tropical cyclone updates.",
        url: "https://www.nhc.noaa.gov/"
      }
    ],
    lat: 26.9762,
    lon: -82.0906
  }

];

export function getCityBySlug(slug: string | undefined) {
  return hurricaneCities.find((city) => city.slug === slug);
}
