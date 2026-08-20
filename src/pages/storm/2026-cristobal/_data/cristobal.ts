import type { StormArchive } from "../../2026-arthur/_data/arthur";

export const cristobal: StormArchive = {
  name: "Cristobal",
  code: "AL032026",
  year: 2026,
  classification: "Tropical Storm",
  status: "Dissipated (August 13, 2026)",
  basin: "Atlantic",
  pronunciation: "kris-toh-BAHL",
  summary:
    "Tropical Storm Cristobal was the third named storm of the 2026 Atlantic hurricane season and a classic \"fish storm.\" It formed over the central subtropical North Atlantic on August 12, 2026, far from land, and dissipated within about a day as it ran into cooler water, dry air, and wind shear. Despite the name, it posed no threat to the United States.",
  heroStats: [
    { label: "Peak winds", value: "45 mph (40 kt)" },
    { label: "Min pressure", value: "1008 mb" },
    { label: "ACE", value: "0.4 x10⁴ kt²" },
    { label: "Dates", value: "Aug 12–13, 2026" },
    { label: "Track", value: "East to ENE, open Atlantic" },
    { label: "NHC code", value: "AL032026" }
  ],
  live: {
    bulletin:
      "Final NHC record (archived): Cristobal developed from Invest 93L roughly 1,000 miles west of the Azores and raced eastward across the central subtropical Atlantic at 20–25 mph. It was short-lived, with no coastal watches or warnings, and dissipated over cooler water on August 13.",
    rows: [
      { label: "Classification", value: "Tropical Storm (post-season)" },
      { label: "Peak intensity", value: "45 mph (40 kt), ~1008 mb" },
      { label: "Final position", value: "~610 mi west of the Azores" },
      { label: "Movement", value: "East to ENE, 20–25 mph" },
      { label: "Land threat", value: "None" },
      { label: "Watches/warnings", value: "None in effect" },
      { label: "Direct deaths", value: "0 (NHC Tropical Cyclone Report)" },
      { label: "U.S. damage", value: "None" }
    ],
    advisoryNumber: "Final public advisory",
    advisoryTime: "August 13, 2026",
    nhcAdvisoryUrl: "https://www.nhc.noaa.gov/text/refresh/MIATCPAT3+shtml/121500.shtml",
    nhcSourceUrl: "https://www.nhc.noaa.gov/data/tcr/index.php?text"
  },
  timeline: [
    { date: "Aug 11, 2026", event: "Disturbance east of Bermuda gains organization and is tagged Invest 93L." },
    { date: "Aug 12, 2026 (AM)", event: "NHC begins advisories on Tropical Storm Cristobal, the season's third named storm, over the subtropical Atlantic." },
    { date: "Aug 12, 2026 (PM)", event: "Cristobal reaches peak winds near 45 mph while moving east at roughly 20 mph; no land threat is expected." },
    { date: "Aug 13, 2026 (AM)", event: "Cristobal weakens to a tropical depression about 610 miles west of the Azores as conditions deteriorate." },
    { date: "Aug 13, 2026", event: "System dissipates over cooler water, ending a brief life as a fish storm." }
  ],
  impact: [
    {
      title: "No land impact, but a useful signal",
      body:
        "Cristobal never approached a coastline, so its direct impact was zero. Yet its formation mattered: it emerged from a northern disturbance while a separate, more closely watched system (Invest 92L) was organizing much farther south. The northern storm reached named status first, claiming the Cristobal slot and leaving the southern system to become Dolly."
    },
    {
      title: "Why it was short-lived",
      body:
        "Cristobal formed over marginal sea-surface temperatures near 77°F and quickly encountered progressively cooler water, dry air, and increasing wind shear. That hostile trio is the standard recipe for a quick demise in the subtropical Atlantic, and the NHC forecast correctly called dissipation within about a day."
    },
    {
      title: "Season context",
      body:
        "Cristobal formed during a below-normal 2026 season shaped by a strong El Niño. By mid-August the Atlantic had produced only three named storms — Arthur, Bertha, and Cristobal — all tropical storms, with no hurricanes yet. The season's traditional peak was just beginning."
    },
    {
      title: "How 2026 Cristobal compares with past Cristobal storms",
      body:
        "The name Cristobal has ranged from a harmless open-ocean system to a Louisiana landfaller. The 2026 version was the harmless kind, but the contrast with 2020 is stark, as shown below."
    }
  ],
  historical: [
    {
      year: 2020,
      classification: "Tropical Storm",
      summary:
        "Cristobal 2020 formed from the remnants of Eastern Pacific Tropical Storm Amanda, crossed into the Gulf of Mexico, and made landfall in southeast Louisiana on June 7.",
      stats: [
        { label: "Peak winds", value: "50 mph" },
        { label: "Min pressure", value: "992 mb" },
        { label: "Landfall", value: "Grand Isle, Louisiana" },
        { label: "Notable", value: "3 U.S. deaths; ~$665M damage" }
      ],
      comparison:
        "2020 Cristobal was a damaging U.S. landfall with Midwest flooding and a derecho; 2026 Cristobal was a no-land-impact fish storm."
    },
    {
      year: 2014,
      classification: "Category 1 Hurricane",
      summary:
        "Cristobal 2014 reached hurricane strength in the Atlantic, affecting the Bahamas and Bermuda with one direct death before becoming a powerful extratropical low.",
      stats: [
        { label: "Peak winds", value: "80 mph (Cat 1)" },
        { label: "Track", value: "Atlantic, then N. Atlantic" },
        { label: "Landfall", value: "None (Bahamas/Bermuda near-miss)" },
        { label: "Notable", value: "1 death" }
      ],
      comparison:
        "2014 Cristobal briefly became a hurricane in the open Atlantic; 2026 Cristobal stayed a weak tropical storm and dissipated even faster."
    }
  ],
  forecast: [
    {
      title: "NHC track and intensity forecast",
      body:
        "The official forecast called for Cristobal to move east to east-northeast across the central subtropical Atlantic, then turn toward the northeast and slow as it rounded the northern Atlantic ridge. Gradual weakening was expected as the storm met cooler water, dry air, and shear — a forecast that verified almost exactly."
    },
    {
      title: "What a fish storm still teaches",
      body:
        "Even systems that never threaten land reinforce why we watch the whole basin: Cristobal's formation reshuffled the naming order and reminded forecasters that the peak of season was arriving even in a quiet year."
    }
  ],
  preparedness: [
    {
      title: "Don't wait for a near-coast storm",
      body:
        "Cristobal was harmless, but the 2026 season still had months to run. Use quiet stretches to build your kit, review evacuation zones, and confirm alert settings before a system actually threatens."
    },
    {
      title: "Follow the right source for your area",
      body:
        "When a storm is far out, NHC issues the advisories; when it nears you, your local NWS office issues the alerts that matter. Know both pathways and use the live tracker to bridge them."
    },
    {
      title: "Treat El Niño seasons as still dangerous",
      body:
        "A below-normal forecast does not mean a safe season. Arthur, Bertha, and Cristobal all showed that even weak, short-lived storms can matter — and a single major hurricane can define a year."
    }
  ],
  faqs: [
    {
      question: "Was Cristobal a threat to the United States in 2026?",
      answer: "No. Cristobal formed over the open subtropical Atlantic and dissipated over cooler water. The NHC issued no coastal watches or warnings for it."
    },
    {
      question: "Why was Cristobal short-lived?",
      answer: "It formed over marginal ocean temperatures and quickly encountered cooler water, dry air, and wind shear, the standard ingredients for rapid weakening in the subtropical Atlantic."
    },
    {
      question: "How was Cristobal different from 2020 Cristobal?",
      answer: "2020 Cristobal made landfall in Louisiana and caused significant U.S. flooding and damage, while 2026 Cristobal was a harmless fish storm that never approached land."
    },
    {
      question: "What was Invest 92L in the Cristobal story?",
      answer: "Invest 92L was a separate, more-watched disturbance farther south. Because Cristobal (Invest 93L) reached named status first, the southern system later became Tropical Storm Dolly instead."
    },
    {
      question: "Where can I verify Cristobal's official data?",
      answer: "The NHC public advisories and the Tropical Cyclone Report archive linked on this page provide the authoritative record for Cristobal."
    }
  ],
  related: [
    { title: "Named storm trackers", href: "/hurricane-tracker/storm/", body: "Open live and archived trackers for active and past named storms." },
    { title: "Live hurricane tracker", href: "/hurricane-tracker/live/", body: "See all active NHC systems, radar, and current advisory links." },
    { title: "Tropical disturbances", href: "/hurricane-tracker/tropical-disturbances/", body: "Track invests and systems before they are named." },
    { title: "2026 season tracker", href: "/blog/below-normal-hurricane-season-2026-real-time-tracker/", body: "Follow the below-normal 2026 Atlantic season in real time." },
    { title: "Read the hurricane cone", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", body: "Learn what the forecast cone does and does not show." },
    { title: "Spaghetti models", href: "/blog/how-to-read-hurricane-spaghetti-models/", body: "Understand ensemble and consensus forecast guidance." },
    { title: "Storm distance calculator", href: "/tools/storm-distance-calculator/", body: "Compare your location with current NHC storm positions." },
    { title: "Storm archive", href: "/storm-archive/", body: "Browse current and historical storm records in one place." }
  ]
};
