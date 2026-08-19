export type TopicPage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  intent: string;
  steps: Array<{ title: string; body: string; href: string; label: string }>;
  sections: Array<{ eyebrow: string; title: string; body: string; bullets: string[] }>;
  nextLinks: Array<{ name: string; href: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const topicPages: TopicPage[] = [
  {
    slug: "hurricane-landfall-forecast",
    title: "Hurricane Landfall Forecast | Track, Timing & Risk",
    shortTitle: "Landfall Forecast",
    description: "Understand the latest hurricane landfall forecast using the NHC track, cone, arrival timing, wind field, surge products, and local official alerts.",
    eyebrow: "Forecast interpretation",
    intro: "A hurricane landfall forecast estimates where and when the storm center may cross the coast, but it is not a single-point promise. Use the latest NHC track together with the cone, wind field, surge products, rainfall forecasts, and local alerts to understand the full risk.",
    primaryAction: { label: "Check current NHC storms", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read the hurricane path guide", href: "/hurricane-tracker/path/" },
    intent: "hurricane landfall forecast, where will the hurricane make landfall, hurricane arrival time",
    steps: [
      { title: "Check the Latest Advisory", body: "Start with the advisory time, current position, movement, intensity, and official forecast track. Older screenshots can be misleading after a forecast changes.", href: "/hurricane-tracker/live/", label: "Open live tracker" },
      { title: "Read the Uncertainty", body: "Use the full cone and forecast discussion instead of treating the center line or one model as an exact landfall location.", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", label: "Understand the cone" },
      { title: "Translate It Locally", body: "Check NWS alerts, evacuation zones, surge risk, rainfall, and county instructions for the location you care about.", href: "/alerts/", label: "Check local alerts" }
    ],
    sections: [
      { eyebrow: "Direct answer", title: "Where Will the Hurricane Make Landfall?", body: "The best current answer comes from the latest NHC forecast, but the likely crossing point can shift between advisories. Confidence is usually lower several days out and improves as observations and model agreement increase.", bullets: ["Latest NHC forecast position and valid time", "Cone of uncertainty, not only the center line", "Forecast discussion and model trends", "Local watches, warnings, and evacuation orders"] },
      { eyebrow: "Impact area", title: "Landfall Is Not the Edge of the Danger", body: "Wind, surge, rain, tornadoes, waves, and outages can occur far from the exact point where the center crosses the coast.", bullets: ["Onshore flow can drive surge away from the eye", "Rainfall flooding can peak inland", "Tornadoes often occur in outer rain bands", "Large storms spread wind across a wider area"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC storms, positions, forecast tracks, radar, and advisory times." },
      { name: "Hurricane Path Tracker", href: "/hurricane-tracker/path/", description: "Learn how forecast tracks change and how to read the cone." },
      { name: "Spaghetti Models", href: "/hurricane-tracker/spaghetti-models/", description: "Understand model spread without treating one run as an official forecast." },
      { name: "Storm Surge Map", href: "/hurricane-tracker/storm-surge-map/", description: "Separate coastal water risk from the forecast center track." },
      { name: "State Hurricane Trackers", href: "/tracker/", description: "Move from basin-scale forecast context to state alerts and local planning." }
    ],
    faqs: [
      { question: "Where will the hurricane make landfall?", answer: "Use the latest NHC forecast track and advisory discussion. The forecast point can change, so monitor the full cone and local alerts rather than relying on one exact location." },
      { question: "How accurate is a hurricane landfall forecast?", answer: "Accuracy generally improves as the storm approaches, but track, intensity, size, and impacts remain uncertain. Forecast errors are larger farther into the future." },
      { question: "Does landfall mean the eye will hit my city?", answer: "No. Landfall refers to the surface center crossing the coast. Dangerous wind, surge, rain, tornadoes, and waves can affect places far from the eye." },
      { question: "When should I act on a landfall forecast?", answer: "Follow official watches, warnings, evacuation orders, and local emergency guidance. Households with transport, medical, mobility, pet, or flood-zone constraints may need to act earlier." }
    ]
  },
  {
    slug: "tropical-storm-vs-hurricane",
    title: "Tropical Storm vs Hurricane | Wind, Risk & Warnings",
    shortTitle: "Tropical Storm vs Hurricane",
    description: "Compare a tropical storm vs hurricane by wind speed, forecast labels, warnings, surge, rainfall, tornado, and preparation decisions.",
    eyebrow: "Storm classification guide",
    intro: "A tropical storm has maximum sustained winds of 39 to 73 mph, while a hurricane has sustained winds of at least 74 mph. The label describes wind intensity near the circulation, not the full danger: either can cause life-threatening flooding, surge, tornadoes, and outages.",
    primaryAction: { label: "Check current storm classifications", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check active warnings", href: "/alerts/" },
    intent: "tropical storm vs hurricane, difference between hurricane and tropical storm, tropical storm wind speed",
    steps: [
      { title: "Identify the Classification", body: "Check the latest NHC advisory for the official wind-based classification and advisory time.", href: "/hurricane-tracker/live/", label: "Check current storms" },
      { title: "Look Beyond the Label", body: "Compare surge, rainfall, tornado, flood, and wind alerts because category alone does not measure every hazard.", href: "/alerts/", label: "Review alerts" },
      { title: "Match the Local Action", body: "Use state and city trackers plus local emergency management guidance to decide what preparation is needed.", href: "/tracker/", label: "Choose a location" }
    ],
    sections: [
      { eyebrow: "Wind thresholds", title: "What Is the Difference Between a Tropical Storm and a Hurricane?", body: "The NHC classifies tropical cyclones primarily by maximum sustained wind. A tropical depression is below 39 mph, a tropical storm is 39 to 73 mph, and a hurricane begins at 74 mph.", bullets: ["Tropical depression: 38 mph or less", "Tropical storm: 39 to 73 mph", "Hurricane: 74 mph or higher", "Major hurricane: Category 3 or higher"] },
      { eyebrow: "Real-world risk", title: "A Tropical Storm Can Still Be Deadly", body: "Storm size, forward speed, rainfall, terrain, tides, and vulnerability can matter more locally than the wind label.", bullets: ["Freshwater flooding far inland", "Storm surge along bays and coastlines", "Tornadoes in outer rain bands", "Long power and communication outages"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "See current NHC classifications and advisory times." },
      { name: "Hurricane Categories", href: "/hurricane-tracker/hurricane-categories/", description: "Compare Category 1 through Category 5 wind thresholds and limits." },
      { name: "Hurricane Warning Guide", href: "/hurricane-tracker/hurricane-warning/", description: "Understand watches, warnings, timing, and household action." },
      { name: "Radar and Satellite", href: "/radar/", description: "Compare rain bands and cloud structure with the official advisory." }
    ],
    faqs: [
      { question: "What is the difference between a tropical storm and a hurricane?", answer: "A tropical storm has maximum sustained winds of 39 to 73 mph. A hurricane has maximum sustained winds of at least 74 mph." },
      { question: "Can a tropical storm cause storm surge?", answer: "Yes. Tropical storms can cause dangerous surge, rainfall flooding, tornadoes, waves, and outages even without reaching hurricane strength." },
      { question: "Is a Category 1 hurricane always worse than a tropical storm?", answer: "Not for every location or hazard. A large, slow tropical storm can produce worse flooding than a smaller hurricane. Use local hazard forecasts and alerts." },
      { question: "Can a tropical storm become a hurricane quickly?", answer: "Yes. Classification can change as winds strengthen or weaken, including rapid intensification. Always check the latest advisory timestamp." }
    ]
  },
  {
    slug: "hurricane-categories",
    title: "Hurricane Categories 1-5 | Wind Speed & Damage Guide",
    shortTitle: "Hurricane Categories",
    description: "Compare hurricane categories 1 through 5, wind speed thresholds, likely wind damage, and why category does not measure surge or rainfall risk.",
    eyebrow: "Saffir-Simpson scale",
    intro: "Hurricane categories rank maximum sustained wind from Category 1 through Category 5. The Saffir-Simpson scale helps communicate wind damage potential, but it does not measure storm surge, rainfall flooding, tornadoes, storm size, or duration.",
    primaryAction: { label: "Check current hurricane strength", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Compare all storm hazards", href: "/alerts/" },
    intent: "hurricane categories, Category 1 through 5 wind speed, hurricane category scale",
    steps: [
      { title: "Check the Current Wind", body: "Use the latest NHC advisory for maximum sustained wind, category, pressure, movement, and update time.", href: "/hurricane-tracker/live/", label: "Open live tracker" },
      { title: "Add the Missing Hazards", body: "Read surge, rainfall, flood, tornado, and local wind products because the category measures wind only.", href: "/alerts/", label: "Check official alerts" },
      { title: "Plan for Your Location", body: "Housing, trees, utilities, flood zones, bridges, and evacuation constraints determine how the same storm affects different places.", href: "/local-hurricane-risk/", label: "Check local risk" }
    ],
    sections: [
      { eyebrow: "Category thresholds", title: "Hurricane Category Wind Speeds", body: "The scale uses one-minute maximum sustained wind. Major hurricanes are Category 3, 4, or 5, but all hurricanes can produce dangerous conditions.", bullets: ["Category 1: 74-95 mph", "Category 2: 96-110 mph", "Category 3: 111-129 mph", "Category 4: 130-156 mph", "Category 5: 157 mph or higher"] },
      { eyebrow: "Scale limits", title: "Category Does Not Equal Total Risk", body: "A lower-category storm can be catastrophic when it is large, slow, rain-heavy, or pushing water into a vulnerable coastline.", bullets: ["No storm surge measurement", "No rainfall or inland flood measurement", "No tornado or wave measurement", "No storm size or duration measurement"] }
    ],
    nextLinks: [
      { name: "Tropical Storm vs Hurricane", href: "/hurricane-tracker/tropical-storm-vs-hurricane/", description: "Compare the broader cyclone classifications and thresholds." },
      { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "Check the latest official strength for active systems." },
      { name: "Storm Surge Map", href: "/hurricane-tracker/storm-surge-map/", description: "Review the water hazard that category does not measure." },
      { name: "Local Hurricane Risk", href: "/local-hurricane-risk/", description: "Connect storm hazards to a city, state, ZIP, or household plan." }
    ],
    faqs: [
      { question: "What are the five hurricane categories?", answer: "Category 1 is 74-95 mph, Category 2 is 96-110 mph, Category 3 is 111-129 mph, Category 4 is 130-156 mph, and Category 5 is 157 mph or higher." },
      { question: "What is a major hurricane?", answer: "A major hurricane is Category 3, 4, or 5, with maximum sustained winds of at least 111 mph." },
      { question: "Does hurricane category predict storm surge?", answer: "No. The category measures maximum sustained wind only. Surge depends on storm size, track, coastline shape, depth, speed, and tides." },
      { question: "Can a Category 1 hurricane be dangerous?", answer: "Yes. Category 1 hurricanes can cause damaging wind, surge, rainfall flooding, tornadoes, waves, outages, and dangerous travel conditions." }
    ]
  },
  {
    slug: "southeast",
    title: "Southeast Hurricane Tracker | East Coast NHC Updates",
    shortTitle: "Southeast Tracker",
    description: "Track hurricanes approaching the Southeast and East Coast with live NHC paths, radar, alerts, and Georgia, Carolinas, Virginia, and Florida trackers.",
    eyebrow: "Southeast and East Coast tracker",
    intro: "Use this Southeast hurricane tracker to check active Atlantic systems that may approach Florida, Georgia, South Carolina, North Carolina, or Virginia, then move into state and city alerts for local decisions.",
    primaryAction: { label: "Open live hurricane map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check Southeast states", href: "/tracker/" },
    intent: "southeast hurricane tracker, east coast hurricane tracker, hurricane near Georgia and Carolinas",
    steps: [
      { title: "Check the Atlantic Track", body: "Start with current NHC systems and the official forecast path before focusing on one state or model run.", href: "/hurricane-tracker/live/", label: "Check current storms" },
      { title: "Compare Southeast States", body: "A track near the coast can affect several states through surge, rain, wind, tornadoes, and travel disruption.", href: "/tracker/", label: "Choose a state" },
      { title: "Verify Local Alerts", body: "Use NWS watches and warnings plus county emergency management for location-specific timing and instructions.", href: "/alerts/", label: "Check active alerts" }
    ],
    sections: [
      { eyebrow: "Current question", title: "Is a Hurricane Heading Toward the Southeast Coast?", body: "Use the latest NHC position and forecast cone to check whether an active system is approaching the Southeast. Do not treat the center line as an impact boundary.", bullets: ["Florida Atlantic coast context", "Georgia and South Carolina coastal alerts", "North Carolina and Outer Banks timing", "Virginia and Hampton Roads risk"] },
      { eyebrow: "Regional risk", title: "One Atlantic Storm Can Affect Several States", body: "Recurving storms can produce different hazards from Florida through Virginia even without a direct landfall in every state.", bullets: ["Storm surge and tidal flooding", "Freshwater and river flooding", "Rain-band tornadoes", "Bridge, ferry, and evacuation-route constraints"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC systems, forecast paths, radar, and satellite context." },
      { name: "Georgia Hurricane Tracker", href: "/tracker/georgia/", description: "Savannah, Brunswick, coastal alerts, flooding, and routes." },
      { name: "South Carolina Hurricane Tracker", href: "/tracker/south-carolina/", description: "Charleston, Myrtle Beach, Lowcountry alerts, and surge context." },
      { name: "North Carolina Hurricane Tracker", href: "/tracker/north-carolina/", description: "Outer Banks, Wilmington, river flooding, and NWS updates." },
      { name: "Virginia Hurricane Tracker", href: "/tracker/virginia/", description: "Hampton Roads, Chesapeake Bay, bridge, and tidal flooding context." }
    ],
    faqs: [
      { question: "Is a hurricane heading toward the East Coast?", answer: "Check the live NHC systems and forecast path, then open the relevant state tracker. Forecasts can shift, and impacts can occur outside the cone." },
      { question: "Which Southeast states should I monitor?", answer: "Monitor Florida, Georgia, South Carolina, North Carolina, and Virginia when an Atlantic system approaches, then verify local NWS alerts and emergency instructions." },
      { question: "Can a hurricane affect the Carolinas without making landfall there?", answer: "Yes. Surge, heavy rain, tornadoes, waves, rip currents, and outages can occur even when the storm center stays offshore or lands elsewhere." }
    ]
  },
  {
    slug: "gulf",
    title: "Gulf Hurricane Tracker | Live NHC Storm Updates",
    shortTitle: "Gulf Tracker",
    description: "Check whether a hurricane or tropical storm is in the Gulf right now with current NHC positions, forecast paths, radar, and Gulf Coast state trackers.",
    eyebrow: "Gulf Coast live tracker",
    intro: "Use this Gulf hurricane tracker to check active systems in the Gulf of Mexico, compare the latest NHC position and forecast path, and move into Florida, Texas, Louisiana, Mississippi, or Alabama local alerts.",
    primaryAction: { label: "Open live hurricane map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check Gulf Coast states", href: "/tracker/" },
    intent: "Gulf hurricane tracker, hurricane in Gulf right now, tropical storm Gulf",
    steps: [
      { title: "Check Active Gulf Systems", body: "Start with the live NHC feed to see whether a named hurricane, tropical storm, or disturbance is currently in or approaching the Gulf.", href: "/hurricane-tracker/live/", label: "Check current storms" },
      { title: "Compare Track and Radar", body: "Use the official forecast path for broad timing, then compare radar and satellite for rain bands and local weather changes.", href: "/radar/", label: "Open radar" },
      { title: "Move to Local Alerts", body: "Gulf risk differs by coastline, bay, river, and county. Open the relevant state or city page before making a household decision.", href: "/tracker/", label: "Choose a state" }
    ],
    sections: [
      { eyebrow: "Gulf questions", title: "Is There a Hurricane in the Gulf Right Now?", body: "The Gulf can change quickly when a system enters warm water. Use current NHC advisories and local NWS alerts rather than social media screenshots or a single storm-center position.", bullets: ["Active NHC hurricane and tropical-storm status", "Forecast path and advisory time", "Radar and satellite context", "Florida, Texas, Louisiana, Mississippi, and Alabama links"] },
      { eyebrow: "Risk distinction", title: "A Gulf Track Is Not a Landfall Prediction", body: "A storm can affect the Gulf Coast through surge, rain, tornadoes, or outages outside the center path. Local orders and warnings control what people should do.", bullets: ["Storm surge and bay flooding", "Freshwater and river flooding", "Rain-band tornadoes", "Evacuation zones and route constraints"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC systems, radar, satellite, and forecast context." },
      { name: "Florida Hurricane Tracker", href: "/tracker/florida/", description: "Florida Atlantic and Gulf risk with live alerts." },
      { name: "Texas Hurricane Tracker", href: "/tracker/texas/", description: "Texas Gulf track, rainfall, surge, and alerts." },
      { name: "Louisiana Hurricane Tracker", href: "/tracker/louisiana/", description: "Louisiana surge, levee, and evacuation context." },
      { name: "Storm Surge Map", href: "/hurricane-tracker/storm-surge-map/", description: "Understand why surge risk differs from storm category." }
    ],
    faqs: [
      { question: "Is there a hurricane in the Gulf right now?", answer: "Check the current NHC storm list and Gulf tracker status above. A system's Gulf position does not by itself predict landfall or local impacts." },
      { question: "Is there a tropical storm in the Gulf?", answer: "Use the current NHC classification and advisory time. Tropical storms can produce dangerous rain, surge, tornadoes, and flooding before or without hurricane-force winds." },
      { question: "Which Gulf Coast states should I check?", answer: "Check Florida, Alabama, Mississippi, Louisiana, and Texas state trackers, then verify county NWS alerts and local emergency management instructions." }
    ]
  },
  {
    slug: "how-hurricanes-are-tracked",
    title: "How Hurricanes Are Tracked | NHC, Radar & Forecasts",
    shortTitle: "How Hurricanes Are Tracked",
    description: "Learn how scientists and the National Hurricane Center track hurricanes with satellites, aircraft, radar, buoys, models, and official forecast advisories.",
    eyebrow: "Hurricane tracking explained",
    intro: "Hurricanes are tracked by combining satellite observations, aircraft reconnaissance, radar, ocean data, surface reports, and forecast models. The NHC turns those inputs into the official position, intensity, forecast path, and advisory products used by emergency managers.",
    primaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read the path guide", href: "/hurricane-tracker/path/" },
    intent: "how are hurricanes tracked, how do scientists track hurricanes, hurricane forecast",
    steps: [
      { title: "Observe the System", body: "Satellites and aircraft help locate the circulation, estimate organization, and measure winds, pressure, temperature, and moisture.", href: "/learn/", label: "Open learning center" },
      { title: "Build the Forecast", body: "Forecasters combine observations with numerical models and official expertise to estimate movement and intensity uncertainty.", href: "/hurricane-tracker/path/", label: "Read path guide" },
      { title: "Communicate the Risk", body: "Advisories, watches, warnings, cones, and local NWS products translate forecast information into public decisions.", href: "/alerts/", label: "Review alerts" }
    ],
    sections: [
      { eyebrow: "Observation", title: "How Scientists Track a Hurricane", body: "No single instrument is enough. Repeated observations show where a system is, how strong it is, and whether the circulation is changing.", bullets: ["Geostationary and polar-orbiting satellites", "Hurricane hunter aircraft and dropsondes", "Coastal and land-based radar", "Buoys, ships, and surface weather stations"] },
      { eyebrow: "Forecast", title: "Tracking Is Different From Predicting", body: "Tracking describes the observed and forecast center. Prediction includes uncertainty, and impacts can extend far beyond the center line.", bullets: ["Official NHC forecast track", "Cone of uncertainty", "Intensity forecasts", "Local wind, surge, flood, and tornado alerts"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "See current NHC storm positions and advisories." },
      { name: "Hurricane Path Tracker", href: "/hurricane-tracker/path/", description: "Learn to read track and cone information." },
      { name: "Radar and Satellite", href: "/radar/", description: "Compare local rain bands with satellite structure." },
      { name: "NWS Alerts", href: "/alerts/", description: "Review official watches and warnings." }
    ],
    faqs: [
      { question: "How are hurricanes tracked?", answer: "The NHC combines satellites, aircraft reconnaissance, radar, buoys, surface observations, forecast models, and forecaster analysis." },
      { question: "How often does the NHC update hurricane tracks?", answer: "NHC advisories follow scheduled cycles and may include intermediate updates when conditions require them. Always check the timestamp on the latest official advisory." },
      { question: "Can hurricanes be predicted exactly?", answer: "No. Forecast uncertainty remains, especially farther into the future. Use the official cone and local alerts rather than treating one line as a guarantee." }
    ]
  },
  {
    slug: "hurricane-warning",
    title: "Hurricane Warning Explained | Watch vs Warning",
    shortTitle: "Hurricane Warning",
    description: "Understand what a hurricane warning means, how it differs from a watch, and how to turn NWS alerts into a household action plan.",
    eyebrow: "Warning language guide",
    intro: "A hurricane warning means hurricane conditions are expected in the specified area, usually within 36 hours. A watch means conditions are possible. Always read the full local NWS product and follow emergency management instructions.",
    primaryAction: { label: "Check active alerts", href: "/alerts/" },
    secondaryAction: { label: "Decode an alert", href: "/tools/alert-action-decoder/" },
    intent: "what is a hurricane warning, hurricane watch vs warning, NWS hurricane alert",
    steps: [
      { title: "Read the Alert Type", body: "Identify whether the product is a watch, warning, advisory, surge warning, flood warning, or tornado warning.", href: "/alerts/", label: "Check alerts" },
      { title: "Check Your Location", body: "Read the counties, zones, timing, hazards, and instructions in the official local product.", href: "/local-hurricane-risk/", label: "Check local risk" },
      { title: "Take the Next Action", body: "Use the alert decoder and local orders to decide whether to monitor, prepare, act, or leave.", href: "/tools/alert-action-decoder/", label: "Decode the alert" }
    ],
    sections: [
      { eyebrow: "Definitions", title: "Watch Versus Warning", body: "A watch means conditions are possible and preparation should be underway. A warning means dangerous conditions are expected and protective action may be needed.", bullets: ["Hurricane watch: possible hurricane conditions", "Hurricane warning: expected hurricane conditions", "Storm surge warning: life-threatening water possible", "Flood and tornado warnings: separate immediate hazards"] },
      { eyebrow: "Action", title: "The Alert Is Not the Whole Plan", body: "Pair the alert with local evacuation orders, your zone, housing type, mobility, medical needs, pets, and route timing.", bullets: ["Follow local emergency management", "Do not wait for the center line", "Leave early if your household needs more time", "Use official shelter and road information"] }
    ],
    nextLinks: [
      { name: "Active NWS Alerts", href: "/alerts/", description: "Review current official alert products." },
      { name: "Alert Action Decoder", href: "/tools/alert-action-decoder/", description: "Turn alert wording into planning steps." },
      { name: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Organize household constraints and timing." },
      { name: "Evacuation Zones", href: "/hurricane-tracker/evacuation-zones/", description: "Find the right local zone source." }
    ],
    faqs: [
      { question: "What is a hurricane warning?", answer: "A hurricane warning means hurricane conditions are expected in the specified area, generally within 36 hours. Follow the complete NWS product and local instructions." },
      { question: "What is the difference between a hurricane watch and warning?", answer: "A watch means hurricane conditions are possible; a warning means they are expected. Use a watch to finish preparation and a warning to act on official instructions." },
      { question: "Does a hurricane warning mean everyone must evacuate?", answer: "Not automatically. Evacuation orders are local, and decisions depend on zone, surge, flooding, housing, transport, and household needs." }
    ]
  },
  {
    slug: "what-does-a-hurricane-look-like",
    title: "What Does a Hurricane Look Like? Radar & Satellite",
    shortTitle: "What a Hurricane Looks Like",
    description: "See what hurricanes look like on satellite and radar, including the eye, eyewall, rain bands, cloud structure, and why appearance is not a complete risk measure.",
    eyebrow: "Storm structure guide",
    intro: "A hurricane can look like a spiral of clouds from satellite, a compact eye and eyewall, or broad rain bands on radar. Appearance helps explain structure, but official intensity, forecast track, surge, flood, and local alerts matter more than a dramatic image.",
    primaryAction: { label: "Open radar and satellite", href: "/radar/" },
    secondaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    intent: "what does a hurricane look like, hurricane satellite image, hurricane radar",
    steps: [
      { title: "Use Satellite", body: "Satellite imagery shows cloud structure, organization, outflow, and the shape of the larger tropical system.", href: "/radar/", label: "View satellite" },
      { title: "Use Radar", body: "Radar shows precipitation and rain-band timing when the system is close enough to radar coverage.", href: "/radar/", label: "View radar" },
      { title: "Check Official Risk", body: "Pair images with NHC intensity, forecast track, storm surge, flood, wind, and tornado alerts.", href: "/alerts/", label: "Check alerts" }
    ],
    sections: [
      { eyebrow: "Structure", title: "Eye, Eyewall, and Rain Bands", body: "The eye is calmer relative to the eyewall, where the strongest winds often occur. Outer rain bands can still bring flooding and tornadoes far from the center.", bullets: ["Eye and eyewall", "Spiral rain bands", "Central dense overcast", "Outflow and cloud-top structure"] },
      { eyebrow: "Safety", title: "A Dramatic Image Does Not Show Every Hazard", body: "A storm can look organized without threatening your location, or look less symmetrical while producing dangerous local impacts. Use official data and local warnings.", bullets: ["Wind and gust forecasts", "Storm surge and coastal flooding", "Rainfall and river flooding", "Tornado and outage risk"] }
    ],
    nextLinks: [
      { name: "Interactive Radar", href: "/radar/", description: "Compare radar, satellite, wind, and alert layers." },
      { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "Check current storms and NHC paths." },
      { name: "Hurricane Path Guide", href: "/hurricane-tracker/path/", description: "Understand forecast track and cone limits." }
    ],
    faqs: [
      { question: "What does a hurricane look like on satellite?", answer: "It often appears as a spiral cloud system with a central dense overcast, rain bands, and sometimes a visible eye. Satellite appearance is only one part of the risk picture." },
      { question: "What does a hurricane look like on radar?", answer: "Radar can show precipitation bands, the eyewall, and areas of heavy rain when the storm is within coverage. Radar does not replace the NHC forecast or local warnings." },
      { question: "Does a visible eye mean the storm is safe?", answer: "No. The eyewall can contain the strongest winds, and conditions can change quickly. Follow official warnings even when the center appears calm." }
    ]
  },
  {
    slug: "map",
    title: "Hurricane Tracker Map",
    shortTitle: "Tracker Map",
    description:
      "Learn how hurricane map layers differ, then open the live hurricane tracker for current NHC storm positions, radar, satellite, forecast tracks, and advisories.",
    eyebrow: "Hurricane map guide",
    intro:
      "Use this guide to choose the right hurricane map layer. The live tracker is the canonical page for current storm position and NHC status; this page explains when to use radar, satellite, the forecast track, and local alerts.",
    primaryAction: { label: "Open live tracker map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Open radar map", href: "/radar/" },
    intent: "hurricane tracker map, live hurricane map, storm tracker map",
    steps: [
      {
        title: "Start With Current Storms",
        body: "Use the live hurricane tracker to see whether the NHC has an active system, where the center is, and which advisory links matter.",
        href: "/hurricane-tracker/live/",
        label: "Open live hurricane map"
      },
      {
        title: "Compare Map Layers",
        body: "Switch to radar and satellite when you need rain bands, cloud structure, and local weather timing instead of only the forecast track.",
        href: "/radar/",
        label: "Open radar"
      },
      {
        title: "Move Into Local Risk",
        body: "Open city trackers and alerts to connect the storm map with surge exposure, flooding, evacuation routes, bridges, and outages.",
        href: "/hurricane-tracker/city/",
        label: "Browse cities"
      }
    ],
    sections: [
      {
        eyebrow: "What the map answers",
        title: "Use the Map for Orientation, Not the Whole Decision",
        body:
          "A tracker map helps explain where the storm is and how the forecast is evolving. Local impacts can still happen outside the centerline, so the next step is always local alert and location context.",
        bullets: [
          "Storm center and general forecast context",
          "Radar and satellite comparison",
          "State and city paths for local risk",
          "Official NHC and NWS source links"
        ]
      },
      {
        eyebrow: "Common mistake",
        title: "Do Not Track Only the Center Line",
        body:
          "Wind, surge, rainfall flooding, tornadoes, and outages can occur away from the plotted center. Use the map as the start of the workflow, then check watches, warnings, and local instructions.",
        bullets: [
          "Check the NHC cone and discussion",
          "Review NWS alerts near your location",
          "Confirm evacuation zone and local orders",
          "Use planning tools before roads become crowded"
        ]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Active storm hub with NHC checks, radar shortcuts, alerts, and city pages." },
      { name: "Local Hurricane Risk", href: "/local-hurricane-risk/", description: "Move from the map into ZIP, city, state, surge, and evacuation-zone context." },
      { name: "Interactive Hurricane Radar", href: "/radar/", description: "Radar, satellite, wind, and alert layers for local weather context." },
      { name: "City Hurricane Trackers", href: "/hurricane-tracker/city/", description: "Local pages for surge, flooding, route, outage, and evacuation context." },
      { name: "Storm Distance Calculator", href: "/tools/storm-distance-calculator/", description: "Estimate distance from a storm to a location while keeping local hazards in context." }
    ],
    faqs: [
      {
        question: "What is the best hurricane tracker map to use first?",
        answer:
          "Start with the live hurricane tracker map for official storm context, then compare radar, satellite, NWS alerts, local risk, and city pages before making household decisions."
      },
      {
        question: "Does a hurricane tracker map show evacuation orders?",
        answer:
          "A tracker map may link to local resources, but evacuation orders come from local emergency management. Always verify orders, shelters, and routes with official local sources."
      },
      {
        question: "Why does the storm center not explain all local risk?",
        answer:
          "Hurricane impacts can spread far from the center. Storm surge, rainfall flooding, tornadoes, and power outages need separate local alert checks."
      }
    ]
  },
  {
    slug: "path",
    title: "Hurricane Path Tracker",
    shortTitle: "Path Tracker",
    description:
      "Track a hurricane path with live NHC storm context, current storm position, forecast cone explainers, city trackers, radar, and impact-window tools.",
    eyebrow: "Forecast path hub",
    intro:
      "A hurricane path tracker helps answer where the storm may go next and whether the current track matters for your location. For a real planning decision, compare the path with forecast uncertainty, local alerts, storm timing, and your evacuation or shelter constraints.",
    primaryAction: { label: "Open current NHC tracks", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Estimate impact window", href: "/tools/impact-window-estimator/" },
    intent: "hurricane path tracker, hurricane storm path, track hurricane path",
    steps: [
      {
        title: "Check the Active Track",
        body: "Open current storms and official advisory links before relying on screenshots or social posts.",
        href: "/hurricane-tracker/live/",
        label: "Track current hurricanes"
      },
      {
        title: "Read the Cone Correctly",
        body: "The cone describes forecast uncertainty for the storm center, not the full area of hazards.",
        href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/",
        label: "Read cone guide"
      },
      {
        title: "Translate Path Into Timing",
        body: "Use an impact window and local alerts to decide when monitoring becomes preparation or action.",
        href: "/tools/impact-window-estimator/",
        label: "Estimate timing"
      }
    ],
    sections: [
      {
        eyebrow: "Path vs impacts",
        title: "The Forecast Path Is Only One Layer",
        body:
          "The forecast path is useful for timing and orientation, but hurricane decisions also depend on the size of the wind field, surge setup, rainfall, local roads, and official orders.",
        bullets: [
          "Use NHC advisory timing",
          "Compare radar as rain bands arrive",
          "Check local NWS warnings",
          "Review city and state tracker pages"
        ]
      },
      {
        eyebrow: "When to act",
        title: "Path Changes Can Shorten Your Planning Window",
        body:
          "Forecast paths can shift. Households with medical needs, pets, limited transport, or long evacuation routes should use official guidance early rather than waiting for perfect certainty.",
        bullets: [
          "Confirm your evacuation zone",
          "Fuel and pack before warnings peak",
          "Move vulnerable household members early",
          "Keep checking local emergency updates"
        ]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC storm positions, advisory times, radar, satellite, and active tracking links." },
      { name: "Impact Window Estimator", href: "/tools/impact-window-estimator/", description: "Estimate when impacts may matter for a location." },
      { name: "Named Hurricane Trackers", href: "/hurricane-tracker/storm/", description: "Standing storm-name pages with live NHC source checks." },
      { name: "Cone of Uncertainty Guide", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", description: "Learn what the NHC cone does and does not show." },
      { name: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Turn orders, zone, housing, and household needs into a planning level." }
    ],
    faqs: [
      {
        question: "Is a hurricane path tracker the same as the forecast cone?",
        answer:
          "No. A path tracker may show storm position and links, while the NHC cone communicates forecast uncertainty for the center of the storm."
      },
      {
        question: "How often can a hurricane path change?",
        answer:
          "The path can change with each advisory cycle or intermediate update. During an active threat, check official NHC and local NWS updates regularly."
      },
      {
        question: "Can I decide to evacuate from the hurricane path alone?",
        answer:
          "No. Evacuation decisions should be based on local official orders, your evacuation zone, storm surge and flood risk, housing type, and household needs."
      }
    ]
  },
  {
    slug: "evacuation-zones",
    title: "Hurricane Evacuation Zones",
    shortTitle: "Evacuation Zones",
    description:
      "Learn how hurricane evacuation zones fit with local orders, storm surge risk, city trackers, alerts, and household evacuation planning tools.",
    eyebrow: "Local decision hub",
    intro:
      "Hurricane evacuation zones are local planning zones, not a national map layer. Use this hub to understand what to check, where HurricaneHub can help, and which official local sources should make the final call.",
    primaryAction: { label: "Use evacuation helper", href: "/tools/evacuation-decision-helper/" },
    secondaryAction: { label: "Browse city trackers", href: "/hurricane-tracker/city/" },
    intent: "hurricane evacuation zones, evacuation zone lookup, hurricane evacuation map",
    steps: [
      {
        title: "Find the Official Local Zone",
        body: "Use your county or city emergency management site for the authoritative evacuation zone, order status, shelter rules, and route information.",
        href: "/hurricane-tracker/city/",
        label: "Find local tracker"
      },
      {
        title: "Check Current Alerts",
        body: "Compare your zone with storm surge, hurricane, tropical storm, flood, and tornado alerts from the National Weather Service.",
        href: "/alerts/",
        label: "Check alerts"
      },
      {
        title: "Plan the Household Decision",
        body: "Use a decision helper for medical needs, pets, housing type, transport, and route timing after confirming official instructions.",
        href: "/tools/evacuation-decision-helper/",
        label: "Open helper"
      }
    ],
    sections: [
      {
        eyebrow: "Important distinction",
        title: "Evacuation Zones Are Local",
        body:
          "Zone names, maps, and order language vary by county or city. HurricaneHub can organize local tracker links and decision prompts, but official evacuation zones and orders come from local emergency management.",
        bullets: [
          "County evacuation zone lookup",
          "Local shelter and route information",
          "Official order status",
          "Bridge, road, and transit updates"
        ]
      },
      {
        eyebrow: "Risk context",
        title: "A Zone Is Not the Only Reason to Leave Early",
        body:
          "Households may need more time because of medical equipment, mobility, pets, fuel access, older housing, or long routes. Use local orders first, then plan around household constraints.",
        bullets: [
          "Medical and mobility needs",
          "Pets, livestock, or special transport",
          "Mobile homes, RVs, boats, and temporary housing",
          "Low-lying, surge, river, or barrier-island exposure"
        ]
      }
    ],
    nextLinks: [
      { name: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Sort risk into Monitor, Prepare, Act, or Leave planning levels." },
      { name: "City Hurricane Trackers", href: "/hurricane-tracker/city/", description: "Local planning pages for coastal cities and nearby counties." },
      { name: "Storm Surge ZIP Checker", href: "/tools/storm-surge-checker/", description: "Check active NWS storm surge watch or warning status near a ZIP code." },
      { name: "How to Check Your Evacuation Zone", href: "/blog/how-to-check-your-hurricane-evacuation-zone/", description: "Step-by-step guide for finding and confirming evacuation zone information." }
    ],
    faqs: [
      {
        question: "Where should I check my official hurricane evacuation zone?",
        answer:
          "Use your county or city emergency management site. HurricaneHub city pages can help you find local context, but the official zone and order status belong to local authorities."
      },
      {
        question: "Is a storm surge zone the same as an evacuation zone?",
        answer:
          "Not always. Surge risk often influences evacuation zones, but each local government defines zones and order language differently."
      },
      {
        question: "Should I wait for a mandatory evacuation order?",
        answer:
          "Follow official guidance. Households with medical needs, pets, limited transportation, mobile homes, or long routes may need to act earlier when local officials recommend it."
      }
    ]
  },
  {
    slug: "storm-surge-map",
    title: "Hurricane Storm Surge Map",
    shortTitle: "Storm Surge Map",
    description:
      "Understand storm surge map context, NWS surge watches and warnings, ZIP checks, city trackers, and local evacuation planning.",
    eyebrow: "Water risk hub",
    intro:
      "A storm surge map helps explain coastal water risk, but the practical decision comes from active NWS alerts, local evacuation zones, tide and route context, and official local instructions.",
    primaryAction: { label: "Check storm surge by ZIP", href: "/tools/storm-surge-checker/" },
    secondaryAction: { label: "Open city trackers", href: "/hurricane-tracker/city/" },
    intent: "hurricane storm surge map, storm surge warning map, storm surge tracker",
    steps: [
      {
        title: "Check Active Surge Alerts",
        body: "Use the storm surge checker to see whether NWS has an active storm surge watch or warning near a ZIP code.",
        href: "/tools/storm-surge-checker/",
        label: "Check ZIP"
      },
      {
        title: "Understand the Hazard",
        body: "Storm surge is separate from hurricane category and can vary with track, wind direction, tide, bays, rivers, canals, and elevation.",
        href: "/blog/hurricane-storm-surge-forecasting/",
        label: "Read surge guide"
      },
      {
        title: "Connect Surge to Evacuation",
        body: "Use local evacuation zones and official orders to decide whether water risk affects your route, shelter plan, or timing.",
        href: "/hurricane-tracker/evacuation-zones/",
        label: "Review zones"
      }
    ],
    sections: [
      {
        eyebrow: "Map interpretation",
        title: "Storm Surge Risk Is Highly Local",
        body:
          "Two nearby neighborhoods can have very different water exposure because of elevation, shoreline shape, rivers, bays, canals, barriers, and road access.",
        bullets: [
          "Check official surge watches and warnings",
          "Confirm your local evacuation zone",
          "Consider tides, bridges, and low roads",
          "Treat local emergency instructions as primary"
        ]
      },
      {
        eyebrow: "Category trap",
        title: "Storm Surge Is Not Measured by Hurricane Category",
        body:
          "The Saffir-Simpson category describes sustained wind speed. Water can still be dangerous in a lower-category storm if the track, size, tide, and coastline setup are unfavorable.",
        bullets: [
          "Do not use category alone",
          "Read NHC surge products and local alerts",
          "Watch for flood and tornado warnings too",
          "Plan routes before water blocks roads"
        ]
      }
    ],
    nextLinks: [
      { name: "Storm Surge ZIP Checker", href: "/tools/storm-surge-checker/", description: "Check active NWS storm surge alerts near a ZIP code." },
      { name: "Storm Surge Forecasting Guide", href: "/blog/hurricane-storm-surge-forecasting/", description: "Learn how surge forecasts are created and interpreted." },
      { name: "Storm Surge Warning vs Hurricane Warning", href: "/blog/storm-surge-warning-vs-hurricane-warning/", description: "Understand why surge warnings and wind warnings mean different hazards." },
      { name: "Local Risk Plan", href: "/tools/local-risk-plan/", description: "Build a local plan that includes water, wind, outage, and route context." }
    ],
    faqs: [
      {
        question: "What should I use a storm surge map for?",
        answer:
          "Use it to understand coastal water risk, then verify active NWS alerts, local evacuation zones, official orders, and route conditions before acting."
      },
      {
        question: "Can a lower-category hurricane still create dangerous surge?",
        answer:
          "Yes. Surge depends on storm size, track, wind direction, tide, shoreline shape, and local elevation, not only the hurricane category."
      },
      {
        question: "Does HurricaneHub replace official storm surge products?",
        answer:
          "No. HurricaneHub organizes official-source context and tools, but NHC, NWS, and local emergency management remain the sources to verify during an active threat."
      }
    ]
  },
  {
    slug: "spaghetti-models",
    title: "Hurricane Spaghetti Models",
    shortTitle: "Spaghetti Models",
    description:
      "Learn how hurricane spaghetti models fit with the NHC cone, forecast track, model spread, live tracker maps, radar, and local alert decisions.",
    eyebrow: "Forecast model hub",
    intro:
      "Spaghetti models are useful for seeing forecast spread, but they are not a single answer. Use this hub to understand model guidance, compare it with official NHC forecasts, and then move toward local alerts, city trackers, and household decisions.",
    primaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read model guide", href: "/blog/how-to-read-hurricane-spaghetti-models/" },
    intent: "hurricane spaghetti models, spaghetti model tracker, hurricane model tracks",
    steps: [
      {
        title: "Start With the Official Forecast",
        body: "Use NHC advisories and the forecast cone as the official baseline before reacting to individual model lines or social screenshots.",
        href: "/hurricane-tracker/live/",
        label: "Open official tracker"
      },
      {
        title: "Compare Model Spread",
        body: "Wide spread means uncertainty is high. Tight clustering can still miss local hazards such as surge, rain bands, tornadoes, and outages.",
        href: "/blog/how-to-read-hurricane-spaghetti-models/",
        label: "Learn model spread"
      },
      {
        title: "Move From Track to Location",
        body: "After reviewing model guidance, check your state, city, evacuation zone, and active NWS alerts before making a household plan.",
        href: "/hurricane-tracker/city/",
        label: "Browse city trackers"
      }
    ],
    sections: [
      {
        eyebrow: "Model basics",
        title: "Spaghetti Models Show Possibilities, Not Orders",
        body:
          "Each line can represent a different model or model run. The spread helps explain uncertainty, but official decisions should be tied to NHC and NWS products plus local emergency management.",
        bullets: [
          "Compare model spread with the NHC cone",
          "Look for trend changes over several advisory cycles",
          "Do not treat one outlier line as the forecast",
          "Check local alerts as impacts get closer"
        ]
      },
      {
        eyebrow: "Local impact gap",
        title: "A Model Track Does Not Show Every Hazard",
        body:
          "Model tracks focus on storm movement. Local water, wind, rainfall, and tornado risk can extend away from the center and may change before the track itself looks dramatic.",
        bullets: [
          "Storm surge can depend on wind direction and coastline shape",
          "Rain bands can flood areas outside the center path",
          "Tornado warnings can appear in outer bands",
          "Power outages depend on trees, soil, wind gusts, and grid exposure"
        ]
      }
    ],
    nextLinks: [
      { name: "How to Read Hurricane Spaghetti Models", href: "/blog/how-to-read-hurricane-spaghetti-models/", description: "Plain-language guide to model spread, outliers, and forecast uncertainty." },
      { name: "Hurricane Path Tracker", href: "/hurricane-tracker/path/", description: "Connect model guidance with official path, timing, and local action steps." },
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current storm status, NHC checks, radar shortcuts, alerts, and local tracker paths." },
      { name: "Impact Window Estimator", href: "/tools/impact-window-estimator/", description: "Turn storm timing into a practical household planning window." }
    ],
    faqs: [
      {
        question: "Are hurricane spaghetti models more accurate than the NHC forecast?",
        answer:
          "No. Spaghetti models are inputs and comparisons. The NHC forecast is the official public forecast and should be the baseline for storm-track decisions."
      },
      {
        question: "What does wide spaghetti model spread mean?",
        answer:
          "Wide spread means forecast uncertainty is higher. Use that as a reason to prepare earlier and keep checking official updates rather than waiting for a single perfect track."
      },
      {
        question: "Can spaghetti models tell me whether to evacuate?",
        answer:
          "No. Evacuation decisions come from local orders, evacuation zones, storm surge and flood risk, housing type, household needs, and official local guidance."
      }
    ]
  },
  {
    slug: "radar",
    title: "Hurricane Radar and Satellite Tracker",
    shortTitle: "Radar Tracker",
    description:
      "Use hurricane radar and satellite with NHC storm context, rain bands, wind timing, local NWS alerts, and city tracker links.",
    eyebrow: "Radar search hub",
    intro:
      "Radar and satellite help show what is happening now: rain bands, storm structure, cloud tops, and nearby severe weather. For hurricane decisions, combine those live layers with NHC advisory context and local alerts.",
    primaryAction: { label: "Open hurricane radar", href: "/radar/" },
    secondaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    intent: "hurricane radar, hurricane satellite tracker, live storm radar",
    steps: [
      {
        title: "Open the Live Radar Layer",
        body: "Use radar to see rain bands, local heavy rain, and approaching weather that may not be obvious from a track map alone.",
        href: "/radar/",
        label: "Open radar"
      },
      {
        title: "Compare With NHC Context",
        body: "Radar shows current weather, while NHC advisories explain storm status, forecast direction, watches, warnings, and uncertainty.",
        href: "/hurricane-tracker/live/",
        label: "Open tracker"
      },
      {
        title: "Check Local Alerts",
        body: "Use NWS alerts for tornado, flood, wind, surge, and marine warnings near the place you care about.",
        href: "/alerts/",
        label: "Check alerts"
      }
    ],
    sections: [
      {
        eyebrow: "Radar use",
        title: "Radar Is Best for Near-Term Weather",
        body:
          "Radar is strongest when impacts are already near enough to see rain bands and severe cells. It should not replace forecast advisories for longer-range track decisions.",
        bullets: [
          "Watch for heavy rain bands and training storms",
          "Check tornado warnings during outer bands",
          "Compare radar timing with local alert language",
          "Use city pages for route and outage context"
        ]
      },
      {
        eyebrow: "Satellite use",
        title: "Satellite Helps Before Radar Coverage Matters",
        body:
          "Satellite is useful over open water and early in a storm threat. It helps reveal storm organization and cloud structure before local radar becomes the main short-term tool.",
        bullets: [
          "Use satellite for broad storm structure",
          "Use radar for local rainfall and cells",
          "Use NHC advisories for official status",
          "Use NWS alerts for local warnings"
        ]
      }
    ],
    nextLinks: [
      { name: "Interactive Hurricane Radar", href: "/radar/", description: "Radar, satellite, wind, and alert layers for tropical weather monitoring." },
      { name: "Hurricane Radar vs Satellite", href: "/blog/hurricane-radar-vs-satellite/", description: "Learn when radar or satellite is the better storm-tracking tool." },
      { name: "Active NWS Alerts", href: "/alerts/", description: "Check official weather alerts by state." },
      { name: "City Hurricane Trackers", href: "/hurricane-tracker/city/", description: "Move from radar to local surge, flood, route, and outage context." }
    ],
    faqs: [
      {
        question: "Should I use radar or the hurricane forecast cone?",
        answer:
          "Use both for different jobs. Radar shows current rain and storm bands; the NHC cone shows official forecast uncertainty for the storm center."
      },
      {
        question: "Can radar show storm surge risk?",
        answer:
          "Radar does not directly show surge risk. Use NHC surge products, NWS storm surge alerts, local evacuation zones, and local emergency management guidance."
      },
      {
        question: "Why do I need satellite when radar exists?",
        answer:
          "Satellite can show storm organization over water and broad cloud structure before local radar has the storm fully in range."
      }
    ]
  },
  {
    slug: "live-tracker",
    title: "Live Hurricane Tracker",
    shortTitle: "Live Tracker",
    description:
      "Open a live hurricane tracker workflow for current storms, NHC advisories, radar, alerts, city pages, and practical local decision tools.",
    eyebrow: "Live tracker hub",
    intro:
      "Use the live hurricane tracker when you want current storm status and the next useful action. The goal is not only watching the map; it is moving from official storm context to local risk and household planning.",
    primaryAction: { label: "Open live tracker map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check local risk", href: "/local-hurricane-risk/" },
    intent: "live hurricane tracker, hurricane tracker live, current hurricane tracker",
    steps: [
      {
        title: "Check Current NHC Systems",
        body: "Start with active storms and official advisory links so the rest of your planning is anchored to current information.",
        href: "/hurricane-tracker/live/",
        label: "Open live map"
      },
      {
        title: "Move to Your State or City",
        body: "Use state and city pages to compare storm context with local alerts, surge exposure, evacuation routes, bridges, and outage planning.",
        href: "/hurricane-tracker/city/",
        label: "Browse cities"
      },
      {
        title: "Use the Right Decision Tool",
        body: "Once you know the storm and location context, use an action plan, evacuation helper, outage planner, or brief generator.",
        href: "/tools/",
        label: "Open tools"
      }
    ],
    sections: [
      {
        eyebrow: "Search intent",
        title: "Live Tracking Should Lead to Local Context",
        body:
          "People search live tracker when they need current storm information. The highest-value next step is usually a local page, alert feed, or planning tool for the place that matters.",
        bullets: [
          "Current NHC storm status",
          "Radar and satellite shortcuts",
          "State and city tracker links",
          "Household action tools"
        ]
      },
      {
        eyebrow: "Decision flow",
        title: "Do Not Stop at the Map",
        body:
          "A map can confirm that a storm exists and where it may go. Watches, warnings, evacuation orders, surge zones, and household needs turn that information into a plan.",
        bullets: [
          "Check NWS alerts near your location",
          "Confirm official local evacuation information",
          "Prepare before roads or power become unreliable",
          "Keep checking official updates as advisories change"
        ]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Active storm checks, NHC links, radar shortcuts, alerts, city pages, and decision tools." },
      { name: "Local Hurricane Risk", href: "/local-hurricane-risk/", description: "ZIP, city, state, storm surge, evacuation-zone, and household planning paths." },
      { name: "Hurricane Tracker Map", href: "/hurricane-tracker/map/", description: "Map-focused hub for storm position, radar, satellite, and local tracker paths." },
      { name: "My Hurricane Dashboard", href: "/tools/my-hurricane-dashboard/", description: "Build a saved-location dashboard for storm season." }
    ],
    faqs: [
      {
        question: "What should a live hurricane tracker show first?",
        answer:
          "It should show current official storm context, then make it easy to open radar, alerts, state pages, city pages, and household planning tools."
      },
      {
        question: "Is a live hurricane tracker enough for evacuation decisions?",
        answer:
          "No. Evacuation decisions need local official orders, evacuation zones, housing type, surge and flood risk, transport, pets, and medical needs."
      },
      {
        question: "How often should I check a live tracker during a threat?",
        answer:
          "Check official updates regularly during an active threat, especially around NHC advisory cycles and when local watches or warnings change."
      }
    ]
  },
  {
    slug: "preparedness-checklist",
    title: "Hurricane Preparedness Checklist",
    shortTitle: "Preparedness Checklist",
    description:
      "Build a hurricane preparedness checklist for supplies, documents, pets, medical needs, power outages, family communication, and evacuation timing.",
    eyebrow: "Preparedness search hub",
    intro:
      "A useful hurricane preparedness checklist is more than bottled water. It should connect supplies, documents, medicine, pets, power, transport, alerts, and evacuation timing into a plan your household can actually follow.",
    primaryAction: { label: "Generate checklist", href: "/tools/preparedness-checklist/" },
    secondaryAction: { label: "Open preparedness guide", href: "/preparedness/" },
    intent: "hurricane preparedness checklist, hurricane supply list, hurricane emergency kit",
    steps: [
      {
        title: "Build the Household Kit",
        body: "Start with water, food, medications, documents, flashlights, batteries, chargers, hygiene supplies, pet supplies, and special household needs.",
        href: "/tools/preparedness-checklist/",
        label: "Generate list"
      },
      {
        title: "Add People, Pets, and Medicine",
        body: "A checklist should change for children, older adults, pets, refrigerated medicine, mobility needs, and transportation limits.",
        href: "/tools/family-communication-plan/",
        label: "Build family plan"
      },
      {
        title: "Tie Supplies to Timing",
        body: "Use 72/48/24-hour planning so shopping, fueling, charging, document packing, and evacuation decisions happen before conditions worsen.",
        href: "/blog/hurricane-preparation-timeline-72-48-24-hours/",
        label: "Read timeline"
      }
    ],
    sections: [
      {
        eyebrow: "Checklist scope",
        title: "The Best Checklist Matches Your Household",
        body:
          "Generic lists miss important details. A coastal apartment, inland house, mobile home, pet household, and medically dependent household all need different planning emphasis.",
        bullets: [
          "People and pet count",
          "Medication and medical device needs",
          "Evacuation route and destination",
          "Power, cooling, and communication backup"
        ]
      },
      {
        eyebrow: "Timing",
        title: "Preparedness Gets Harder After Warnings Peak",
        body:
          "Fuel, groceries, medications, shelters, bridges, and routes can become constrained as a storm approaches. The checklist should help you finish early instead of racing the weather.",
        bullets: [
          "Shop and fuel before rush periods",
          "Pack documents and medicine together",
          "Charge devices and backup batteries",
          "Follow local officials on shelters and evacuation orders"
        ]
      }
    ],
    nextLinks: [
      { name: "Preparedness Checklist Generator", href: "/tools/preparedness-checklist/", description: "Create a kit list for household size, pets, and planning needs." },
      { name: "Hurricane Preparation Timeline", href: "/blog/hurricane-preparation-timeline-72-48-24-hours/", description: "Plan what to do 72, 48, and 24 hours before expected impacts." },
      { name: "Power Outage Planner", href: "/tools/power-outage-planner/", description: "Plan charging, medicine, food safety, generator placement, and communication." },
      { name: "Family Communication Plan", href: "/tools/family-communication-plan/", description: "Build a contact, destination, pet, and medical-needs communication plan." }
    ],
    faqs: [
      {
        question: "What should be on a hurricane preparedness checklist?",
        answer:
          "Include water, food, medicine, documents, chargers, lighting, hygiene, pet supplies, cash, fuel planning, evacuation information, and communication contacts."
      },
      {
        question: "When should I finish hurricane supplies?",
        answer:
          "Finish core supplies before watches and warnings create heavy demand. Use official local guidance and your household needs to decide timing."
      },
      {
        question: "Should every household use the same checklist?",
        answer:
          "No. Adjust the checklist for household size, pets, medical needs, mobility, housing type, evacuation zone, outage risk, and local hazards."
      }
    ]
  }
];

export function getTopicPage(slug: string) {
  return topicPages.find((page) => page.slug === slug);
}
