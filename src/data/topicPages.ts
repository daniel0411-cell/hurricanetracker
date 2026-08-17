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
    slug: "map",
    title: "Hurricane Tracker Map",
    shortTitle: "Tracker Map",
    description:
      "Open a hurricane tracker map for current storm position, live NHC advisory context, radar, satellite, alerts, city trackers, and local decision tools.",
    eyebrow: "Map search hub",
    intro:
      "Use this current hurricane tracker map hub when you need a live hurricane map, storm position, NHC advisory context, radar, satellite, and the next local page to open. The map is most useful when it leads to a local decision.",
    primaryAction: { label: "Open live tracker map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Open radar map", href: "/radar/" },
    intent: "hurricane tracker map, live hurricane map, storm tracker map",
    steps: [
      {
        title: "Start With Current Storms",
        body: "Use the live tracker to see whether the NHC has an active system, where the center is, and which advisory links matter.",
        href: "/tracker/",
        label: "Open state tracker"
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
    primaryAction: { label: "Open live tracker", href: "/tracker/" },
    secondaryAction: { label: "Estimate impact window", href: "/tools/impact-window-estimator/" },
    intent: "hurricane path tracker, hurricane storm path, track hurricane path",
    steps: [
      {
        title: "Check the Active Track",
        body: "Open current storms and official advisory links before relying on screenshots or social posts.",
        href: "/tracker/",
        label: "Track active storms"
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
  }
];

export function getTopicPage(slug: string) {
  return topicPages.find((page) => page.slug === slug);
}
