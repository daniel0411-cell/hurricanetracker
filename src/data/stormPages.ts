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
      "Use this Hurricane Erin tracker page as a standing search hub for NHC status checks, official advisory links, radar and satellite context, and local decision tools. If an active NHC storm named Erin is present, HurricaneHub can connect the live feed with this page; if Erin is not active, use the page as a preparation and source-checking guide.",
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
      "Use this Hurricane Melissa tracker page for NHC status checks, advisory links, satellite and radar shortcuts, and local preparedness tools. The page is designed for users searching for Melissa live tracker updates during active advisory cycles and for general preparedness when no active Melissa record is listed.",
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
    // 2026 状态（截至 2026-08-20）：Dolly 是 2026 大西洋名单第 4 个名字。
    // Arthur/Bertha/Cristobal 已消散；NHC 当时监视 Invest 94L（可能发展为 Dolly），
    // 但尚未命名。此为常驻枢纽页：风暴形成后由 [storm].astro 挂接实时 feed；
    // 未形成时渲染准备指南 + 历史同名对比 + FAQ。不编造生命周期数据。
    slug: "dolly",
    name: "Dolly",
    basin: "Atlantic",
    title: "Tropical Storm Dolly 2026 Tracker: NHC Path & Live Map",
    description: "Dolly 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the next 2026 name; Dolly has not yet formed.",
    primaryKeywords: ["tropical storm dolly tracker", "hurricane dolly path", "dolly live tracker map", "where is storm dolly now"],
    searchDemandNote:
      "Dolly is the fourth name on the 2026 Atlantic list. Tracker searches typically spike the moment NHC designates a tropical depression or storm, so this page is set up in advance as a stable hub for live position, forecast path, and advisory links.",
    overview:
      "Use this Hurricane Dolly tracker page as a standing search hub for NHC status checks, official advisory links, radar and satellite shortcuts, and local decision tools. As of 2026-08-20, no system has been designated Tropical Storm Dolly in the 2026 Atlantic season. Dolly is the next name queued on the 2026 Atlantic list (after Arthur, Bertha, and Cristobal); if an NHC system reaches tropical-storm strength it will receive this name and HurricaneHub can connect the live feed here. Until then, use the page for preparedness context, official source checking, and review of past Dolly storms.",
    trackerFocus: [
      "Watch the NHC tropical weather outlook for the system that could be designated Dolly; do not treat invest areas or model spins as a named storm until NHC confirms it.",
      "When Dolly is active, compare the official forecast track with radar, satellite, and the cone of uncertainty — never the center line alone.",
      "Pair any Dolly forecast with local NWS alerts and emergency management guidance before making evacuation or shelter decisions.",
      "Historical Dolly storms include 2008 (Hurricane Dolly, Category 1 landfall near South Padre Island, Texas, with heavy rain and surge) and 2014 (Tropical Storm Dolly, landfall near Tampico, Mexico). Each Dolly had a very different footprint, so the 2026 system should be assessed on its own data, not the name."
    ],
    faqs: [
      {
        question: "Is Tropical Storm Dolly active right now?",
        answer:
          "Check the live status section and official NHC advisory links on this page. Dolly is the fourth name on the 2026 Atlantic list; if no active Dolly record appears, NHC has not yet designated a 2026 system with that name, and HurricaneHub's feed reflects that."
      },
      {
        question: "Where would a 2026 Dolly make landfall?",
        answer:
          "No landfall can be predicted in advance of the storm forming. Landfall depends on the steering pattern present as Dolly approaches, which is only predictable within several days. Use NHC advisories and local emergency management for any landfall or evacuation information."
      },
      {
        question: "How does the 2026 Dolly compare to past Dolly storms?",
        answer:
          "Past Dolly storms differ widely: 2008 Hurricane Dolly struck South Padre Island, Texas as a Category 1 with damaging surge and rainfall, while 2014 Tropical Storm Dolly made landfall near Tampico, Mexico, and 1996 Hurricane Dolly affected the western Gulf. The 2026 Dolly, if it forms, should be evaluated on its own NHC data rather than the name's history."
      }
    ]
  },
  {
    // 2026 状态：Edouard 是第 5 个名字，须在 Dolly 之后才会被使用，目前未形成。
    // 常驻枢纽页，未形成时渲染历史对比与准备指南；不编造生命周期。
    slug: "edouard",
    name: "Edouard",
    basin: "Atlantic",
    title: "Hurricane Edouard 2026 Tracker: NHC Path, Map & Updates",
    description: "Edouard 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the fifth 2026 name; Edouard has not yet formed.",
    primaryKeywords: ["tropical storm edouard tracker", "hurricane edouard path", "edouard live tracker", "where is storm edouard now"],
    searchDemandNote:
      "Edouard is the fifth name on the 2026 Atlantic list. Search demand usually arrives only after NHC names a system, so this standing page is prepared in advance to capture live-tracker, path, and advisory queries without delay.",
    overview:
      "Use this Hurricane Edouard tracker page as a standing hub for NHC status checks, official advisory links, radar and satellite shortcuts, and local preparedness tools. As of 2026-08-20, no system has been designated Tropical Storm Edouard in the 2026 Atlantic season. Edouard would be the fifth named storm of the 2026 Atlantic season (after Arthur, Bertha, Cristobal, and Dolly) and would only receive the name if a system reaches tropical-storm strength. Until then, use the page for monitoring, source-checking, and review of past Edouard storms.",
    trackerFocus: [
      "Confirm whether NHC has designated a 2026 system as Edouard before relying on any tracker data; invest areas and model runs are not named storms.",
      "If Edouard becomes active, use the official NHC forecast path together with the cone of uncertainty, wind field, and surge products — not a single model or the center line.",
      "Coordinate any Edouard-related decision with local NWS alerts and emergency management orders, which control watches, warnings, and evacuations.",
      "Historical Edouard storms include 1996 (Hurricane Edouard, a major hurricane that paralleled the U.S. East Coast and brushed Cape Hatteras and New England) and 2014 (Hurricane Edouard, the first major hurricane of that season, which stayed over the open Atlantic). The name's past intensity does not predict the 2026 system."
    ],
    faqs: [
      {
        question: "Is Hurricane Edouard active right now?",
        answer:
          "Check the live status section and NHC advisory links on this page. Edouard is the fifth name on the 2026 Atlantic list; if no active Edouard record appears, NHC has not yet designated a 2026 system with that name."
      },
      {
        question: "Has Edouard ever hit the United States?",
        answer:
          "Past Edouard storms have mostly stayed offshore or weakened before landfall; 1996 Hurricane Edouard brushed Cape Hatteras and New England as a major hurricane without a direct landfall, and 2014 Edouard remained over the open Atlantic. Any 2026 Edouard should be tracked on its own NHC data."
      },
      {
        question: "When will Edouard form in 2026?",
        answer:
          "There is no fixed date. The fifth named storm of a season historically forms in late August or September, but formation depends on atmospheric conditions. Monitor the NHC tropical weather outlook for the system that could become Edouard."
      }
    ]
  },
  {
    // 2026 状态：Fay 是第 6 个名字，须在 Edouard 之后才会被使用，目前未形成。
    // Fay 历史上多次登陆美国（2008 佛州、2020 新泽西），故常驻枢纽页尤其重要。
    // 未形成时渲染历史对比与准备指南；不编造生命周期。
    slug: "fay",
    name: "Fay",
    basin: "Atlantic",
    title: "Tropical Storm Fay 2026 Tracker: NHC Path, Map & Updates",
    description: "Fay 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the sixth 2026 name; Fay has not yet formed.",
    primaryKeywords: ["tropical storm fay tracker", "hurricane fay path", "fay live tracker map", "where is storm fay now"],
    searchDemandNote:
      "Fay is the sixth name on the 2026 Atlantic list. Because the name has produced memorable landfalling storms before, Fay tracker searches can arrive quickly once a system is named; this page is prepared in advance as a stable hub.",
    overview:
      "Use this Hurricane Fay tracker page as a standing hub for NHC status checks, official advisory links, radar and satellite shortcuts, and local decision tools. As of 2026-08-20, no system has been designated Tropical Storm Fay in the 2026 Atlantic season. Fay would be the sixth named storm of the 2026 Atlantic season (after Arthur, Bertha, Cristobal, Dolly, and Edouard) and would only receive the name if a system reaches tropical-storm strength. Until then, use the page for preparedness context, source-checking, and review of past Fay storms, which have a notable history of U.S. landfalls.",
    trackerFocus: [
      "Wait for an NHC designation before treating any system as Fay; tropical waves and invests are not named storms and their model output is not a forecast.",
      "If Fay becomes active, compare the NHC forecast track with the cone, wind field, and surge products — and remember that past Fay storms showed impacts well outside the center line.",
      "Use local NWS alerts and emergency management guidance for any evacuation, shelter, or travel decision; HurricaneHub is a navigation layer, not an official warning source.",
      "Historical Fay storms include 2008 (Tropical Storm Fay, which made multiple Florida landfalls and produced historic flooding) and 2020 (Tropical Storm Fay, which made landfall in New Jersey, the first New Jersey landfall since 1903). The 2026 Fay, if it forms, should be assessed on its own data."
    ],
    faqs: [
      {
        question: "Is Tropical Storm Fay active right now?",
        answer:
          "Check the live status section and NHC advisory links on this page. Fay is the sixth name on the 2026 Atlantic list; if no active Fay record appears, NHC has not yet designated a 2026 system with that name."
      },
      {
        question: "Did Fay ever make landfall in the United States?",
        answer:
          "Yes. 2008 Tropical Storm Fay made multiple Florida landfalls and produced record flooding, and 2020 Tropical Storm Fay made landfall in New Jersey near Atlantic City — the first New Jersey tropical storm landfall since 1903. A 2026 Fay, if it forms, would be tracked on its own NHC data, not these past tracks."
      },
      {
        question: "Why does the name Fay get attention even before formation?",
        answer:
          "Because past Fay storms have repeatedly made U.S. landfalls with notable flooding, search demand for Fay can spike quickly once a system is named. This standing page captures those searches with official-source links and preparedness tools rather than speculation."
      }
    ]
  },
  {
    // 2026 状态：Danielle 是当前 2026 大西洋命名表第 4 个名字；未形成时不推断路径或强度。
    slug: "danielle",
    name: "Danielle",
    basin: "Atlantic",
    title: "Tropical Storm Danielle 2026 Tracker: NHC Path & Live Map",
    description: "Danielle 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm danielle tracker", "hurricane danielle path", "danielle live tracker map", "where is storm danielle now"],
    searchDemandNote: "Danielle is fourth on the 2026 Atlantic name list. Search demand typically rises sharply when NHC assigns the name, especially for current position and forecast-path checks.",
    overview: "This standing Danielle hub connects NHC status, official advisories, radar, satellite, and local warning resources in one stable location. If Danielle has not formed, use it to check official sources and prepare rather than infer a track from model speculation.",
    trackerFocus: ["Confirm Danielle appears in the current NHC feed before treating it as an active storm.", "Use the live tracker and radar pages for Atlantic position and satellite context.", "Pair any forecast with local NWS alerts before evacuation or shelter decisions.", "Use the storm distance calculator for location context, not a landfall prediction."],
    faqs: [
      { question: "Is Danielle an active storm right now?", answer: "Check the live status on this page and its NHC advisory links. If no Danielle record appears, the current HurricaneHub NHC feed is not listing that name." },
      { question: "Where is the live Danielle tracker map?", answer: "Open HurricaneHub's live tracker and radar views, then verify the position and forecast cone in the official NHC advisory." },
      { question: "Can the Danielle page forecast a landfall?", answer: "No. It organizes official tracking sources; NHC forecasts and local emergency management control landfall and evacuation guidance." },
      { question: "What category is Danielle?", answer: "Use the latest NHC advisory for Danielle's current classification. A storm's category can change between advisory cycles." }
    ]
  },
  {
    // 2026 状态：Earl 是第 5 个名字；页面在命名前仅提供官方来源核查与准备信息。
    slug: "earl", name: "Earl", basin: "Atlantic",
    title: "Tropical Storm Earl 2026 Tracker: NHC Path & Live Map",
    description: "Earl 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm earl tracker", "hurricane earl path", "earl live tracker map", "where is storm earl now"],
    searchDemandNote: "Earl is fifth on the 2026 Atlantic list. Interest usually accelerates once the name is assigned, with strong demand for path maps, intensity, and coastal outlooks.",
    overview: "Use this permanent Earl page to move between the current NHC feed, official advisory products, radar, satellite, and preparedness tools. Before formation it is a source-checking hub, not evidence that a named storm exists.",
    trackerFocus: ["Verify NHC has named a system Earl before sharing tracker claims.", "Compare the live tracker with radar and satellite views for basin context.", "Follow local NWS warnings and emergency orders for household decisions.", "Use the distance calculator only to understand relative position."],
    faqs: [
      { question: "Has Tropical Storm Earl formed?", answer: "The live status and official NHC links on this page show whether Earl is in the current feed. No listing means HurricaneHub has no active Earl record." },
      { question: "How do I view Earl on a map?", answer: "Use the HurricaneHub live tracker for position and the radar page for weather context, then confirm the official NHC cone." },
      { question: "Does the Earl tracker know where landfall will be?", answer: "No. Landfall probabilities change with each NHC forecast, and evacuation instructions come from local authorities." },
      { question: "Is Earl a hurricane or tropical storm?", answer: "Check the most recent NHC advisory because classification depends on the latest observed wind and storm structure." }
    ]
  },
  {
    // 2026 状态：Fiona 是第 6 个名字；未形成时页面保持为常驻监测入口。
    slug: "fiona", name: "Fiona", basin: "Atlantic",
    title: "Tropical Storm Fiona 2026 Tracker: NHC Path & Live Map",
    description: "Fiona 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm fiona tracker", "hurricane fiona path", "fiona live tracker map", "where is storm fiona now"],
    searchDemandNote: "Fiona occupies the sixth position on the 2026 Atlantic list. Searches can surge rapidly at naming because users want the latest island and western Atlantic track context.",
    overview: "This Fiona hub is a stable route to NHC status, advisory links, radar and satellite shortcuts, and local decision resources. Until NHC names Fiona, it serves preparedness and source verification without inventing a lifecycle.",
    trackerFocus: ["Check whether Fiona is present in the NHC current-storm feed.", "Use live and satellite maps for Caribbean and Atlantic context when applicable.", "Base protective action on NWS alerts and local emergency guidance.", "Treat calculator distance as context rather than a forecast."],
    faqs: [
      { question: "Is there a 2026 storm named Fiona now?", answer: "Check this page's current NHC status. If Fiona is absent, no active Fiona is available in HurricaneHub's latest feed." },
      { question: "Where can I follow Fiona's path map?", answer: "Use the live tracker and official NHC advisory for the path; radar and satellite add current weather context." },
      { question: "Can Fiona's landfall be predicted here?", answer: "No. Only official NHC forecasts and local emergency managers should guide landfall and evacuation decisions." },
      { question: "How strong is Fiona?", answer: "The newest NHC advisory provides the current classification and intensity if Fiona is active." }
    ]
  },
  {
    // 2026 状态：Gordon 是第 7 个名字；无 NHC 记录时不展示推测性状态。
    slug: "gordon", name: "Gordon", basin: "Atlantic",
    title: "Tropical Storm Gordon 2026 Tracker: NHC Path & Live Map",
    description: "Gordon 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm gordon tracker", "hurricane gordon path", "gordon live tracker map", "where is storm gordon now"],
    searchDemandNote: "Gordon is seventh on the 2026 list. Naming typically creates a concentrated burst of searches for Gulf or Atlantic path updates, watches, and current position.",
    overview: "The Gordon page keeps live NHC checks, official advisories, radar, satellite, and preparedness links together at a durable URL. If Gordon is not active, the page remains a monitoring guide rather than a speculative forecast.",
    trackerFocus: ["Confirm Gordon's name in the official current feed.", "Open tracker and radar views for Gulf or Atlantic location context.", "Use local NWS warnings to make travel or evacuation choices.", "Calculate distance only as approximate geographic context."],
    faqs: [
      { question: "Is Gordon active in the Atlantic?", answer: "The live NHC status on this page answers that question. An absent record means the feed does not currently list Gordon." },
      { question: "Where is the Gordon live map?", answer: "HurricaneHub's live tracker shows current systems, while the radar page provides precipitation and satellite context." },
      { question: "Will Gordon make landfall?", answer: "This page cannot determine that. Follow each NHC forecast and local official instructions as the track evolves." },
      { question: "What is Gordon's category today?", answer: "Read the latest NHC advisory for its current classification and intensity." }
    ]
  },
  {
    // 2026 状态：Hermine 是第 8 个名字；命名前页面仅作权威来源入口。
    slug: "hermine", name: "Hermine", basin: "Atlantic",
    title: "Tropical Storm Hermine 2026 Tracker: NHC Path & Live Map",
    description: "Hermine 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm hermine tracker", "hurricane hermine path", "hermine live tracker map", "where is storm hermine now"],
    searchDemandNote: "Hermine is the eighth 2026 Atlantic name. Search interest tends to jump at designation, especially for Gulf Coast and Southeast impact questions.",
    overview: "Use this standing Hermine hub for the current NHC record, advisories, live maps, radar, satellite, and state planning links. When Hermine has not formed, it supports readiness and official-source checking without projecting a path.",
    trackerFocus: ["Look for an official Hermine entry in the NHC feed.", "Compare tracker position with radar and satellite imagery.", "Check NWS alerts before acting on coastal or inland risk.", "Use storm distance results as context, never a landfall call."],
    faqs: [
      { question: "Is Hermine active right now?", answer: "Review the current status and NHC links here. If Hermine is not listed, the latest feed has no active storm under that name." },
      { question: "Where can I track Hermine live?", answer: "Open the HurricaneHub live tracker and radar, then use the NHC advisory for the official forecast." },
      { question: "Can this tracker tell me to evacuate for Hermine?", answer: "No. Evacuation decisions must follow local emergency management and NWS instructions." },
      { question: "What category has Hermine reached?", answer: "Use the latest official NHC advisory, because classification can change as observations update." }
    ]
  },
  {
    // 2026 状态：Ian 是第 9 个名字；历史同名风暴不代表 2026 年路径或强度。
    slug: "ian", name: "Ian", basin: "Atlantic",
    title: "Tropical Storm Ian 2026 Tracker: NHC Path & Live Map",
    description: "Ian 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm ian tracker", "hurricane ian path", "ian live tracker map", "where is storm ian now"],
    searchDemandNote: "Ian is ninth on the 2026 name list. Because the name is familiar from 2022, searches may rise unusually early, but only NHC can confirm a new 2026 Ian.",
    overview: "This 2026 Ian hub separates a current NHC storm record from historical searches and links users to advisories, radar, satellite, and local tools. If no 2026 Ian exists, it remains a preparation and verification page and does not reuse the 2022 track.",
    trackerFocus: ["Verify the feed refers to a 2026 Ian, not historical Hurricane Ian content.", "Use current tracker and radar layers rather than past track maps.", "Rely on local NWS alerts and emergency officials for decisions.", "Use distance calculations for position context only."],
    faqs: [
      { question: "Is Hurricane Ian active again in 2026?", answer: "Check the current NHC status here. Historical Hurricane Ian information does not mean a 2026 storm has formed." },
      { question: "Where can I see the 2026 Ian map?", answer: "If active, Ian appears on HurricaneHub's live tracker; confirm its official path with NHC." },
      { question: "Will a 2026 Ian follow the 2022 track?", answer: "No. Reused names do not imply a similar path or impact, and each system must be assessed from current NHC data." },
      { question: "What category is the new Ian?", answer: "The latest NHC advisory is the authoritative source for any active 2026 Ian classification." }
    ]
  },
  {
    // 2026 状态：Julia 是第 10 个名字；页面不将热带扰动提前命名。
    slug: "julia", name: "Julia", basin: "Atlantic",
    title: "Tropical Storm Julia 2026 Tracker: NHC Path & Live Map",
    description: "Julia 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm julia tracker", "hurricane julia path", "julia live tracker map", "where is storm julia now"],
    searchDemandNote: "Julia is tenth on the 2026 Atlantic list. Once named, demand often centers on Caribbean position, forecast timing, rainfall, and official alerts.",
    overview: "The Julia hub offers a stable route to current NHC status, advisories, radar, satellite, and preparedness resources. Before formation, it helps users verify official information without promoting an invest or tropical wave to a named storm.",
    trackerFocus: ["Wait for NHC to list Julia by name.", "Use live maps for Caribbean and Atlantic position context.", "Combine NHC data with local NWS or national weather alerts.", "Use the distance tool only for approximate separation."],
    faqs: [
      { question: "Has Julia formed in 2026?", answer: "Check the current feed on this page. If Julia does not appear, HurricaneHub has no active NHC record for that name." },
      { question: "How can I watch Julia's tracker map?", answer: "Use HurricaneHub's live tracker and radar, with the NHC advisory as the official forecast source." },
      { question: "Does this page predict Julia's landfall?", answer: "No. It provides source links and context, not independent landfall forecasts." },
      { question: "Is Julia a hurricane yet?", answer: "The current NHC classification in the latest advisory determines whether Julia is a depression, storm, or hurricane." }
    ]
  },
  {
    // 2026 状态：Karl 是第 11 个名字；无活跃记录时页面保持预备状态。
    slug: "karl", name: "Karl", basin: "Atlantic",
    title: "Tropical Storm Karl 2026 Tracker: NHC Path & Live Map",
    description: "Karl 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm karl tracker", "hurricane karl path", "karl live tracker map", "where is storm karl now"],
    searchDemandNote: "Karl is the eleventh name on the 2026 list. Searches generally spike after naming as users look for Gulf, Caribbean, or open-Atlantic path updates.",
    overview: "This permanent Karl URL groups NHC status, advisory links, radar, satellite, and local preparedness tools. If Karl has not formed, use it as a source-checking page and not as evidence of a forecast system.",
    trackerFocus: ["Confirm an official Karl designation in the current feed.", "Use tracker and radar layers for current position context.", "Check local warnings before changing household plans.", "Treat distance estimates as geographic context only."],
    faqs: [
      { question: "Is Karl a named storm now?", answer: "The current NHC feed displayed here shows whether Karl is active. No result means no active Karl is available in that feed." },
      { question: "Where can I find Karl's live path?", answer: "Use HurricaneHub's live map and the latest official NHC cone and advisory." },
      { question: "Can Karl's landfall location be known now?", answer: "No. Track uncertainty changes, and local officials provide evacuation guidance." },
      { question: "What category is Karl currently?", answer: "Refer to the latest NHC advisory for the current classification and wind information." }
    ]
  },
  {
    // 2026 状态：Lisa 是第 12 个名字；页面在命名前不使用模型推演代替 NHC 状态。
    slug: "lisa", name: "Lisa", basin: "Atlantic",
    title: "Tropical Storm Lisa 2026 Tracker: NHC Path & Live Map",
    description: "Lisa 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm lisa tracker", "hurricane lisa path", "lisa live tracker map", "where is storm lisa now"],
    searchDemandNote: "Lisa is twelfth on the 2026 Atlantic list. Naming can trigger quick interest in Caribbean and Gulf forecasts, current location, and advisory timing.",
    overview: "Use the Lisa hub to check NHC status, open official advisories, and move into radar, satellite, and local warning resources. Until NHC assigns the name, it remains a preparedness guide with no invented track or intensity.",
    trackerFocus: ["Check NHC's feed for Lisa before treating social posts as confirmation.", "Use live and radar maps for current basin context.", "Follow local weather alerts for protective decisions.", "Use the storm distance calculator without interpreting it as a forecast."],
    faqs: [
      { question: "Is Tropical Storm Lisa active?", answer: "The current status section and NHC links show whether Lisa appears in the latest feed." },
      { question: "Where is Lisa on the tracker?", answer: "If Lisa is active, open the HurricaneHub live tracker and confirm the official forecast with NHC." },
      { question: "Can HurricaneHub predict Lisa's landfall?", answer: "No. Official forecasts and local emergency guidance govern landfall and evacuation information." },
      { question: "How strong is Lisa now?", answer: "Use the newest NHC advisory for Lisa's classification and intensity." }
    ]
  },
  {
    // 2026 状态：Martin 是第 13 个名字；常驻页面不代表该风暴已经形成。
    slug: "martin", name: "Martin", basin: "Atlantic",
    title: "Tropical Storm Martin 2026 Tracker: NHC Path & Live Map",
    description: "Martin 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm martin tracker", "hurricane martin path", "martin live tracker map", "where is storm martin now"],
    searchDemandNote: "Martin is the thirteenth 2026 Atlantic name. Search demand is expected to concentrate around designation, forecast-track changes, and open-ocean versus land-impact questions.",
    overview: "The Martin tracker hub provides one stable entry for live NHC checks, advisories, radar, satellite, and preparedness links. Before a system is named Martin, it supports source verification and does not imply formation.",
    trackerFocus: ["Verify Martin in the current official feed.", "Review tracker and satellite context alongside NHC products.", "Use NWS and emergency management guidance for decisions.", "Read distance output as approximate location context."],
    faqs: [
      { question: "Is Martin active in the 2026 season?", answer: "Check the current NHC status here. If there is no Martin record, the latest feed is not listing one." },
      { question: "Where can I see Martin's forecast map?", answer: "Use the live tracker for map context and NHC for the official forecast cone." },
      { question: "Does Martin have a confirmed landfall?", answer: "This page cannot confirm future landfall; follow NHC and local authorities as forecasts update." },
      { question: "What category is Martin?", answer: "If active, Martin's latest NHC advisory states the authoritative classification." }
    ]
  },
  {
    // 2026 状态：Nicole 是第 14 个名字；历史 Nicole 记录不用于推断 2026 风暴。
    slug: "nicole", name: "Nicole", basin: "Atlantic",
    title: "Tropical Storm Nicole 2026 Tracker: NHC Path & Live Map",
    description: "Nicole 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm nicole tracker", "hurricane nicole path", "nicole live tracker map", "where is storm nicole now"],
    searchDemandNote: "Nicole is fourteenth on the 2026 list. Familiarity with past Nicole storms may create early search traffic, but current status must come from the NHC feed.",
    overview: "This 2026 Nicole hub distinguishes current advisories from historical storm searches and connects users to radar, satellite, and local planning tools. If Nicole has not formed, it remains a readiness page without a fabricated path.",
    trackerFocus: ["Confirm any result is for a 2026 Nicole.", "Use current live and radar views instead of historical maps.", "Pair NHC forecasts with local NWS alerts.", "Use distance calculations only for relative-position context."],
    faqs: [
      { question: "Is Nicole active again in 2026?", answer: "Check the current status here; past Nicole storms do not indicate that a new one exists." },
      { question: "Where can I track the 2026 Nicole?", answer: "If active, Nicole appears on the live tracker with links to official NHC products." },
      { question: "Will Nicole repeat a past landfall path?", answer: "No. Storm names repeat, but tracks and impacts are governed by current conditions." },
      { question: "What is Nicole's current category?", answer: "Use the latest NHC advisory for any active Nicole classification." }
    ]
  },
  {
    // 2026 状态：Owen 是第 15 个名字；无 NHC 命名时仅显示准备和核查内容。
    slug: "owen", name: "Owen", basin: "Atlantic",
    title: "Tropical Storm Owen 2026 Tracker: NHC Path & Live Map",
    description: "Owen 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm owen tracker", "hurricane owen path", "owen live tracker map", "where is storm owen now"],
    searchDemandNote: "Owen is fifteenth on the 2026 Atlantic list. If reached, demand should rise at naming as users seek late-season location, path, and warning information.",
    overview: "Use this Owen page as a permanent NHC status and advisory hub with radar, satellite, and preparedness shortcuts. Before formation it is a verification tool, not a claim that the fifteenth name will be used.",
    trackerFocus: ["Confirm Owen appears in the NHC feed.", "Use tracker and satellite pages for current position.", "Follow local alerts for travel, shelter, or evacuation decisions.", "Use the distance calculator only for geographic context."],
    faqs: [
      { question: "Has a storm named Owen formed?", answer: "The live status here reflects the current NHC feed. If Owen is absent, no active record is available." },
      { question: "Where can I see Owen on a live map?", answer: "Open HurricaneHub's live tracker and radar, then verify the forecast through NHC." },
      { question: "Can this page predict Owen's landfall?", answer: "No. It organizes tracking resources; official forecasts and local authorities guide landfall decisions." },
      { question: "Is Owen a hurricane?", answer: "Check the latest NHC advisory for the current classification if Owen is active." }
    ]
  },
  {
    // 2026 状态：Paula 是第 16 个名字；页面不预设该名字一定会被使用。
    slug: "paula", name: "Paula", basin: "Atlantic",
    title: "Tropical Storm Paula 2026 Tracker: NHC Path & Live Map",
    description: "Paula 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm paula tracker", "hurricane paula path", "paula live tracker map", "where is storm paula now"],
    searchDemandNote: "Paula is sixteenth on the 2026 name list. Search demand would likely be late-season and highly focused on current NHC designation, path, and regional impacts.",
    overview: "The Paula hub keeps current NHC checks, advisories, radar, satellite, and planning tools at one durable URL. If the season never reaches Paula, the page remains an official-source and preparedness reference.",
    trackerFocus: ["Verify a Paula designation with NHC.", "Use live tracker and radar layers for location context.", "Check local warning agencies before making decisions.", "Do not interpret distance as a landfall forecast."],
    faqs: [
      { question: "Is Paula active this hurricane season?", answer: "The current status and NHC links show whether Paula is listed in the latest feed." },
      { question: "How can I track Paula on a map?", answer: "Use HurricaneHub's live tracker and radar, backed by the official NHC advisory." },
      { question: "Where will Paula make landfall?", answer: "No independent page can reliably answer that; follow current NHC forecasts and local orders." },
      { question: "What category is Paula now?", answer: "If active, the latest NHC advisory provides Paula's current classification." }
    ]
  },
  {
    // 2026 状态：Richard 是第 17 个名字；页面在未形成阶段不显示预测生命周期。
    slug: "richard", name: "Richard", basin: "Atlantic",
    title: "Tropical Storm Richard 2026 Tracker: NHC Path & Live Map",
    description: "Richard 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm richard tracker", "hurricane richard path", "richard live tracker map", "where is storm richard now"],
    searchDemandNote: "Richard is seventeenth on the 2026 Atlantic list. If named, search interest should spike around late-season forecast timing and Caribbean or Gulf context.",
    overview: "This Richard hub links live NHC status with official advisories, radar, satellite, and local preparedness resources. Until a designation appears, it remains a source-checking tool and avoids invented storm details.",
    trackerFocus: ["Check the NHC feed for Richard by name.", "Use current map and radar products for basin context.", "Base protective action on official local alerts.", "Use the distance calculator as context, not prediction."],
    faqs: [
      { question: "Is Richard active right now?", answer: "Review the current feed status here. No Richard entry means HurricaneHub has no active NHC record for that name." },
      { question: "Where is Richard's tracker map?", answer: "Use the live tracker and radar, then open the NHC advisory for the official path." },
      { question: "Can Richard's landfall be predicted here?", answer: "No. Follow NHC forecasts and local emergency management guidance." },
      { question: "How strong is Richard?", answer: "The latest NHC advisory supplies the current classification and intensity if active." }
    ]
  },
  {
    // 2026 状态：Shary 是第 18 个名字；是否启用取决于真实季节活动。
    slug: "shary", name: "Shary", basin: "Atlantic",
    title: "Tropical Storm Shary 2026 Tracker: NHC Path & Live Map",
    description: "Shary 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm shary tracker", "hurricane shary path", "shary live tracker map", "where is storm shary now"],
    searchDemandNote: "Shary is the eighteenth 2026 Atlantic name. Search volume is likely to emerge only if NHC reaches this late-season name, then focus on live position and forecast updates.",
    overview: "The Shary page is a stable destination for NHC status, official advisories, live maps, radar, satellite, and preparedness links. Before naming, it makes no claim about formation, path, or intensity.",
    trackerFocus: ["Confirm Shary through the official NHC feed.", "Use tracker and satellite tools for current context.", "Follow local warnings for all protective action.", "Keep distance estimates separate from forecast conclusions."],
    faqs: [
      { question: "Has Shary formed in 2026?", answer: "Check the live NHC status on this page. If Shary is absent, there is no active feed record." },
      { question: "Where can I view Shary live?", answer: "Use HurricaneHub's live tracker and radar, with NHC as the official forecast source." },
      { question: "Will Shary make landfall?", answer: "This page cannot predict that. Track each official NHC update and local guidance." },
      { question: "What category is Shary?", answer: "If active, Shary's latest NHC advisory provides its current classification." }
    ]
  },
  {
    // 2026 状态：Tobias 是第 19 个名字；常驻 URL 不表示风暴已经存在。
    slug: "tobias", name: "Tobias", basin: "Atlantic",
    title: "Tropical Storm Tobias 2026 Tracker: NHC Path & Live Map",
    description: "Tobias 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm tobias tracker", "hurricane tobias path", "tobias live tracker map", "where is storm tobias now"],
    searchDemandNote: "Tobias is nineteenth on the 2026 list. If the name is used, search demand should arrive quickly around late-season track, classification, and advisory queries.",
    overview: "Use the Tobias hub for current NHC checks, official advisories, radar, satellite, and local planning resources. If no Tobias is active, the page functions as preparation and source verification only.",
    trackerFocus: ["Wait for an official Tobias designation.", "Use current tracker and radar views for location context.", "Follow official local alerts for decisions.", "Use distance calculations without treating them as forecasts."],
    faqs: [
      { question: "Is Tobias an active tropical storm?", answer: "The current NHC status here shows whether Tobias appears in the latest feed." },
      { question: "Where is the Tobias live tracker?", answer: "Open HurricaneHub's live map and radar, then confirm the path with NHC." },
      { question: "Can Tobias's landfall be predicted?", answer: "No. NHC forecasts and local authorities provide the decision-grade information." },
      { question: "What classification is Tobias?", answer: "Use the newest NHC advisory for its active classification, if any." }
    ]
  },
  {
    // 2026 状态：Virginie 是第 20 个名字；仅在 NHC 命名后显示实时风暴数据。
    slug: "virginie", name: "Virginie", basin: "Atlantic",
    title: "Tropical Storm Virginie 2026 Tracker: NHC Path & Live Map",
    description: "Virginie 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm virginie tracker", "hurricane virginie path", "virginie live tracker map", "where is storm virginie now"],
    searchDemandNote: "Virginie is twentieth on the 2026 Atlantic list. Search demand depends on an unusually active season reaching this name and would center on official status and path updates.",
    overview: "This Virginie hub provides a durable route to NHC status, advisories, live tracking, radar, satellite, and preparedness tools. Without an active NHC record, it remains a non-speculative source guide.",
    trackerFocus: ["Confirm Virginie in the current NHC feed.", "Use live and satellite maps for verified position context.", "Pair the forecast with local weather alerts.", "Treat distance output only as approximate context."],
    faqs: [
      { question: "Is Virginie active in 2026?", answer: "Check the current status displayed here. If Virginie is missing, the feed does not list an active storm by that name." },
      { question: "Where can I track Virginie's path?", answer: "Use HurricaneHub's live tracker and the official NHC forecast advisory." },
      { question: "Does this page forecast Virginie's landfall?", answer: "No. It links official sources and planning tools; it does not issue forecasts." },
      { question: "What category is Virginie?", answer: "The latest NHC advisory is authoritative for any current classification." }
    ]
  },
  {
    // 2026 状态：Walter 是第 21 个也是常规名单最后一个名字；不预设名单一定用尽。
    slug: "walter", name: "Walter", basin: "Atlantic",
    title: "Tropical Storm Walter 2026 Tracker: NHC Path & Live Map",
    description: "Walter 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season.",
    primaryKeywords: ["tropical storm walter tracker", "hurricane walter path", "walter live tracker map", "where is storm walter now"],
    searchDemandNote: "Walter is twenty-first and last on the standard 2026 Atlantic list. Search demand would indicate an exceptionally active season and focus on live status, path, and official warnings.",
    overview: "The Walter hub keeps current NHC status, advisory links, radar, satellite, and local preparedness resources together. If the 2026 season does not reach Walter, the page remains a verification guide and never invents storm activity.",
    trackerFocus: ["Verify Walter has been officially named by NHC.", "Use tracker and radar pages for current location context.", "Follow local alerts and emergency instructions for action.", "Use distance tools as context rather than landfall prediction."],
    faqs: [
      { question: "Has the 2026 season reached Walter?", answer: "The live NHC status here shows whether Walter is active. An absent record means it is not in the current feed." },
      { question: "Where can I see Walter on a live map?", answer: "Use HurricaneHub's live tracker and radar, then verify the official path through NHC." },
      { question: "Can this Walter page predict landfall?", answer: "No. NHC forecasts and local authorities provide landfall and evacuation guidance." },
      { question: "Is Walter a hurricane?", answer: "Check the latest NHC advisory for Walter's current classification if the name is active." }
    ]
  }
];

export function getStormPageBySlug(slug: string | undefined) {
  return stormTrackerPages.find((storm) => storm.slug === slug);
}
