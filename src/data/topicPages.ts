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
  sourceCheck?: string;
  sources?: Array<{ href: string; label: string }>;
  figures?: Array<{ src: string; alt: string; caption: string; width: number; height: number; sourceUrl: string; sourceLabel: string }>;
  steps: Array<{ title: string; body: string; href: string; label: string }>;
  sections: Array<{ eyebrow: string; title: string; body: string; bullets: string[] }>;
  nextLinks: Array<{ name: string; href: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const topicPages: TopicPage[] = [
  {
    slug: "why-hurricane-forecasts-change",
    title: "Why Hurricane Forecasts Change",
    shortTitle: "Why Forecasts Change",
    description: "Learn why hurricane paths, intensity forecasts, cones, and arrival times change as observations and forecast guidance update.",
    eyebrow: "Forecast uncertainty guide",
    intro: "Hurricane forecasts change because each advisory starts with newer observations and updated model guidance. A shifted track does not mean the earlier forecast was careless; it means the estimated future path changed as the storm and surrounding atmosphere were measured again. Uncertainty is usually larger farther into the future, so compare advisory times and trends instead of treating one map as permanent.",
    primaryAction: { label: "Check the latest forecast", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Understand the forecast cone", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/" },
    intent: "why hurricane forecast changed, hurricane path shift, forecast error over time",
    steps: [
      { title: "Read the Earlier Historical Forecast", body: "Start with Irma discussion 26, issued September 5, 2017 at 1500 UTC. Find its row valid September 6 at 1200 UTC, then keep that valid time fixed for the comparison below.", href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml", label: "Open Irma discussion 26" },
      { title: "Find the Same Valid Time in the Update", body: "Irma discussion 28 was issued September 6, 2017 at 0300 UTC. Its 12H row has the same September 6 1200 UTC valid time as discussion 26's 24H row. Compare those rows, not two different 24H rows.", href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml", label: "Open Irma discussion 28" },
      { title: "Keep Local Hazards Separate", body: "A track adjustment can change local timing, but surge, rainfall, tornado, wind, and evacuation decisions still require their own official products.", href: "/alerts/", label: "Check local alerts" }
    ],
    sections: [
      { eyebrow: "New evidence", title: "Observations Reset the Starting Point", body: "Satellite, aircraft reconnaissance, radar, buoys, ships, weather stations, and atmospheric observations help estimate the storm and its environment. When the estimated center, structure, steering flow, or intensity changes, the next forecast begins from a different analysis.", bullets: ["Updated storm center and motion", "Changes in surrounding winds and pressure", "Ocean and atmospheric conditions", "New aircraft or satellite measurements"] },
      { eyebrow: "Forecast horizon", title: "Uncertainty Grows With Time", body: "Small differences in the starting analysis or future steering pattern can produce larger track differences several days later. This is why the cone widens with forecast time and why one exact five-day point should not drive a local decision.", bullets: ["Near-term positions usually carry less track uncertainty", "Longer-range paths have a wider range of outcomes", "Intensity and storm size have separate uncertainty", "Local hazards can extend outside the center-track cone"] },
      { eyebrow: "Model guidance", title: "Models Can Converge, Diverge, or Trend", body: "Forecasters compare deterministic models, ensembles, recent performance, observations, and continuity from the previous advisory. Read a chart's cycle and each model's native initialization or interpolation details; a shared chart cycle does not prove all lines came from the same original run. For comparisons across updates, match valid times before describing a change.", bullets: ["Record product identity, issue time and forecast valid time", "Match valid times, not just forecast-hour labels or line endpoints", "Watch trends across multiple advisories", "Use the NHC forecast as the public baseline"] },
      { eyebrow: "Historical example: Irma 2017", title: "Two Forecasts for September 6 at 1200 UTC", body: "These are predictions made before the target time, not two observed positions. In the original FORECAST POSITIONS AND MAX WINDS tables, retain the printed horizon labels and full date/time. Discussion 26 was issued at 1100 AM AST September 5 (1500 UTC); discussion 28 at 1100 PM AST September 5 (0300 UTC September 6). AST here is UTC minus four hours. Public issue times and printed forecast-hour labels are different fields: use the explicit valid-time column rather than assuming a label counts from public issuance.", bullets: ["Earlier forecast, discussion 26: printed 24H row; valid 06/1200Z; 18.1N, 63.0W; 150 KT / 175 MPH.", "Later forecast, discussion 28: printed 12H row; valid 06/1200Z; 18.1N, 63.1W; 155 KT / 180 MPH.", "Same target time: the later forecast is 0.1 degree farther west and 5 kt stronger. These are forecast revisions, not observed 12-hour intensification, a probability change or a new household departure deadline."] },
      { eyebrow: "Read the explanation", title: "A Numerical Change Needs the Forecaster's Context", body: "Discussion 26 describes favorable environmental conditions and says intensity fluctuations are likely as eyewall replacement cycles occur. Discussion 28 adds aircraft and radar evidence, including a hinted secondary wind maximum, and says an eyewall replacement could halt strengthening if it becomes more definitive. Its exact wording includes: 'The official intensity forecast is near or above the model consensus.' This is conditional reasoning, not proof that one structural process alone caused the 5 kt revision. Neither text certifies how much wind a particular home will receive.", bullets: ["Separate newly assessed current intensity from future forecast rows", "Preserve words such as suggests, hinted and if", "Do not treat the historical discussion's model preferences or error statistics as current rankings", "A forecast-versus-forecast comparison is not forecast verification; checking accuracy requires the later analyzed outcome at that same time"] },
      { eyebrow: "Reading check", title: "Can You Compare Both 24H Rows?", body: "Question: discussion 28's 24H row is valid September 7 at 0000 UTC and predicts 150 kt. Is it the correct counterpart to discussion 26's 24H row valid September 6 at 1200 UTC? Answer: no; the target times are 12 hours apart. Use discussion 28's 12H row above for the matched comparison. Matching the label alone would hide the actual 5 kt forecast revision.", bullets: ["Your comparison record: storm ID/year; earlier product and issue time; later product and issue time; common valid UTC; position and wind/unit in each; numerical change; discussion explanation", "If either product lacks the common valid time, record that limit instead of inventing a point between printed rows", "For a current threat, return to the latest NHC forecast and local warnings; the Irma example teaches a method, not today's conditions"] }
    ],
    nextLinks: [
      { name: "Hurricane Spaghetti Models", href: "/hurricane-tracker/spaghetti-models/", description: "Understand clusters, ensembles, and outlier tracks." },
      { name: "Hurricane Path Tracker", href: "/hurricane-tracker/path/", description: "Read the official path, cone, timing, and local limits." },
      { name: "Hurricane Landfall Forecast", href: "/hurricane-tracker/hurricane-landfall-forecast/", description: "Connect shifting track guidance with coastal timing and impacts." },
      { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "Check current advisory times before comparing forecasts." }
    ],
    faqs: [
      { question: "Why did the hurricane path change?", answer: "The path can change when newer observations alter the estimated storm position or when updated guidance changes the expected steering pattern. Compare advisory times and use the latest NHC forecast." },
      { question: "Should I compare two advisories' 24-hour rows?", answer: "Only if they refer to the same valid date and time. In the historical Irma example, discussion 26's 24H row matches discussion 28's 12H row at September 6, 2017, 1200 UTC. Two identically labeled rows can target different times." },
      { question: "Does a changed forecast mean the earlier forecast was wrong?", answer: "A forecast is an estimate made with the information available at that time. New observations and guidance can narrow or shift the range of likely outcomes, especially several days ahead." },
      { question: "Why does the hurricane cone get wider?", answer: "Track uncertainty generally increases farther into the future. The wider cone represents a broader range of probable storm-center positions, not the size of the storm or every hazard." },
      { question: "Should I wait for the forecast to stop changing before preparing?", answer: "No. Follow official watches, warnings, evacuation orders, and local guidance. Preparation often needs to begin while some forecast uncertainty remains." }
    ]
  },
  {
    slug: "nhc-hurricane-basins-and-names",
    title: "NHC Hurricane Basins and Storm Names",
    shortTitle: "Basins and Storm Names",
    description: "Compare Atlantic, Eastern Pacific, and Central Pacific hurricane basins, storm-name lists, forecast centers, and active-system tracking.",
    eyebrow: "Basin and naming guide",
    intro: "The National Hurricane Center tracks tropical cyclones in the Atlantic and Eastern North Pacific, while the Central Pacific Hurricane Center handles the Central North Pacific. Each basin uses its own naming sequence and seasonal context. A storm name is assigned after a system reaches tropical-storm strength; a name appearing on a list does not mean that storm exists.",
    primaryAction: { label: "Check all active NHC systems", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Review the 2026 Atlantic season", href: "/2026-hurricane-season/" },
    intent: "Atlantic vs Pacific hurricane basin, hurricane name lists, who names hurricanes",
    sourceCheck: "Checked November 10, 2026: NHC Tropical Cyclone Naming page, including the Atlantic and eastern Pacific six-year rotations, retirement explanation and separate Central Pacific lists. The page's name lists are planning references, not observations of formed storms. Forecast-center context is retained; no active cyclone or crossing event was verified.",
    sources: [
      { href: "https://www.nhc.noaa.gov/aboutnames.shtml", label: "NHC: Tropical cyclone names, rotating lists and retirement" }
    ],
    steps: [
      { title: "Identify the Basin", body: "Use the storm identifier, position, and official advisory source to distinguish Atlantic, Eastern Pacific, and Central Pacific systems.", href: "/hurricane-tracker/live/", label: "Open all-basin tracker" },
      { title: "Check the Official Forecast Center", body: "NHC issues Atlantic and Eastern Pacific advisories; CPHC handles Central Pacific systems within its area of responsibility.", href: "https://www.nhc.noaa.gov/", label: "Open NHC" },
      { title: "Separate a Name List From an Active Storm", body: "Names are prepared in advance and used in sequence. Confirm the current advisory before treating a listed name as an active cyclone.", href: "/2026-hurricane-season/", label: "Check season status" }
    ],
    sections: [
      { eyebrow: "Atlantic basin", title: "Atlantic, Caribbean, and Gulf Systems", body: "The Atlantic basin includes the North Atlantic Ocean, Caribbean Sea, and Gulf. Atlantic advisories use the basin's name list and can affect the Americas, Caribbean, Atlantic shipping, and nearby islands.", bullets: ["North Atlantic Ocean", "Caribbean Sea", "Gulf", "NHC official advisories"] },
      { eyebrow: "Pacific basins", title: "Eastern and Central Pacific Systems", body: "Eastern Pacific and Central Pacific systems use separate name lists and forecast responsibilities. A cyclone can cross a basin boundary, so the responsible forecast center and advisory source may change while the storm remains the same system.", bullets: ["Eastern North Pacific advisories from NHC", "Central North Pacific advisories from CPHC", "Separate naming sequences", "All-basin status belongs on the live tracker"] },
      { eyebrow: "Naming", title: "A Name Does Not Show Strength or Risk", body: "Names make communication easier after tropical-storm strength is reached. They do not describe category, forecast confidence, size, surge, rainfall, or whether a location is threatened.", bullets: ["Check classification and advisory time", "Use the forecast path and hazard products", "Verify local alerts separately", "Retired names are replaced after especially destructive storms"] },
      {
        eyebrow: "Read the official list",
        title: "A 2026 Column Is Not a Record of 2026 Activity",
        body: "The NHC naming page displays lists prepared for use, including future seasons. Its Atlantic explanation says six lists rotate every six years and gives 2026 and 2032 as the reuse example. That is a schedule for names, not a forecast of six-year weather patterns. A name in a column establishes neither that a storm formed nor that it reached hurricane strength. For a season summary, match actual advisories or the official season record to the basin and year instead of counting every printed name as a cyclone.",
        bullets: [
          "Record the table heading and year before copying a name. Atlantic and eastern Pacific lists are separate.",
          "Record whether your source is a scheduled list, a current advisory or a historical storm report; each supports a different claim.",
          "A list position is not a storm's category, peak wind, eventual track or expected landfall.",
          "Use the live tracker for current systems and a dated archive for historical activity. Keep both distinct from the preassigned list."
        ]
      },
      {
        eyebrow: "Retirement and reuse",
        title: "Why a Familiar Name Needs a Year",
        body: "The NHC explains that a name can be removed when a storm is so deadly or costly that reuse would be inappropriate. A World Meteorological Organization committee selects a replacement. Many other names remain in rotation, so the name alone may refer to different cyclones in different years. A search result with a familiar name can therefore lead to an old storm, an upcoming name list or an active advisory. Confirm the year and basin before sharing its map or describing its impacts.",
        bullets: [
          "Use a reference such as storm name + year + basin, and retain the official identifier when provided.",
          "Retirement is a communication decision described by the naming authority, not a real-time measurement of wind speed.",
          "Do not infer that an unretired name identifies a harmless storm or that a replacement name forecasts exceptional danger.",
          "If two archive pages use the same name, compare their dates and identifiers before combining a timeline or damage figures."
        ]
      },
      {
        eyebrow: "Name-list exercise",
        title: "Does a Repeated List Predict the Same Storms?",
        body: "Question: the official page says the Atlantic 2026 list will be used again in 2032. Does that establish that the two seasons will have the same number of storms or similar paths? Answer: no. It describes reuse of a naming list, subject to replacements, not future storm occurrence. The eastern Pacific explanation also describes a six-year rotation, while Central Pacific names appear in their own tables. Check that table's rules rather than applying an Atlantic assumption to every basin worldwide.",
        bullets: [
          "Your completed record should say which basin and year you read and whether the source describes a list or an actual system.",
          "For an active advisory, add the issue time, classification, location and responsible forecast center.",
          "For a historical comparison, add the year and source report to every reused name.",
          "This exercise uses a verifiable scheduling statement and makes no claim about which future names will be used."
        ]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "See active Atlantic, Eastern Pacific, and Central Pacific systems." },
      { name: "2026 Hurricane Season", href: "/2026-hurricane-season/", description: "Review the Atlantic name list and observed season status." },
      { name: "Tropical Storm vs Hurricane", href: "/hurricane-tracker/tropical-storm-vs-hurricane/", description: "Separate naming from wind-based classification." },
      { name: "Hurricane vs Typhoon vs Cyclone", href: "/blog/hurricane-vs-typhoon-vs-cyclone/", description: "Understand regional terminology outside NHC basins." }
    ],
    faqs: [
      { question: "Which hurricane basins does the NHC track?", answer: "NHC issues forecasts for the Atlantic and Eastern North Pacific. The Central Pacific Hurricane Center handles the Central North Pacific within its area of responsibility." },
      { question: "Do Atlantic and Pacific hurricanes use the same name list?", answer: "No. Atlantic, Eastern Pacific, and Central Pacific systems use separate naming sequences." },
      { question: "When does a tropical system receive a name?", answer: "A tropical cyclone receives a name when it reaches tropical-storm strength in its basin. A name on a seasonal list does not mean a storm has formed." },
      { question: "Can a hurricane keep its name after crossing basins?", answer: "A cyclone can retain its identity when crossing a basin boundary, while forecast responsibility and advisory products may change. Check the latest official advisory source." }
    ]
  },
  {
    slug: "hurricane-landfall-forecast",
    title: "Hurricane Landfall Timing: Read Three Different Clocks",
    shortTitle: "Landfall Forecast",
    description: "Read a historical Ian advisory to separate center landfall, hazardous wind arrival and local departure instructions, with a question and checked answer.",
    sourceCheck: "Checked November 6, 2026: Ian advisory 32 (September 30, 2022, 1500 UTC) and NHC's wind-arrival product definitions. Historical forecast text, not final landfall verification. No local departure deadline, current warning or address-specific wind arrival was checked.",
    sources: [{ href: "https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.032.shtml", label: "NHC: Ian public advisory 32, September 30, 2022" }, { href: "https://www.nhc.noaa.gov/aboutnhcgraphics.shtml#TOA", label: "NHC: earliest reasonable and most likely wind-arrival times" }],
    eyebrow: "Forecast interpretation",
    intro: "A center reaching the coast, hazardous winds reaching a location and a local instruction to leave are three different clocks. The historical Ian example below shows why 'landfall later today' did not mean people could wait for the center. Read the original bulletin's timing words and hazard sections before combining them into a household plan.",
    primaryAction: { label: "Check current NHC storms", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read the hurricane path guide", href: "/hurricane-tracker/path/" },
    intent: "hurricane landfall forecast, where will the hurricane make landfall, hurricane arrival time",
    steps: [
      { title: "Check the Latest Advisory", body: "Start with the advisory time, current position, movement, intensity, and official forecast track. Older screenshots can be misleading after a forecast changes.", href: "/hurricane-tracker/live/", label: "Open live tracker" },
      { title: "Read the Uncertainty", body: "Use the full cone and forecast discussion instead of treating the center line or one model as an exact landfall location.", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", label: "Understand the cone" },
      { title: "Translate It Locally", body: "Check NWS alerts, evacuation zones, surge risk, rainfall, and county instructions for the location you care about.", href: "/alerts/", label: "Check local alerts" }
    ],
    sections: [
      { eyebrow: "Historical example: Ian 2022", title: "Before Landfall, Some Conditions Were Already Occurring", body: "Ian advisory 32, AL092022, was issued at 11:00 AM EDT / 1500 UTC on September 30, 2022. It placed the center about 60 miles east-southeast of Charleston and forecast the center to reach the South Carolina coast that day. Its WIND section separately said tropical storm conditions were occurring in parts of the warning areas along Georgia and the Carolinas, with hurricane conditions expected soon in the hurricane warning area. Preserve the distinction between that operational forecast and a later report of what actually happened.", bullets: ["Issue time: September 30, 2022, 1500 UTC; this is not the landfall time", "Center forecast: reach the South Carolina coast today; no exact crossing minute is given", "Hazard timing: tropical storm conditions already occurring in parts of the specified warning areas", "Local evacuation or route instruction: not supplied for a household by this bulletin"] },
      { eyebrow: "Reading task", title: "Does 'Later Today' Give You Time To Wait?", body: "Question: can a reader turn the center's forecast landfall later that day into permission to finish outdoor work or start evacuating just before landfall? Answer: no. The same bulletin describes conditions already occurring away from the center. It does not give a safe work window, an address-specific arrival time or a household departure deadline. Copy the hazard area and timing language, then obtain the local instruction for the actual location.", bullets: ["Do not divide the center's distance by its present speed to manufacture a safe departure time", "Do not interpret a radius as uniform weather at every location inside it", "Record issuer, issue time, location, hazard timing, local instruction and the next update separately"] },
      { eyebrow: "Product definitions", title: "Earliest Reasonable Is Not the Same as Most Likely", body: "NHC's earliest reasonable wind-arrival graphic marks a time before which the chance of sustained tropical-storm-force winds beginning is no more than 10%. Its most likely graphic marks a time before or after which onset is equally likely. These refer to wind onset, not the center crossing the coast, and neither guarantees a period free of rain, surge, road closures or other hazards. Earlier local orders and other hazards can control the decision.", bullets: ["Check the selected product, storm, advisory, location and displayed time zone", "Keep the earliest reasonable and most likely values in separate fields", "A most likely arrival time is not a deadline to begin preparation", "The historical advisory above does not supply a specific arrival-graphic value for your address"] },
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
      { question: "When should I act on a landfall forecast?", answer: "Follow official watches, warnings, evacuation orders, and local emergency guidance. Households with transport, medical, mobility, pet, or flood-zone constraints may need to act earlier." },
      { question: "Was Ian's September 30, 2022 advisory 32 a safe countdown to landfall?", answer: "No. At 1500 UTC it forecast center landfall that day while separately reporting tropical storm conditions already occurring in parts of the warning areas. It did not establish a safe household departure time." }
    ]
  },
  {
    slug: "tropical-storm-vs-hurricane",
    title: "Tropical Storm vs Hurricane Explained",
    shortTitle: "Tropical Storm vs Hurricane",
    description: "Compare a tropical storm vs hurricane by wind speed, forecast labels, warnings, surge, rainfall, tornado, and preparation decisions.",
    sourceCheck: "Checked November 6, 2026: Ian public advisory 28 (September 29, 2022, 1500 UTC) and 32 (September 30, 1500 UTC). The exercise compares operational classifications, forecast wording and warning fields; it is not a best-track intensity comparison or current alert check.",
    sources: [{ href: "https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.028.shtml", label: "NHC: Tropical Storm Ian advisory 28, September 29, 2022" }, { href: "https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.032.shtml", label: "NHC: Hurricane Ian advisory 32, September 30, 2022" }],
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
      { eyebrow: "Historical example: Ian 2022", title: "A Tropical Storm Bulletin With a Hurricane Warning", body: "At 11:00 AM EDT / 1500 UTC on September 29, 2022, public advisory 28 was headed Tropical Storm Ian and listed maximum sustained winds of 70 mph. It also issued a hurricane warning from the Savannah River to Little River Inlet and forecast Ian to become a hurricane again that evening. The current classification and the expected conditions in a warning area were different fields, not a contradiction.", bullets: ["Current operational classification at issuance: tropical storm", "Current maximum sustained wind: 70 mph; the bulletin says higher gusts", "Forecast change: expected to become a hurricane again that evening", "Hurricane warning area: Savannah River to Little River Inlet, as printed in that historical bulletin"] },
      { eyebrow: "Reading task", title: "Which Field Answers the Question?", body: "Question: does the hurricane warning in advisory 28 prove Ian was already a hurricane at that issue time? Answer: no. The heading and current sustained-wind field identify a tropical storm; the warning communicates expected hurricane conditions in its stated area. Public advisory 32, issued the next day at 1500 UTC, instead says Hurricane Ian and lists 85 mph. These are two dated operational assessments, not a current diagnosis or a substitute for the final storm report.", bullets: ["For 'what is it now?', read the classification and sustained wind with the issue time", "For 'what may happen here?', read the forecast, warning area and hazard sections", "Do not classify a cyclone using a gust, a future forecast row or a warning headline", "Record the year and storm ID AL092022 so the example is not mistaken for today's Ian"] },
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
      { question: "Can a tropical storm become a hurricane quickly?", answer: "Yes. Classification can change as winds strengthen or weaken, including rapid intensification. Always check the latest advisory timestamp." },
      { question: "Can a hurricane warning exist while a system is a tropical storm?", answer: "Yes. Ian advisory 28 on September 29, 2022 listed a tropical storm with 70 mph sustained wind while issuing a hurricane warning for a stated coastal area and forecasting strengthening. Current classification and expected local conditions answer different questions." }
    ]
  },
  {
    slug: "hurricane-categories",
    title: "Hurricane Categories 1-5: Wind & Damage",
    shortTitle: "Hurricane Categories",
    description: "Compare hurricane categories 1 through 5, wind speed thresholds, likely wind damage, and why category does not measure surge or rainfall risk.",
    sourceCheck: "NHC scale thresholds and potential wind damage checked November 9, 2026. Irma forecast/advisory 26, issued September 5, 2017 at 1500 UTC, was checked November 6 for current and forecast sustained wind, gusts, units and valid times. The scale gives general damage potential, not a property forecast or promised outage duration; the historical forecast is not verification of the later outcome.",
    sources: [{ href: "https://www.nhc.noaa.gov/aboutsshws.php", label: "NHC: Saffir-Simpson wind scale, including knot thresholds" }, { href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.fstadv.026.shtml", label: "NHC: Irma forecast/advisory 26, sustained wind and gust fields" }],
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
      { eyebrow: "Historical example: Irma 2017", title: "Read Sustained Wind, Gust and Valid Time Separately", body: "Irma forecast/advisory 26, AL112017, was issued September 5, 2017 at 1500 UTC. Its current field reads maximum sustained winds 155 kt with gusts to 190 kt. Farther down, the OUTLOOK VALID 09/1200Z row forecasts maximum wind 130 kt and gusts 160 kt for September 9 at 1200 UTC. The two rows refer to different times, and the gust is a different quantity from the sustained wind used by the scale.", bullets: ["At issuance: sustained 155 kt, gust 190 kt; use the sustained value for category", "Future outlook row: sustained 130 kt, gust 160 kt at September 9, 2017, 1200 UTC", "NHC Category 4: sustained 113-136 kt; Category 5: sustained at least 137 kt", "Keep kt separate from mph and keep a forecast value separate from an analyzed current value"] },
      { eyebrow: "Reading task", title: "Does a 160 kt Gust Make This Forecast Category 5?", body: "Question: classify the September 9 outlook row using its 130 kt sustained wind or its 160 kt gust? Answer: use 130 kt, which is Category 4 on the NHC knot scale. Using the gust would produce the wrong category. That row is a prediction issued September 5, not evidence of Irma's actual category on September 9. The current 155 kt sustained value in the same advisory was Category 5 at its own issue time.", bullets: ["Your record: product number, storm/year, issue time, current or forecast row, valid time, sustained wind/unit, gust/unit, category", "Do not use central pressure as an alternative category threshold", "For the later analyzed history and deeper wind-scale case study, use the linked scale explainer", "None of these wind values gives local surge depth or rainfall"] },
      { eyebrow: "Category thresholds", title: "Hurricane Category Wind Speeds", body: "The scale uses one-minute maximum sustained wind. Major hurricanes are Category 3, 4, or 5, but all hurricanes can produce dangerous conditions.", bullets: ["Category 1: 74-95 mph", "Category 2: 96-110 mph", "Category 3: 111-129 mph", "Category 4: 130-156 mph", "Category 5: 157 mph or higher"] },
      { eyebrow: "Potential wind damage", title: "How Wind Damage Changes Across Categories", body: "NHC's scale describes potential property damage from wind, including effects on frame homes, trees and utilities. The summaries below are paraphrases of its official table. They are not a building inspection, a promise of a particular outage duration, or a measure of surge and rainfall flooding. Construction, exposure and the wind actually experienced at a location matter.", bullets: ["Category 1 (74-95 mph): roof coverings, siding and gutters can be damaged; large branches can break and shallow-rooted trees can fall. Power interruptions can last a few to several days.", "Category 2 (96-110 mph): major roof and siding damage becomes possible, with many fallen trees blocking roads. Widespread power loss can last days to weeks.", "Category 3 (111-129 mph): well-built frame homes may lose roof decking or gable ends. Fallen trees can block roads, and electricity and water can be unavailable for days to weeks.", "Category 4 (130-156 mph): severe damage can include loss of most roof structure or some exterior walls. Trees and poles can isolate neighborhoods; disruption and uninhabitable conditions can persist for weeks or months.", "Category 5 (157 mph or higher): a high percentage of frame homes can be destroyed, with roof failure and wall collapse. Extensive isolation, outages and uninhabitable conditions can last weeks or months."] },
      { eyebrow: "Scale limits", title: "Category Does Not Equal Total Risk", body: "A lower-category storm can be catastrophic when it is large, slow, rain-heavy, or pushing water into a vulnerable coastline.", bullets: ["No storm surge measurement", "No rainfall or inland flood measurement", "No tornado or wave measurement", "No storm size or duration measurement"] }
    ],
    nextLinks: [
      { name: "Wind Scale: Historical Evidence and Limits", href: "/blog/saffir-simpson-hurricane-wind-scale-explained/", description: "Continue to the Irma and Michael evidence, peak-versus-landfall distinctions and damage limits." },
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
    title: "Southeast Hurricane Tracker & Alerts",
    shortTitle: "Southeast Tracker",
    description: "Track hurricanes approaching the Southeast and East Coast with live NHC paths, radar, alerts, and Georgia, Carolinas, Virginia, and Florida trackers.",
    eyebrow: "Southeast and East Coast tracker",
    intro: "Use this Southeast hurricane tracker to check active Atlantic systems that may approach Florida, Georgia, South Carolina, North Carolina, or Virginia, then move into state and city alerts for local decisions.",
    primaryAction: { label: "Open live hurricane map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check North Carolina", href: "/tracker/north-carolina/" },
    intent: "southeast hurricane tracker, east coast hurricane tracker, hurricane near Georgia and Carolinas",
    sourceCheck: "Checked November 10, 2026: Ian public advisory 32, issued September 30, 2022 at 1100 AM EDT / 1500 UTC. Reviewed its warning areas, forecast rainfall, continuing Florida river flooding and regional surf language. All values below are historical operational forecasts or statements, not final measured totals or current warnings.",
    sources: [
      { href: "https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.032.shtml", label: "NHC: Historical Ian advisory 32, September 30, 2022" }
    ],
    steps: [
      { title: "Check the Atlantic Track", body: "Start with current NHC systems and the official forecast path before focusing on one state or model run.", href: "/hurricane-tracker/live/", label: "Check current storms" },
      { title: "Compare the Carolinas and Virginia", body: "Open North Carolina for Outer Banks timing, South Carolina for Lowcountry surge, and Virginia for Hampton Roads and Chesapeake Bay alerts.", href: "/tracker/north-carolina/", label: "Check North Carolina" },
      { title: "Verify Local Alerts", body: "Use NWS watches and warnings plus county emergency management for location-specific timing and instructions.", href: "/alerts/", label: "Check active alerts" }
    ],
    sections: [
      { eyebrow: "Current question", title: "Is a Hurricane Heading Toward the Southeast Coast?", body: "Use the latest NHC position and forecast cone to check whether an active system is approaching the Southeast. Do not treat the center line as an impact boundary.", bullets: ["Florida Atlantic coast context", "Georgia and South Carolina coastal alerts", "North Carolina and Outer Banks timing", "Virginia and Hampton Roads risk"] },
      {
        eyebrow: "Historical regional example",
        title: "Ian's South Carolina Approach Did Not End Florida's Flooding",
        body: "At 1500 UTC on September 30, 2022, Ian advisory 32 located the center at 32.4N, 79.0W, about 60 miles east-southeast of Charleston. Maximum sustained winds were estimated at 85 mph. The forecast center was approaching South Carolina, yet the same bulletin said major-to-record river flooding would continue across central Florida through the following week. This is a useful regional distinction: a center moving into another state does not end an earlier state's river response or establish that returning there is safe.",
        bullets: [
          "The bulletin's hurricane warning covered Savannah River to Cape Fear, North Carolina; that is a named coastal segment, not every address in two states.",
          "Its rainfall forecast gave northeast South Carolina 4-8 inches with local maxima of 12 inches; central South Carolina, North Carolina and southern Virginia had 3-6 inches with local maxima of 8 inches.",
          "Those are forecast storm totals with localized maxima, not observations proving that every town received those amounts.",
          "The same bulletin described dangerous surf and rip currents along Florida, Georgia and the Carolinas. A beach hazard and an inland river hazard require different local products."
        ]
      },
      {
        eyebrow: "Make a regional brief",
        title: "Follow Each Location's Hazard, Not One Statewide Label",
        body: "For a trip, property or relative in another state, make a separate line for each relevant location. Record the county, official warning or forecast product, issue time, hazard, expected timing and the responsible local source. In the historical Ian example, Charleston's coastal warning, a central Florida river forecast and a Virginia rainfall concern cannot be summarized accurately as the storm has moved north. Their timelines differ, and none alone establishes that a road between those locations is open.",
        bullets: [
          "Coast: check the warning area and local surge or evacuation instructions.",
          "Inland: check the local NWS rainfall, flash-flood or river product and its actual forecast period.",
          "Travel: check official road and bridge information for the trip, including the receiving location.",
          "Keep forecast, observed conditions and local orders in separate fields. If a source fails, mark that location unverified rather than borrowing another state's status."
        ]
      },
      {
        eyebrow: "Reading question",
        title: "Could You Infer a Virginia Rainfall Total From Charleston's Wind?",
        body: "Open the historical advisory and find the 85 mph maximum sustained wind estimate. Can that number tell you how much rain a Virginia household should expect? Answer: no. It estimates the cyclone's maximum sustained wind, while rainfall is described in a different section and over a different area and time period. Even the bulletin's 3-6 inch regional forecast does not establish one property's final total. The exercise teaches which field to consult, not a current forecast for Virginia.",
        bullets: [
          "Your answer should identify the rainfall section, its region, the storm-total period and its use of local maxima.",
          "For present conditions, replace the historical bulletin with the latest NHC advisory and relevant local NWS product.",
          "For reentry, consult the actual local instruction; the end of a coastal wind warning does not reopen a flooded road.",
          "Use the state links below to narrow the regional overview to the location you need to act on."
        ]
      },
      { eyebrow: "Regional risk", title: "One Atlantic Storm Can Affect Several States", body: "Recurving storms can produce different hazards from Florida through Virginia even without a direct landfall in every state.", bullets: ["Storm surge and tidal flooding", "Freshwater and river flooding", "Rain-band tornadoes", "Bridge, ferry, and evacuation-route constraints"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC systems, forecast paths, radar, and satellite context." },
      { name: "Georgia Hurricane Tracker", href: "/tracker/georgia/", description: "Savannah, Brunswick, coastal alerts, flooding, and routes." },
      { name: "South Carolina Hurricane Tracker", href: "/tracker/south-carolina/", description: "Check current NHC context, Charleston and Myrtle Beach trackers, Lowcountry NWS alerts, and surge risk." },
      { name: "North Carolina Hurricane Tracker", href: "/tracker/north-carolina/", description: "Check current NHC context, Outer Banks and Wilmington trackers, river flooding, and NWS alerts." },
      { name: "Virginia Hurricane Tracker", href: "/tracker/virginia/", description: "Check current NHC context, Norfolk and Virginia Beach trackers, Hampton Roads alerts, and tidal flooding." }
    ],
    faqs: [
      { question: "Is a hurricane heading toward the East Coast?", answer: "Check the live NHC systems and forecast path, then open the relevant state tracker. Forecasts can shift, and impacts can occur outside the cone." },
      { question: "Which Southeast states should I monitor?", answer: "Monitor Florida, Georgia, South Carolina, North Carolina, and Virginia when an Atlantic system approaches, then verify local NWS alerts and emergency instructions." },
      { question: "Can a hurricane affect the Carolinas without making landfall there?", answer: "Yes. Surge, heavy rain, tornadoes, waves, rip currents, and outages can occur even when the storm center stays offshore or lands elsewhere." },
      { question: "Does one discontinued warning end every hazard in that area?", answer: "No. In historical Ian advisory 32, the changes section discontinued the storm surge warning south of the Savannah River, while the full warning list still included a tropical storm warning from Altamaha Sound, Georgia, to Savannah River. That was a change to a particular hazard product and area, not a general all-clear. Read the full current list after checking the changes section, then consult the relevant local products for flooding, surf and access. This historical example does not establish the status of any warning today or authorize reentry." }
    ]
  },
  {
    slug: "gulf",
    title: "Gulf Hurricane Tracker & Live Alerts",
    shortTitle: "Gulf Tracker",
    description: "Check whether a hurricane or tropical storm is in the Gulf right now with the live NHC map, current path, radar, and Gulf Coast alerts.",
    eyebrow: "Gulf Coast live tracker",
    intro: "Is there a storm in the Gulf right now? Use this Gulf hurricane tracker to check the latest NHC status, current position, forecast path, radar, and local alerts for Florida, Texas, Louisiana, Mississippi, and Alabama.",
    primaryAction: { label: "Open live hurricane map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check current disturbances", href: "/hurricane-tracker/tropical-disturbances/" },
    intent: "Gulf hurricane tracker, hurricane in Gulf right now, tropical storm Gulf",
    sourceCheck: "Checked November 10, 2026: Ian public advisory 22, issued September 28, 2022 at 500 AM EDT / 0900 UTC. Reviewed center position, maximum wind, warning geography and surge forecast wording. This is a historical operational bulletin, not today's Gulf status or final landfall analysis. Current status remains in the live feed and official NHC products.",
    sources: [
      { href: "https://www.nhc.noaa.gov/archive/2022/al09/al092022.public.022.shtml", label: "NHC: Historical Ian advisory 22, September 28, 2022" },
      { href: "https://www.nhc.noaa.gov/", label: "NHC: Current systems and tropical weather outlooks" }
    ],
    steps: [
      { title: "Separate Active Cyclones From Development Areas", body: "Check the current cyclone list for named systems and the separate Atlantic outlook for development areas. Read each area's location; an Atlantic probability is not automatically a Gulf probability.", href: "/hurricane-tracker/tropical-disturbances/", label: "Check development areas" },
      { title: "Compare Track and Radar", body: "Use the official forecast path for broad timing, then compare radar and satellite for rain bands and local weather changes.", href: "/radar/", label: "Open radar" },
      { title: "Move to Local Gulf Alerts", body: "Open Louisiana for surge and evacuation context, Mississippi for Gulfport and Biloxi flooding, or Texas for Houston, Galveston, and Corpus Christi alerts.", href: "/tracker/louisiana/", label: "Check Louisiana alerts" }
    ],
    sections: [
      { eyebrow: "Gulf questions", title: "Is There a Hurricane in the Gulf Right Now?", body: "Read the current Gulf check above and verify its timestamp against the NHC. The Atlantic outlook also covers the Caribbean and open Atlantic: a development percentage shown there does not automatically refer to the Gulf. Check the named area's location before interpreting its probability.", bullets: ["Active NHC hurricane and tropical-storm status", "Forecast path and advisory time", "Location of each Atlantic outlook development area", "Florida, Texas, Louisiana, Mississippi, and Alabama alerts"] },
      {
        eyebrow: "Historical Gulf example",
        title: "Read Ian's Offshore Position Separately From Its Warning Areas",
        body: "Ian advisory 22, issued at 0900 UTC on September 28, 2022, placed the center at 25.6N, 82.9W, about 75 miles west-southwest of Naples. It estimated maximum sustained winds of 140 mph and movement north-northeast at 10 mph. Those are three different fields: location, cyclone maximum wind and center motion. The wind number is not the speed at which the storm crosses the Gulf, and the offshore center position is not a boundary outside which households can ignore warnings.",
        bullets: [
          "The historical hurricane warning included Chokoloskee to Anclote River, including Tampa Bay, plus Dry Tortugas.",
          "The surge warning included Suwannee River southward to Flamingo and Tampa Bay, but also Atlantic-side locations including the St. Johns River.",
          "A Gulf center did not restrict every hazard to the Gulf-facing coast. Read the actual warning list rather than filtering by the water body in the headline.",
          "These archived names and numbers are for reading practice; they are not active warnings or a map of current evacuation zones."
        ]
      },
      {
        eyebrow: "Three separate questions",
        title: "Formation, Landfall and Local Flooding Need Different Evidence",
        body: "An outlook answers whether a particular disturbance could become a tropical cyclone during a stated period. Once a cyclone exists, its advisory describes its position, intensity and forecast. Local flooding and evacuation questions then require hazard products and local instructions. Do not carry a formation percentage into a sentence about a city's landfall chance. Even a well-defined Gulf track cannot by itself supply the depth of water at a property or the opening status of a bridge.",
        bullets: [
          "Before formation: record the area's description, location, 48-hour and seven-day probabilities, and outlook issue time.",
          "After formation: record the cyclone identifier, advisory number, issue time and relevant forecast point's valid time.",
          "For the household: record the actual warning area, local order and destination or road information you still need.",
          "If the cyclone feed is empty but the outlook has a development area, report both facts. If a feed fails, current status is unverified, not zero."
        ]
      },
      {
        eyebrow: "Reading check",
        title: "Does 140 mph Mean Ian Was Moving at 140 mph?",
        body: "In advisory 22, which field answers how quickly the center was moving? Answer: PRESENT MOVEMENT, printed as north-northeast at 10 mph. The separate 140 mph value is MAXIMUM SUSTAINED WINDS. Neither gives a household a departure deadline. To make a timing decision, read the applicable local instruction and current hazard timing rather than dividing distance to the center by either speed. Tracks can change, and hazardous weather can precede the center.",
        bullets: [
          "Keep units attached to values: both fields use mph, so units alone do not distinguish their meaning.",
          "Keep the historical issue time with the answer; do not reuse the numbers in a current-status summary.",
          "The bulletin's warning locations are a separate list. Locate the correct hazard before deciding which local source to consult.",
          "For today's Gulf question, open the live map and outlook above, then use the relevant state page below for local context."
        ]
      },
      { eyebrow: "Risk distinction", title: "A Gulf Track Is Not a Landfall Prediction", body: "A storm can affect the Gulf Coast through surge, rain, tornadoes, or outages outside the center path. Local orders and warnings control what people should do.", bullets: ["Storm surge and bay flooding", "Freshwater and river flooding", "Rain-band tornadoes", "Evacuation zones and route constraints"] }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC systems, radar, satellite, and forecast context." },
      { name: "Atlantic Tropical Disturbance Outlook", href: "/hurricane-tracker/tropical-disturbances/", description: "Current NHC formation areas before a system becomes a named storm." },
      { name: "Florida Hurricane Tracker", href: "/tracker/florida/", description: "Florida Atlantic and Gulf risk with live alerts." },
      { name: "Texas Hurricane Tracker", href: "/tracker/texas/", description: "Check the current Gulf track, Houston and Galveston context, rainfall, surge, and Texas NWS alerts." },
      { name: "Louisiana Hurricane Tracker", href: "/tracker/louisiana/", description: "Check current NHC context, New Orleans and Lake Charles trackers, surge, levee, and evacuation guidance." },
      { name: "Mississippi Hurricane Tracker", href: "/tracker/mississippi/", description: "Check current NHC context, Gulfport and Biloxi trackers, coastal surge, flooding, and local alerts." },
      { name: "Alabama Hurricane Tracker", href: "/tracker/alabama/", description: "Alabama Gulf Coast storm status, Mobile Bay risk, and alerts." },
      { name: "Storm Surge Map", href: "/hurricane-tracker/storm-surge-map/", description: "Understand why surge risk differs from storm category." }
    ],
    faqs: [
      { question: "Is there a hurricane in the Gulf right now?", answer: "Check the current NHC storm list and Gulf tracker status above. A system's Gulf position does not by itself predict landfall or local impacts." },
      { question: "Is there a tropical storm in the Gulf?", answer: "Use the current NHC classification and advisory time. Tropical storms can produce dangerous rain, surge, tornadoes, and flooding before or without hurricane-force winds." },
      { question: "Which Gulf Coast states should I check?", answer: "Check Florida, Alabama, Mississippi, Louisiana, and Texas state trackers, then verify county NWS alerts and local emergency management instructions." },
      { question: "Can I compare distances without checking their units?", answer: "No. Ian advisory 22 describes the center as about 75 MI or 125 KM west-southwest of Naples. Other hurricane products use nautical miles. Record the printed unit with every distance and convert before comparing different products. Also distinguish a distance from a named reference point from a wind radius or forecast-error radius: even if converted into the same unit, those quantities describe different things. None alone measures how far a household must travel to a suitable destination." }
    ]
  },
  {
    slug: "how-hurricanes-are-tracked",
    title: "How Hurricanes Are Tracked: NHC & Radar",
    shortTitle: "How Hurricanes Are Tracked",
    description: "Learn how scientists and the National Hurricane Center track hurricanes with satellites, aircraft, radar, buoys, models, and official forecast advisories.",
    eyebrow: "Hurricane tracking explained",
    intro: "Hurricanes are tracked by combining satellite observations, aircraft reconnaissance, radar, ocean data, surface reports, and forecast models. The NHC turns those inputs into the official position, intensity, forecast path, and advisory products used by emergency managers.",
    primaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read the path guide", href: "/hurricane-tracker/path/" },
    intent: "how are hurricanes tracked, how do scientists track hurricanes, hurricane forecast",
    sourceCheck: "Checked November 10, 2026: Irma discussion 26, September 5, 2017 at 1100 AM AST / 1500 UTC. Reviewed the satellite description, aircraft SFMR measurements, initial intensity and forecast table. The example distinguishes observations, operational analysis and forecasts; it is not a verification of later outcomes or a ranking of current models.",
    sources: [
      { href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml", label: "NHC: Historical Irma discussion 26 and forecast table" }
    ],
    steps: [
      { title: "Observe the System", body: "Satellites and aircraft help locate the circulation, estimate organization, and measure winds, pressure, temperature, and moisture.", href: "/learn/", label: "Open learning center" },
      { title: "Build the Forecast", body: "Forecasters combine observations with numerical models and official expertise to estimate movement and intensity uncertainty.", href: "/hurricane-tracker/path/", label: "Read path guide" },
      { title: "Communicate the Risk", body: "Advisories, watches, warnings, cones, and local NWS products translate forecast information into public decisions.", href: "/alerts/", label: "Review alerts" }
    ],
    sections: [
      { eyebrow: "Observation", title: "How Scientists Track a Hurricane", body: "No single instrument is enough. Repeated observations show where a system is, how strong it is, and whether the circulation is changing.", bullets: ["Geostationary and polar-orbiting satellites", "Hurricane hunter aircraft and dropsondes", "Coastal and land-based radar", "Buoys, ships, and surface weather stations"] },
      {
        eyebrow: "Follow a real evidence chain",
        title: "What Irma's Forecaster Used in Discussion 26",
        body: "In the September 5, 2017 discussion issued at 1500 UTC, NHC described a distinct 25-30 nautical mile eye in GOES-16 one-minute visible imagery. The same discussion reported an aircraft SFMR peak wind of 154 kt, with a few others of 149-150 kt, and set the initial intensity at 155 kt based on those data. These are connected but different claims: satellite imagery described structure, an aircraft instrument supplied wind measurements, and the forecaster made the operational intensity assessment. A round eye alone did not supply the wind value.",
        bullets: [
          "Observation: preserve the instrument, measured quantity and unit rather than summarizing every number as storm strength.",
          "Analysis: retain the forecaster's initial intensity as an assessed value, not the largest number copied from any sensor.",
          "Coverage: the text says aircraft had not yet sampled the northeastern eyewall during that discussion's preparation; the evidence was not a complete measurement of every point.",
          "Forecast: the later table gives predictions for future valid times. They are not additional aircraft observations."
        ]
      },
      {
        eyebrow: "Read the forecast reasoning",
        title: "Separate the Starting Estimate From the Future Path",
        body: "The discussion describes a subtropical ridge as the steering influence and anticipates a later trough eroding part of that ridge. It says the new track forecast is close to a corrected consensus model and similar to the previous forecast. This is an explanation of how observations and guidance were interpreted in one historical case. It is not proof that the named model is always best, and the later forecast rows do not prove the predicted steering or intensity actually occurred. Checking accuracy requires the subsequent analyzed outcome at the same valid time.",
        bullets: [
          "Use the initial row to identify the starting analysis and its valid UTC.",
          "Read the forecast row's explicit valid time before comparing two predictions; horizon labels alone can mislead.",
          "Keep conditional phrases about future environmental changes and eyewall cycles; do not turn them into observed events.",
          "Use current NHC discussions for current reasoning. A well-explained 2017 example is a reading lesson, not today's model guidance."
        ]
      },
      {
        eyebrow: "Evidence exercise",
        title: "Which Irma Number Is a Measurement and Which Is a Forecast?",
        body: "Find three entries in discussion 26: a reported peak SFMR wind of 154 kt, the INIT row of 155 KT at 05/1500Z, and the printed 24H row of 150 KT valid 06/1200Z. Classify them before drawing a trend. Answer: the first is a reported measurement, the second the operational initial intensity, and the third a forecast for a later time. Subtracting 150 from 155 describes a forecast change from the initial assessment, not an observed weakening that had already happened.",
        bullets: [
          "Write down the storm identifier AL112017, discussion number, issue date and source URL with the three entries.",
          "Keep KT attached to each wind number; do not compare it directly with a value labeled MPH.",
          "State which result is still unknown from this document alone: the later verified intensity at 06/1200Z.",
          "The same habit applies to current tracking: distinguish measured data, analyzed present conditions and forecast outcomes before sharing a chart."
        ]
      },
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
      { question: "Can hurricanes be predicted exactly?", answer: "No. Forecast uncertainty remains, especially farther into the future. Use the official cone and local alerts rather than treating one line as a guarantee." },
      { question: "What should I save to make a forecast comparison reproducible?", answer: "Save the original product URL, storm identifier, discussion or advisory number, issue time with its time zone, and the explicit valid time of the row you use. Copy latitude, longitude and wind with their units. For Irma discussion 26, INIT is 05/1500Z at 16.8N, 58.4W and 155 KT; the printed 24H row is valid 06/1200Z at 18.1N, 63.0W and 150 KT. Those are an initial analysis and a prediction, respectively. Preserve the printed labels instead of assuming forecast-hour labels count from the public issue time. A future comparison also needs a source for the later analyzed outcome, matched to that exact valid time." }
    ]
  },
  {
    slug: "hurricane-warning",
    title: "Hurricane Warning vs Watch Explained",
    shortTitle: "Hurricane Warning",
    description: "Understand what a hurricane warning means, how it differs from a watch, and how to turn NWS alerts into a household action plan.",
    eyebrow: "Warning language guide",
    intro: "A hurricane warning means hurricane conditions are expected in the specified area. Its usual 36-hour lead time is measured before the anticipated onset of tropical-storm-force winds, when preparations become difficult. A hurricane watch is generally issued 48 hours before that onset. Read the complete local product for its area and instructions.",
    primaryAction: { label: "Check active alerts", href: "/alerts/" },
    secondaryAction: { label: "Decode an alert", href: "/tools/alert-action-decoder/" },
    intent: "what is a hurricane warning, hurricane watch vs warning, NWS hurricane alert",
    sourceCheck: "Checked November 10, 2026: NWS hurricane watches and warnings page, limited to wind and surge definitions, 48/36-hour reference times and Extreme Wind Warning shelter instructions. Its older tropical-outlook period text was not used. The exercises below are HurricaneHub teaching examples, not actual alerts or verified local orders.",
    sources: [
      { href: "https://www.weather.gov/safety/hurricane-ww", label: "NWS: Hurricane watches, warnings and immediate extreme-wind shelter instructions" }
    ],
    steps: [
      { title: "Read the Alert Type", body: "Identify whether the product is a watch, warning, advisory, surge warning, flood warning, or tornado warning.", href: "/alerts/", label: "Check alerts" },
      { title: "Check Your Location", body: "Read the counties, zones, timing, hazards, and instructions in the official local product.", href: "/local-hurricane-risk/", label: "Check local risk" },
      { title: "Match the Hazard to the Action", body: "Read the specific instruction rather than treating every warning as an evacuation signal. Extreme Wind Warnings require immediate interior shelter; local evacuation orders have separate departure instructions.", href: "/tools/alert-action-decoder/", label: "Decode the alert" }
    ],
    sections: [
      { eyebrow: "Definitions", title: "Watch Versus Warning", body: "A watch means conditions are possible; a warning means they are expected. For hurricane watch/warning lead times, the 48/36-hour reference is the anticipated onset of tropical-storm-force winds, not arrival of the hurricane-force core.", bullets: ["Hurricane watch: possible hurricane conditions", "Hurricane warning: expected hurricane conditions", "Storm surge warning: life-threatening inundation expected, generally within 36 hours", "Storm surge watch: life-threatening inundation possible, generally within 48 hours", "Extreme Wind and Tornado Warnings: immediate shelter instructions"] },
      {
        eyebrow: "Timing exercise",
        title: "A Warning Lead Time Is Not Time Left on Your Clock",
        body: "NWS describes the hurricane warning as issued 36 hours before anticipated tropical-storm-force winds, because preparation becomes difficult at those speeds. The reference is the forecast onset of those winds, not the center crossing the coast. It also is not 36 hours from whenever a reader discovers the message. Forecast timing can change and local instructions may require earlier action. Read the issue time, time zone and the current product instead of starting a personal countdown from an old screenshot.",
        bullets: [
          "Illustrative arithmetic only: a message issued Tuesday at 08:00 is read Tuesday at 20:00, using the same time zone. How old is that version?",
          "Answer: 12 hours old. That subtraction measures message age, not time remaining to evacuate or the expected wind-arrival time.",
          "The usual 36-hour definition alone cannot supply a household departure deadline. Find the current forecast timing and the separate local order.",
          "If issue and reading times use different zones, convert them to the same zone before subtracting. Keep the date when the conversion crosses midnight."
        ]
      },
      {
        eyebrow: "Different hazards",
        title: "Wind and Water Warnings Answer Different Questions",
        body: "A hurricane warning concerns expected hurricane conditions somewhere in its specified area. A storm surge warning concerns the danger of life-threatening water moving inland from the shoreline, generally within 36 hours. The surge warning does not mean every part of that area will flood to one depth, and the wind warning does not identify which evacuation-zone labels have been ordered to leave. Read the geographic description and local emergency-management instructions for each relevant hazard, even if the storm center is forecast to pass elsewhere.",
        bullets: [
          "Record the hazard separately: wind, coastal surge, rainfall flooding or tornadoes.",
          "Record the official affected area rather than replacing a coastal segment with the whole state.",
          "Record an evacuation order's jurisdiction, zone or housing group, issue time and deadline on its own line.",
          "When two messages appear to disagree, compare their hazards, areas and times before assuming one cancels the other."
        ]
      },
      {
        eyebrow: "Action exercise",
        title: "Which Warning Calls for Immediate Shelter?",
        body: "NWS describes an Extreme Wind Warning as extreme sustained winds of a major hurricane, 115 mph or greater, expected to begin within an hour, usually associated with the eyewall. Its action is immediate shelter in the interior of a well-built structure. This is a different situation from organizing an evacuation ahead of hazardous winds. A driver should not interpret the word warning as an instruction to start a long road journey. Follow the current product for the actual location and contact emergency services for an immediate emergency.",
        bullets: [
          "Practice A: a local order applies to the household's zone and gives a departure deadline before conditions become unsafe. Match the order to the address and follow those instructions.",
          "Practice B: an Extreme Wind Warning applies at the household's location now. Choose immediate interior shelter, not departure based on the generic 36-hour hurricane-warning definition.",
          "Answer: A concerns planned evacuation under a local order; B concerns immediate shelter from imminent extreme wind. The two products are not interchangeable.",
          "These hypothetical messages establish no current order, safe route or suitable building. Use actual local instructions during an event."
        ]
      },
      { eyebrow: "Action", title: "The Alert Is Not the Whole Plan", body: "Pair the alert with local evacuation orders, your zone, housing type, mobility, medical needs, pets, and route timing.", bullets: ["Follow local emergency management", "Do not wait for the center line", "Leave early if your household needs more time", "Use official shelter and road information"] }
    ],
    nextLinks: [
      { name: "Active NWS Alerts", href: "/alerts/", description: "Review current official alert products." },
      { name: "Alert Action Decoder", href: "/tools/alert-action-decoder/", description: "Turn alert wording into planning steps." },
      { name: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Organize household constraints and timing." },
      { name: "Evacuation Zones", href: "/hurricane-tracker/evacuation-zones/", description: "Find the right local zone source." }
    ],
    faqs: [
      { question: "What is a hurricane warning?", answer: "Hurricane conditions are expected in the specified area. The warning is normally issued 36 hours before anticipated tropical-storm-force winds begin, because preparation becomes difficult then. It is not a 36-hour forecast of hurricane-force wind arrival. Follow the full NWS product and local instructions." },
      { question: "What is the difference between a hurricane watch and warning?", answer: "A watch means hurricane conditions are possible; a warning means they are expected. Use a watch to finish preparation and a warning to act on official instructions." },
      { question: "Does a hurricane warning mean everyone must evacuate?", answer: "Not automatically. Evacuation orders are local, and decisions depend on zone, surge, flooding, housing, transport, and household needs." }
    ]
  },
  {
    slug: "what-does-a-hurricane-look-like",
    title: "What Does a Hurricane Look Like?",
    shortTitle: "What a Hurricane Looks Like",
    description: "See what hurricanes look like on satellite and radar: the eye, eyewall, rain bands, cloud structure, and why appearance alone is not a risk measure.",
    eyebrow: "Storm structure guide",
    intro: "A hurricane can look like a spiral of clouds from satellite, a compact eye and eyewall, or broad rain bands on radar. Appearance helps explain structure, but official intensity, forecast track, surge, flood, and local alerts matter more than a dramatic image.",
    primaryAction: { label: "Open radar and satellite", href: "/radar/" },
    secondaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    intent: "what does a hurricane look like, hurricane satellite image, hurricane radar",
    sourceCheck: "Checked November 10, 2026: Irma discussion 26's satellite eye description and aircraft-based intensity reasoning. The retained NWS Michael radar image and parent-page labels were checked November 6; the KEVX image header and KEOX parent caption discrepancy remains unresolved. These historical examples are not current imagery or a property-level wind assessment.",
    sources: [
      { href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml", label: "NHC: Irma discussion 26, satellite appearance and aircraft evidence" },
      { href: "https://www.weather.gov/tae/HurricaneMichael2018", label: "NWS: Historical Michael event page and radar figure context" }
    ],
    steps: [
      { title: "Use Satellite", body: "Satellite imagery shows cloud structure, organization, outflow, and the shape of the larger tropical system.", href: "/radar/", label: "View satellite" },
      { title: "Use Radar", body: "Radar shows precipitation and rain-band timing when the system is close enough to radar coverage.", href: "/radar/", label: "View radar" },
      { title: "Check Official Risk", body: "Pair images with NHC intensity, forecast track, storm surge, flood, wind, and tornado alerts.", href: "/alerts/", label: "Check alerts" }
    ],
    sections: [
      { eyebrow: "Structure", title: "Eye, Eyewall, and Rain Bands", body: "The eye is calmer relative to the eyewall, where the strongest winds often occur. Outer rain bands can still bring flooding and tornadoes far from the center.", bullets: ["Eye and eyewall", "Spiral rain bands", "Central dense overcast", "Outflow and cloud-top structure"] },
      {
        eyebrow: "Use the real image above",
        title: "Two Panels Can Show One Storm and Different Quantities",
        body: "The retained Michael radar pair is an opportunity to read labels before describing colors. The left panel's DBZ legend identifies reflectivity; the right panel's KTS legend identifies radial velocity. The eye and surrounding eyewall appear in these products, but their colors represent different quantities. A color on the left is not a wind speed, and a velocity on the right is not automatically the maximum sustained surface wind used for a hurricane category. Read the product, legend and printed time before making a comparison.",
        bullets: [
          "Start with the full historical pair, not a crop stripped of its legend. Record which side you are describing.",
          "The image says KEVX while its parent-page caption says KEOX. Preserve that source discrepancy rather than silently assigning a new radar identity.",
          "A reflectivity gap can help identify the eye in this example, but does not establish safe conditions on the ground.",
          "For a closer reading of the units and retained panel details, use the dedicated radar guide linked below."
        ]
      },
      {
        eyebrow: "Satellite evidence",
        title: "A Clear Eye Was Only Part of Irma's Intensity Assessment",
        body: "NHC's Irma discussion 26, issued September 5, 2017 at 1500 UTC, described a distinct 25-30 nautical mile eye in GOES-16 one-minute visible imagery. It also reported aircraft SFMR winds and set the initial intensity at 155 kt based on those data. The written example shows why appearance and intensity should not be collapsed into one claim. The eye's width described structure in the imagery; it did not tell the reader the wind at a house or provide the later storm track.",
        bullets: [
          "Distinguish a satellite channel's cloud view from radar's precipitation or velocity product.",
          "Do not use one eye diameter as a rule for categorizing other hurricanes. This source describes one storm at one historical time.",
          "The discussion also warns that hurricane-force winds and life-threatening surge extend far from the center.",
          "An image comparison needs matching dates, times, products and geographic scales. A tighter crop alone can make an unchanged feature look larger."
        ]
      },
      {
        eyebrow: "Image-reading task",
        title: "Can You Recover a Wind Speed From the Left Panel?",
        body: "Question: a reader points at a bright color in the left Michael panel and calls it a 120-knot wind. What must be corrected? Answer: that panel is labeled DBZ, a reflectivity product, so its color cannot be read as knots. The right panel has a KTS velocity legend, but even that product does not by itself certify sustained wind at a property. A useful caption names the storm, year, panel, product, legend and source, then describes only what those fields support.",
        bullets: [
          "Your observation can say that the historical reflectivity image shows an eye and surrounding precipitation structure.",
          "It cannot assign a household wind speed, evacuation zone or road condition from that appearance.",
          "If a shared image lacks its product label or time, mark those fields missing and open the original source before interpreting it.",
          "During a real event, use current warnings and local instructions; a clear-looking eye or a break in rain is not an all-clear."
        ]
      },
      { eyebrow: "Safety", title: "A Dramatic Image Does Not Show Every Hazard", body: "A storm can look organized without threatening your location, or look less symmetrical while producing dangerous local impacts. Use official data and local warnings.", bullets: ["Wind and gust forecasts", "Storm surge and coastal flooding", "Rainfall and river flooding", "Tornado and outage risk"] }
    ],
    nextLinks: [
      { name: "Interactive Radar", href: "/radar/", description: "Compare radar, satellite, wind, and alert layers." },
      { name: "Read the Historical Radar Pair", href: "/hurricane-tracker/radar/", description: "Inspect the full Michael image, panel details, units and source-label discrepancy." },
      { name: "Live Hurricane Tracker", href: "/hurricane-tracker/live/", description: "Check current storms and NHC paths." },
      { name: "Hurricane Path Guide", href: "/hurricane-tracker/path/", description: "Understand forecast track and cone limits." }
    ],
    faqs: [
      { question: "What does a hurricane look like on satellite?", answer: "It often appears as a spiral cloud system with a central dense overcast, rain bands, and sometimes a visible eye. Satellite appearance is only one part of the risk picture." },
      { question: "What does a hurricane look like on radar?", answer: "Radar can show precipitation bands, the eyewall, and areas of heavy rain when the storm is within coverage. Radar does not replace the NHC forecast or local warnings." },
      { question: "Does a visible eye mean the storm is safe?", answer: "No. The eyewall can contain the strongest winds, and conditions can change quickly. Follow official warnings even when the center appears calm." },
      { question: "How should I caption a historical storm image when its labels are incomplete?", answer: "Name the storm and year, identify the image product and publisher, and keep the visible legend and timestamp with the full image. State which label is missing or inconsistent instead of repairing it by guesswork. For the Michael pair here, retain the KEVX image header and disclose the different KEOX caption on its source page. Do not add a time zone not established by that image. Link the original context and label any crop as a detail from the full image. A caption should separate what readers can see from measurements the image cannot establish." }
    ]
  },
  {
    slug: "map",
    title: "How to Read a Hurricane Map: NHC, Radar & Satellite",
    shortTitle: "Map Guide",
    description:
      "Learn how NHC tracks, forecast cones, radar, satellite, and local alert layers answer different storm questions, then open the current live map.",
    eyebrow: "Hurricane map guide",
    intro:
      "Use this guide to choose the right hurricane map layer. The live tracker is the canonical page for current storm position and NHC status; this page explains when to use radar, satellite, the forecast track, and local alerts.",
    primaryAction: { label: "Open live tracker map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Open radar map", href: "/radar/" },
    intent: "how to read a hurricane map, hurricane map layers, forecast cone map",
    sourceCheck: "NHC cone definition and 2026 radii checked November 10, 2026. These annual reference values are not a current storm forecast.",
    sources: [
      { href: "https://www.nhc.noaa.gov/aboutcone.shtml", label: "NHC: Definition of the tropical cyclone track forecast cone and 2026 radius tables" }
    ],
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
        eyebrow: "Verified numerical example",
        title: "Read the 2026 Atlantic Cone Table",
        body: "NHC's 2026 Atlantic table gives a 39-nautical-mile circle radius at 24 hours and 200 nautical miles at 120 hours. The radii use official track forecast errors from 2021-2025: approximately two-thirds of historical errors fall inside the corresponding circles. This describes center-track uncertainty, not the size of a storm or a city's landfall probability.",
        bullets: [
          "Read the basin first: the Atlantic and eastern/central Pacific tables have different radii.",
          "Task: find the Atlantic 24-hour row. Is 39 a radius in nautical miles, a wind speed, or a probability?",
          "Answer: a radius of 39 nautical miles. It is neither 39 percent nor a boundary of dangerous weather.",
          "The 120-hour radius is 200 nautical miles; it does not say that a storm has grown to that size."
        ]
      },
      {
        eyebrow: "Make a map record",
        title: "Keep Layer Time and Forecast Time Separate",
        body: "Before comparing layers, write down the publisher, product, timestamp and time zone for each. An advisory issue time, a radar scan time and the forecast valid time answer different questions. A newer-looking animation cannot update an older advisory's forecast points.",
        bullets: [
          "Center and cone: record the NHC advisory issue time and the valid time of the forecast point you are reading.",
          "Radar: record the displayed scan time and location of precipitation; do not use it as an evacuation-zone map.",
          "Satellite: record the image time and channel; cloud coverage is not a surface wind measurement.",
          "Local warning: record the issuing NWS office, affected area and expiration time. Check evacuation instructions separately with the responsible local authority.",
          "If a layer has no usable timestamp or fails to load, mark it unverified and open the official source before comparing it."
        ]
      },
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
    title: "Hurricane Path: Read Positions and Forecast Times",
    shortTitle: "Path Tracker",
    description:
      "Read an actual NHC forecast-position table: identify the initial position, match valid times, preserve coordinates and units, and keep local hazards separate.",
    eyebrow: "Forecast-position reading guide",
    intro:
      "Read a hurricane path as a set of dated predictions. First identify the storm and bulletin; then separate the initial position from each future position and its valid time. Work through the actual Irma forecast below to make a position record. Use the current NHC track and local hazard products for a present threat.",
    sourceCheck: "Checked November 6, 2026: Irma Discussion 26's forecast table and NHC's cone explanation. The exercise is historical; no current track, local arrival time or road was verified.",
    sources: [
      { href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml", label: "NHC Irma Discussion 26: original forecast-position table" },
      { href: "https://www.nhc.noaa.gov/aboutcone.shtml", label: "NHC: what the forecast cone represents" }
    ],
    primaryAction: { label: "Open current NHC tracks", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read state alerts and actions", href: "/tools/impact-window-estimator/" },
    intent: "hurricane path tracker, hurricane storm path, track hurricane path",
    steps: [
      {
        title: "Identify the Original Table",
        body: "Open historical Irma Discussion 26, AL112017, issued September 5, 2017 at 1500 UTC. Find FORECAST POSITIONS AND MAX WINDS; keep the storm ID, year and issue time with the rows.",
        href: "https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml",
        label: "Open Irma's original table"
      },
      {
        title: "Separate Initial and Future Positions",
        body: "The INIT row is the initial estimate. The 24H row is a prediction valid 06/1200Z, not an observed landfall. Use the explicit valid-time column instead of adding the printed horizon to the public issue time.",
        href: "/hurricane-tracker/why-hurricane-forecasts-change/",
        label: "Compare forecasts at one valid time"
      },
      {
        title: "Read the Local Instruction",
        body: "Match each alert's affected area and protective action to your location. Record the issuing authority's deadline separately from any forecast center position.",
        href: "/tools/impact-window-estimator/",
        label: "Read state alerts"
      }
    ],
    sections: [
      {
        eyebrow: "Historical example: Irma 2017",
        title: "Transcribe Three Rows Without Changing Their Meaning",
        body: "The full month and year for these rows come from Discussion 26: September 2017. These are the initial estimate and predictions available in that bulletin, not later analyzed positions or proof of impacts at those coordinates. Preserve the row label, N/W coordinates and printed wind units together; do not treat longitude as an unsigned distance or a connected map line as observed travel.",
        bullets: ["INIT: 05/1500Z; 16.8N, 58.4W; 155 KT / 180 MPH. Initial estimate at September 5, 15:00 UTC.", "24H: 06/1200Z; 18.1N, 63.0W; 150 KT / 175 MPH. Forecast valid September 6, 12:00 UTC.", "36H: 07/0000Z; 19.1N, 65.9W; 145 KT / 165 MPH. Forecast valid September 7, 00:00 UTC."]
      },
      {
        eyebrow: "Time fields",
        title: "The Printed 24H Label Is Not 24 Hours After Public Issuance",
        body: "The public issue time is September 5 at 1500 UTC. The row labeled 24H is valid September 6 at 1200 UTC, which is 21 hours later. NHC's printed forecast horizon and public issue time are different fields; retain both rather than correcting the official row label or replacing its target with 1500 UTC. A conversion to local time must also retain the date and the correct seasonal UTC offset for the location.",
        bullets: ["UTC calculation: 9 hours to midnight plus 12 hours = 21 hours.", "06/1200Z means September 6 at 12:00 UTC in this bulletin.", "A different bulletin's 24H row can target a different time; match valid dates before comparing revisions."]
      },
      {
        eyebrow: "Reading check",
        title: "Which Position Belongs to September 6 at 1200 UTC?",
        body: "Question: should your record use 16.8N, 58.4W, or 18.1N, 63.0W for that target? Answer: the 24H forecast row gives 18.1N, 63.0W and 150 kt / 175 mph. The 16.8N, 58.4W coordinate belongs to INIT at September 5 at 1500 UTC. Neither row establishes the eventual observed position; verifying forecast accuracy requires the later official analysis for the same valid time.",
        bullets: ["Your completed record: AL112017; Discussion 26; issued September 5 1500 UTC; printed 24H; valid September 6 1200 UTC; 18.1N, 63.0W; 150 kt / 175 mph.", "Unresolved in this record: actual outcome, local hazard timing, travel conditions and evacuation instructions."]
      },
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
          "Record the authority, affected area and timing of each local instruction",
          "Confirm transport and care arrangements with their providers",
          "Keep checking local emergency updates"
        ]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current NHC storm positions, advisory times, radar, satellite, and active tracking links." },
      { name: "State Alert and Action Summary", href: "/tools/impact-window-estimator/", description: "Read state alert areas, protective instructions, and expiration times; this tool does not calculate arrival." },
      { name: "Named Hurricane Trackers", href: "/hurricane-tracker/storm/", description: "Standing storm-name pages with live NHC source checks." },
      { name: "Cone of Uncertainty Guide", href: "/blog/how-to-read-the-hurricane-cone-of-uncertainty/", description: "Learn what the NHC cone does and does not show." },
      { name: "Evacuation Instructions and Checklist", href: "/tools/evacuation-decision-helper/", description: "Record official instructions and unresolved housing, transport, medical and pet arrangements." }
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
      "Find official Miami-Dade, Hillsborough and Chatham evacuation resources, then record your zone, current order, transport confirmations and unresolved questions.",
    eyebrow: "Local decision hub",
    intro:
      "Find the official zone for the address, then separately check the current local instruction. The useful result is a dated record of your zone, the order's affected area and timing, and the arrangements still unconfirmed. The county examples below show how to build that record; they do not establish a current order or a zone for any reader.",
    primaryAction: { label: "Read the address-lookup walkthrough", href: "/blog/how-to-check-your-hurricane-evacuation-zone/" },
    secondaryAction: { label: "Browse city trackers", href: "/hurricane-tracker/city/" },
    intent: "hurricane evacuation zones, evacuation zone lookup, hurricane evacuation map",
    steps: [
      {
        title: "Find the Official Local Zone",
        body: "Use the exact property and correct jurisdiction. Miami-Dade's official page explains its five storm-surge planning zones and links Know Your Zone. It is one county's system, not a national A-E rule.",
        href: "https://www.miamidade.gov/global/emergency/hurricane/storm-surge-zones.page",
        label: "Open Miami-Dade's official zone entry"
      },
      {
        title: "Save the Map Version and Local Instruction",
        body: "Hillsborough's official page links HEAT, a five-zone legend and 2025/2026 map comparisons. Save the map version and lookup date, then separately check the issuing agency's current order, area and action time.",
        href: "https://www.hcfl.gov/residents/public-safety/emergency-management/find-evacuation-information",
        label: "Open Hillsborough's official lookup entry"
      },
      {
        title: "Confirm Assistance Separately",
        body: "Chatham's CEMA distinguishes its local zones and publishes evacuation assistance procedures. Record whether transport and destination arrangements are confirmed; a map result or assistance application alone does not complete them.",
        href: "https://chathamemergency.org/PrepareNow/EvacuationResources",
        label: "Read CEMA's assistance procedures"
      }
    ],
    sections: [
      {
        eyebrow: "Important distinction",
        title: "Evacuation Zones Are Local",
        body:
          "Zone names, maps, and order language vary by county or city. HurricaneHub can organize local tracker links and decision prompts, but official evacuation zones and orders come from local emergency management.",
        bullets: [
          "Miami-Dade: the official page describes five storm-surge planning zones A-E and links its address tool. A storm-surge planning zone is not a FEMA insurance flood zone.",
          "Hillsborough: the official page links its five-zone HEAT lookup, printable maps and HART evacuation transport information. A saved older map needs a version check.",
          "Chatham: CEMA lists A, B and C and links an interactive map. Its letter A must not be assigned from another county's map or a ZIP representative point.",
          "Source check November 6, 2026: county explanation pages and linked service entries only. No household address, interactive result, current order, bus activation or shelter availability was verified."
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
      },
      {
        eyebrow: "A record to keep privately",
        title: "Copy These Fields Before the Next Threat",
        body: "Keep the exact address and household details offline or in private storage. The record is complete only when you can distinguish confirmed information from open questions; this page does not need to collect your address. A lookup error or unreadable boundary stays unresolved until the responsible agency clarifies it.",
        bullets: ["Location: property and jurisdiction; official map URL; displayed map version or publication date if given; lookup date; zone result or unresolved question", "Instruction: issuing agency and original notice URL; issue time and timezone; affected zone/area; required action and any stated deadline; applicability to your address", "Arrangements: driver/provider and confirmation; destination and acceptance; care/equipment and animal arrangements; fallback contact", "Next check: named household contact, unanswered question and where to obtain the answer. 'Not yet checked' is different from 'checked and no applicable order found'."]
      },
      {
        eyebrow: "Worked example, not a current order",
        title: "A Saved Zone Does Not Confirm a Ride",
        body: "Hypothetical Chatham household: the family has saved a result from CEMA's linked map, but has only read the standing assistance page. It has not checked a current order, current assembly instructions or a confirmed ride. Its record therefore says zone lookup saved; current instruction not checked; assistance arrangement unconfirmed. One person checks CEMA's current notices and contacts the responsible service while another confirms the destination. No address, zone assignment, active bus or present-day order is asserted by this example.",
        bullets: ["Reading check: is the household ready merely because it knows its zone? No; instruction applicability and assistance are separate unfinished checks.", "If the map does not load, open the county emergency agency directly and ask how to confirm the address. Do not replace a failed lookup with a no-risk conclusion.", "Current local warnings may require immediate shelter or other protective action. A planning worksheet never overrides those instructions."]
      }
    ],
    nextLinks: [
      { name: "Evacuation Instructions and Checklist", href: "/tools/evacuation-decision-helper/", description: "Keep official warning actions separate from arrangements still to confirm." },
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
      "Practice reading a real historical Joaquin spaghetti plot: identify model codes, chart time, missing forecast hours, and the limits of model-track comparisons.",
    eyebrow: "Forecast model hub",
    intro:
      "Hurricane spaghetti models plot forecast tracks together to show where guidance agrees and differs. Read the storm, chart cycle, and complete model identifiers first; then match valid times before comparing positions. The historical Joaquin exercise below shows what a real chart supplies and what it leaves out. Use current NHC advisories and local alerts for today's decisions.",
    primaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Read model guide", href: "/blog/how-to-read-hurricane-spaghetti-models/" },
    intent: "hurricane spaghetti models, GFS vs Euro hurricane model, hurricane model tracks",
    steps: [
      {
        title: "Start With the Official Forecast",
        body: "Use NHC advisories and the forecast cone as the official baseline before reacting to individual model lines or social screenshots.",
        href: "/hurricane-tracker/live/",
        label: "Open official tracker"
      },
      {
        title: "Compare Model Spread",
        body: "Compare positions at the same valid time. A shared chart cycle does not prove all models have the same native initialization: interpolated guidance can start from older runs. Spread describes differing center-track scenarios, not calibrated city probabilities or the full extent of hazards.",
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
      },
      {
        eyebrow: "Global guidance",
        title: "GFS and ECMWF Are Guidance, Not Competing Official Forecasts",
        body:
          "The U.S. Global Forecast System (GFS) and the European Centre for Medium-Range Weather Forecasts model (ECMWF, often called the Euro) are widely watched global models. Each turns observations into a possible evolution of the atmosphere. Forecasters compare their tracks, intensity output, ensembles, bias patterns, and recent observations; neither one is a standalone public evacuation or landfall forecast.",
        bullets: [
          "Use the NHC forecast and discussion as the public decision baseline",
          "Check whether successive runs show a persistent trend instead of one dramatic run",
          "Separate track agreement from intensity agreement",
          "Read the NHC forecast discussion when model differences matter"
        ]
      },
      {
        eyebrow: "More model names",
        title: "ICON, UKMET, AI Guidance, and Ensembles Add Context",
        body:
          "Other global models, including ICON and UKMET, can add useful comparison points. Newer AI-based weather guidance can also help researchers and forecasters explore possible patterns. These products have different designs, update cycles, inputs, and limits. An ensemble is especially useful because it runs a model many times with varied starting conditions or configurations to show a range of plausible outcomes rather than one deterministic line.",
        bullets: [
          "More lines do not automatically mean a more certain forecast",
          "A tight track cluster can still leave rainfall, surge, and tornado uncertainty",
          "Intensity is often harder to forecast than track",
          "Official watches, warnings, and local orders can change before every model agrees"
        ]
      }
    ],
    nextLinks: [
      { name: "How to Read Hurricane Spaghetti Models", href: "/blog/how-to-read-hurricane-spaghetti-models/", description: "Plain-language guide to model spread, outliers, and forecast uncertainty." },
      { name: "How Hurricanes Are Tracked", href: "/hurricane-tracker/how-hurricanes-are-tracked/", description: "See how observations, models, and forecaster analysis become an official advisory." },
      { name: "Hurricane Path Tracker", href: "/hurricane-tracker/path/", description: "Connect model guidance with official path, timing, and local action steps." },
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Current storm status, NHC checks, radar shortcuts, alerts, and local tracker paths." },
      { name: "State Alert and Action Summary", href: "/tools/impact-window-estimator/", description: "Read state NWS alerts and protective actions, with expiration labeled separately from storm arrival." }
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
      },
      {
        question: "Is the GFS or Euro model always better for hurricanes?",
        answer:
          "No. Model performance varies by storm, forecast time, and weather pattern. Use the official NHC forecast and discussion rather than choosing one model as a guaranteed answer."
      },
      {
        question: "What does an ensemble hurricane forecast show?",
        answer:
          "An ensemble combines many model runs to show a range of plausible outcomes. It helps describe uncertainty, but it is not a direct local-impact or evacuation forecast."
      },
      {
        question: "What time are hurricane spaghetti models updated?",
        answer:
          "Update times vary by model and product. Check the initialization time and valid forecast time on the chart, avoid mixing runs from different cycles, and compare the newest guidance with the latest NHC advisory."
      },
      {
        question: "What does one outlier line in a spaghetti model mean?",
        answer:
          "One outlier shows a possible model solution, not a forecast by itself. Give more weight to the overall cluster, consistency across later runs, ensemble spread, and the official NHC forecast discussion."
      }
    ]
  },
  {
    slug: "hurricane-travel-cruise-flights",
    title: "Hurricane Travel: Cruises and Flights",
    shortTitle: "Hurricane Travel",
    description:
      "Plan hurricane-season cruises and flights with official storm updates, carrier terms, port status, flexible itinerary checks, and practical disruption steps.",
    eyebrow: "Hurricane travel planning",
    intro:
      "A tropical system can change a cruise itinerary, port call, flight schedule, airport operation, or ground-transfer plan with little notice. Use this page to prepare for disruption before travel and to verify the latest storm, carrier, port, airport, and local-government information during an active threat.",
    primaryAction: { label: "Open live hurricane tracker", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check active alerts", href: "/alerts/" },
    intent: "hurricane cruise itinerary, hurricane flight cancellation, hurricane season travel",
    sourceCheck: "Checked November 12, 2026: read U.S. DOT Refunds (last updated November 7, 2025), including cancelled flights, significant changes, alternative travel and the merchant of record. No specific flight, sailing, port status, cruise contract, waiver or insurance policy was verified. The booking example is fictional.",
    sources: [{ href: "https://www.transportation.gov/individuals/aviation-consumer-protection/refunds", label: "U.S. DOT: ticket refunds, significant changes and booking agents" }],
    steps: [
      {
        title: "Check the Official Storm Context",
        body: "Use the latest NHC advisory, local NWS alerts, and port or airport notices to understand timing and uncertainty around the places on your itinerary.",
        href: "/hurricane-tracker/live/",
        label: "Open live tracker"
      },
      {
        title: "Read Your Carrier Terms",
        body: "Check the cruise line, airline, booking channel, and travel-insurance documents that apply to your reservation. Policies, waivers, rebooking options, and deadlines vary by provider and event.",
        href: "/learn/",
        label: "Open planning resources"
      },
      {
        title: "Make a Flexible Backup Plan",
        body: "Keep reservation numbers, alternate transport and lodging options, medicines, chargers, and a way to receive carrier notices if ports, roads, or airports change operations.",
        href: "/tools/hurricane-brief/",
        label: "Create a hurricane brief"
      }
    ],
    sections: [
      {
        eyebrow: "Cruise changes",
        title: "How Hurricanes Can Change a Cruise Itinerary",
        body:
          "Cruise operators may change a departure time, skip or substitute a port, alter the route, or cancel a sailing when forecast conditions affect ships, ports, pilots, terminals, or destinations. A storm far from your home port can still affect the itinerary. The cruise line's current notice and guest contract are the source for your specific sailing; social posts and an older itinerary are not enough.",
        bullets: [
          "Watch the cruise line app, email, and official guest notices",
          "Check home-port, destination-port, and transfer conditions separately",
          "Do not travel to a terminal unless the operator confirms instructions",
          "Keep passport, medication, and essential items accessible during schedule changes"
        ]
      },
      {
        eyebrow: "Flight disruption",
        title: "Hurricane Flight Delays and Cancellations Need Carrier-Specific Checks",
        body:
          "Airlines may delay, cancel or reroute flights because of local weather, airport operations or disruption elsewhere in their network. For flights to, from or within the United States, DOT says an airline cancellation entitles you to a ticket refund regardless of the reason if you choose not to travel or accept alternative compensation. Weather does not by itself remove that right, including on a nonrefundable ticket. A significant delay or change can also qualify if you decline travel and alternative compensation. A change-fee waiver is a separate offer; read its dates, airports and fare-difference conditions before accepting it.",
        bullets: [
          "Check the airline directly before relying on a third-party booking alert",
          "Separate airline cancellation from your voluntary cancellation while the flight operates as scheduled; a nonrefundable fare generally does not become refundable just because a storm is forecast",
          "DOT significant-change examples include arrival 3 or more hours late on domestic itineraries or 6 or more hours late on international itineraries, changed origin/destination airports or more connections; read the full list",
          "Taking the changed or replacement flight does not also entitle you to a full ticket refund under this rule; credits and vouchers are choices to assess before accepting",
          "Monitor airport operations, ground transport, and hotel plans as separate risks",
          "Keep receipts and written notices for your own records"
        ]
      },
      {
        eyebrow: "Separate reservations",
        title: "One Cancelled Flight Does Not Cancel Every Booking",
        body: "Fictional example: your U.S. domestic flight to a cruise port is cancelled, but the cruise still sails from the same terminal. If you decline the replacement flight and compensation, the flight refund question falls under DOT guidance. The separately booked cruise and hotel still need their own cancellation decisions; the flight refund does not establish a right to reimbursement from either provider. Conversely, a changed cruise itinerary does not by itself cancel a flight that operates as scheduled. Check each supplier before its response deadline rather than assuming one cancellation covers the entire trip.",
        bullets: [
          "For each reservation, record the supplier, booking reference, service date, actual change and the response deadline with time zone",
          "For airfare, identify the merchant of record on the payment statement; DOT identifies that airline or ticket agent as responsible for a ticket refund when due",
          "Compare replacement travel, refund and credit choices before accepting; save the notice and your response",
          "Ask the cruise line or booking agent for the sailing-specific notice and applicable contract; a skipped port and a cancelled sailing are different events",
          "Assess hotel, transfer and insurance claims under their own terms; a ticket refund is not a promise to pay those separate losses"
        ]
      },
      {
        eyebrow: "Before booking",
        title: "Build Hurricane Season Flexibility Before You Travel",
        body:
          "The Atlantic hurricane season runs from June 1 through November 30, but a calendar date alone does not predict disruption. Before booking, compare fare rules, cancellation terms, travel-insurance exclusions and purchase timing, port alternatives, and how much time you need before a cruise embarkation or connection. During an active threat, official storm and local emergency information should guide safety choices ahead of vacation plans.",
        bullets: [
          "Consider arriving before a cruise embarkation day when your itinerary allows",
          "Store carrier, hotel, insurer, and emergency contacts offline",
          "Check policy language for named-storm, cancellation, interruption, and delay terms",
          "Follow local evacuation, shelter, and road instructions even when you are traveling"
        ]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Check current NHC storm context, timing, and active system status." },
      { name: "Hurricane Radar and Satellite", href: "/radar/", description: "Review nearby rain bands and current weather around travel locations." },
      { name: "Active NWS Alerts", href: "/alerts/", description: "Check official weather alerts near ports, airports, and destinations." },
      { name: "U.S. DOT Ticket Refund Guidance", href: "https://www.transportation.gov/individuals/aviation-consumer-protection/refunds", description: "Check cancellation, significant-change, alternative-travel and booking-agent refund rules." }
    ],
    faqs: [
      {
        question: "Will a hurricane cancel my cruise?",
        answer:
          "It can cause an itinerary change, delay, cancellation, or port substitution, but the outcome depends on the specific sailing and operational conditions. Check the cruise line's official notice and guest contract for your reservation."
      },
      {
        question: "Can I get a refund if a hurricane affects my flight?",
        answer:
          "For a flight to, from or within the United States, DOT says an airline cancellation qualifies for a ticket refund regardless of the cause if you decline travel and alternative compensation. A significant delay or change can also qualify. If the flight operates as scheduled and you voluntarily cancel a nonrefundable ticket, a forecast alone generally does not create the same right. Check the full DOT guidance, the actual notice and any separate waiver."
      },
      {
        question: "Does travel insurance cover hurricane disruption?",
        answer:
          "Coverage depends on the exact policy, purchase date, named-storm provisions, exclusions, and the event. Read the policy and ask the insurer about your specific reservation; this page is not insurance advice."
      },
      {
        question: "Should I travel when a hurricane is forecast?",
        answer:
          "Follow official storm, airport, port, and local emergency guidance. If a destination is under an evacuation order or unsafe travel conditions, prioritize the instructions of local authorities over itinerary plans."
      }
    ]
  },
  {
    slug: "radar",
    title: "Hurricane Radar: Read Reflectivity and Velocity",
    shortTitle: "Radar Tracker",
    description:
      "Read Michael's historical radar panels: identify the station label, time, dBZ and velocity scales, and distinguish weak echoes from missing data.",
    eyebrow: "Radar product reading guide",
    intro:
      "Before interpreting a radar color, identify the product, station, time and units. Michael's historical image below pairs reflectivity and radial velocity: the same-looking color can mean different things in the two panels. Complete the product-reading task here, then open the interactive radar for a separate check of current observations and warnings.",
    sourceCheck: "Checked November 6, 2026: the retained NWS Michael figure, its image labels and parent-page caption, and NWS reflectivity/radial-velocity glossary entries. The parent caption says KEOX while the image says KEVX; that discrepancy is retained. No current radar coverage or surface wind was verified.",
    sources: [
      { href: "https://www.weather.gov/tae/HurricaneMichael2018", label: "NWS Tallahassee Michael event summary, figure 8" },
      { href: "https://forecast.weather.gov/glossary.php?word=reflectivity", label: "NWS glossary: reflectivity and the dBZ scale" },
      { href: "https://forecast.weather.gov/glossary.php?word=radial%20velocity", label: "NWS glossary: radial velocity and its directional limits" }
    ],
    figures: [
      { src: "/images/blog/external/nws-michael-2018-radar-eye.png", width: 975, height: 564, alt: "Historical Michael radar pair, October 10, 2018: a DBZ reflectivity legend at left and KTS radial-velocity legend at right; the image headers label KEVX.", caption: "Historical example, not current conditions. Original NWS-hosted figure 8 retained in full. The image headers say KEVX; the parent page's caption says KEOX, an unresolved source discrepancy. Use the image's own product labels for this exercise. No timezone is added to its printed clock labels.", sourceUrl: "https://www.weather.gov/tae/HurricaneMichael2018", sourceLabel: "NWS source page and original figure context" },
      { src: "/images/guides/michael-2018-reflectivity-detail.png", width: 490, height: 564, alt: "Unaltered left panel cropped from the full Michael image, retaining KEVX, DBZ legend and the printed 2018/10/10 16:46:41 label.", caption: "Reading detail: left panel of the full image above. Lossless crop only; original legend, numbers and time label retained. This is reflectivity, not wind speed or rainfall accumulated at a home.", sourceUrl: "/images/blog/external/nws-michael-2018-radar-eye.png", sourceLabel: "Compare with the complete image" },
      { src: "/images/guides/michael-2018-velocity-detail.png", width: 485, height: 564, alt: "Unaltered right panel cropped from the same Michael image, retaining KEVX, KTS legend and the partially clipped original time header.", caption: "Reading detail: right panel of the same full image. Lossless crop only; the original's partly clipped time header has not been repaired. KTS is a velocity unit, not the DBZ scale at left; this panel does not certify sustained surface wind at a property.", sourceUrl: "/images/blog/external/nws-michael-2018-radar-eye.png", sourceLabel: "Open the complete historical pair" }
    ],
    primaryAction: { label: "Open hurricane radar", href: "/radar/" },
    secondaryAction: { label: "Open live tracker", href: "/hurricane-tracker/live/" },
    intent: "hurricane radar, hurricane satellite tracker, live storm radar",
    steps: [
      {
        title: "Read the Product Identity",
        body: "Find KEVX in the original image header and DBZ at the left panel's scale. The right scale says KTS. Preserve these as separate product records even though both panels show the same storm.",
        href: "https://www.weather.gov/tae/HurricaneMichael2018",
        label: "Inspect NWS figure 8"
      },
      {
        title: "Record the Observation Time",
        body: "The left header prints 2018/10/10 16:46:41. The right time header is partly clipped. Do not invent the missing digits or timezone, or treat a page's load time as either panel's observation time.",
        href: "/hurricane-tracker/live-tracker/",
        label: "Check source and display times"
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
        eyebrow: "Product and scale",
        title: "DBZ and KTS Answer Different Questions",
        body: "NWS defines reflectivity through the returned radar signal, commonly expressed on the logarithmic dBZ scale. It is useful for precipitation structure but is not a hurricane wind category. Radial velocity is the component of motion along the radar beam, toward or away from the radar; motion perpendicular to that beam is not measured by that component. Read the actual legend instead of assuming red always means heavy rain or a particular wind direction.",
        bullets: ["Left panel: DBZ legend, precipitation-echo structure and a relatively weak-echo eye.", "Right panel: KTS legend, a different measured quantity and color scale.", "The cursor readout in the velocity panel is not a maximum sustained surface-wind report or a household forecast."]
      },
      {
        eyebrow: "Reading check",
        title: "Does the Same Color Have the Same Meaning in Both Panels?",
        body: "No. The left scale is reflectivity and the right scale is radial velocity. A reader who copies a color without its product and units loses the meaning of the observation. For the left panel, record the image's KEVX label, historical date, printed 16:46:41 time, DBZ scale and the weak-echo center offshore near Mexico Beach. Keep the right panel in a second record, including that its time header is partly clipped.",
        bullets: ["The image establishes a historical eye/eyewall appearance, not safe conditions inside the eye.", "The parent-page KEOX caption and image's KEVX header disagree; record both rather than silently renaming the image.", "Do not translate the velocity color or cursor into an observed hurricane category."]
      },
      {
        eyebrow: "Weak echoes or unavailable data",
        title: "A Blank Part of a Map Needs a Coverage Check",
        body: "In this particular image the darker center is surrounded by stronger reflectivity echoes, supporting an eye-reading exercise. That does not make every blank part of another radar display an eye or a rain-free location. First inspect whether the layer loaded, which station or mosaic is selected, its coverage and last observation time. An unavailable or stale layer is an unknown observation, not evidence that weather hazards ended.",
        bullets: ["Satellite cloud imagery, radar reflectivity and a forecast cone are separate products.", "Low reflectivity does not establish no wind, no surge or no floodwater.", "Follow current short-fuse warnings without waiting for a radar image to refresh."]
      },
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
    title: "Live Hurricane Tracker: Check Sources and Times",
    shortTitle: "Live Tracker Guide",
    description:
      "Check a hurricane feed's source and timestamps, distinguish no active cyclones from no development areas, and recognize failed or unverified data.",
    eyebrow: "Source and freshness reading guide",
    intro:
      "A map that just loaded can still display an older advisory. Check the original source, product issue time and what the feed actually covers before using it. The saved NHC example below shows why an empty active-storm list and a tropical development area can coexist. This page teaches data checking; the separate household workflow guide helps you organize the actions that follow.",
    sourceCheck: "Checked November 6, 2026: CurrentStorms JSON and Atlantic TWO fetched at approximately 09:44:22 UTC. These are saved examples, not a continuing current-status claim. The JSON has no source issue timestamp; retrieval time alone does not establish its upstream freshness. The TWO retains its original heading and time labels.",
    sources: [
      { href: "https://www.nhc.noaa.gov/CurrentStorms.json", label: "NHC CurrentStorms: rolling active-system JSON" },
      { href: "https://www.nhc.noaa.gov/text/MIATWOAT.shtml", label: "NHC: rolling Atlantic Tropical Weather Outlook" },
      { href: "/examples/nhc/current-storms-20261106-094422Z.json", label: "Saved original CurrentStorms JSON, retrieved November 6, 2026 at 09:44:22 UTC" },
      { href: "/examples/nhc/twoat-20261106-saved-094422Z.txt", label: "Saved complete Atlantic TWO text from the same retrieval" }
    ],
    primaryAction: { label: "Open live tracker map", href: "/hurricane-tracker/live/" },
    secondaryAction: { label: "Check local risk", href: "/local-hurricane-risk/" },
    intent: "live hurricane tracker, hurricane tracker live, current hurricane tracker",
    steps: [
      {
        title: "Identify What Each Source Covers",
        body: "The saved CurrentStorms JSON contains an empty activeStorms array. That field answers a different question from the Atlantic outlook's development-area forecast; inspect both original records.",
        href: "/examples/nhc/current-storms-20261106-094422Z.json",
        label: "Read the saved active-system record"
      },
      {
        title: "Read the Separate Outlook",
        body: "The saved Atlantic TWO prints 100 AM EST Friday November 6, 2026 and describes a non-tropical low south of Bermuda, with 48-hour 20% and 7-day 30% formation chances. Preserve the area and window with each number.",
        href: "/examples/nhc/twoat-20261106-saved-094422Z.txt",
        label: "Read the saved outlook text"
      },
      {
        title: "Start a New Current Check",
        body: "For a present threat, reopen current NHC products and the full local warning. Keep the issuer's time and scope with each record; the saved November 6 files do not update as conditions change.",
        href: "/hurricane-tracker/live/",
        label: "Open the current tracker"
      }
    ],
    sections: [
      {
        eyebrow: "Reading check: saved November 6 example",
        title: "Does an Empty Active-Storm List Mean No Development Area?",
        body:
          "No. The saved JSON lists no active systems while the separately issued Atlantic outlook describes the non-tropical low and its formation chances. Those are compatible statements about different products. The 20% and 30% values belong to one named area and two formation windows; they are not a chance of Bermuda, Florida or any U.S. city receiving a hurricane. An active-system list also does not cancel local flood, surf or marine warnings.",
        bullets: [
          "Answer record: activeStorms = []; outlook area = Western and Central Atlantic, south of Bermuda; formation = 20% through 48 hours, 30% through 7 days.",
          "The TWO also discusses gale-force winds and points to High Seas Forecasts; an unnamed system can still require marine information.",
          "These saved files teach a distinction, not today's Atlantic status."
        ]
      },
      {
        eyebrow: "Source time versus retrieval time",
        title: "Record Three Clocks Separately",
        body:
          "A product's issue time says when the issuer released that message; its valid time or period says when the observation or forecast applies; retrieval time says when your device or HurricaneHub obtained the response. In the saved example, the JSON has no issue timestamp at all. Its November 6 09:44:22 UTC retrieval cannot prove the upstream source was freshly updated at that instant. Preserve missing or inconsistent time fields as unresolved rather than inventing an issue time from the download clock.",
        bullets: [
          "Keep the issuer's printed timezone and full date, including date changes around midnight.",
          "Timing discrepancy: the saved TWO's WMO header reads 060509, while its printed 1 AM EST issue label corresponds to 06:00 UTC on November 6. The header and printed label do not agree; preserve that discrepancy rather than certifying one exact issue time from this copy.",
          "A successful page refresh does not prove every feed, map layer or local warning refreshed together."
        ]
      },
      {
        eyebrow: "Unavailable is not empty",
        title: "A Failed Check Cannot Establish No Storm",
        body: "An HTTP error, timeout, invalid JSON, missing expected field or old retained record cannot be interpreted as an empty active-storm array. Even a successful empty response is limited to that source's scope. If you cannot verify a current message, record the source, last confirmed issue time if known, retrieval failure and the unanswered question, then open NHC or the local issuing office directly. Continue following immediate official warnings already received.",
        bullets: ["Do not turn a missing timestamp into 'updated now'.", "Compare matching products and issue times before calling a site/source difference a new forecast change.", "A short cache interval is an implementation detail, not a guarantee that the upstream source has issued new data."]
      },
      {
        eyebrow: "Complete your check",
        title: "Make a Source Record Before Sharing a Screenshot",
        body: "Record the source URL and issuer, storm ID or outlook area, product name, source issue label, valid period, retrieval time and what remains unknown. The completed historical answer above supports 'no systems in the saved list, one development area in the saved TWO'; it does not support 'no Atlantic risk'. For a household plan, follow the separate location workflow and attach the current local instruction and its own timestamp.",
        bullets: ["Keep the original link with a screenshot so someone else can reopen the source.", "If a label is cropped, record it as missing; do not infer a timezone from the viewer's location.", "Use the household workflow for contacts, tasks and next-check triggers after the source check."]
      }
    ],
    nextLinks: [
      { name: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Active storm checks, NHC links, radar shortcuts, alerts, city pages, and decision tools." },
      { name: "Local Hurricane Risk", href: "/local-hurricane-risk/", description: "ZIP, city, state, storm surge, evacuation-zone, and household planning paths." },
      { name: "Hurricane Tracker Map", href: "/hurricane-tracker/map/", description: "Map-focused hub for storm position, radar, satellite, and local tracker paths." },
      { name: "My Hurricane Dashboard", href: "/tools/my-hurricane-dashboard/", description: "Build a saved-location dashboard for storm season." },
      { name: "Household Tracking Workflow", href: "/blog/how-to-use-hurricane-tracker-live-tools/", description: "Turn verified source records into assigned household tasks and an update handoff." }
    ],
    faqs: [
      {
        question: "What should a live hurricane tracker show first?",
        answer:
          "Look for the source, product identity, issue time and any unavailable or retained-data status. A load time alone cannot establish that the advisory is current."
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
      },
      {
        question: "Does no active storm mean no development area?",
        answer: "No. In the saved November 6, 2026 example, CurrentStorms is empty while the Atlantic outlook describes a low south of Bermuda with 20% through 48 hours and 30% through 7 days. Those saved values are not a current forecast."
      }
    ]
  },
  {
    slug: "preparedness-checklist",
    title: "Hurricane Preparedness Checklist",
    shortTitle: "Preparedness Checklist",
    description:
      "Build a hurricane preparedness checklist for supplies, documents, pets, medical needs, power outages, family communication, and evacuation timing.",
    eyebrow: "Household preparation guide",
    intro:
      "A useful hurricane preparedness checklist is more than bottled water. It should connect supplies, documents, medicine, pets, power, transport, alerts, and evacuation timing into a plan your household can actually follow.",
    primaryAction: { label: "Generate checklist", href: "/tools/preparedness-checklist/" },
    secondaryAction: { label: "Open preparedness guide", href: "/preparedness/" },
    intent: "hurricane preparedness checklist, hurricane supply list, hurricane emergency kit",
    sourceCheck: "Checked November 10, 2026: Ready.gov Build a Kit, including one gallon per person per day for several days for drinking and sanitation, extra pet supplies, portable documents, kit maintenance and storage locations. The five-day inventory example is an illustrative household choice, not a universal planning duration or a water-safety assessment. Linked PDFs and individual medical requirements were not reviewed.",
    sources: [
      { href: "https://www.ready.gov/kit", label: "Ready.gov: Build a Kit, quantities, maintenance and storage" }
    ],
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
        body: "Finish supplies and arrangements in quiet weather. Treat 72/48/24-hour schedules as illustrative preparation windows, not warning definitions or a guarantee of time remaining; follow earlier local instructions and household assistance needs.",
        href: "/blog/hurricane-preparation-timeline-72-48-24-hours/",
        label: "Read timeline"
      }
    ],
    sections: [
      {
        eyebrow: "Quantity exercise",
        title: "Calculate the Gap Before Shopping",
        body: "Ready.gov lists one gallon of water per person per day for several days, for drinking and sanitation, plus extra water for pets. Use the people, duration and quantities actually in your household record. For a simple exercise, suppose three people choose a five-day planning period and have ten gallons of usable stored water. The human baseline calculation is 3 people multiplied by 5 days multiplied by 1 gallon: 15 gallons. The baseline inventory gap is therefore 5 gallons before additional needs are considered.",
        bullets: [
          "Five days is the scenario's assumption, not a universal official minimum. Check local guidance and the household's likely access constraints.",
          "Pet water and individual needs are additional; do not count them as already covered by the three-person arithmetic.",
          "List uncertain containers separately rather than assuming they are usable. This calculation does not assess contamination or make water safe.",
          "Use the result as a shopping and storage task. Keep an accessible, manageable portable supply for evacuation rather than assuming the whole home stock can travel."
        ]
      },
      {
        eyebrow: "Usability check",
        title: "Check the Item, Not Just the Box",
        body: "A list can show everything purchased while the household still cannot use it. Record quantity, storage location, check date and the person responsible for each essential item. For lighting, match batteries to the actual flashlight and test it safely. For shelf-stable food, check whether it requires a manual can opener, water or cooking equipment you may not have during an outage. For personal medication and equipment, resolve storage, refill and power questions with the appropriate clinician, pharmacist or supplier rather than copying another household's instructions.",
        bullets: [
          "Water and food: note usable stock and dates, plus what preparation each item requires.",
          "Documents: keep portable copies where the intended person can retrieve them, with appropriate privacy protection.",
          "Alerts and contacts: verify access to the official channel and an offline contact record, not merely an installed app icon.",
          "Transport and lodging: keep confirmation details outside the supply inventory. Buying a bag does not resolve a pending ride or destination."
        ]
      },
      {
        eyebrow: "Maintenance task",
        title: "Turn a Full Shelf Into a Maintained Kit",
        body: "Ready.gov recommends maintaining the kit and reconsidering needs as the family changes. Choose a review date and check the supplies in their actual locations, including home, work and vehicle arrangements where relevant. Replace or resolve items that are missing, unsuitable or no longer usable, and update responsibilities after a move or a change in care needs. A review is complete when the gaps have an owner and a next step; it is not a declaration that the household can safely remain in any building during any storm.",
        bullets: [
          "Practice result: ten gallons are recorded on paper, but two are stored somewhere the household cannot access. Recount the accessible inventory rather than retaining the old total.",
          "Practice result: the flashlight works, but the backup batteries fit a different device. Record the mismatch and obtain compatible supplies.",
          "Practice result: a portable bag is too difficult for the intended person to carry. Reorganize it and confirm the assistance arrangement before relying on it.",
          "Keep the revised inventory private and offline-accessible. Revisit open items instead of resetting every line to complete at the next review."
        ]
      },
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
      },
      {
        question: "Is a home inventory the same as an evacuation bag?",
        answer: "No. A home inventory may include bulk supplies that cannot be carried by the intended person or transport. Ready.gov recommends accessible storage and easy-to-carry containers. Test retrieval and portability in calm conditions, and identify which essentials travel with each person. Keep transport and receiving-facility requirements with the plan, especially for equipment and medication. Do not assume a shelter will replace supplies or provide care merely because its name appears on the checklist."
      }
    ]
  },
  {
    slug: "evacuation-plan",
    title: "Hurricane Evacuation Plan: When and Where to Go",
    shortTitle: "Evacuation Plan",
    description: "Build a hurricane evacuation plan with local zones, departure triggers, destinations, routes, transport, pets, medical needs, and official alerts.",
    eyebrow: "Evacuation decision planning",
    intro: "A hurricane evacuation plan answers four questions before pressure builds: who may need to leave, what official trigger starts the trip, where the household will go, and which backup route and transport options remain safe. Evacuation is not based on the hurricane category or forecast center line alone. Storm surge zones, housing strength, flood exposure, medical needs, mobility, pets, bridge access, road timing, and local orders can make two nearby households need different plans.",
    primaryAction: { label: "Check evacuation zones", href: "/hurricane-tracker/evacuation-zones/" },
    secondaryAction: { label: "Use evacuation decision helper", href: "/tools/evacuation-decision-helper/" },
    intent: "hurricane evacuation plan, evacuating for a hurricane, where to go in a hurricane",
    sourceCheck: "Checked November 10, 2026: GEMA Make a Plan to Evacuate, covering destinations in different directions, alternate transport, local instructions, recommended routes and floodwater avoidance. This is standing planning guidance, not confirmation of a current order, road, shelter, booking or ride. The decision record and worked example are HurricaneHub teaching material; confirm animal policies with each receiving facility.",
    sources: [
      { href: "https://gema.georgia.gov/make-plan-plan-evacuate", label: "GEMA: Make a Plan to Evacuate" }
    ],
    steps: [
      { title: "Know Who and What Triggers Leaving", body: "Confirm the local evacuation zone for every location, identify housing and assistance needs, and record the applicable local evacuation instruction or earlier household transport arrangement. Distinguish these from warnings that require immediate shelter. Do not substitute an insurance flood zone for a local evacuation zone.", href: "/hurricane-tracker/evacuation-zones/", label: "Review zone guidance" },
      { title: "Check Primary and Backup Destinations", body: "Identify destinations in different directions, then confirm availability, pets, accessibility, medication and equipment needs. Recheck the receiving location's expected hazards and official instructions for the actual event.", href: "/tools/family-communication-plan/", label: "Record contacts and destinations" },
      { title: "Leave Before Routes Shrink", body: "Track the arrival of hazardous conditions, local orders, bridge restrictions, road flooding, traffic, shelter openings, and fuel. Leave at the locally directed time and never drive into floodwater or around a closure.", href: "/hurricane-tracker/live/", label: "Check current storm context" }
    ],
    sections: [
      { eyebrow: "Direct answer", title: "When Should You Evacuate for a Hurricane?", body: "Evacuate when local officials order your zone or when your preplanned trigger requires earlier movement for transport, medical, mobility, pet, or housing needs. Waiting for hurricane-force wind, an exact landfall point, or a dramatic category change can leave too little time. Tropical-storm-force winds, surge, rain, bridge restrictions, school closures, and traffic may begin well before the center arrives.", bullets: ["Follow the order for the exact address and zone", "Leave mobile or manufactured housing when locally directed", "Allow extra time for disability, medical equipment, children, pets, or no vehicle", "Do not wait for every household in the county to receive the same instruction"] },
      { eyebrow: "Destination", title: "Where To Go During a Hurricane", body: "The safest destination is not automatically the nearest inland town. It should be outside the ordered zone and expected hazard area, reachable before unsafe conditions, and suitable for the household. Options may include family or friends, a hotel, or a public shelter. Shelter locations and rules change by event, so verify openings with local emergency management rather than relying on an old list.", bullets: ["Choose primary and backup destinations", "Check pet, service-animal, accessibility, and medical policies", "Carry identification, medications, chargers, documents, and essential supplies", "Tell an out-of-area contact where the household is going"] },
      {
        eyebrow: "Destination record",
        title: "Compare Options Before Choosing the Trip",
        body: "GEMA recommends several possible destinations in different directions and familiarity with alternate routes and transport. Turn that advice into a private record for each candidate: receiving address and county, contact, confirmation date, household needs accepted, transport, and the official channels for conditions at both ends. An inland address can still face flooding or wind. A hotel reservation confirms a booking under its terms; it does not establish road access, backup power or capacity to meet medical needs during the event.",
        bullets: [
          "Availability: who confirmed that the household can arrive, and what changes could cancel that arrangement?",
          "Suitability: verify pets, accessibility and essential equipment needs directly with the host or operator; do not infer them from a map icon.",
          "Access: keep the proposed route separate from current closure information. Save the state road-information source and check it again before departure.",
          "Backup: record an alternative with its own contact and transport arrangements, rather than listing a second town without a receiving location."
        ]
      },
      {
        eyebrow: "Worked decision",
        title: "What Changes When the First Destination Falls Through?",
        body: "Hypothetical planning exercise: a household has confirmed a stay with relatives west of home. Before departure, the relatives report a local evacuation order affecting their address. A second host north of home has offered space, but has not confirmed that required medical equipment can be supported. Can the household simply switch the destination in its navigation app? Answer: neither location is currently established as a suitable receiving arrangement. The first option conflicts with its local order; the second still needs direct confirmation of essential needs and an accessible trip.",
        bullets: [
          "Update the first option's status and record the new local instruction; an earlier invitation is no longer enough.",
          "Contact the alternate host and, where needed, the care team or equipment provider to resolve essential support. Do not treat an unverified outlet or generator as confirmed medical power.",
          "Recheck official road instructions and transport availability for the changed trip, then tell the household and out-of-area contact the agreed destination.",
          "If departure instructions apply before the gap is resolved, contact local emergency management and the relevant care or transport provider about available arrangements. This exercise establishes no actual safe route or placement."
        ]
      },
      { eyebrow: "Route plan", title: "Plan More Than One Evacuation Route", body: "A reliable plan includes at least two routes and does not depend on one bridge, ferry, causeway, tunnel, or low road. Automatic navigation can send traffic toward flooding or closures, so compare it with official road information. Contraflow or lane reversal is used only when authorities activate it and should never be assumed in advance.", bullets: ["Download or print a route map", "Check official state road and local emergency updates", "Fuel early and keep the vehicle maintained", "Never drive through water, barricades, or closed roads"] },
      { eyebrow: "No-car plan", title: "Evacuation Without a Personal Vehicle", body: "People without a car should register for local transport assistance when offered and confirm pickup rules before a storm threatens. Ask local emergency management, transit, housing management, healthcare providers, schools, employers, or trusted contacts about accessible transport. A plan that depends on a last-minute ride is fragile when buses, bridges, fuel, and phone service become constrained.", bullets: ["Save local emergency management and transit contacts", "Ask about wheelchair and medical-equipment transport", "Pack a portable bag that one person can manage", "Arrange backup pickup people and meeting locations"] },
      { eyebrow: "Household needs", title: "Pets, Medication and Medical Equipment", body: "Pack prescriptions, a medication list, clinician and pharmacy contacts, identification, insurance information, device chargers, batteries, and instructions for medical equipment. Ask a doctor, pharmacist, or equipment provider about temperature-sensitive medicine and backup power. Bring pet food, medication, vaccination records, carriers, leashes, identification, and a destination that accepts animals.", bullets: ["Refill permitted prescriptions before demand peaks", "Keep essential records in a waterproof portable container", "Plan power and transport for medical devices", "Confirm pet-friendly lodging or shelter options"] },
      { eyebrow: "Return safety", title: "Reentry Is Part of the Evacuation Plan", body: "Do not return only because the wind stops or the sky clears. Surge, river flooding, downed lines, damaged buildings, heat, contaminated water, blocked roads, gas leaks, and emergency operations may continue after landfall. Wait for local reentry instructions, bring identification where required, and confirm that the route and destination are safe before traveling.", bullets: ["Monitor official local reentry announcements", "Avoid downed wires, floodwater, unstable buildings, and generator exhaust", "Document damage before non-emergency cleanup", "Keep the backup destination available if utilities remain unsafe"] }
    ],
    nextLinks: [
      { name: "Evacuation Zone Guide", href: "/hurricane-tracker/evacuation-zones/", description: "Understand local evacuation zones and why they differ from insurance flood maps." },
      { name: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Work through surge, housing, transport, medical, pet, and order triggers." },
      { name: "Family Communication Plan", href: "/tools/family-communication-plan/", description: "Record contacts, meeting places, destinations, and special needs." },
      { name: "State Hurricane Trackers", href: "/tracker/", description: "Open local NWS alerts, city links, and state planning context." },
      { name: "Preparedness Checklist", href: "/tools/preparedness-checklist/", description: "Generate a portable household supply and document list." }
    ],
    faqs: [
      { question: "When should I evacuate for a hurricane?", answer: "Leave when local officials order your zone, or earlier if your written plan accounts for transport, medical, mobility, pet, or housing needs. Do not wait for the storm center or hurricane-force wind to arrive." },
      { question: "Where should I go during a hurricane evacuation?", answer: "Choose a destination outside the ordered zone and expected hazard area, such as family, a hotel, or an officially opened shelter. Confirm access, pets, medical needs, and current local instructions." },
      { question: "Do I evacuate if I am not in an evacuation zone?", answer: "Not automatically. Follow local instructions and consider housing strength, mobile homes, flooding, medical needs, and other risks. An evacuation zone is one decision input, not a complete safety assessment." },
      { question: "What should I take when evacuating for a hurricane?", answer: "Take identification, medications, documents, contacts, water, food, chargers, clothing, hygiene items, cash, medical supplies, and pet supplies. Keep the bag portable and adjust it to official guidance and household needs." },
      { question: "Can I return home right after a hurricane passes?", answer: "Wait for local reentry instructions. Flooding, downed lines, damaged roads, unsafe buildings, contaminated water, gas leaks, and outages may continue after the storm center leaves." }
    ]
  },
  {
    slug: "mitigation",
    title: "Hurricane Mitigation Strategies and Risk Reduction",
    shortTitle: "Hurricane Mitigation",
    description: "Learn hurricane mitigation strategies for wind, water, buildings, utilities, land use, insurance, and community resilience before the next storm.",
    eyebrow: "Risk reduction before impact",
    intro: "Hurricane mitigation means reducing future damage before a storm threatens, rather than trying to stop the hurricane itself. Effective mitigation separates wind, storm surge, rainfall, waves, tornadoes, erosion, outages, heat, and access problems because no single upgrade controls every hazard. Households, businesses, landlords, utilities, planners, and emergency managers each control different parts of the risk.",
    primaryAction: { label: "Build a local risk plan", href: "/tools/local-risk-plan/" },
    secondaryAction: { label: "Review preparedness checklist", href: "/tools/preparedness-checklist/" },
    intent: "mitigation of hurricanes, hurricane mitigation strategies, mitigation strategies for hurricanes",
    sourceCheck: "Checked November 10, 2026: Ready.gov Hurricanes, limited to its guidance on drains and gutters, outside furniture, considering shutters, insurance and document copies. Structural design, local codes, contractor qualifications, project costs, grant eligibility and insurance discounts were not verified. The project record and quote example are HurricaneHub planning exercises, not engineering specifications.",
    sources: [
      { href: "https://www.ready.gov/hurricanes", label: "Ready.gov: Preparing for hurricanes and protecting the household" }
    ],
    steps: [
      { title: "Identify the Local Hazards", body: "Use official flood, surge, wind, evacuation, building, and infrastructure sources to identify the hazards for the exact property. Category and distance from the coast do not describe the whole risk.", href: "/local-hurricane-risk/", label: "Check local risk paths" },
      { title: "Separate Maintenance From Building Work", body: "List accessible routine tasks separately from work requiring qualified assessment, permits or installation. Ask about the actual hazard and building before selecting roof, opening, drainage or utility projects.", href: "/blog/hurricane-home-hardening-checklist/", label: "Review home hardening" },
      { title: "Maintain and Reassess", body: "Inspect upgrades, update inventories and insurance, clear drainage, test communication and backup power, and revisit the plan after renovations, moves, code changes, or new hazard information.", href: "/tools/preparedness-checklist/", label: "Update readiness" }
    ],
    sections: [
      {
        eyebrow: "Start with a project record",
        title: "Name the Hazard, Scope and Completion Evidence",
        body: "Ready.gov recommends clearing drains and gutters, bringing in outside furniture and considering hurricane shutters. These are different tasks, with different limits. Removing loose furniture reduces a source of windborne debris; it does not improve the roof connection or prevent water from entering the building. A gutter task addresses drainage maintenance, not storm surge. For each proposed improvement, record the problem it addresses, who may perform it safely, what approval is needed and how completion will be checked. Keep building work for calm conditions and qualified advice.",
        bullets: [
          "Hazard and location: for example, loose objects on a patio versus protection for a specific window opening. Do not describe either as whole-house hurricane proofing.",
          "Scope and responsibility: record the exact task, the responsible person or contractor and any landlord, association or building-department approval still needed.",
          "Evidence: keep dated photos, a written scope, applicable product documents, installation records and required inspection results. A receipt alone does not demonstrate correct installation.",
          "Maintenance: record how the equipment is stored, deployed or serviced and who can do it. A protective system that the household cannot safely operate leaves an unresolved planning task."
        ]
      },
      {
        eyebrow: "Quote-reading exercise",
        title: "Is a Lower Price Enough to Choose Window Protection?",
        body: "Hypothetical example: quote A says hurricane protection package and gives one total price. Quote B identifies the openings, proposed products, installation work, exclusions and who will address required approvals. Which quote is ready to evaluate? Answer: B supplies more of the information needed for comparison, but neither its detail nor its price establishes suitability for this building. Ask the relevant building authority and qualified contractor to resolve applicable requirements, product suitability and installation details before accepting work. This example recommends a review process, not a particular product.",
        bullets: [
          "Ask A for an itemized scope before comparing totals. Otherwise the two prices may cover different openings, labor or approvals.",
          "Ask both providers about excluded repairs, deployment and maintenance, completion evidence and the written contract terms.",
          "Keep structural suitability separate from insurance: obtain any claimed discount and required documentation directly from the insurer for the actual policy.",
          "Your deliverable is a list of resolved and pending questions. There is no supported savings percentage, wind rating or guaranteed loss reduction in this hypothetical example."
        ]
      },
      { eyebrow: "Definition", title: "What Is Hurricane Mitigation?", body: "Mitigation is sustained action that reduces long-term risk to people, property, infrastructure, and services. Preparedness helps people respond to a near-term threat; mitigation changes the conditions that create recurring losses. Examples include stronger construction, protected openings, elevated equipment, improved drainage, safer land use, redundant communications, and utility resilience.", bullets: ["Reduce damage before the forecast exists", "Match the measure to a specific hazard", "Use current codes and qualified professionals", "Combine property and community actions"] },
      { eyebrow: "Wind", title: "Reduce Wind and Windborne-Debris Damage", body: "A building performs as a system: roof covering, roof deck, connections, walls, doors, garage doors, windows, and foundation transfer wind loads together. A weak opening or connection can allow pressure and water to enter. Building-specific work should follow permits, current codes, manufacturer instructions, and licensed professional guidance.", bullets: ["Inspect roof covering and flashing", "Use approved opening protection", "Secure garage and exterior doors", "Remove or anchor loose outdoor objects"] },
      { eyebrow: "Water", title: "Mitigate Surge, Flood and Rainfall Risk", body: "Storm surge and rainfall flooding require different information. Elevation, drainage, nearby water, foundation type, utilities, access roads, and local flood history all matter. Measures may include elevating equipment, flood-resistant materials, drainage maintenance, backflow protection, or larger property changes, but feasibility and safety depend on codes and qualified assessment.", bullets: ["Keep drains and flow paths clear", "Protect or elevate vulnerable utilities where permitted", "Store records and hazardous materials above likely water", "Never rely on temporary barriers without understanding their limits"] },
      { eyebrow: "Utilities", title: "Plan for Power, Water and Communication Failure", body: "Outages can turn a structurally intact building into an unsafe place through heat, food spoilage, medical-device failure, dark stairways, disabled pumps, and lost communications. Backup systems need safe installation, maintenance, fuel planning, load limits, carbon-monoxide controls, and a plan for people who cannot tolerate an outage.", bullets: ["Use generators outdoors and away from openings", "Protect medication and essential equipment", "Maintain battery, radio, and contact backups", "Plan safe cooling and water access"] },
      { eyebrow: "Community", title: "Community Hurricane Mitigation Strategies", body: "Communities reduce risk through building codes, inspections, drainage, dunes and wetlands, shelters, evacuation transport, resilient utilities, road redundancy, hazard disclosure, land-use decisions, public communication, and support for vulnerable residents. These measures work best when plans account for renters, visitors, disability, language, poverty, and people without vehicles.", bullets: ["Enforce modern codes and safe rebuilding", "Maintain drainage and protective natural systems", "Provide accessible warnings, shelters, and transport", "Protect critical facilities and lifelines"] },
      { eyebrow: "Finance", title: "Insurance, Grants and Project Decisions", body: "Insurance transfers some financial risk but does not prevent damage. Review wind, flood, deductibles, exclusions, inventories, replacement cost, and temporary living or business interruption questions with an insurer. Mitigation grants or incentives vary by location and eligibility; use official FEMA, state, and local sources and verify contractor licensing before signing work.", bullets: ["Document the property before storm season", "Compare insurance coverage with actual hazards", "Use written scopes, permits, and qualified contractors", "Treat unusually urgent sales claims as a warning sign"] }
    ],
    nextLinks: [
      { name: "Home Hardening Checklist", href: "/blog/hurricane-home-hardening-checklist/", description: "Review practical building-envelope and maintenance questions." },
      { name: "Storm Surge Map Guide", href: "/hurricane-tracker/storm-surge-map/", description: "Understand why coastal water risk differs from hurricane category." },
      { name: "Power Outage Planner", href: "/tools/power-outage-planner/", description: "Plan safe power, food, medicine, charging, and communication backup." },
      { name: "Local Hurricane Risk", href: "/local-hurricane-risk/", description: "Move from general mitigation to location-specific hazards and official sources." },
      { name: "Business Preparedness", href: "/tools/business-preparedness/", description: "Connect workplace mitigation with continuity and recovery actions." }
    ],
    faqs: [
      { question: "Can hurricanes be stopped or weakened?", answer: "There is no practical, safe method to stop a hurricane. Mitigation reduces exposure and damage through stronger buildings, safer land use, protected utilities, evacuation planning, and community resilience." },
      { question: "What is the difference between hurricane mitigation and preparedness?", answer: "Mitigation reduces long-term risk before a threat, such as stronger construction or elevated equipment. Preparedness organizes near-term supplies, alerts, contacts, evacuation, and response actions." },
      { question: "What is the best hurricane mitigation strategy for a house?", answer: "There is no universal single upgrade. Priorities depend on wind, flood, surge, building type, age, code, roof, openings, utilities, and access. Use qualified assessments and local requirements." },
      { question: "Does flood insurance count as mitigation?", answer: "Insurance can reduce financial loss but does not prevent physical damage or protect life. Pair appropriate coverage with property, evacuation, drainage, utility, and documentation measures." },
      { question: "Where can I find hurricane mitigation assistance?", answer: "Check FEMA, your state hazard-mitigation office, local emergency management, building department, utility, and insurer for current programs and eligibility. Verify all contractors and program claims." }
    ]
  },
  {
    slug: "hurricane-training",
    title: "Hurricane Training and Drill Guide",
    shortTitle: "Hurricane Training",
    description: "Run a hurricane drill for families, workplaces, schools, or community groups using realistic alerts, evacuation, communication, shelter, and recovery tasks.",
    eyebrow: "Practice before warnings",
    intro: "Hurricane training turns a written plan into actions people can perform under pressure. A useful drill does not simulate dramatic weather or invent a forecast. It tests whether participants can receive an official alert, understand their role, contact the right people, choose shelter or evacuation, protect essential records and medication, and identify what failed while conditions are still calm.",
    primaryAction: { label: "Create communication plan", href: "/tools/family-communication-plan/" },
    secondaryAction: { label: "Build business checklist", href: "/tools/business-preparedness/" },
    intent: "hurricane training, hurricane training center, hurricane drill, hurricane EMA",
    sourceCheck: "Checked November 10, 2026: Ready.gov Make a Plan, covering household communication, meeting places, individual needs and practice; NWS hurricane warning definitions and Extreme Wind Warning shelter instructions. The tabletop sequence, timing and observation record below are HurricaneHub's educational design, not a FEMA-certified exercise or a current emergency message. Linked PDFs and formal organizational standards were not reviewed.",
    sources: [
      { href: "https://www.ready.gov/plan", label: "Ready.gov: Make a Plan, including household needs and practice" },
      { href: "https://www.weather.gov/safety/hurricane-ww", label: "NWS: Match hurricane warning products with their instructions" }
    ],
    steps: [
      { title: "Choose One Realistic Scenario", body: "Use a fictional exercise message clearly labeled as a drill. Test one location and a few decisions, such as a watch becoming a warning, a zone order, an outage, or a blocked route.", href: "/hurricane-tracker/hurricane-warning/", label: "Review warning language" },
      { title: "Run the Communication and Decision Tasks", body: "Ask participants to find official sources, contact their group, identify shelter or evacuation triggers, gather essential items, and explain their next action without creating unsafe movement.", href: "/tools/alert-action-decoder/", label: "Practice alert interpretation" },
      { title: "Debrief and Correct the Plan", body: "Record missing contacts, unclear authority, inaccessible supplies, transport gaps, technology failures, and training needs. Assign owners and dates rather than filing the exercise away.", href: "/tools/preparedness-checklist/", label: "Update checklist" }
    ],
    sections: [
      { eyebrow: "Training goal", title: "What Hurricane Training Should Accomplish", body: "Training should build reliable decisions, not confidence based on a perfect script. Participants need to know where official NHC, NWS, and local emergency information comes from; who has authority; which conditions trigger closure, shelter, or evacuation; and how to communicate when normal tools fail.", bullets: ["Recognize official alert sources", "Know roles and backup decision owners", "Locate supplies, contacts, and routes", "Identify gaps without blaming participants"] },
      {
        eyebrow: "Ready-to-use tabletop",
        title: "Try a 20-Minute Household Exercise",
        body: "Ready.gov recommends a household communication plan, consideration of individual needs and practicing the plan. The following short sequence is our way of testing those arrangements at home. Twenty minutes is a suggested session length, not a safety standard or a deadline for real evacuation. Agree on participants and a stop rule first. Use paper prompts marked EXERCISE ONLY; discuss travel on a map instead of driving. Tell any participating contact in advance that the test is planned, and do not send simulated warnings to public channels.",
        bullets: [
          "Minutes 0-5: each person locates the household's saved county alert channel, contact record and meeting place. Note anything missing or inaccessible.",
          "Minutes 5-10: the controller says, EXERCISE ONLY: imagine local officials have ordered your recorded zone to evacuate. Find the transport and destination confirmations; mark unresolved items rather than guessing availability.",
          "Minutes 10-15: discuss how to retrieve contacts if the main phone is unavailable. Use the printed copy and identify who needs help accessing it; do not disable real alerts or medical devices.",
          "Minutes 15-20: compare the intended actions with what participants could actually explain or retrieve. Choose one correction, an owner and a retest date."
        ]
      },
      {
        eyebrow: "Record what happened",
        title: "Use an Observation Log Instead of a Readiness Score",
        body: "Keep a private log with five fields: task, expected result, observed result, correction owner and retest date. Write down evidence of an arrangement, such as a printed contact card being found or a transport confirmation being available. Do not count a form submission as a booked ride, or a destination name as accepted lodging. A fast response does not establish that the selected action is correct. Avoid collecting sensitive medical details in a shared exercise report; record only the assistance arrangement that needs follow-up.",
        bullets: [
          "Worked example: task = retrieve backup contact; expected = each participant can find the paper card; observed = the only copy is in a locked drawer whose key holder is away.",
          "Correction = agree on an accessible, private storage location and make participant copies. Owner = a named household member; retest = an agreed date after the change.",
          "At the retest, ask participants to locate the record again. A new storage label alone does not demonstrate that the access problem was solved.",
          "Keep pending items visible. This exercise produces a correction list, not a certification that a home, route or shelter is safe."
        ]
      },
      {
        eyebrow: "Decision check",
        title: "Does a Packed Bag Prove the Drill Succeeded?",
        body: "Hypothetical result: everyone finds the go-bag, but one person cannot retrieve the county alert source and the group's proposed driver has not accepted the ride. Should the controller mark the household ready? Answer: the bag task was demonstrated; source access and transport remain unresolved. Assign those two gaps separately. Finding the official source requires a retrievable link or contact; resolving the ride requires confirmation with the provider, not a faster bag-packing drill. Retest those specific arrangements after they change.",
        bullets: [
          "Distinguish demonstrated, pending and not tested; use those labels for individual tasks.",
          "A tabletop discussion can identify a medical transport need but cannot establish a provider's acceptance or clinical suitability.",
          "If a real warning or emergency starts, stop the drill and use current official instructions. Do not keep following the fictional scenario.",
          "For workplace, school or care settings, use applicable local and organizational requirements; this household exercise does not replace a formal program."
        ]
      },
      { eyebrow: "Scenario design", title: "Build a Safe Hurricane Drill", body: "Label every exercise message with words such as EXERCISE or DRILL so nobody mistakes it for a real warning. Avoid sirens, public posts, calls to emergency numbers, actual evacuations, dangerous generator use, or activities that disrupt roads and responders. Pause immediately if real severe weather or an emergency begins.", bullets: ["State scope, participants, start, stop, and safety rules", "Use fictional names and locations where practical", "Assign an exercise controller and observers", "Keep emergency services and public channels out of the simulation"] },
      { eyebrow: "Family drill", title: "Family Hurricane Drill Checklist", body: "A household drill can take less than an hour. Test how everyone receives alerts, contacts an out-of-area person, reaches the safe room, finds go-bags and medication, handles pets, and names the evacuation destination. Children should receive age-appropriate tasks and reassurance rather than frightening storm imagery.", bullets: ["Send a test family message", "Find flashlights, shoes, medication, and documents", "Practice moving to the safe area", "Review two routes and two destinations"] },
      { eyebrow: "Workplace drill", title: "Workplace and Business Hurricane Training", body: "A workplace exercise should test closure authority, employee accountability, remote-work access, facility shutdown, records, vendors, customer messages, insurance contacts, and recovery leadership. Each location needs local triggers; a central office should not direct a coastal branch using conditions from another state.", bullets: ["Test primary and backup decision owners", "Confirm accessible employee communication", "Practice safe shutdown and records access", "Include payroll, vendors, customers, and reopening"] },
      { eyebrow: "Warning signs", title: "Recognize Hurricane Warning Signs Without Guessing", body: "Environmental changes such as clouds, surf, rain, or wind are not reliable substitutes for official forecasts and alerts. Training should teach participants to check advisory time, classification, watches and warnings, local evacuation orders, storm surge products, rainfall forecasts, and NWS alerts. Old screenshots and social posts should never control a decision.", bullets: ["Check timestamp and official source", "Separate watch, warning, and evacuation order", "Understand that impacts extend beyond the cone", "Use local alerts for local action"] },
      { eyebrow: "After action", title: "Turn the Drill Into Improvements", body: "Hold a short debrief immediately, then issue a written action list. Note what was supposed to happen, what actually happened, why the gap mattered, who owns the correction, and when it will be retested. Measures such as message delivery time, contact accuracy, supply access, and role clarity are more useful than declaring the drill successful.", bullets: ["Capture strengths and failures", "Assign one owner to every correction", "Set realistic completion dates", "Retest the highest-risk gaps"] }
    ],
    nextLinks: [
      { name: "Alert Action Decoder", href: "/tools/alert-action-decoder/", description: "Practice translating official watch and warning language into actions." },
      { name: "Family Communication Plan", href: "/tools/family-communication-plan/", description: "Create the contacts and destinations a household drill should test." },
      { name: "Business Preparedness", href: "/tools/business-preparedness/", description: "Build workplace roles, supplies, continuity, and recovery steps." },
      { name: "Hurricane Warning Guide", href: "/hurricane-tracker/hurricane-warning/", description: "Understand the official alert language used in a scenario." },
      { name: "Preparedness Checklist", href: "/tools/preparedness-checklist/", description: "Check whether supplies and records can actually be found." }
    ],
    faqs: [
      { question: "What is a hurricane drill?", answer: "A hurricane drill is a clearly labeled exercise that tests alerts, roles, communication, shelter, evacuation, supplies, and recovery decisions without pretending a real storm exists." },
      { question: "How often should a family run a hurricane drill?", answer: "Review and practice before hurricane season and after a move, major household change, new medical need, or plan failure. Local agencies and workplaces may set different schedules." },
      { question: "Should a hurricane drill include a real evacuation?", answer: "Usually a tabletop discussion or limited safe practice is enough. Do not create traffic, call emergency services, or conduct unsafe movement. Follow organizational and local safety requirements." },
      { question: "What should a workplace hurricane exercise test?", answer: "Test decision authority, employee communication, accountability, closure, remote work, safe shutdown, records, vendors, customers, insurance contacts, and reopening responsibilities." },
      { question: "Where can I find official hurricane training resources?", answer: "Use Ready.gov, FEMA, NHC, NWS, and state or local emergency management resources. For formal organizational programs, follow applicable workplace, school, healthcare, or regulatory requirements." }
    ]
  },
  {
    slug: "after-hurricane",
    title: "After a Hurricane: Check Access Before Starting Cleanup",
    shortTitle: "After a Hurricane",
    description: "Separate reentry, road access, building and utility checks after a hurricane. Complete a worked record before moving to cleanup and recovery documentation.",
    sourceCheck: "Checked November 6, 2026: Ready.gov's after-hurricane precautions, including wet electrical equipment, floodwater, cleanup exposure, children and damage documentation. The access record is illustrative, not an official inspection, medical assessment or current reentry authorization.",
    sources: [{ href: "https://www.ready.gov/hurricanes", label: "Ready.gov: after-hurricane precautions and documentation" }],
    eyebrow: "Safe recovery after impact",
    intro: "Before planning cleanup, separate four checks: permission to return to the area, an open route, a building that can be approached or entered safely, and safe utility conditions. Confirmation of one does not confirm the others. Use this page to record the remaining questions and who can answer them, then move to the recovery-file guide once access and work are authorized.",
    primaryAction: { label: "Check official alerts", href: "/alerts/" },
    secondaryAction: { label: "Plan for power outages", href: "/tools/power-outage-planner/" },
    intent: "emergency storm cleanup, hurricane clean up list, after hurricane recovery",
    steps: [
      { title: "Wait for Safe Reentry", body: "Follow local reentry instructions and road closures. Do not enter a flooded, visibly shifted, fire-damaged, gas-affected, or unstable structure; contact emergency services or qualified officials for immediate hazards.", href: "/alerts/", label: "Check current alerts" },
      { title: "Document Before Non-Emergency Cleanup", body: "Photograph rooms, exterior damage, utilities, belongings, and water lines when safe. Save receipts and contact the insurer for documentation and temporary-repair instructions before discarding items.", href: "/blog/hurricane-insurance-claim-guide-documentation/", label: "Review claim documentation" },
      { title: "Keep the Recovery Record", body: "Once access and work are permitted, keep dated evidence, insurer instructions, receipts and unfinished tasks together. Follow the specialist guidance for food, water, generators and mold instead of treating an access record as cleanup instructions.", href: "/blog/what-to-do-after-a-hurricane/", label: "Build the recovery file" }
    ],
    sections: [
      { eyebrow: "Access record", title: "Four Confirmations, Four Different Questions", body: "Keep the issuing authority, location, issue or check time, exact scope and remaining restriction beside each entry. A neighborhood reentry announcement does not inspect an individual building. An open highway does not establish that a private road or bridge is usable. Utility restoration to an area does not certify flood-damaged wiring inside a house. If a condition is uncertain, record it as pending and contact the responsible authority or qualified professional.", bullets: ["Area: local reentry permission, boundary, phase and any required identification", "Route: exact roads, bridges, closures and alternate access confirmed through official sources", "Building: posted restrictions, visible hazards and any required qualified assessment", "Utilities: electrical/gas status and separate drinking-water notices; the relevant provider's instruction"] },
      { eyebrow: "Reading task", title: "Does Reentry Permission Clear a Flooded Electrical Panel?", body: "Illustrative scenario: local officials permit neighborhood reentry and a public road is open, but the home's electrical panel was wet and has not been assessed. May the household treat the home as cleared for cleanup? Answer: no. The area and public-route checks do not resolve the electrical hazard. Ready.gov says not to touch wet electrical equipment or equipment while standing in water. Keep away from the hazard and seek the utility or qualified professional's direction; do not enter danger to complete a checklist.", bullets: ["Confirmed in the scenario: area reentry and a named public road", "Pending: property access, building condition and safe electrical work", "Next record: responsible contact, request, response and exact limits of any permission", "For immediate life-threatening danger, use emergency services from a safe place"] },
      { eyebrow: "Who can participate", title: "An Open Area Is Not Clearance for Every Person", body: "Ready.gov says children should not help with disaster cleanup. It also says people with asthma, other lung conditions or immune suppression should not enter buildings with visible or smelled mold or indoor water leaks. A household must arrange care and a suitable destination separately from organizing workers. A checklist cannot assess an individual's medical risk or certify a building.", bullets: ["Keep children out of cleanup work", "Ask a clinician about individual health or exposure concerns", "Use qualified help for structural, utility, sewage, chemical and other hazardous work", "Keep an alternative destination available while conditions remain unresolved"] },
      { eyebrow: "Handoff", title: "Carry Unresolved Conditions Into the Recovery File", body: "Once authorities permit access and the relevant hazards have been addressed, save the messages and assessments with the photo inventory. Record who may do which work, temporary measures requested by the insurer, receipts, pending tests and the next check. A claim number or a debris collection booking is not reentry permission. The linked recovery article focuses on keeping this evidence and contact history together.", bullets: ["Use the water-notice guide for boil-water, do-not-drink and do-not-use instructions", "Use the generator and outage guides for power, food and medicine planning", "Use the mold guide for cleanup exposure and remediation limits", "Keep claims and assistance decisions separate from permission to occupy the building"] }
    ],
    nextLinks: [
      { name: "What To Do After a Hurricane", href: "/blog/what-to-do-after-a-hurricane/", description: "Review the broader recovery order of operations." },
      { name: "Mold Prevention After Flooding", href: "/blog/hurricane-mold-prevention-after-flood/", description: "Understand moisture, PPE, health, and remediation limits." },
      { name: "Insurance Claim Documentation", href: "/blog/hurricane-insurance-claim-guide-documentation/", description: "Build a photo, inventory, receipt, and communication record." },
      { name: "Power Outage Planner", href: "/tools/power-outage-planner/", description: "Manage charging, food, medicine, heat, and generator safety." },
      { name: "Storm Archive", href: "/storm-archive/", description: "Review storm records and historical context after active advisories end." }
    ],
    faqs: [
      { question: "When is it safe to return after a hurricane?", answer: "Return only when local officials permit reentry and the route and building are safe. Flooding, downed lines, gas leaks, structural damage, contaminated water, and outages may continue after wind ends." },
      { question: "What should I clean first after a hurricane?", answer: "Address life safety, electricity, gas, structure, sewage, chemicals, and safe access first. Document damage and contact the insurer before non-emergency removal, then control moisture using safe methods." },
      { question: "Can I use a generator during cleanup?", answer: "Use it only outdoors and far from doors, windows, and vents, following manufacturer and official guidance. Never operate it in a home, garage, porch, crawlspace, or enclosed area." },
      { question: "Should I throw away wet belongings immediately?", answer: "Document them first when safe and ask the insurer about requirements. Discard items that create immediate health or safety hazards according to local public-health and waste guidance." },
      { question: "When do I need a professional cleanup contractor?", answer: "Seek qualified help for structural, electrical, gas, sewage, chemical, extensive mold, hazardous material, or major water damage. Verify licensing, insurance, permits, written estimates, and insurer requirements." }
    ]
  }
];

export function getTopicPage(slug: string) {
  return topicPages.find((page) => page.slug === slug);
}
