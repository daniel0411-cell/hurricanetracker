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
    title: "Erin 2025: Peak Winds, Aircraft Readings and Coastal Impacts",
    description: "Read NHC's Erin 2025 report: distinguish 140 kt peak intensity from aircraft gust readings, offshore track and local coastal flooding observations.",
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
      checkedOn: "2026-11-12",
      summary: "NHC's post-season report describes a Category 5 hurricane with a peak intensity of 140 kt and minimum pressure of 913 mb on August 16. Erin later expanded while recurving offshore of the U.S. East Coast. The January 30, 2026 revision corrects official intensity-forecast verification; it is a revised historical analysis, not a live advisory. Checked PDF pages 1-5 for the edition, selected timeline and wind/water comparisons below; the complete report and verification tables were not re-audited.",
      timeline: [
        { date: "11 August 2025, 0000-0600 UTC", event: "A depression formed southwest of Sal, then became a tropical storm while making landfall on Santo Antao in the Cabo Verde Islands by 0600 UTC." },
        { date: "15 August 2025, 1200 UTC", event: "Erin became a hurricane about 375 nautical miles east of the northernmost Leeward Islands." },
        { date: "16 August 2025, around 1800 UTC", event: "Peak intensity reached 140 kt (Category 5), with about 913 mb minimum pressure. These are the cyclone's peak values, not measured winds at every coastal location." },
        { date: "21 August 2025, around 0600 UTC", event: "The center passed about 175 nautical miles southeast of Cape Hatteras. The western circulation brought tropical-storm conditions to parts of the North Carolina and mid-Atlantic coastline." },
        { date: "22 August 2025, around 1800 UTC", event: "Erin became a hurricane-force extratropical cyclone. Extratropical is a structural classification; it did not mean the winds or ocean hazards immediately ended." }
      ],
      lessons: [
        { heading: "Why a 179 kt Aircraft Reading Does Not Replace the 140 kt Peak", body: "NHC's Winds and Pressure section (PDF page 4) identifies a dropsonde surface reading of 179 kt around 1403 UTC August 16 as apparently a gust; the low-level average from that drop corresponded to sustained surface wind near 129 kt. The analyzed 140 kt peak at 1800 UTC instead draws on an aircraft flight-level measurement of 154 kt at 700 mb at 1639 UTC. These have different times, heights and averaging meanings. Reporting 179 kt as Erin's official sustained peak would discard the report's interpretation. Keep the measurement type with each number; an aircraft sample is not a certified wind at a particular home." },
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
        question: "Did Erin's winds reach 179 kt in the official best track?",
        answer: "The 2025 report treats the 179 kt dropsonde surface sample as apparently a gust, not the cyclone's maximum sustained-wind estimate. NHC's analyzed peak is 140 kt at 1800 UTC August 16. The report explains the observations and their averaging in Winds and Pressure, PDF page 4."
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
    title: "Melissa 2025: Jamaica Landfall and NHC Report Explained",
    description: "Read Melissa's 2025 NHC report: 165 kt peak versus 160 kt Jamaica landfall, Cuba crossing and the separate 2019 storm with the same name.",
    primaryKeywords: ["hurricane melissa tracker live", "hurricane melissa tracker", "hurricane melissa live"],
    searchDemandNote:
      "Melissa searches show strong live-tracker intent, especially for live maps, satellite context, and rapid status checks.",
    overview:
      "Melissa's 2025 hurricane (AL132025) and the 2019 tropical storm (AL142019) are different cyclones. The main historical record below now uses NHC's 2025 report, including the Jamaica and Cuba landfalls. Read its year and identifier before interpreting a search result or map, and check the separately dated feed for current status. A historical landfall is not a current forecast.",
    historicalReport: {
      year: 2025,
      stormId: "AL132025",
      title: "NHC Tropical Cyclone Report: Hurricane Melissa, 21-31 October 2025",
      url: "https://www.nhc.noaa.gov/data/tcr/AL132025_Melissa.pdf",
      reportDate: "2026-05-19",
      checkedOn: "2026-11-12",
      summary: "The May 19 revision supersedes the February 25, 2026 original and updates fatality totals and Jamaica damage estimates. Checked the edition note and Synoptic History on PDF pages 1-5 for the selected milestones below. NHC estimates a 165 kt Category 5 peak before a 160 kt Jamaica landfall. This is a bounded reading of the post-season report, not an audit of every observation, impact total or forecast-verification table, and not a live advisory.",
      relatedSources: [{ href: "https://www.nhc.noaa.gov/data/tcr/AL142019_Melissa.pdf", label: "Separate historical record: Melissa 2019, AL142019 (previously checked November 4)" }, { href: "https://www.nhc.noaa.gov/data/tcr/index.php?season=2025&basin=atl", label: "NHC 2025 season report directory and revision notices" }],
      timeline: [
        { date: "21 October 2025, 0600 UTC", event: "Tropical Storm Melissa formed about 275 nautical miles south of Port-au-Prince, Haiti, with maximum sustained winds of 40 kt." },
        { date: "25 October 2025, 1800 UTC", event: "Melissa became a hurricane about 150 nautical miles south of Jamaica. It reached Category 5 intensity by 1200 UTC October 27." },
        { date: "28 October 2025, 1200 UTC", event: "Estimated peak intensity was 165 kt, with central pressure 892 mb, about 40 nautical miles south-southwest of New Hope, Jamaica. This precedes landfall." },
        { date: "28 October 2025, around 1725 UTC", event: "Landfall near New Hope, Jamaica, at an estimated 160 kt, still Category 5. NHC places emergence from Jamaica's northern coast around 2100 UTC at Category 3 intensity." },
        { date: "29 October 2025, 0720 UTC", event: "Landfall near Chivirico, Santiago de Cuba, at an estimated 100 kt (Category 3) and 954 mb. This is a separate crossing and intensity estimate." },
        { date: "31 October 2025, 1200 UTC", event: "Became extratropical about 350 nautical miles north-northeast of Bermuda after bringing strong tropical-storm-force sustained winds and hurricane-force gusts to that island." }
      ],
      lessons: [
        { heading: "Peak and Jamaica Landfall Are Different Estimates", body: "Synoptic History (PDF page 4) assigns the 165 kt peak to 1200 UTC October 28 and the 160 kt landfall near New Hope to around 1725 UTC. Both are Category 5, so the category alone hides the distinction. A caption for the landfall should use 160 kt with the landfall place and time, rather than copying the earlier peak. These are analyzed cyclone maximum sustained winds, not measured wind at every Jamaican address. The later 100 kt Cuba landfall belongs to another place and time." },
        { heading: "A Smaller Wind Category Does Not Describe Every Hazard", body: "The report's opening summary (PDF page 1) describes catastrophic wind and storm surge in western Jamaica and heavy rainfall and catastrophic flooding across portions of the Greater Antilles associated with slow motion. The timeline's wind categories cannot supply flood depths or rainfall totals at a home. The transition to an extratropical cyclone also does not by itself end wind or marine hazards. For a present decision, use current local products and instructions, not this historical sequence." },
        { heading: "Do Not Attach the 2019 History to the 2025 Hurricane", body: "The separately linked 2019 report describes a subtropical-to-tropical storm offshore of New England, not the 2025 Category 5 Jamaica landfall. That older comparison was previously checked November 4; it was not re-audited in this update. Keep AL142019 and AL132025 with their respective records. A name-only search or unlabeled screenshot can mix two real events into a false account." }
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
        question: "What was Melissa's intensity at Jamaica landfall in 2025?",
        answer: "NHC's May 19, 2026 report estimates 160 kt (Category 5) near New Hope around 1725 UTC October 28, 2025. The 165 kt peak occurred earlier, at 1200 UTC. Both are historical post-season estimates; neither is a current wind forecast."
      },
      {
        question: "Was Melissa a hurricane in 2019 or 2025?",
        answer: "The 2025 record AL132025 is Hurricane Melissa, including the Category 5 Jamaica landfall. The separate 2019 record AL142019 describes a subtropical and then tropical storm, not a hurricane. Confirm the year and identifier before comparing them."
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
    title: "Dolly: Historical Peak and Landfall Intensity Explained",
    description: "Read NHC's 2008 Dolly report: distinguish the 85 kt peak, 75 kt island landfall and 70 kt mainland landfall, separately from the current storm feed.",
    primaryKeywords: ["tropical storm dolly tracker", "hurricane dolly path", "dolly live tracker map", "where is storm dolly now"],
    searchDemandNote:
      "Use the historical report to answer peak-versus-landfall questions; use the separately dated feed for current status.",
    overview:
      "Use this Dolly entry to check whether the current feed contains an active storm and to find dated official records. A retained feed observation is not a complete historical track or a post-season best-track report. Confirm the year and advisory time before interpreting a position as current.",
    historicalReport: {
      year: 2008,
      stormId: "AL042008",
      title: "NHC Tropical Cyclone Report: Hurricane Dolly, 20-25 July 2008",
      url: "https://www.nhc.noaa.gov/data/tcr/AL042008_Dolly.pdf",
      reportDate: "2009-01-22",
      checkedOn: "2026-11-11",
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
        { heading: "A Lower Wind Category Did Not Remove Water Damage", body: "NHC reports storm surge up to 4 feet at South Padre Island, Port Mansfield and the Port of Brownsville, with 3-4 feet of water across the bay side of South Padre Island (Meteorological Statistics section, PDF page 3). These are historical observations at named places, not a uniform water depth across Texas or an estimate for your home. Use the report's observation tables for station details and current local products for present hazards." },
        { heading: "Reading Task: Which Intensity Belongs in a Landfall Caption?", body: "For a caption describing the center crossing South Padre Island just after 1800 UTC July 23, choose 75 kt, not the earlier 85 kt peak or the later 70 kt mainland crossing. The peak-to-island decrease is 10 kt over roughly four hours; the additional decrease to the mainland is 5 kt over about two hours. These selected milestones do not establish a uniform weakening rate between them or every coastal location's maximum wind. Answer source: Synoptic History, PDF page 2." }
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
          "For a present-day forecast, check the dated current-feed status and NHC directly. The 2008 timeline below is historical; it cannot locate or predict another storm named Dolly. A retained observation alone supplies neither a current forecast path nor a complete best track."
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
      checkedOn: "2026-11-11",
      summary: "Historical operational bulletin, not a current forecast or post-season report. Advisory 2 still calls AL052026 Tropical Depression Five, with 35 mph sustained winds at 28.2N, 91.5W. It lists a Tropical Storm Warning from Port Bolivar to the Vermilion/Iberia Parish Line and a Storm Surge Watch from High Island to the Vermilion/Cameron Parish Line. Different hazard boundaries must be read separately.",
      timeline: [
        { date: "31 August 2026, 2100 UTC", event: "Public Advisory 2 reports Tropical Depression Five with 35 mph winds and 1011 mb pressure. Its outlook forecasts strengthening; that forecast does not make the system a named storm at this time." },
        { date: "1 September 2026, 0300 UTC", event: "Public Advisory 3, issued at 10 PM CDT on August 31, names Tropical Storm Edouard and reports 40 mph winds and 1005 mb pressure. UTC has crossed midnight while the printed local date has not." }
      ],
      lessons: [
        { heading: "Use the Same Storm Identifier Across a Name Change", body: "Open Advisory 2 and the separately linked Advisory 3. Both carry AL052026. The sustained-wind field changes from 35 to 40 mph across six hours; this is a comparison of operational estimates, not a post-season verification or a 24-hour rapid-intensification calculation. Preserve the issuer, number, issue time, classification and units with each entry." },
        { heading: "Reading Task: Are the Two Hazard Areas Identical?", body: "No. In Advisory 2 the wind warning begins at Port Bolivar and ends at the Vermilion/Iberia line; the surge watch begins at High Island and ends at the Vermilion/Cameron line. Record each hazard and its own endpoints. Do not copy one boundary into the other or turn the historical coastal segments into today's evacuation order. Advisory 3 changes the surge product to a warning; that later change belongs to a later issue time." },
        { heading: "Reading Task: Does a Hurricane Watch Mean It Is a Hurricane?", body: "No. Advisory 3 adds a Hurricane Watch from High Island to Cameron while reporting Tropical Storm Edouard with 40 mph maximum sustained winds. A watch concerns possible future conditions in its named area; the classification describes the cyclone at the issue time. The surge forecast for High Island to the Vermilion/Cameron line also changes from 2-4 feet in Advisory 2 to 3-5 feet in Advisory 3. That is a revised forecast, not an observed one-foot rise or two ranges to add together. Keep the separate Vermilion/Cameron-to-Morgan City range of 1-3 feet attached to its own segment." }
      ]
    },
    trackerFocus: [
      "Use AL052026 to pair the public advisories. Advisory 2 is Tropical Depression Five; Advisory 3 names Edouard. The latter is dated August 31 locally but September 1 in UTC.",
      "Use the official NHC forecast path together with the cone, wind field, rainfall, and surge products — not a single model or the center line.",
      "During the advisory cycle, a Tropical Storm Warning covered Port Bolivar, Texas, to the Vermilion/Iberia Parish Line, Louisiana, and a Storm Surge Watch covered High Island to the Vermilion/Cameron Parish Line.",
      "For today's status, read the feed's availability and observation time before opening the current official NHC products. These two historical bulletins do not establish today's activity or a final outcome.",
      "A repeated storm name is not a forecast. Match the year and basin identifier before comparing any historical Edouard record."
    ],
    faqs: [
      {
        question: "Is Tropical Storm Edouard active right now?",
        answer:
          "Check the separately dated current-feed status and official NHC products. The two historical bulletins here cover the naming transition, not the final track or today's activity. An unavailable feed cannot establish inactivity."
      },
      {
        question: "Has Edouard ever hit the United States?",
        answer:
          "Use a year-specific official report to answer a landfall question. The two 2026 operational bulletins quoted here establish classifications and forecasts at their issue times, not the final landfall outcome or a comparison of every storm named Edouard."
      },
      {
        question: "What happened to Tropical Storm Edouard?",
        answer:
          "The selected record shows Tropical Depression Five at 2100 UTC August 31 and Tropical Storm Edouard at 0300 UTC September 1. Advisory 3 adds a Hurricane Watch and changes the surge watch to a warning. Use later official records for its eventual track, landfall and impacts."
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
      checkedOn: "2026-11-11",
      summary: "Historical operational bulletin, not a current forecast or post-season report. Advisory 39 places Fay at 23.7N, 48.2W, with maximum sustained winds near 30 mph, movement west-southwest near 12 mph and pressure 1011 mb. It says no coastal watches or warnings were in effect, lists no hazards affecting land and directs additional marine information to NWS High Seas Forecasts.",
      timeline: [
        { date: "29 September 2026, 2100 UTC", event: "NHC classifies Fay as post-tropical in public Advisory 39. The printed 5 PM AST and 2100 UTC are the same issue time, not two different observations." },
        { date: "Advisory 39, outlook", event: "The bulletin forecasts dissipation in about a day. This is a forecast at that time; it does not verify the eventual dissipation time." },
        { date: "Advisory 39, next advisory", event: "NHC says this is its last public advisory and names NWS High Seas Forecasts, AWIPS NFDHSFAT1 / WMO FZNT01 KWBC, for additional information." }
      ],
      lessons: [
        { heading: "Reading Task: Can 30 mph and 12 mph Give a Local Wind?", body: "No. The 30 mph maximum sustained wind and 12 mph west-southwest motion describe different quantities. Subtracting them to give 18 mph is not a supported local-wind estimate. The bulletin supplies a center position, not a location-specific wind field. Post-tropical describes the structure; it is neither a wind measurement nor a statement that every marine hazard has ended." },
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
          "The September 29, 2026 bulletin identifies Fay as post-tropical and ends NHC public advisories while forecasting later dissipation. It does not verify that later outcome or today's conditions. Check the current-feed status and official sources separately."
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
