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
  }
];

export function getStormPageBySlug(slug: string | undefined) {
  return stormTrackerPages.find((storm) => storm.slug === slug);
}
