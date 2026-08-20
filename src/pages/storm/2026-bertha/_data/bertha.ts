import type { StormArchive } from "../../2026-arthur/_data/arthur";

export const bertha: StormArchive = {
  name: "Bertha",
  code: "AL022026",
  year: 2026,
  classification: "Tropical Storm",
  status: "Dissipated (July 23, 2026)",
  basin: "Atlantic",
  pronunciation: "BER-tha",
  summary:
    "Tropical Storm Bertha was the second named storm of the 2026 Atlantic hurricane season and one of its more unusual trackers. Instead of recurving out to sea, Bertha spent days grinding westward along the northern Gulf Coast — from the Florida Panhandle to the upper Texas coast — before weakening inland over eastern Texas on July 23, 2026.",
  heroStats: [
    { label: "Peak winds", value: "50 mph (45 kt)" },
    { label: "Min pressure", value: "995 mb" },
    { label: "ACE", value: "2.2 x10⁴ kt²" },
    { label: "Dates", value: "Jul 19–23, 2026" },
    { label: "Track", value: "West along Gulf Coast" },
    { label: "NHC code", value: "AL022026" }
  ],
  live: {
    bulletin:
      "Final NHC record (archived): Bertha was a tropical storm that moved generally westward near or along the northern Gulf Coast for several days. It produced tropical-storm-force winds, coastal flooding, and locally heavy rain from the Florida Panhandle to the upper Texas coast before dissipating inland over eastern Texas.",
    rows: [
      { label: "Classification", value: "Tropical Storm (post-season)" },
      { label: "Peak intensity", value: "50 mph (45 kt), 995 mb" },
      { label: "Final position", value: "Inland over eastern Texas" },
      { label: "Movement", value: "West to west-northwest, 6–13 mph" },
      { label: "Peak rainfall", value: "1–4 in, isolated 6 in" },
      { label: "Storm surge", value: "1–4 ft along the coast" },
      { label: "Direct deaths", value: "3 (NHC Tropical Cyclone Report)" },
      { label: "U.S. damage", value: "Minor (coastal flooding)" }
    ],
    advisoryNumber: "Advisory 18",
    advisoryTime: "July 23, 2026",
    nhcAdvisoryUrl: "https://www.nhc.noaa.gov/text/refresh/MIATCPAT2+shtml/232035.shtml",
    nhcSourceUrl: "https://www.nhc.noaa.gov/data/tcr/index.php?text"
  },
  timeline: [
    { date: "Jul 19, 2026", event: "System organizes in the northeastern Gulf of Mexico and is designated the season's second named storm, Bertha." },
    { date: "Jul 21, 2026", event: "Bertha sits beneath strong shear near the Florida Panhandle; recon places the center near Panama City, Florida." },
    { date: "Jul 22, 2026", event: "Bertha reaches peak intensity near 50 mph and wobbles just south of the Mississippi coast, spreading tropical-storm conditions westward." },
    { date: "Jul 23, 2026 (AM)", event: "Center nears the Louisiana and upper Texas coasts at 45 mph as the system turns west-northwest." },
    { date: "Jul 23, 2026 (PM)", event: "Bertha moves inland over eastern Texas at 40 mph and dissipates, ending a slow coastal grind." }
  ],
  impact: [
    {
      title: "A westward track is the story",
      body:
        "Most Gulf systems are steered north or northeast. Bertha instead rode the southern edge of a strong high over the south-central United States, sliding west along the coast for days. That kept tropical-storm-force winds and coastal flooding threats active across a long stretch of shoreline rather than concentrating them at one landfall."
    },
    {
      title: "Coastal flooding and surge",
      body:
        "Storm surge of 1–4 feet was forecast from the Mouth of the Mississippi River to the Mississippi/Alabama border, with 2–4 feet possible there and around Lake Pontchartrain. The surge depended heavily on timing with the tidal cycle, a reminder that even modest surge can flood low coastal roads and infrastructure."
    },
    {
      title: "Rain and a few tornadoes",
      body:
        "Bertha produced 1–4 inches of rain with isolated 6-inch totals along the Texas and South Texas coast, enough for isolated urban flash flooding. A few tornadoes were possible from the upper Texas coast into southern Louisiana, Mississippi, Alabama, and the western Florida Panhandle as the system tracked west."
    },
    {
      title: "How 2026 Bertha compares with past Bertha storms",
      body:
        "Bertha has appeared as a Gulf hugger, a South Carolina landfaller, and an open-Atlantic hurricane. The 2026 version's slow westward coastal path stands apart from its predecessors, detailed below."
    }
  ],
  historical: [
    {
      year: 2020,
      classification: "Tropical Storm",
      summary:
        "The 2020 Bertha formed off the Southeast coast on May 27 and made landfall near Isle of Palms, South Carolina, just one hour after being named.",
      stats: [
        { label: "Peak winds", value: "50 mph" },
        { label: "Min pressure", value: "1005 mb" },
        { label: "Landfall", value: "Isle of Palms, SC" },
        { label: "Notable", value: "1 death; ~$133k damage" }
      ],
      comparison:
        "2020 Bertha was a quick South Carolina landfall; 2026 Bertha was a multi-day Gulf Coast grinder with no single concentrated landfall."
    },
    {
      year: 2008,
      classification: "Category 1 Hurricane",
      summary:
        "Bertha 2008 was a long-lived July Cape Verde hurricane that became the longest-lived July Atlantic storm on record, remaining mostly over open water.",
      stats: [
        { label: "Peak winds", value: "80 mph (Cat 1)" },
        { label: "Track", value: "Open Atlantic" },
        { label: "Landfall", value: "None" },
        { label: "Notable", value: "Record-long July lifetime" }
      ],
      comparison:
        "2008 Bertha was a powerful open-ocean system; 2026 Bertha was a weak, coast-hugging tropical storm that never reached hurricane strength."
    }
  ],
  forecast: [
    {
      title: "NHC track and intensity forecast",
      body:
        "Forecasters expected Bertha to stay in a hostile environment of strong shear and dry mid-level air, limiting intensification. The official track kept the center near or along the northern Gulf coast, then inland over Texas — a forecast verified as the storm moved west instead of recurving."
    },
    {
      title: "Why a weak storm still needed warnings",
      body:
        "Even at tropical-storm strength, Bertha's long coastal residence meant repeated wind, surge, and rain exposure for the same communities. NWS offices issued coastal flood warnings and tropical-storm warnings that shifted westward day to day."
    }
  ],
  preparedness: [
    {
      title: "Plan for a slow, lingering storm",
      body:
        "Bertha showed that a storm does not need to be strong to affect you for days. Keep supplies, medications, and backup power ready for a multi-day event, not just a 24-hour window."
    },
    {
      title: "Watch the surge timing, not just height",
      body:
        "Coastal flooding from Bertha varied sharply with tide. Learn your evacuation zone and heed NWS coastal flood warnings even when winds are only tropical-storm force."
    },
    {
      title: "Don't ignore the tornado threat",
      body:
        "Weak tropical systems can still spin up tornadoes far from the center. Have multiple ways to receive NWS warnings and a safe interior room identified."
    }
  ],
  faqs: [
    {
      question: "Was Bertha the second named storm of 2026?",
      answer: "Yes. Bertha (AL022026) was the second named storm of the 2026 Atlantic season, following Arthur."
    },
    {
      question: "Why was Bertha's track unusual?",
      answer: "Instead of moving north or northeast, Bertha tracked generally westward along the northern Gulf Coast from Florida to Texas, a path steered by a strong high over the south-central United States."
    },
    {
      question: "Did Bertha make landfall in 2026?",
      answer: "Bertha moved inland over eastern Texas on July 23, 2026, after days near the Gulf Coast, rather than making a single concentrated landfall."
    },
    {
      question: "How does 2026 Bertha differ from 2020 Bertha?",
      answer: "2020 Bertha made a quick landfall near Charleston, South Carolina, while 2026 Bertha was a slow, coast-hugging Gulf system that lasted several days."
    },
    {
      question: "Where can I verify Bertha's official data?",
      answer: "The NHC public advisories and the Tropical Cyclone Report archive linked on this page provide the authoritative record for Bertha."
    }
  ],
  related: [
    { title: "Named storm trackers", href: "/hurricane-tracker/storm/", body: "Open live and archived trackers for active and past named storms." },
    { title: "Live hurricane tracker", href: "/hurricane-tracker/live/", body: "See all active NHC systems, radar, and current advisory links." },
    { title: "Louisiana hurricane tracker", href: "/tracker/louisiana/", body: "Louisiana coastal alerts and planning context." },
    { title: "Florida hurricane tracker", href: "/tracker/florida/", body: "Florida-specific NWS alerts, surge, and local risk context." },
    { title: "Storm surge checker", href: "/tools/storm-surge-checker/", body: "Estimate surge risk for your coast." },
    { title: "Saffir-Simpson scale", href: "/blog/saffir-simpson-hurricane-wind-scale-explained/", body: "Why wind category is only part of the risk picture." },
    { title: "Storm distance calculator", href: "/tools/storm-distance-calculator/", body: "Compare your location with current NHC storm positions." },
    { title: "Storm archive", href: "/storm-archive/", body: "Browse current and historical storm records in one place." }
  ]
};
