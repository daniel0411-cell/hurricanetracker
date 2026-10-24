import type { StormArchive } from "../../2026-arthur/_data/arthur";

export const cristobal: StormArchive = {
  name: "Cristobal",
  code: "AL032026",
  year: 2026,
  classification: "Tropical Storm",
  status: "Post-tropical at final advisory (August 13, 2026)",
  basin: "Atlantic",
  pronunciation: "kris-toh-BAHL",
  summary:
    "Tropical Storm Cristobal was the third named storm of the 2026 Atlantic hurricane season. It formed over the subtropical North Atlantic on August 12. At 1500 UTC August 13, NHC classified it as a post-tropical remnant low and ended advisories, forecasting dissipation later that night. No coastal watches or warnings were in effect in that final advisory; this does not establish a total of all marine or remote impacts.",
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
      "Historical planning archive, source check October 24, 2026: NHC's season summary lists Cristobal at 40 kt (about 45 mph) and 1008 mb. The advisory archive documents the short-lived open-Atlantic system. Season statistics are subject to revision; this page does not present an unlinked final Tropical Cyclone Report or infer zero casualties from a blank season-table entry.",
    rows: [
      { label: "Classification", value: "Tropical Storm (season summary; provisional)" },
      { label: "Peak intensity", value: "45 mph (40 kt), ~1008 mb" },
      { label: "Final advisory position", value: "39.4N 36.8W; 535 mi WNW of the Azores" },
      { label: "Final advisory movement", value: "Northeast at 16 mph; 1500 UTC Aug 13" },
      { label: "Final advisory intensity", value: "30 mph, 1018 mb; post-tropical remnant low" },
      { label: "Coastal watches/warnings at final advisory", value: "None in effect (historical, not a current alert)" },
      { label: "Direct deaths", value: "No verified total presented here" },
      { label: "U.S. damage", value: "No verified loss estimate presented here" }
    ],
    advisoryNumber: "Archived advisories and season summary",
    advisoryTime: "Sources checked October 24, 2026",
    nhcAdvisoryUrl: "https://www.nhc.noaa.gov/archive/2026/al03/al032026.public.005.shtml",
    nhcSourceUrl: "https://www.nhc.noaa.gov/data/tcr/index.php?season=2026&basin=atl"
  },
  timeline: [
    { date: "Aug 11, 2026", event: "Disturbance east of Bermuda gains organization and is tagged Invest 93L." },
    { date: "Aug 12, 2026 (AM)", event: "NHC begins advisories on Tropical Storm Cristobal, the season's third named storm, over the subtropical Atlantic." },
    { date: "Aug 12, 2026 (PM)", event: "Cristobal reaches peak winds near 45 mph while moving east at roughly 20 mph; no land threat is expected." },
    { date: "Aug 13, 2026 (AM)", event: "Cristobal weakens to a tropical depression about 610 miles west of the Azores as conditions deteriorate." },
    { date: "Aug 13, 2026, 1500 UTC", event: "Final NHC advisory 5 identifies a post-tropical remnant low with 30 mph winds and 1018 mb pressure, 535 miles west-northwest of the Azores. Dissipation later that night is a forecast in this bulletin, not an observed final time." }
  ],
  impact: [
    {
      title: "Open-ocean track and limits of impact accounting",
      body:
        "Cristobal remained an open-ocean system in the reviewed archive. That describes its track, not a verified total of all possible marine or remote impacts. Naming order follows the development of individual systems, rather than the amount of attention an earlier disturbance receives. Check advisory times and basin identifiers when comparing simultaneous disturbances."
    },
    {
      title: "What the final advisory establishes",
      body:
        "At 1500 UTC August 13, the final advisory identified a post-tropical remnant low with 30 mph winds. It forecast dissipation later that night. Use the archived forecast discussions to examine the expected environment; the final public advisory alone does not verify the later dissipation time or a forecast accuracy claim."
    },
    {
      title: "Season context",
      body:
        "Cristobal formed during a quiet opening to the 2026 Atlantic season. By mid-August the basin had produced only three named storms — Arthur, Bertha, and Cristobal — all tropical storms, with no hurricanes yet. The season's traditional peak was just beginning."
    },
    {
      title: "How 2026 Cristobal compares with past Cristobal storms",
      body:
        "Cristobal 2020 made landfall in Louisiana; the reviewed 2026 advisories describe an open-ocean system. Compare track and intensity separately from casualty, damage, or marine-impact accounting."
    }
  ],
  historical: [
    {
      year: 2020,
      classification: "Tropical Storm",
      summary:
        "Cristobal 2020 formed from the remnants of Eastern Pacific Tropical Storm Amanda, crossed into the Gulf of Mexico, and made landfall in southeast Louisiana on June 7.",
      stats: [
        { label: "Peak winds", value: "60 mph (50 kt)" },
        { label: "Min pressure", value: "988 mb" },
        { label: "Landfall", value: "Grand Isle, Louisiana" },
        { label: "Source", value: "NHC 2020 season archive; impact totals not reproduced" }
      ],
      comparison:
        "2020 Cristobal made a Louisiana landfall and carried rainfall inland; the reviewed 2026 archive describes an open-ocean system. This comparison concerns track and intensity, not an attribution of every later inland weather event."
    },
    {
      year: 2014,
      classification: "Category 1 Hurricane",
      summary:
        "Cristobal 2014 reached hurricane strength in the Atlantic before becoming an extratropical system. Use the storm-specific NHC report for impact and casualty accounting rather than inferring those totals from the track.",
      stats: [
        { label: "Peak winds", value: "80 mph (Cat 1)" },
        { label: "Track", value: "Atlantic, then N. Atlantic" },
        { label: "Landfall", value: "None (Bahamas/Bermuda near-miss)" },
        { label: "Source", value: "NHC 2014 storm report archive" }
      ],
      comparison:
        "2014 Cristobal reached hurricane strength; the provisional 2026 season summary lists a tropical-storm peak of 40 kt. The final 2026 advisory identified a post-tropical remnant low, a different milestone from complete dissipation."
    }
  ],
  forecast: [
    {
      title: "NHC track and intensity forecast",
      body:
        "The final public advisory forecast continued northeastward movement and dissipation later that night. That is an operational prediction, not a post-season verification score. Use the dated forecast discussions for the reasoning at each advisory time and a later storm report, when available, for best-track analysis."
    },
    {
      title: "Keep the advisory and storm identifier together",
      body:
        "Use the basin identifier AL032026 and the advisory timestamp when reading this archive. A storm's naming order does not measure local danger or predict the next system's impacts. Check the current NHC outlook separately from this historical account."
    }
  ],
  preparedness: [
    {
      title: "Don't wait for a near-coast storm",
      body:
        "An open-ocean track does not determine the risk from the next system. Use quiet stretches to build your kit, review evacuation zones, and confirm alert settings before a system threatens your area."
    },
    {
      title: "Follow the right source for your area",
      body:
        "Read NHC advisories together with local NWS warnings and local emergency management instructions. NHC information remains relevant near land, while local products add detail for your community. Use the live tracker to find the current sources."
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
      answer: "The final advisory located the post-tropical remnant low west-northwest of the Azores and listed no coastal watches or warnings. It forecast later dissipation. That bulletin does not provide a complete accounting of every marine or remote impact."
    },
    {
      question: "Why was Cristobal short-lived?",
      answer: "The reviewed season summary and final advisory document a short tropical-storm phase ending with a post-tropical remnant low on August 13. For the environmental explanation, consult the dated NHC forecast discussions; do not treat a forecast dissipation time as an observed outcome."
    },
    {
      question: "How was Cristobal different from 2020 Cristobal?",
      answer: "2020 Cristobal made landfall in Louisiana and reached 50 kt. The 2026 season summary lists 40 kt and its final advisory describes an open-ocean remnant low. These track and intensity comparisons do not establish casualty or damage totals."
    },
    {
      question: "How do I distinguish Cristobal from other disturbances?",
      answer: "Match the basin identifier AL032026 and advisory timestamp. Invest numbers identify monitored disturbances and can be reused; naming order alone is not enough to establish the history of a separate system."
    },
    {
      question: "Where can I verify Cristobal's official data?",
      answer: "Use the fixed 2026 Cristobal advisory archive and the NHC 2026 season-summary link. For the historical comparisons, use the 2020 and 2014 NHC report archives. A final operational advisory is different from a post-season Tropical Cyclone Report, and blank impact fields do not establish zero losses."
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
