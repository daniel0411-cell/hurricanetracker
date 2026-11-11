import type { StormArchive } from "../../2026-arthur/_data/arthur";

export const bertha: StormArchive = {
  name: "Bertha",
  code: "AL022026",
  year: 2026,
  classification: "Tropical Storm",
  status: "Remnants at final advisory (0300 UTC July 24)",
  basin: "Atlantic",
  pronunciation: "BER-tha",
  summary:
    "Read Bertha's last two public advisories as a six-hour comparison. At 2100 UTC July 23, Advisory 18 reported a tropical storm north of Galveston with 40 mph winds. At 0300 UTC July 24, Advisory 19 described remnants west-northwest of Houston with 35 mph winds and ended NHC public advisories. The rainfall and elevated-water forecasts continued. These dated operational estimates are separate from provisional season peaks and verified impacts.",
  heroStats: [
    { label: "Peak winds", value: "60 mph (50 kt; season summary)" },
    { label: "Min pressure", value: "995 mb" },
    { label: "ACE", value: "2.2 x10⁴ kt²" },
    { label: "Dates", value: "Jul 19–23, 2026" },
    { label: "Track", value: "West along Gulf Coast" },
    { label: "NHC code", value: "AL022026" }
  ],
  live: {
    bulletin:
      "Historical example: public advisories 18 and 19 were checked November 11, 2026. Advisory 19 identifies a trough, discontinues all coastal watches and warnings, and retains rainfall, elevated-water and surf concerns. The peak of 50 kt and minimum pressure of 995 mb below come from the separate season-summary check on October 24, not this final bulletin. This page provides neither a final storm-specific report nor a verified casualty total.",
    rows: [
      { label: "Final public advisory classification", value: "Remnants of Bertha; trough" },
      { label: "Peak intensity", value: "60 mph (50 kt), 995 mb; season summary" },
      { label: "Final public advisory position", value: "30.0N, 96.0W; 40 mi WNW of Houston" },
      { label: "Final advisory movement", value: "West at 14 mph; 0300 UTC Jul 24" },
      { label: "Rainfall observations", value: "No verified event maximum presented here" },
      { label: "Surge observations", value: "No verified event maximum presented here" },
      { label: "Direct deaths", value: "Not verified here; blank source fields do not mean zero" },
      { label: "U.S. damage", value: "No verified loss estimate presented here" }
    ],
    advisoryNumber: "19 - final public advisory",
    advisoryTime: "0300 UTC July 24, 2026 (10 PM CDT July 23)",
    nhcAdvisoryUrl: "https://www.nhc.noaa.gov/archive/2026/al02/al022026.public.019.shtml",
    nhcSourceUrl: "https://www.nhc.noaa.gov/data/tcr/index.php?season=2026&basin=atl"
  },
  timeline: [
    { date: "Jul 23, 2026, 4 PM CDT (2100 UTC)", event: "Advisory 18 locates the tropical storm at 29.8N, 94.7W, about 35 miles north of Galveston. Maximum sustained wind is 40 mph, movement west-northwest at 13 mph, pressure 1006 mb." },
    { date: "Jul 23, 2026, 10 PM CDT (Jul 24, 0300 UTC)", event: "NHC final public advisory 19 identifies a trough with 35 mph maximum sustained winds, about 40 miles west-northwest of Houston. Local rainfall and surf hazards can continue after NHC advisories end." }
  ],
  impact: [
    {
      title: "Reading task: what changed over six hours?",
      body:
        "Compare Advisory 18 at 2100 UTC July 23 with Advisory 19 at 0300 UTC July 24. Answer: maximum sustained wind decreased from 40 to 35 mph, pressure rose from 1006 to 1008 mb, and the classification changed from tropical storm to remnants. Both were issued on July 23 in CDT; UTC crosses midnight. The later 14 mph westward movement is the speed of the system, not its wind speed. Two center positions alone do not locate an exact coastal crossing or explain the full steering pattern."
    },
    {
      title: "Coastal flooding and surge",
      body:
        "Advisory 19 says water levels along the Upper Texas coast could remain elevated through the next high-tide cycle, and dangerous surf and rip currents would continue. This is a forecast tied to that bulletin, not a measured peak inundation depth. Its cancellation of coastal watches and warnings does not establish that every beach, road or property was safe. A measured water-level claim needs a station, reference datum and observation time."
    },
    {
      title: "Rain and a few tornadoes",
      body:
        "Advisory 19 forecasts 1-3 inches of rain with isolated amounts of 4 inches across South Texas that night, potentially causing flash flooding. These are forecast amounts, not a verified event maximum. To investigate an actual impact, record the station or community, accumulation interval, report time and whether the value was measured or estimated. This archive does not supply an observed tornado count."
    },
    {
      title: "How 2026 Bertha compares with past Bertha storms",
      body:
        "The same name identifies separate systems. The 2020 report supplies a post-season South Carolina landfall estimate, while the two 2026 bulletins describe operational snapshots near Texas. Compare like quantities and preserve the year, storm identifier and type of source rather than treating the name as a recurring track."
    }
  ],
  historical: [
    {
      year: 2020,
      classification: "Tropical Storm",
      summary:
        "NHC's AL022020 report (Synoptic History, PDF page 2; checked November 11) places tropical-cyclone formation at 0600 UTC May 27 and landfall near Isle of Palms around 1330 UTC. That is about 7.5 hours from analyzed formation to landfall, not an interval measured from the first naming announcement.",
      stats: [
        { label: "Peak winds", value: "50 mph" },
        { label: "Min pressure", value: "1005 mb" },
        { label: "Landfall", value: "Isle of Palms, SC" },
        { label: "Source", value: "NHC AL022020 report, revised July 8, 2026; impact totals not reproduced" }
      ],
      comparison:
        "The 2020 report estimates 45 kt at the South Carolina landfall. That is a landfall intensity; the 2026 provisional peak of 50 kt is a lifetime maximum. Their 5 kt difference does not compare winds at the same stage or place."
    },
    {
      year: 2008,
      classification: "Category 3 Hurricane",
      summary:
        "Bertha 2008 was a long-lived July Cape Verde hurricane that became the longest-lived July Atlantic storm on record, remaining mostly over open water.",
      stats: [
        { label: "Peak winds", value: "125 mph (110 kt; Cat 3)" },
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
        "The final public advisory identified a trough inland near Houston moving west at 14 mph. Earlier advisories describe the forecasts issued at their own timestamps. Compare those predictions with later best-track analysis when available; this archive does not present a formal verification of forecast accuracy."
    },
    {
      title: "Why a weak storm still needed warnings",
      body:
        "Advisory 18 still carries a Tropical Storm Warning from the Vermilion/Cameron Parish line to Sargent, Texas. Advisory 19 cancels coastal watches and warnings but keeps a rainfall forecast and elevated-water concerns. Read the product change alongside the hazards section; a coastal cancellation does not cancel a separate local flood product."
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
        "Storm surge and the astronomical tide combine to affect water levels; a forecast surge range is not an observed flood depth at a home. Learn your evacuation zone and follow local coastal flood and evacuation instructions even when winds are only tropical-storm force."
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
      question: "What can the final two Bertha advisories tell me about its track?",
      answer: "They give two operational positions six hours apart, north of Galveston and west-northwest of Houston, with west-northwest then westward motion. They do not alone establish a complete coastwide track, its steering mechanism or an exact landfall point."
    },
    {
      question: "Did Bertha make landfall in 2026?",
      answer: "The final two bulletins locate the center inland near Galveston and Houston. To assign an exact landfall time, position and intensity, use the full official track or later storm-specific report rather than interpolating between these two snapshots."
    },
    {
      question: "How does 2026 Bertha differ from 2020 Bertha?",
      answer: "NHC's 2020 report places formation at 0600 UTC and South Carolina landfall around 1330 UTC May 27 at 45 kt. The 2026 final bulletins concern Texas. Keep those post-season estimates separate from the 2026 operational snapshots and provisional peak."
    },
    {
      question: "Where can I verify Bertha's official data?",
      answer: "Use the fixed 2026 Bertha advisory archive and NHC season-summary link. Historical comparisons can be checked in NHC's 2008 and 2020 report archives. Operational advisories and provisional season statistics are not a final Tropical Cyclone Report; this page does not claim verified casualty or loss totals."
    }
  ],
  related: [
    { title: "Named storm trackers", href: "/hurricane-tracker/storm/", body: "Open live and archived trackers for active and past named storms." },
    { title: "Live hurricane tracker", href: "/hurricane-tracker/live/", body: "See all active NHC systems, radar, and current advisory links." },
    { title: "Louisiana hurricane tracker", href: "/tracker/louisiana/", body: "Louisiana coastal alerts and planning context." },
    { title: "Florida hurricane tracker", href: "/tracker/florida/", body: "Florida-specific NWS alerts, surge, and local risk context." },
    { title: "Storm surge checker", href: "/tools/storm-surge-checker/", body: "Screen NWS alerts at a ZIP representative point; verify your address with official local resources." },
    { title: "Saffir-Simpson scale", href: "/blog/saffir-simpson-hurricane-wind-scale-explained/", body: "Why wind category is only part of the risk picture." },
    { title: "Storm distance calculator", href: "/tools/storm-distance-calculator/", body: "Compare your location with current NHC storm positions." },
    { title: "Storm archive", href: "/storm-archive/", body: "Browse current and historical storm records in one place." }
  ]
};
