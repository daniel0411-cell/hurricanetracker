export type StormTrackerPage = {
  slug: string;
  name: string;
  basin: string;
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
  }
];

export function getStormPageBySlug(slug: string | undefined) {
  return stormTrackerPages.find((storm) => storm.slug === slug);
}
