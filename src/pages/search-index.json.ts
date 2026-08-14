export const prerender = true;

import type { APIRoute } from "astro";
import { blogPosts } from "../data/blog";
import { hurricaneCities } from "../data/cities";
import { stormTrackerPages } from "../data/stormPages";

type Entry = {
  title: string;
  url: string;
  description: string;
  category: string;
  body: string;
};

// Static, hand-maintained pages (blog content is pulled from blogPosts below).
const pages: Entry[] = [
  { title: "HurricaneHub — North America Hurricane Tracker", url: "/", description: "Track active North American hurricanes, official NWS alerts, evacuation decision levels, and preparedness actions from NOAA, NHC, and NWS data.", category: "Home", body: "hurricane tracker live radar alerts preparedness decision evacuation north america noaa nhc nws" },
  { title: "Live Hurricane Tracker Map", url: "/hurricane-tracker/live/", description: "Live hurricane tracker hub with NHC storm checks, radar shortcuts, active alerts, city pages, and decision tools.", category: "Tracker", body: "live hurricane tracker map nhc radar satellite active alerts city storm" },
  { title: "Live Hurricane Tracker by State", url: "/tracker/", description: "Live hurricane tracking, NWS alerts, and evacuation decision guidance organized by US state.", category: "Tracker", body: "tracker state live hurricane warnings alerts evacuation" },
  { title: "Florida Hurricane Tracker", url: "/tracker/florida/", description: "Florida live hurricane tracking, active NWS alerts, evacuation zones, and local risk guidance.", category: "Tracker", body: "florida hurricane tracker miami tampa orlando alerts evacuation" },
  { title: "Texas Hurricane Tracker", url: "/tracker/texas/", description: "Texas live hurricane tracking, active NWS alerts, and evacuation decision guidance for the Gulf coast.", category: "Tracker", body: "texas hurricane tracker houston galveston alerts evacuation" },
  { title: "Louisiana Hurricane Tracker", url: "/tracker/louisiana/", description: "Louisiana live hurricane tracking, active NWS alerts, and evacuation guidance for New Orleans and the coast.", category: "Tracker", body: "louisiana hurricane tracker new orleans alerts evacuation" },
  { title: "North Carolina Hurricane Tracker", url: "/tracker/north-carolina/", description: "North Carolina live hurricane tracking, active NWS alerts, and evacuation guidance for the coast.", category: "Tracker", body: "north carolina hurricane tracker alerts evacuation outer banks" },
  { title: "South Carolina Hurricane Tracker", url: "/tracker/south-carolina/", description: "South Carolina live hurricane tracking, active NWS alerts, and evacuation guidance for Charleston and the coast.", category: "Tracker", body: "south carolina hurricane tracker charleston alerts evacuation" },
  { title: "Georgia Hurricane Tracker", url: "/tracker/georgia/", description: "Georgia live hurricane tracking, active NWS alerts, and coastal evacuation guidance.", category: "Tracker", body: "georgia hurricane tracker savannah alerts evacuation" },
  { title: "Alabama Hurricane Tracker", url: "/tracker/alabama/", description: "Alabama live hurricane tracking, active NWS alerts, and evacuation guidance for Mobile and the coast.", category: "Tracker", body: "alabama hurricane tracker mobile alerts evacuation" },
  { title: "Mississippi Hurricane Tracker", url: "/tracker/mississippi/", description: "Mississippi live hurricane tracking, active NWS alerts, and evacuation guidance for the Gulf coast.", category: "Tracker", body: "mississippi hurricane tracker gulfport alerts evacuation" },
  { title: "Virginia Hurricane Tracker", url: "/tracker/virginia/", description: "Virginia live hurricane tracking, active NWS alerts, and coastal evacuation guidance.", category: "Tracker", body: "virginia hurricane tracker hampton roads alerts evacuation" },
  { title: "Interactive Hurricane Radar", url: "/radar/", description: "Live radar, satellite, and NWS alert layers for North America with severe-weather overlays.", category: "Maps", body: "radar satellite rainviewer goes east noaa live weather map" },
  { title: "Standalone Radar Embed", url: "/embed/radar", description: "A self-contained hurricane radar view you can open full screen or embed.", category: "Maps", body: "radar embed standalone full screen" },
  { title: "Active NWS Alerts", url: "/alerts/", description: "Browse active National Weather Service hurricane and severe-weather alerts by state.", category: "Alerts", body: "alerts nws active warnings watch advisory state" },
  { title: "Hurricane Learning Center", url: "/learn/", description: "Learn how to read hurricane tracker maps, NHC cones, spaghetti models, storm surge forecasts, radar, satellite, and category charts.", category: "Learning", body: "learn hurricane tracker cone spaghetti models storm surge category radar satellite nhc map" },
  { title: "Hurricane Preparedness Guide", url: "/preparedness/", description: "A complete hurricane preparedness guide: kits, plans, evacuation, and family communication.", category: "Preparedness", body: "preparedness guide kit plan evacuation family communication" },
  { title: "Compare Storms & Locations", url: "/compare/", description: "Compare hurricane positions, wind, and risk windows across multiple storms or locations.", category: "Tools", body: "compare storms locations wind risk" },
  { title: "Storm Archive", url: "/storm-archive/", description: "Past hurricane seasons and notable storms reference archive.", category: "Reference", body: "storm archive history past seasons" },
  { title: "Hurricane Readiness Newsletter", url: "/newsletter/", description: "Subscribe to low-volume hurricane readiness emails for preparedness timing, official-alert explainers, and evacuation-decision checklists.", category: "Newsletter", body: "newsletter hurricane readiness email preparedness alerts evacuation checklist live tracker" },
  { title: "City Hurricane Trackers", url: "/hurricane-tracker/city/", description: "Browse city-level hurricane tracker pages for local storm surge, flooding, evacuation-route, outage, NWS alert, and NHC storm context.", category: "City Tracker", body: "city hurricane tracker local storm surge flooding evacuation route outage nws nhc" },
  { title: "Named Hurricane Trackers", url: "/hurricane-tracker/storm/", description: "Browse named hurricane tracker pages with live NHC status checks and official advisory links.", category: "Storm Tracker", body: "named hurricane tracker storm name live nhc advisory erin melissa" },
  { title: "Evacuation Decision Guide", url: "/decision-guide/", description: "A step-by-step evacuation decision guide for people in the risk zone.", category: "Preparedness", body: "evacuation decision guide when to leave" },
  { title: "About HurricaneHub", url: "/about/", description: "About HurricaneHub, data sources, and methodology.", category: "About", body: "about data sources noaa nhc methodology" },
  { title: "Hurricane Tools", url: "/tools/", description: "Decision-support tools: checklists, calculators, and planners for hurricane season.", category: "Tools", body: "tools checklist calculator planner" },
  { title: "My Hurricane Dashboard", url: "/tools/my-hurricane-dashboard/", description: "A personalized hurricane dashboard that tracks your saved locations and active threats.", category: "Tools", body: "dashboard saved locations threats watchlist" },
  { title: "Impact Window Estimator", url: "/tools/impact-window-estimator/", description: "Estimate the window of time before hurricane impacts reach your area.", category: "Tools", body: "impact window estimator time before landfall" },
  { title: "Local Risk Plan", url: "/tools/local-risk-plan/", description: "Build a localized hurricane risk plan from your address or ZIP code.", category: "Tools", body: "local risk plan address zip code" },
  { title: "Preparedness Checklist Generator", url: "/tools/preparedness-checklist/", description: "Generate a personalized hurricane preparedness checklist.", category: "Tools", body: "preparedness checklist generator supply kit" },
  { title: "Evacuation Decision Helper", url: "/tools/evacuation-decision-helper/", description: "Answer a few questions to clarify your evacuation decision.", category: "Tools", body: "evacuation decision helper should i leave" },
  { title: "Hurricane Brief", url: "/tools/hurricane-brief/", description: "Get a plain-language hurricane brief for your location.", category: "Tools", body: "brief plain language summary location" },
  { title: "Power Outage Planner", url: "/tools/power-outage-planner/", description: "Plan for power outages during and after a hurricane.", category: "Tools", body: "power outage planner generator food medicine" },
  { title: "Storm Distance Calculator", url: "/tools/storm-distance-calculator/", description: "Calculate the distance from a hurricane to your location.", category: "Tools", body: "storm distance calculator how far" },
  { title: "Alert Action Decoder", url: "/tools/alert-action-decoder/", description: "Decode what each NWS alert means and what to do.", category: "Tools", body: "alert action decoder meaning watch warning advisory" },
  { title: "Storm Surge ZIP Checker", url: "/tools/storm-surge-checker/", description: "Check whether a ZIP code is inside an active NWS storm surge watch or warning and review nearby hurricane alerts.", category: "Tools", body: "storm surge zip checker warning watch evacuation zone coastal flooding nws alerts" },
  { title: "Family Communication Plan", url: "/tools/family-communication-plan/", description: "Build a family communication plan for hurricane season.", category: "Tools", body: "family communication plan contacts meeting point" },
  { title: "Hurricane Blog", url: "/blog/", description: "Hurricane explainers, preparedness guides, and NOAA/NHC interpretations.", category: "Blog", body: "blog articles explainers guides" },
  { title: "Hurricane Watch vs Warning", url: "/blog/hurricane-watch-vs-warning/", description: "Understand the difference between hurricane watches and warnings, timing, and when to act.", category: "Blog", body: "hurricane watch warning difference timing prepare act nhc nws" },
  { title: "Flood Advisory vs Watch vs Warning", url: "/blog/flood-advisory-vs-watch-vs-warning/", description: "Understand flood advisory, flood watch, and flood warning language before hurricane rainfall affects your area.", category: "Blog", body: "flood advisory watch warning hurricane rainfall flash flooding nws" },
  { title: "Rip Current Statement for the Gulf Coast", url: "/blog/rip-current-statement-gulf-coast/", description: "Learn what a rip current statement means for Gulf Coast beach and surf safety during tropical weather.", category: "Blog", body: "rip current statement gulf coast surf beach tropical storm safety" }
];

const blogEntries: Entry[] = blogPosts.map((p) => ({
  title: p.title,
  url: `/blog/${p.slug}/`,
  description: p.description,
  category: "Blog",
  body: [
    p.description,
    ...(p.sections ?? []).map((s) => `${s.heading} ${s.body} ${(s.bullets ?? []).join(" ")}`)
  ].join(" ")
}));

const stormEntries: Entry[] = stormTrackerPages.map((storm) => ({
  title: `Hurricane ${storm.name} Tracker`,
  url: `/hurricane-tracker/storm/${storm.slug}/`,
  description: storm.searchDemandNote,
  category: "Storm Tracker",
  body: [storm.name, storm.basin, storm.primaryKeywords.join(" "), storm.trackerFocus.join(" ")].join(" ")
}));

const cityEntries: Entry[] = hurricaneCities.map((city) => ({
  title: `${city.name} Hurricane Tracker`,
  url: `/hurricane-tracker/city/${city.slug}/`,
  description: city.planningNote,
  category: "City Tracker",
  body: [
    city.name,
    city.stateName,
    city.region,
    city.risks.join(" "),
    city.nearbyCounties.join(" "),
    city.localSearches.join(" "),
    city.overview
  ].join(" ")
}));

const entries: Entry[] = [...pages, ...cityEntries, ...stormEntries, ...blogEntries];

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ entries }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
