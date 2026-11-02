export type StormTrackerPage = {
  slug: string;
  name: string;
  basin: string;
  // 可选：覆盖 [storm].astro 默认 title/description 模板。未提供则回退到模板生成。
  title?: string;
  description?: string;
  primaryKeywords: string[];
  searchDemandNote: string;
  overview: string;
  trackerFocus: string[];
  historicalReport?: {
    year: number;
    stormId: string;
    title: string;
    url: string;
    reportDate: string;
    checkedOn: string;
    summary: string;
    timeline: Array<{ date: string; event: string }>;
    lessons: Array<{ heading: string; body: string }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const stormTrackerPages: StormTrackerPage[] = [
  {
    slug: "erin",
    name: "Erin",
    basin: "Atlantic",
    primaryKeywords: ["hurricane erin tracker", "hurricane erin tracker map", "hurricane erin forecast"],
    searchDemandNote:
      "Erin tracker queries often spike around active Atlantic advisories, path-map searches, and forecast-update checks.",
    overview:
      "Check Erin's current-feed status separately from the sourced 2025 historical record below. Storm names can refer to different years; confirm the year and basin identifier before comparing an advisory, map or report. The historical timeline describes NHC's post-season analysis, not today's storm position.",
    historicalReport: {
      year: 2025,
      stormId: "AL052025",
      title: "NHC Tropical Cyclone Report: Hurricane Erin, 11-22 August 2025",
      url: "https://www.nhc.noaa.gov/data/tcr/AL052025_Erin.pdf",
      reportDate: "2026-01-30",
      checkedOn: "2026-11-02",
      summary: "NHC's post-season report describes a Category 5 hurricane with a peak intensity of 140 kt and minimum pressure of 913 mb on August 16. Erin later expanded while recurving offshore of the U.S. East Coast. The report's January 30 revision corrects official intensity-forecast verification; it is a revised historical analysis, not a live advisory. Dates and intensities below come from its Synoptic History section (PDF pages 2-3).",
      timeline: [
        { date: "11 August 2025, 0000-0600 UTC", event: "A depression formed southwest of Sal, then became a tropical storm while making landfall on Santo Antao in the Cabo Verde Islands by 0600 UTC." },
        { date: "15 August 2025, 1200 UTC", event: "Erin became a hurricane about 375 nautical miles east of the northernmost Leeward Islands." },
        { date: "16 August 2025, around 1800 UTC", event: "Peak intensity reached 140 kt (Category 5), with about 913 mb minimum pressure. These are the cyclone's peak values, not measured winds at every coastal location." },
        { date: "21 August 2025, around 0600 UTC", event: "The center passed about 175 nautical miles southeast of Cape Hatteras. The western circulation brought tropical-storm conditions to parts of the North Carolina and mid-Atlantic coastline." },
        { date: "22 August 2025, around 1800 UTC", event: "Erin became a hurricane-force extratropical cyclone. Extratropical is a structural classification; it did not mean the winds or ocean hazards immediately ended." }
      ],
      lessons: [
        { heading: "An Offshore Center Did Not Keep Coastal Roads Dry", body: "The report's damage discussion (PDF page 5) records North Carolina Highway 12 flooding and closure at Oregon Inlet, with large surf and surge affecting the Outer Banks. This is evidence of a past road impact despite an offshore center, not evidence that Highway 12 is closed or safe today. For a current trip, obtain the road operator's present status and local instructions." },
        { heading: "A Tide-Gauge Number Is Not Water Depth Inside a Home", body: "The report's Storm Surge section (PDF pages 4-5) gives Duck, North Carolina, a peak water level of 3.4 feet relative to Mean Higher High Water (MHHW). That reference level is not ground level or a building's floor. Do not convert it into 3.4 feet of flooding at an address or compare it directly with an above-ground inundation map. Peak cyclone wind, local wind, gauge water level and property flooding are different measurements." }
      ]
    },
    trackerFocus: [
      "Check whether the current NHC feed lists Erin as an active tropical cyclone.",
      "Use the live tracker and radar pages for current position, satellite, and alert context.",
      "Pair any Erin forecast with local NWS alerts before making evacuation or shelter decisions.",
      "Use the storm distance calculator for approximate location context, not as a landfall forecast."
    ],
    faqs: [
      {
        question: "Is Hurricane Erin active right now?",
        answer:
          "Check the live status section on this page and the official NHC advisory links. If no active Erin record appears, NHC is not listing Erin in the current HurricaneHub feed."
      },
      {
        question: "Where can I see a Hurricane Erin tracker map?",
        answer:
          "Use HurricaneHub's live tracker and radar pages for map context, then verify official forecast positions and watches directly with the National Hurricane Center."
      },
      {
        question: "Can this page predict where Erin will make landfall?",
        answer:
          "No. This page organizes official tracking sources and decision tools, but NHC forecasts and local emergency management guidance control landfall and evacuation information."
      }
    ]
  },
  {
    slug: "melissa",
    name: "Melissa",
    basin: "Atlantic",
    primaryKeywords: ["hurricane melissa tracker live", "hurricane melissa tracker", "hurricane melissa live"],
    searchDemandNote:
      "Melissa searches show strong live-tracker intent, especially for live maps, satellite context, and rapid status checks.",
    overview:
      "Check Melissa's current-feed status and verify dated advisories with NHC. Confirm the storm year before comparing maps or reports. When no active Melissa record is available, use the official archive for historical observations and current local alerts for present-day safety decisions.",
    trackerFocus: [
      "Look for active NHC Melissa records in the current storm feed.",
      "Open radar and satellite views to compare storm structure with official advisories.",
      "Check local NWS watches and warnings before changing household plans.",
      "Save key links before conditions affect power, mobile service, or travel."
    ],
    faqs: [
      {
        question: "Where is Hurricane Melissa now?",
        answer:
          "If Melissa is active, the latest position should appear in the current NHC storm feed and official advisory links. If not, use the NHC tropical outlook for basin monitoring."
      },
      {
        question: "Does HurricaneHub show Hurricane Melissa live satellite imagery?",
        answer:
          "HurricaneHub links storm tracking with radar and satellite views, but official storm intensity and forecast information should be confirmed with NHC advisories."
      },
      {
        question: "Should I evacuate because Melissa appears on a tracker?",
        answer:
          "No. Evacuation decisions depend on local orders, storm surge zones, housing type, medical needs, and NWS alerts, not only a storm appearing on a map."
      }
    ]
  },
  {
    slug: "isaias",
    name: "Isaias",
    basin: "Atlantic",
    title: "Isaias 2026 Tracker: Post-Tropical Status & Flood Risk",
    description: "Review Isaias's 2026 post-tropical status, final NHC advisory, continuing WPC updates, inland flood risk, local alerts and hurricane recovery resources.",
    primaryKeywords: ["tropical storm isaias tracker", "hurricane isaias path", "isaias live tracker", "where is tropical storm isaias now"],
    searchDemandNote:
      "Use this page for Isaias's 2026 observed track, post-tropical status, final NHC advisory, continuing WPC updates and inland flood-risk context.",
    overview:
      "Isaias formed from Tropical Depression Nine in the southwestern Gulf on October 7, 2026, and later became a hurricane. NHC's final Advisory 15 on October 10 classified it as post-tropical over Alabama. WPC took over continuing updates; flooding and other local hazards can persist after the tropical phase ends.",
    trackerFocus: [
      "Check the displayed position and advisory time, then verify continuing post-tropical forecasts with the Weather Prediction Center and local National Weather Service office.",
      "NHC's final Advisory 15, issued at 0900 UTC on October 10, reported Post-Tropical Cyclone Isaias over central Alabama with 30 kt winds and 1002 mb pressure. Later WPC observations are separate updates, not the final NHC position.",
      "At Advisory 15, all coastal watches and warnings had been discontinued. This does not mean local flood warnings or other hazards have ended; check current NWS products before returning home or driving.",
      "The final NHC discussion highlighted heavy rain spreading into the Tennessee Valley, Southern Appalachians and Southeast, with flash and urban flooding and possible Appalachian landslides. Use current WPC rainfall forecasts and local alerts rather than treating earlier storm-total forecasts as new rainfall still to come.",
      "Swells can create life-threatening surf and rip currents far from the center. Compare the forecast track with the cone, wind field, rainfall, surge, surf, and local-alert products rather than using the center line as an impact boundary.",
      "Historical Isaias storms include Hurricane Isaias in 2020, which affected the Caribbean and the U.S. East Coast. That track does not predict the path, strength, or impacts of the 2026 storm."
    ],
    faqs: [
      {
        question: "Where can I find the latest Isaias position?",
        answer:
          "The status section shows the latest available feed observation and timestamp. Isaias is post-tropical; follow the Weather Prediction Center for continuing updates and local NWS alerts for immediate hazards."
      },
      {
        question: "Did Isaias become a hurricane in 2026?",
        answer:
          "Yes. NHC Advisory 12 on October 9 identified Isaias as a Category 3 hurricane with 120 mph sustained winds. It later weakened inland and became post-tropical; that earlier hurricane intensity is historical, not its current strength."
      },
      {
        question: "Are watches or warnings in effect for Isaias?",
        answer:
          "NHC's final Advisory 15 on October 10 reported no coastal watches or warnings in effect. Local flood warnings and other NWS alerts are separate and may persist after coastal warnings are discontinued."
      },
      {
        question: "Which U.S. areas could receive heavy rain from Isaias?",
        answer:
          "The final NHC discussion highlighted the Tennessee Valley, Southern Appalachians and Southeast, including possible flash flooding and landslides. Follow current WPC rainfall products and local NWS alerts for amounts, timing and warnings in your area."
      },
      {
        question: "Does Isaias have the same path as the 2020 storm?",
        answer:
          "No. The 2020 Hurricane Isaias track does not predict the 2026 storm. Use only the current 2026 NHC forecast, cone, hazard products, and local alerts for decisions."
      }
    ]
  },
  {
    slug: "dolly",
    name: "Dolly",
    basin: "Atlantic",
    title: "Tropical Storm Dolly 2026 Tracker: NHC Path & Live Map",
    description: "Track Tropical Storm Dolly 2026 with the latest NHC position, forecast path, live map, advisory updates, radar, satellite and local alert links.",
    primaryKeywords: ["tropical storm dolly tracker", "hurricane dolly path", "dolly live tracker map", "where is storm dolly now"],
    searchDemandNote:
      "Use this page for Tropical Storm Dolly live tracker, path, map, current position, forecast, and NHC advisory update searches.",
    overview:
      "Use this Dolly entry to check whether the current feed contains an active storm and to find dated official records. A retained feed observation is not a complete historical track or a post-season best-track report. Confirm the year and advisory time before interpreting a position as current.",
    historicalReport: {
      year: 2008,
      stormId: "AL042008",
      title: "NHC Tropical Cyclone Report: Hurricane Dolly, 20-25 July 2008",
      url: "https://www.nhc.noaa.gov/data/tcr/AL042008_Dolly.pdf",
      reportDate: "2009-01-22",
      checkedOn: "2026-11-02",
      summary: "The official report separates Dolly's Category 2 peak from its Category 1 landfall on South Padre Island. The events below are post-season best-track estimates from the Synoptic History section (PDF pages 1-2), not a current forecast or a reconstruction of any 2026 system.",
      timeline: [
        { date: "20 July 2008, around 1200 UTC", event: "Dolly formed as a tropical storm in the western Caribbean, about 270 nautical miles east of Chetumal, Mexico, with winds near 40 kt." },
        { date: "23 July 2008, 0000 UTC", event: "Dolly became a hurricane over the Gulf of Mexico before its approach to the southern Texas coast." },
        { date: "23 July 2008, around 1400 UTC", event: "Peak intensity reached 85 kt (Category 2), a little less than 20 nautical miles east of the Rio Grande's mouth." },
        { date: "23 July 2008, just after 1800 UTC", event: "The center made landfall on South Padre Island with estimated maximum winds of 75 kt (Category 1), after weakening from the earlier peak." },
        { date: "23 July 2008, about two hours later", event: "The center reached the Texas mainland about 10 nautical miles south of Port Mansfield at an estimated 70 kt. This is a second landfall estimate, not the earlier island landfall intensity." }
      ],
      lessons: [
        { heading: "Peak Category and Landfall Category Are Different Records", body: "Using 85 kt to describe the South Padre Island landfall would merge two observations four hours apart. NHC's Winds and Pressure section also says it could not determine whether Category 2 winds reached the Texas coast during the hours before the center's landfall. A Category 1 landfall estimate therefore does not prove every earlier coastal wind was below Category 2 strength." },
        { heading: "A Lower Wind Category Did Not Remove Water Damage", body: "NHC reports storm surge up to 4 feet at South Padre Island, Port Mansfield and the Port of Brownsville, with 3-4 feet of water across the bay side of South Padre Island (Meteorological Statistics section, PDF page 3). These are historical observations at named places, not a uniform water depth across Texas or an estimate for your home. Use the report's observation tables for station details and current local products for present hazards." }
      ]
    },
    trackerFocus: [
      "Check Dolly's year, basin identifier and advisory time first. An inactive feed record describes a past observation, not where a storm is now.",
      "When Dolly is active, compare the official forecast track with radar, satellite, and the cone of uncertainty — never the center line alone.",
      "Pair any Dolly forecast with local NWS alerts and emergency management guidance before making evacuation or shelter decisions.",
      "Historical example, not a current advisory: NHC's Hurricane Dolly report (AL042008, January 22, 2009) distinguishes the 2008 peak of 85 kt (Category 2) around 1400 UTC July 23 from the South Padre Island landfall just after 1800 UTC at 75 kt (Category 1). Peak intensity and landfall intensity answer different questions; neither predicts another storm's strength or track."
    ],
    faqs: [
      {
        question: "Is Tropical Storm Dolly active right now?",
        answer:
          "Check the live status section and official NHC advisory links on this page. If Dolly appears in the current feed, the page shows its latest position and update time; if not, the page clearly marks the storm as no longer active."
      },
      {
        question: "Where is Tropical Storm Dolly headed?",
        answer:
          "Use the latest NHC forecast track, cone, and discussion on this page. The center line and any single advisory can change, while wind, rain, surge, and tornado hazards may extend far outside the forecast center path."
      },
      {
        question: "How does the 2026 Dolly compare to past Dolly storms?",
        answer:
          "Compare records by year and basin identifier, and distinguish maximum intensity from intensity at landfall. NHC's 2008 Dolly report gives a Category 2 peak but a Category 1 South Padre Island landfall. For the 2026 entry, use the dated official advisory record; this page does not provide a complete best-track comparison or establish today's conditions from an old observation."
      }
    ]
  },
  {
    slug: "edouard",
    name: "Edouard",
    basin: "Atlantic",
    title: "Tropical Storm Edouard 2026: Final Path & Updates",
    description: "Review Tropical Storm Edouard's 2026 Gulf path, final NHC status, Texas and Louisiana impacts, rainfall, radar, and archived advisory links.",
    primaryKeywords: ["tropical storm edouard tracker", "hurricane edouard path", "edouard live tracker", "where is storm edouard now"],
    searchDemandNote:
      "Use this page for Tropical Storm Edouard live tracker, Gulf path, Texas and Louisiana warning, storm surge, rainfall, and NHC advisory searches.",
    overview:
      "Tropical Storm Edouard formed from AL97 in the northwestern Gulf on August 31, 2026 and is no longer listed in the current NHC feed. Use this page for its final observed track, archived advisory context, and Texas and Louisiana rainfall, flooding, radar, and local-alert resources.",
    trackerFocus: [
      "NHC designated AL97 as Tropical Depression Five and then Tropical Storm Edouard on August 31, 2026, over the northwestern Gulf.",
      "Use the official NHC forecast path together with the cone, wind field, rainfall, and surge products — not a single model or the center line.",
      "During the advisory cycle, a Tropical Storm Warning covered Port Bolivar, Texas, to the Vermilion/Iberia Parish Line, Louisiana, and a Storm Surge Watch covered High Island to the Vermilion/Cameron Parish Line.",
      "Edouard is no longer listed in the current NHC feed. Check current NWS alerts and local emergency management updates for any remaining rainfall, flooding, or recovery concerns.",
      "Historical Edouard storms include 1996 (Hurricane Edouard, a major hurricane that paralleled the U.S. East Coast and brushed Cape Hatteras and New England) and 2014 (Hurricane Edouard, the first major hurricane of that season, which stayed over the open Atlantic). The name's past intensity does not predict the 2026 system."
    ],
    faqs: [
      {
        question: "Is Tropical Storm Edouard active right now?",
        answer:
          "No. Edouard is no longer listed in the current NHC tropical cyclone feed. This page preserves its final observed track and advisory context; use current NWS alerts for any remaining local hazards."
      },
      {
        question: "Has Edouard ever hit the United States?",
        answer:
          "Past Edouard storms have mostly stayed offshore or weakened before landfall; 1996 Hurricane Edouard brushed Cape Hatteras and New England as a major hurricane without a direct landfall, and 2014 Edouard remained over the open Atlantic. The 2026 system is documented here from its own NHC data."
      },
      {
        question: "What happened to Tropical Storm Edouard?",
        answer:
          "Edouard moved toward the Upper Texas and southwest Louisiana coast during its advisory cycle and is no longer listed as an active NHC tropical cyclone. Review archived advisories for its track and current local alerts for any lingering impacts."
      }
    ]
  },
  {
    slug: "fay",
    name: "Fay",
    basin: "Atlantic",
    title: "Tropical Storm Fay 2026: Final Track & NHC Update",
    description: "Review Tropical Storm Fay's 2026 final NHC status, post-tropical transition, last observed track, advisory context, and official source links.",
    primaryKeywords: ["tropical storm fay tracker", "hurricane fay path", "fay live tracker map", "where is storm fay now"],
    searchDemandNote:
      "Fay was the sixth named storm of the 2026 Atlantic season. Use this page for its final NHC status, post-tropical transition, observed track, and advisory context.",
    overview:
      "Tropical Storm Fay became post-tropical and received its final NHC advisory on September 29, 2026. This page preserves its final observed position, track, advisory context, and official source links as a stable storm reference.",
    trackerFocus: [
      "Check the NHC advisory timestamp before comparing Fay positions, intensity, or forecast tracks.",
      "Compare the NHC forecast track with the cone and wind field, and remember that hazards can extend outside the center line.",
      "Use local NWS alerts and emergency management guidance for any evacuation, shelter, or travel decision; HurricaneHub is a navigation layer, not an official warning source.",
      "Historical Fay storms include 2008, which made multiple Florida landfalls, and 2020, which made landfall in New Jersey. Assess the 2026 storm only from its own official data."
    ],
    faqs: [
      {
        question: "Is Tropical Storm Fay still active?",
        answer:
          "No. Fay became post-tropical, and the NHC issued its final advisory on September 29, 2026. This page preserves the final observed status and official advisory context."
      },
      {
        question: "Did Fay ever make landfall in the United States?",
        answer:
          "Yes. Tropical Storm Fay made multiple Florida landfalls in 2008, and Tropical Storm Fay made landfall in New Jersey in 2020. Those historical tracks do not predict the path or impacts of the 2026 storm."
      },
      {
        question: "Where should I follow Tropical Storm Fay updates?",
        answer:
          "Review Fay's final NHC advisory and archived storm context on this page. For current tropical cyclones and local hazards, use the live tracker, NWS alerts, and local emergency management guidance."
      }
    ]
  }
];

export function getStormPageBySlug(slug: string | undefined) {
  return stormTrackerPages.find((storm) => storm.slug === slug);
}
