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
    kind?: "advisory";
    year: number;
    stormId: string;
    title: string;
    url: string;
    reportDate: string;
    checkedOn: string;
    summary: string;
    relatedSources?: Array<{ href: string; label: string }>;
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
      "Check the current-feed status separately from the Melissa 2019 report below (AL142019). This historical record covers a subtropical-to-tropical transition offshore of New England, not a hurricane landfall or a current storm. Confirm the year and basin identifier whenever the same name appears in a screenshot or search result.",
    historicalReport: {
      year: 2019,
      stormId: "AL142019",
      title: "NHC Tropical Cyclone Report: Tropical Storm Melissa, 11-14 October 2019",
      url: "https://www.nhc.noaa.gov/data/tcr/AL142019_Melissa.pdf",
      reportDate: "2019-12-31",
      checkedOn: "2026-11-04",
      summary: "NHC's report describes a low transitioning from extratropical to subtropical and then tropical while offshore of New England. Its estimated peak intensity was 55 kt as a subtropical storm; it was not a hurricane in this 2019 record. The following sequence is from Synoptic History (PDF page 2); wind and water comparisons are from Meteorological Statistics (PDF pages 3-4).",
      timeline: [
        { date: "11 October 2019, 0600 UTC", event: "Became a subtropical storm about 180 nautical miles south-southeast of Nantucket, with an estimated 55 kt peak intensity." },
        { date: "12 October 2019, 1200 UTC", event: "Became a tropical storm after the convection and wind field contracted, about 230 nautical miles south-southeast of Nantucket." },
        { date: "14 October 2019, 1200 UTC", event: "Became a gale-force extratropical low while merging with a front; its circulation opened and dissipated later that day." }
      ],
      lessons: [
        { heading: "Classification Changed Without Becoming a Hurricane", body: "The 2019 sequence separates structural classification from wind intensity: subtropical, tropical, and extratropical are not successive hurricane categories. Record the year, AL142019 identifier, issue time, classification, and wind unit before comparing it with another Melissa record. Use the 2019 advisory archive for operational bulletins and this post-season report for the analyzed history." },
        { heading: "Keep Four Wind and Water Metrics Separate", body: "The report gives a 55 kt cyclone peak estimate and separate Wellfleet land observations of 43 kt sustained wind and a 57 kt gust. The gust is not a contradiction of the cyclone's sustained-wind estimate. For water, the report separately describes surge above predicted tide, storm tide relative to a datum, and inundation above ground. A gauge number cannot be copied into an address's indoor flood depth. This comparison explains the historical measurements, not today's conditions." }
      ]
    },
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
    title: "Isaias 2026: Final NHC Bulletin and Flood-Risk Reading",
    description: "Read Isaias public Advisory 15 with its time, classification, coastal cancellations and continuing flood hazards, separately from the current storm feed.",
    primaryKeywords: ["tropical storm isaias tracker", "hurricane isaias path", "isaias live tracker", "where is tropical storm isaias now"],
    searchDemandNote:
      "Use the dated public bulletin to distinguish classification, coastal-warning changes, continued flood hazards and the announced WPC handoff.",
    overview:
      "Read the dated Isaias record separately from today's feed. NHC's final public Advisory 15, AL092026, issued October 10, 2026 at 0900 UTC, describes a post-tropical cyclone over Alabama and hands subsequent public advisories to WPC. Its rainfall and tornado sections retain hazards after the coastal products end.",
    historicalReport: {
      kind: "advisory",
      year: 2026,
      stormId: "AL092026",
      title: "NHC archived public advisory 15: Post-Tropical Cyclone Isaias",
      url: "https://www.nhc.noaa.gov/archive/2026/al09/al092026.public.015.shtml",
      reportDate: "2026-10-10, 0900 UTC (4 AM CDT)",
      checkedOn: "2026-11-06",
      summary: "Historical operational bulletin, not a post-season analysis or current forecast. NHC reported Isaias at 32.0N, 86.5W with maximum sustained winds near 35 mph and central pressure 1002 mb. The bulletin discontinues the coastal Storm Surge and Tropical Storm Warnings while continuing to describe rainfall, tornado and surf hazards. Its measurements, forecasts and product cancellations have different meanings.",
      timeline: [
        { date: "10 October 2026, 0900 UTC", event: "Advisory 15 identifies a post-tropical cyclone about 25 miles south-southwest of Montgomery, Alabama, moving north near 14 mph. This is the position in this bulletin, not the position in a later retained feed observation." },
        { date: "Advisory 15, watches and warnings", event: "NHC discontinues all Storm Surge and Tropical Storm Warnings. That section does not cancel local NWS flood or tornado products." },
        { date: "Advisory 15, next advisory", event: "The bulletin says this is NHC's last public advisory and directs subsequent information to WPC public advisories beginning at 10 AM CDT. This is the announced handoff, not verification of every later WPC bulletin." }
      ],
      lessons: [
        { heading: "The Rainfall Section Outlives the Coastal Warning", body: "The same public advisory forecasts flash, urban and river flooding, including possible considerable flash flooding and landslides in the Southern Appalachians. These are forecasts written at the issue time, not measured rainfall totals or evidence that every named location flooded. Read the full dated bulletin and obtain present local warnings separately." },
        { heading: "Reading Task: Match a Position to Its Source", body: "Copy the storm ID, 0900 UTC issue time, 32.0N 86.5W position and 35 mph sustained-wind field from the original. Can a later feed position be labeled the position in NHC Advisory 15? No: it is a different record and needs its own issuer and timestamp. Similarly, the discontinued coastal warnings do not establish that an inland route was safe." }
      ]
    },
    trackerFocus: [
      "Check the displayed position and advisory time, then verify continuing post-tropical forecasts with the Weather Prediction Center and local National Weather Service office.",
      "NHC's final public Advisory 15, issued at 0900 UTC on October 10, reported Post-Tropical Cyclone Isaias over central Alabama with 35 mph sustained winds and 1002 mb pressure. Preserve the units printed in that public bulletin; later observations are separate records.",
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
          "The source excerpt on this page verifies the post-tropical classification in NHC public Advisory 15, not the storm's peak category or complete intensity history. Use the year-specific NHC archive and post-season report when available before assigning an earlier peak or landfall category."
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
    title: "Edouard 2026: Read the NHC Name and Warning Changes",
    description: "Compare AL052026 public advisories 2 and 3: depression to named storm, local and UTC dates, and separate wind and surge areas. Historical reading example.",
    primaryKeywords: ["tropical storm edouard tracker", "hurricane edouard path", "edouard live tracker", "where is storm edouard now"],
    searchDemandNote:
      "Read the two linked AL052026 advisories with their original classifications, time zones and hazard boundaries; check current feed status separately.",
    overview:
      "The dated NHC AL052026 record shows Tropical Depression Five in public Advisory 2 and Tropical Storm Edouard in Advisory 3. Read the original classification, time and warning boundaries rather than applying the later name to every earlier bulletin. The retained feed observation and the two archived advisories below are separate records, not a complete best track.",
    historicalReport: {
      kind: "advisory",
      year: 2026,
      stormId: "AL052026",
      title: "NHC archived public advisory 2: Tropical Depression Five",
      url: "https://www.nhc.noaa.gov/archive/2026/al05/al052026.public.002.shtml",
      relatedSources: [{ href: "https://www.nhc.noaa.gov/archive/2026/al05/al052026.public.003.shtml", label: "NHC public Advisory 3: Tropical Storm Edouard, September 1 at 0300 UTC" }],
      reportDate: "2026-08-31, 2100 UTC (4 PM CDT)",
      checkedOn: "2026-11-06",
      summary: "Historical operational bulletin, not a current forecast or post-season report. Advisory 2 still calls AL052026 Tropical Depression Five, with 35 mph sustained winds at 28.2N, 91.5W. It lists a Tropical Storm Warning from Port Bolivar to the Vermilion/Iberia Parish Line and a Storm Surge Watch from High Island to the Vermilion/Cameron Parish Line. Different hazard boundaries must be read separately.",
      timeline: [
        { date: "31 August 2026, 2100 UTC", event: "Public Advisory 2 reports Tropical Depression Five with 35 mph winds and 1011 mb pressure. Its outlook forecasts strengthening; that forecast does not make the system a named storm at this time." },
        { date: "1 September 2026, 0300 UTC", event: "Public Advisory 3, issued at 10 PM CDT on August 31, names Tropical Storm Edouard and reports 40 mph winds and 1005 mb pressure. UTC has crossed midnight while the printed local date has not." }
      ],
      lessons: [
        { heading: "Use the Same Storm Identifier Across a Name Change", body: "Open Advisory 2 and the separately linked Advisory 3. Both carry AL052026. The sustained-wind field changes from 35 to 40 mph across six hours; this is a comparison of operational estimates, not a post-season verification or a 24-hour rapid-intensification calculation. Preserve the issuer, number, issue time, classification and units with each entry." },
        { heading: "Reading Task: Are the Two Hazard Areas Identical?", body: "No. In Advisory 2 the wind warning begins at Port Bolivar and ends at the Vermilion/Iberia line; the surge watch begins at High Island and ends at the Vermilion/Cameron line. Record each hazard and its own endpoints. Do not copy one boundary into the other or turn the historical coastal segments into today's evacuation order. Advisory 3 changes the surge product to a warning; that later change belongs to a later issue time." }
      ]
    },
    trackerFocus: [
      "Use AL052026 to pair the public advisories. Advisory 2 is Tropical Depression Five; Advisory 3 names Edouard. The latter is dated August 31 locally but September 1 in UTC.",
      "Use the official NHC forecast path together with the cone, wind field, rainfall, and surge products — not a single model or the center line.",
      "During the advisory cycle, a Tropical Storm Warning covered Port Bolivar, Texas, to the Vermilion/Iberia Parish Line, Louisiana, and a Storm Surge Watch covered High Island to the Vermilion/Cameron Parish Line.",
      "Edouard is no longer listed in the current NHC feed. Check current NWS alerts and local emergency management updates for any remaining rainfall, flooding, or recovery concerns.",
      "A repeated storm name is not a forecast. Match the year and basin identifier before comparing any historical Edouard record."
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
          "Use a year-specific official report to answer a landfall question. The two 2026 operational bulletins quoted here establish classifications and forecasts at their issue times, not the final landfall outcome or a comparison of every storm named Edouard."
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
    title: "Fay 2026: Final NHC Bulletin and Historical Status",
    description: "Read Fay public Advisory 39: post-tropical classification, position, wind and motion, and the marine information handoff. Separate forecasts from outcomes.",
    primaryKeywords: ["tropical storm fay tracker", "hurricane fay path", "fay live tracker map", "where is storm fay now"],
    searchDemandNote:
      "Use the linked AL062026 public Advisory 39 to read the classification, timestamp, motion, wind and announced end of NHC public advisories.",
    overview:
      "NHC public Advisory 39, AL062026, issued September 29, 2026 at 2100 UTC, identifies Post-Tropical Cyclone Fay and explicitly ends NHC public advisories. Read that operational bulletin below alongside, but separately from, HurricaneHub's retained feed observation. Neither record supplies a complete post-season track.",
    historicalReport: {
      kind: "advisory",
      year: 2026,
      stormId: "AL062026",
      title: "NHC archived public advisory 39: Post-Tropical Cyclone Fay",
      url: "https://www.nhc.noaa.gov/archive/2026/al06/al062026.public.039.shtml",
      reportDate: "2026-09-29, 2100 UTC (5 PM AST)",
      checkedOn: "2026-11-06",
      summary: "Historical operational bulletin, not a current forecast or post-season report. Advisory 39 places Fay at 23.7N, 48.2W, with maximum sustained winds near 30 mph, movement west-southwest near 12 mph and pressure 1011 mb. It says no coastal watches or warnings were in effect, lists no hazards affecting land and directs additional marine information to NWS High Seas Forecasts.",
      timeline: [
        { date: "29 September 2026, 2100 UTC", event: "NHC classifies Fay as post-tropical in public Advisory 39. The printed 5 PM AST and 2100 UTC are the same issue time, not two different observations." },
        { date: "Advisory 39, outlook", event: "The bulletin forecasts dissipation in about a day. This is a forecast at that time; it does not verify the eventual dissipation time." },
        { date: "Advisory 39, next advisory", event: "NHC says this is its last public advisory and names NWS High Seas Forecasts, AWIPS NFDHSFAT1 / WMO FZNT01 KWBC, for additional information." }
      ],
      lessons: [
        { heading: "Classification, Wind and Motion Are Separate Fields", body: "Post-tropical describes the cyclone's structure. The 30 mph maximum sustained wind and 12 mph movement describe different quantities; they cannot be substituted for each other. The location in the bulletin is an operational center estimate, not a measurement of the wind or water at a household." },
        { heading: "Reading Task: Was Dissipation Already Verified?", body: "No. The outlook says Fay is forecast to dissipate in a day or so. The next-advisory section verifies that NHC was ending its public advisory series, not that the system had already disappeared. Copy the classification, wind, motion, time and announced information source into separate fields. Use later official records to establish an eventual outcome." }
      ]
    },
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
          "The linked 2026 public Advisory 39 directs further marine information to NWS High Seas Forecasts. That historical handoff does not establish current conditions. Use today's NHC products, local NWS alerts and emergency management instructions for present hazards."
      }
    ]
  }
];

export function getStormPageBySlug(slug: string | undefined) {
  return stormTrackerPages.find((storm) => storm.slug === slug);
}
