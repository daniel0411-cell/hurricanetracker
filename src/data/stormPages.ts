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
    slug: "dolly",
    name: "Dolly",
    basin: "Atlantic",
    title: "Tropical Storm Dolly 2026 Tracker: NHC Path & Live Map",
    description: "Track Tropical Storm Dolly 2026 with the latest NHC position, forecast path, live map, advisory updates, radar, satellite and local alert links.",
    primaryKeywords: ["tropical storm dolly tracker", "hurricane dolly path", "dolly live tracker map", "where is storm dolly now"],
    searchDemandNote:
      "Use this page for Tropical Storm Dolly live tracker, path, map, current position, forecast, and NHC advisory update searches.",
    overview:
      "Use this Tropical Storm Dolly 2026 tracker for the latest NHC position, official advisory time, forecast path, radar, satellite imagery, and local-alert context. Live NHC data appears while Dolly is active; the page remains available afterward as a stable advisory and storm-history reference.",
    trackerFocus: [
      "Check Dolly's latest NHC position, movement, intensity, and advisory time before relying on an older map or screenshot.",
      "When Dolly is active, compare the official forecast track with radar, satellite, and the cone of uncertainty — never the center line alone.",
      "Pair any Dolly forecast with local NWS alerts and emergency management guidance before making evacuation or shelter decisions.",
      "Historical Dolly storms include 2008 (Hurricane Dolly, Category 1 landfall near South Padre Island, Texas, with heavy rain and surge) and 2014 (Tropical Storm Dolly, landfall near Tampico, Mexico). Each Dolly had a very different footprint, so the 2026 system should be assessed on its own data, not the name."
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
          "Past Dolly storms differ widely: 2008 Hurricane Dolly struck South Padre Island, Texas as a Category 1 with damaging surge and rainfall, while 2014 Tropical Storm Dolly made landfall near Tampico, Mexico, and 1996 Hurricane Dolly affected the western Gulf. The 2026 Dolly, if it forms, should be evaluated on its own NHC data rather than the name's history."
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
    title: "Tropical Storm Fay 2026 Tracker: NHC Path, Map & Updates",
    description: "Fay 2026 tracker with current NHC status, forecast path, live map, radar and advisory links. If inactive, review official outlook and history.",
    primaryKeywords: ["tropical storm fay tracker", "hurricane fay path", "fay live tracker map", "where is storm fay now"],
    searchDemandNote:
      "Fay is the sixth name on the 2026 Atlantic list. Because the name has produced memorable landfalling storms before, Fay tracker searches can arrive quickly once a system is named; this page is prepared in advance as a stable hub.",
    overview:
      "Use this Hurricane Fay tracker page as a standing hub for current NHC status, official advisory links, radar and satellite shortcuts, and local decision tools. The live status section confirms whether Fay is active; when it is not, use the official tropical outlook and historical context without inferring that a storm has formed.",
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
