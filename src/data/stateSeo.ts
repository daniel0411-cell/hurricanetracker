import type { CoastalState } from "./states";

export type StateSeoProfile = {
  title: string;
  description: string;
  headline: string;
  queryFocus: string[];
};

const profiles: Record<string, Omit<StateSeoProfile, "title" | "headline"> & { titleTail: string; headlineTail: string }> = {
  florida: {
    titleTail: "Live NHC Track, NWS Alerts, Evacuation Zones",
    headlineTail: "Live NHC Track, Alerts, and Evacuation Zones",
    description:
      "Track Florida hurricanes with live NHC context, NWS alerts, storm surge and evacuation-zone planning, plus Miami, Tampa, Fort Myers, Naples, and Sarasota city trackers.",
    queryFocus: ["florida hurricane tracker", "hurricane tracker florida", "fl hurricane tracker", "florida hurricane alerts"]
  },
  texas: {
    titleTail: "Live Gulf Track, NWS Alerts, Evacuation Routes",
    headlineTail: "Live Gulf Track, Alerts, and Evacuation Routes",
    description:
      "Track Texas hurricanes with live NHC context, NWS alerts, Gulf surge and flooding risk, evacuation-route planning, and Houston, Galveston, Corpus Christi, and Brownsville trackers.",
    queryFocus: ["hurricane tracker texas", "texas hurricane tracker", "texas hurricane alerts", "gulf hurricane tracker texas"]
  },
  "north-carolina": {
    titleTail: "Live Outer Banks Track, NWS Alerts, Evacuation Zones",
    headlineTail: "Live Outer Banks Track, Alerts, and Evacuation Zones",
    description:
      "Track North Carolina hurricanes with live NHC context, NWS alerts, Outer Banks access risk, sound-side flooding, evacuation-zone planning, and Wilmington and Morehead City trackers.",
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
    titleTail: "Live Gulf Track, NWS Alerts, New Orleans Risk",
    headlineTail: "Live Gulf Track, Alerts, and New Orleans Risk",
    description:
      "Track Louisiana hurricanes with live NHC context, NWS alerts, storm surge and levee risk, low-lying evacuation routes, and New Orleans, Baton Rouge, and Lake Charles trackers.",
    queryFocus: ["louisiana hurricane tracker", "hurricane tracker louisiana", "new orleans hurricane tracker", "louisiana hurricane alerts"]
  },
  "south-carolina": {
    titleTail: "Live NHC Track, NWS Alerts, Charleston and Myrtle Beach Risk",
    headlineTail: "Live NHC Track, Alerts, Charleston, and Myrtle Beach Risk",
    description:
      "Track South Carolina hurricanes with live NHC context, NWS alerts, Charleston and Myrtle Beach city trackers, Lowcountry surge risk, and evacuation-zone planning.",
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
    titleTail: "Live NHC Track, NWS Alerts, Hampton Roads Risk",
    headlineTail: "Live NHC Track, Alerts, and Hampton Roads Risk",
    description:
      "Track Virginia hurricanes with live NHC context, NWS alerts, Chesapeake Bay flooding, Hampton Roads bridge and tunnel constraints, and Virginia Beach and Norfolk trackers.",
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
