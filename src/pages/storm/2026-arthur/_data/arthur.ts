export interface StormStat {
  label: string;
  value: string;
}

export interface StormEvent {
  date: string;
  event: string;
}

export interface StormSection {
  title: string;
  body: string;
}

export interface StormHistorical {
  year: number;
  classification: string;
  summary: string;
  stats: StormStat[];
  comparison: string;
}

export interface StormFaq {
  question: string;
  answer: string;
}

export interface StormLink {
  title: string;
  href: string;
  body: string;
}

export interface StormArchive {
  name: string;
  code: string;
  year: number;
  classification: string;
  status: string;
  basin: string;
  pronunciation: string;
  summary: string;
  heroStats: StormStat[];
  live: {
    bulletin: string;
    rows: StormStat[];
    advisoryNumber: string;
    advisoryTime: string;
    nhcAdvisoryUrl: string;
    nhcSourceUrl: string;
  };
  timeline: StormEvent[];
  impact: StormSection[];
  historical: StormHistorical[];
  forecast: StormSection[];
  preparedness: StormSection[];
  faqs: StormFaq[];
  related: StormLink[];
}

export const arthur: StormArchive = {
  name: "Arthur",
  code: "AL012026",
  year: 2026,
  classification: "Tropical Storm",
  status: "Dissipated (June 18, 2026)",
  basin: "Atlantic",
  pronunciation: "AR-thur",
  summary:
    "Tropical Storm Arthur became the first named storm of the 2026 Atlantic hurricane season when the National Hurricane Center upgraded Potential Tropical Cyclone One near the middle Texas coast on June 17, 2026. Arthur made landfall near Freeport, Texas, and produced life-threatening flooding well inland across the Gulf Coast and Southeast.",
  heroStats: [
    { label: "Peak winds", value: "40 mph (35 kt)" },
    { label: "Min pressure", value: "999 mb" },
    { label: "ACE", value: "0.4 x10⁴ kt²" },
    { label: "Dates", value: "Jun 17–18, 2026" },
    { label: "Landfall", value: "Freeport, Texas" },
    { label: "NHC code", value: "AL012026" }
  ],
  live: {
    bulletin:
      "Final NHC record (archived): Arthur was a short-lived, flood-driven tropical storm. It organized in the northwestern Gulf of Mexico, moved northeast along the Texas coast, and made landfall near Freeport, Texas, on June 17 before weakening rapidly inland and dissipating on June 18.",
    rows: [
      { label: "Classification", value: "Tropical Storm (post-season)" },
      { label: "Peak intensity", value: "40 mph (35 kt), 999 mb" },
      { label: "Final position", value: "Inland over southeast Texas" },
      { label: "Movement", value: "Northeast 9 mph, then rapid weakening" },
      { label: "Peak rainfall", value: "Up to 20 in (508 mm) isolated" },
      { label: "Storm surge", value: "2–4 ft, Port Bolivar to Morgan City" },
      { label: "Direct deaths", value: "2 (NHC Tropical Cyclone Report)" },
      { label: "U.S. damage", value: "Minimal (flood-driven)" }
    ],
    advisoryNumber: "Final public advisory",
    advisoryTime: "June 18, 2026",
    nhcAdvisoryUrl: "https://www.nhc.noaa.gov/text/refresh/MIATCPAT2+shtml/171500.shtml",
    nhcSourceUrl: "https://www.nhc.noaa.gov/data/tcr/index.php?text"
  },
  timeline: [
    { date: "Jun 16, 2026", event: "System designated Potential Tropical Cyclone One while organizing in the northwestern Gulf of Mexico." },
    { date: "Jun 17, 2026 (AM)", event: "NHC upgrades PTC One to Tropical Storm Arthur — the first named storm of the 2026 Atlantic season — near the middle Texas coast." },
    { date: "Jun 17, 2026 (PM)", event: "Arthur makes landfall near Freeport, Texas, with tropical-storm-force winds and a dangerous rainfall threat." },
    { date: "Jun 17–19, 2026", event: "Torrential rain spreads northeast into Louisiana, Mississippi, Alabama, Georgia, and the Florida Panhandle." },
    { date: "Jun 18, 2026", event: "Arthur weakens to a remnant low over southeast Texas and dissipates; flood threat continues inland." }
  ],
  impact: [
    {
      title: "Life-threatening rainfall was the primary threat",
      body:
        "Although Arthur was only a 40 mph tropical storm, its rainfall footprint was the headline hazard. The NHC warned of 5–10 inches of rain from the mid and upper Texas coast into Louisiana, Mississippi, and Alabama, with isolated totals near 20 inches (508 mm). Saturated soils and repeated rain bands pushed urban, low-lying, and riverine communities into flash-flood territory from the Texas Coastal Bend to the Florida Panhandle."
    },
    {
      title: "Storm surge and coastal flooding",
      body:
        "The combination of surge and tide raised water levels 2–4 feet above normally dry ground from Port Bolivar, Texas, to Morgan City, Louisiana. The deepest water occurred along the immediate coast and just east of the landfall point, where surge aligned with high tide and large, dangerous waves."
    },
    {
      title: "Energy-sector disruption",
      body:
        "Arthur's track clipped the heart of the Gulf refining corridor between Corpus Christi and Pascagoula, Mississippi. Operators monitored offshore platforms and coastal facilities, and model estimates flagged potential production shut-ins, a reminder that even weak landfalling storms can ripple into fuel markets."
    },
    {
      title: "How 2026 Arthur compares with past Arthur storms",
      body:
        "The name Arthur has now produced three very different systems. The 2026 storm was a Gulf-landfalling, flood-dominated tropical storm. That is a different animal from 2014's North Carolina hurricane and 2020's open-Atlantic brush, summarized below."
    }
  ],
  historical: [
    {
      year: 2014,
      classification: "Category 2 Hurricane",
      summary:
        "Arthur became the earliest hurricane to make landfall in North Carolina since records began in 1851, striking the Outer Banks on July 3–4, 2014.",
      stats: [
        { label: "Peak winds", value: "100 mph (Category 2)" },
        { label: "Min pressure", value: "973 mb" },
        { label: "Landfall", value: "Shackleford Banks, NC" },
        { label: "Notable", value: "No direct fatalities; 4–5 ft surge" }
      ],
      comparison:
        "2014 Arthur was a wind-and-surge hurricane hitting the Outer Banks, the opposite profile from the 2026 flood storm that landed on the Texas coast."
    },
    {
      year: 2020,
      classification: "Tropical Storm",
      summary:
        "The 2020 Arthur formed in mid-May and tracked just west of Cape Hatteras, North Carolina, without making a U.S. landfall.",
      stats: [
        { label: "Peak winds", value: "45 mph" },
        { label: "Min pressure", value: "1003 mb" },
        { label: "Landfall", value: "None (brushed NC)" },
        { label: "Notable", value: "Rip-current rescues along the coast" }
      ],
      comparison:
        "2020 Arthur stayed mostly offshore and was a wind/rip-current event, whereas 2026 Arthur came ashore and was defined by inland flooding."
    }
  ],
  forecast: [
    {
      title: "NHC track and intensity forecast",
      body:
        "Forecasters expected little strengthening. Satellite, buoy, ship, and Hurricane Hunter data confirmed tropical-storm-force winds, but Arthur moved over land within roughly 24 hours. The official forecast called for continued northeast motion along or near the Texas coast, then rapid weakening and dissipation after moving inland."
    },
    {
      title: "Why the rainfall forecast mattered most",
      body:
        "Because wind was never the main story, the NWS rainfall graphics and Flash Flood Risk products were the operational centerpieces. The heaviest rain shifted from the upper Texas coast and Louisiana toward Georgia and the Carolinas, meaning the risk area moved even after the center weakened."
    }
  ],
  preparedness: [
    {
      title: "Treat weak storms as flood threats",
      body:
        "Arthur's lesson is that category and wind speed do not equal danger. If you live on the Gulf Coast, keep a flood plan: know your flood zone, elevate valuables, and never drive through flooded roads. A foot of moving water can float most vehicles."
    },
    {
      title: "Watch the rainfall, not just the cone",
      body:
        "The forecast cone shows where the center may go, not where rain will fall. Use NWS local forecasts and flood watches alongside the NHC track, especially when a system is slow or near land."
    },
    {
      title: "Pre-stage before landfall",
      body:
        "Charge devices, fill containers with water, and review your evacuation zone before a tropical storm approaches. Arthur moved fast, leaving little time once warnings were issued."
    }
  ],
  faqs: [
    {
      question: "Was Arthur the first named storm of the 2026 season?",
      answer: "Yes. The National Hurricane Center upgraded Potential Tropical Cyclone One to Tropical Storm Arthur on June 17, 2026, making it the season's first named system."
    },
    {
      question: "Where did Arthur make landfall in 2026?",
      answer: "Arthur made landfall near Freeport, Texas, on June 17, 2026, then weakened rapidly after moving inland over southeast Texas."
    },
    {
      question: "Why was Arthur dangerous if it was only a tropical storm?",
      answer: "Its danger came from rainfall and flooding, not wind. NHC warned of 5–10 inches of rain with isolated totals near 20 inches across the Gulf Coast and Southeast."
    },
    {
      question: "How does 2026 Arthur differ from 2014 Arthur?",
      answer: "2014 Arthur was a Category 2 hurricane that hit North Carolina's Outer Banks with wind and surge, while 2026 Arthur was a Texas-landfalling tropical storm defined by inland flooding."
    },
    {
      question: "Where can I verify Arthur's official data?",
      answer: "Use the National Hurricane Center Tropical Cyclone Report archive and the NHC public advisories linked on this page for the authoritative record."
    }
  ],
  related: [
    { title: "Named storm trackers", href: "/hurricane-tracker/storm/", body: "Open live and archived trackers for active and past named storms." },
    { title: "Live hurricane tracker", href: "/hurricane-tracker/live/", body: "See all active NHC systems, radar, and current advisory links." },
    { title: "Texas hurricane tracker", href: "/tracker/texas/", body: "Texas-specific NWS alerts, surge, and local risk context." },
    { title: "Louisiana hurricane tracker", href: "/tracker/louisiana/", body: "Louisiana coastal alerts and planning context." },
    { title: "Storm surge forecasting", href: "/blog/hurricane-storm-surge-forecasting/", body: "Understand how surge is predicted and why it kills." },
    { title: "Read the hurricane cone", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", body: "Learn what the forecast cone does and does not show." },
    { title: "Storm distance calculator", href: "/tools/storm-distance-calculator/", body: "Compare your location with current NHC storm positions." },
    { title: "Storm archive", href: "/storm-archive/", body: "Browse current and historical storm records in one place." }
  ]
};
