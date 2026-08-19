import type { CoastalState } from "./states";

export type StateSeoProfile = {
  title: string;
  description: string;
  headline: string;
  queryFocus: string[];
};

const profiles: Record<string, Omit<StateSeoProfile, "title" | "headline"> & { titleTail: string; headlineTail: string }> = {
  florida: {
    titleTail: "Is a Hurricane Coming? Live NHC & NWS Alerts",
    headlineTail: "Live NHC Track, Alerts, and Evacuation Zones",
    description:
      "Is there a hurricane coming to Florida? Check today's live NHC track, nearby storm path, NWS alerts, evacuation zones, Orlando, Miami, Tampa, and Gulf Coast updates.",
    queryFocus: ["florida hurricane tracker", "hurricane tracker florida", "fl hurricane tracker", "florida hurricane alerts"]
  },
  texas: {
    titleTail: "Today | Live NHC Track & Texas Alerts",
    headlineTail: "Live Gulf Track, Alerts, and Evacuation Routes",
    description:
      "Is a hurricane coming to Texas? Check today's live NHC track, nearest active storm, Texas NWS alerts, Gulf flooding risk, and Houston and Galveston trackers.",
    queryFocus: ["hurricane tracker texas", "texas hurricane tracker", "texas hurricane alerts", "gulf hurricane tracker texas"]
  },
  "north-carolina": {
    titleTail: "Today | Live NHC & NWS Updates",
    headlineTail: "Live Outer Banks Track, Alerts, and Evacuation Zones",
    description:
      "Is a hurricane near North Carolina today? Check the live NHC track, nearest active storm, NWS alerts, Outer Banks risk, and Wilmington and Morehead City updates.",
    queryFocus: ["hurricane tracker north carolina", "hurricane nc tracker", "hurricane tracker nc", "north carolina hurricane tracker"]
  },
  georgia: {
    titleTail: "Live NHC Track, NWS Alerts, Savannah and Brunswick Risk",
    headlineTail: "Live NHC Track, Alerts, Savannah, and Brunswick Risk",
    description:
      "Track Georgia hurricanes with live NHC context, NWS alerts, Savannah and Brunswick city trackers, coastal flooding, river flooding, tree damage, and evacuation-zone planning.",
    queryFocus: ["hurricane tracker georgia", "georgia hurricane tracker", "georgia hurricane alerts", "savannah hurricane tracker"]
  },
  louisiana: {
    titleTail: "Today | Live NHC Track & Alerts",
    headlineTail: "Live Gulf Track, Alerts, and New Orleans Risk",
    description:
      "Check Louisiana hurricanes today with the live NHC track, nearest active storm, NWS alerts, Gulf surge risk, and New Orleans, Baton Rouge, and Lake Charles updates.",
    queryFocus: ["louisiana hurricane tracker", "hurricane tracker louisiana", "new orleans hurricane tracker", "louisiana hurricane alerts"]
  },
  "south-carolina": {
    titleTail: "Today | Live NHC & NWS Updates",
    headlineTail: "Live NHC Track, Alerts, Charleston, and Myrtle Beach Risk",
    description:
      "Is a hurricane near South Carolina today? Check the live NHC track, nearest active storm, NWS alerts, Lowcountry risk, Charleston, and Myrtle Beach updates.",
    queryFocus: ["south carolina hurricane tracker", "hurricane tracker south carolina", "charleston hurricane tracker", "myrtle beach hurricane tracker"]
  },
  alabama: {
    titleTail: "Live Gulf Track, NWS Alerts, Mobile Bay Risk",
    headlineTail: "Live Gulf Track, Alerts, and Mobile Bay Risk",
    description:
      "Track Alabama hurricanes with live NHC context, NWS alerts, Mobile Bay surge risk, Gulf Shores and Mobile city trackers, tornado alerts, flooding, and outage planning.",
    queryFocus: ["alabama hurricane tracker", "hurricane tracker alabama", "hurricane al", "mobile hurricane tracker"]
  },
  mississippi: {
    titleTail: "Live Gulf Track, NWS Alerts, Gulfport and Biloxi Risk",
    headlineTail: "Live Gulf Track, Alerts, Gulfport, and Biloxi Risk",
    description:
      "Track Mississippi hurricanes with live NHC context, NWS alerts, Gulfport and Biloxi city trackers, coastal surge, river flooding, mobile home risk, and outage planning.",
    queryFocus: ["hurricane tracker mississippi", "mississippi hurricane tracker", "gulfport hurricane tracker", "biloxi hurricane tracker"]
  },
  virginia: {
    titleTail: "Today | Live NHC & NWS Updates",
    headlineTail: "Live NHC Track, Alerts, and Hampton Roads Risk",
    description:
      "Is a hurricane near Virginia today? Check the live NHC track, nearest active storm, NWS alerts, Chesapeake Bay risk, Virginia Beach, and Norfolk updates.",
    queryFocus: ["virginia hurricane tracker", "hurricane tracker virginia", "hampton roads hurricane tracker", "virginia beach hurricane tracker"]
  }
};

export function getStateSeoProfile(state: CoastalState): StateSeoProfile {
  const profile = profiles[state.slug];
  if (!profile) {
    return {
      title: `${state.name} Hurricane Tracker | Live NHC Track and NWS Alerts`,
      headline: `${state.name} Hurricane Tracker | Live NHC Track and NWS Alerts`,
      description: `${state.name} hurricane tracker with live NHC context, NWS alerts, local risk, evacuation-zone planning, and city trackers.`,
      queryFocus: [`${state.name} hurricane tracker`, `hurricane tracker ${state.name}`]
    };
  }

  return {
    title: `${state.name} Hurricane Tracker | ${profile.titleTail}`,
    headline: `${state.name} Hurricane Tracker | ${profile.headlineTail}`,
    description: profile.description,
    queryFocus: profile.queryFocus
  };
}
