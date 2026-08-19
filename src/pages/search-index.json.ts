export const prerender = true;

import type { APIRoute } from "astro";
import { BLOG_CATEGORY_PAGES, blogPosts } from "../data/blog";
import { hurricaneCities } from "../data/cities";
import { getStateSeoProfile } from "../data/stateSeo";
import { coastalStates } from "../data/states";
import { stormTrackerPages } from "../data/stormPages";
import { topicPages } from "../data/topicPages";

type Entry = {
  title: string;
  url: string;
  description: string;
  category: string;
  body: string;
};

function cleanText(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const truncated = normalized.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(" ");
  const safeText = lastSpace > 40 ? truncated.slice(0, lastSpace) : truncated;
  return `${safeText.trim()}…`;
}

// Static, hand-maintained pages (blog content is pulled from blogPosts below).
const pages: Entry[] = [
  { title: "HurricaneHub — North America Hurricane Tracker", url: "/", description: "Track active North American hurricanes, official NWS alerts, evacuation decision levels, and preparedness actions from NOAA, NHC, and NWS data.", category: "Home", body: "hurricane tracker live radar alerts preparedness decision evacuation north america noaa nhc nws" },
  { title: "Live Hurricane Tracker Map", url: "/hurricane-tracker/live/", description: "Track current hurricanes with active NHC storm positions, latest advisory times, radar and satellite views, forecast tracks, and local alerts.", category: "Tracker", body: "live current hurricane tracker map hurricanes right now nhc tracking map radar satellite advisory forecast track active alerts" },
  { title: "Tropical Disturbance Tracker", url: "/hurricane-tracker/tropical-disturbances/", description: "Monitor official NHC tropical outlook areas and disturbances before they become named storms.", category: "Tracker", body: "tropical disturbance tracker tropical outlook tropical storm formation gulf atlantic nhc" },
  { title: "Live Hurricane Tracker by State", url: "/tracker/", description: "Live hurricane tracking, NWS alerts, and evacuation decision guidance organized by US state.", category: "Tracker", body: "tracker state live hurricane warnings alerts evacuation" },
  { title: "Interactive Hurricane Radar", url: "/radar/", description: "Live radar, satellite, and NWS alert layers for North America with severe-weather overlays.", category: "Maps", body: "radar satellite rainviewer goes east noaa live weather map" },
  { title: "Standalone Radar Embed", url: "/embed/radar", description: "A self-contained hurricane radar view you can open full screen or embed.", category: "Maps", body: "radar embed standalone full screen" },
  { title: "Active NWS Alerts", url: "/alerts/", description: "Browse active National Weather Service hurricane and severe-weather alerts by state.", category: "Alerts", body: "alerts nws active warnings watch advisory state" },
  { title: "Hurricane Learning Center", url: "/learn/", description: "Learn how to read hurricane tracker maps, NHC cones, spaghetti models, storm surge forecasts, radar, satellite, and category charts.", category: "Learning", body: "learn hurricane tracker cone spaghetti models storm surge category radar satellite nhc map" },
  { title: "Hurricane Topics", url: "/topics/", description: "Browse HurricaneHub topic clusters for tracking, local evacuation risk, preparedness, alerts, storm surge, insurance, and recovery.", category: "Learning", body: "hurricane topics content clusters tracking local evacuation preparedness alerts storm surge insurance recovery" },
  { title: "Local Hurricane Risk", url: "/local-hurricane-risk/", description: "Check local hurricane risk by ZIP code, city, and state with NWS alerts, city trackers, storm surge checks, evacuation-zone guidance, and household tools.", category: "Tools", body: "local hurricane risk zip code city state nws alerts evacuation zones storm surge city tracker household planning" },
  { title: "Hurricane Preparedness Guide", url: "/preparedness/", description: "A complete hurricane preparedness guide: kits, plans, evacuation, and family communication.", category: "Preparedness", body: "preparedness guide kit plan evacuation family communication" },
  { title: "Compare Storms & Locations", url: "/compare/", description: "Compare hurricane positions, wind, and risk windows across multiple storms or locations.", category: "Tools", body: "compare storms locations wind risk" },
  { title: "Storm Archive", url: "/storm-archive/", description: "Past hurricane seasons and notable storms reference archive.", category: "Reference", body: "storm archive history past seasons" },
  { title: "Hurricane Readiness Newsletter", url: "/newsletter/", description: "Subscribe to low-volume hurricane readiness emails for preparedness timing, official-alert explainers, and evacuation-decision checklists.", category: "Newsletter", body: "newsletter hurricane readiness email preparedness alerts evacuation checklist live tracker" },
  { title: "HurricaneHub Site Map", url: "/site-map/", description: "Browse every major HurricaneHub page, including live trackers, state and city trackers, named storm pages, tools, learning guides, and blog resources.", category: "Reference", body: "site map directory hurricane tracker pages city state storm tools blog learning preparedness" },
  { title: "Latest HurricaneHub Updates", url: "/updates/", description: "Recent hurricane tracker updates, city pages, storm pages, tools, preparedness guides, and sitemap discovery sections.", category: "Reference", body: "latest updates recent hurricane tracker city storm tools blog sitemap discovery" },
  { title: "City Hurricane Trackers", url: "/hurricane-tracker/city/", description: "Browse city-level hurricane tracker pages for local storm surge, flooding, evacuation-route, outage, NWS alert, and NHC storm context.", category: "City Tracker", body: "city hurricane tracker local storm surge flooding evacuation route outage nws nhc" },
  { title: "Named Hurricane Trackers", url: "/hurricane-tracker/storm/", description: "Browse named hurricane tracker pages with live NHC status checks and official advisory links.", category: "Storm Tracker", body: "named hurricane tracker storm name live nhc advisory erin melissa" },
  { title: "Evacuation Decision Guide", url: "/decision-guide/", description: "A step-by-step evacuation decision guide for people in the risk zone.", category: "Preparedness", body: "evacuation decision guide when to leave" },
  { title: "About HurricaneHub", url: "/about/", description: "About HurricaneHub, data sources, and methodology.", category: "About", body: "about data sources noaa nhc methodology" },
  { title: "Hurricane Tools", url: "/tools/", description: "Decision-support tools and search-intent paths for live tracking, radar, evacuation zones, storm surge, preparedness checklists, and household plans.", category: "Tools", body: "tools checklist calculator planner live tracker radar evacuation zones storm surge preparedness checklist household decision path" },
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
  title: cleanText(p.title, 90),
  url: `/blog/${p.slug}/`,
  description: cleanText(p.description, 220),
  category: "Blog",
  body: [
    p.description,
    ...(p.sections ?? []).map((s) => `${s.heading} ${s.body} ${(s.bullets ?? []).join(" ")}`)
  ].join(" ")
}));

const blogCategoryEntries: Entry[] = BLOG_CATEGORY_PAGES.map((category) => ({
  title: category.title,
  url: `/blog/category/${category.slug}/`,
  description: category.description,
  category: "Blog",
  body: [category.name, category.intent, category.description, category.actionLabel].join(" ")
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

const topicEntries: Entry[] = topicPages.map((page) => ({
  title: page.title,
  url: `/hurricane-tracker/${page.slug}/`,
  description: page.description,
  category: "Tracker",
  body: [
    page.intent,
    page.intro,
    page.steps.map((step) => `${step.title} ${step.body}`).join(" "),
    page.sections.map((section) => `${section.title} ${section.body} ${section.bullets.join(" ")}`).join(" "),
    page.faqs.map((faq) => `${faq.question} ${faq.answer}`).join(" ")
  ].join(" ")
}));

const stateEntries: Entry[] = coastalStates.map((state) => {
  const seo = getStateSeoProfile(state);
  return {
    title: `${state.name} Hurricane Tracker`,
    url: `/tracker/${state.slug}/`,
    description: seo.description,
    category: "Tracker",
    body: [state.name, state.code, state.region, state.risks.join(" "), state.counties.join(" "), state.preparednessNote, seo.queryFocus.join(" ")].join(" ")
  };
});

const entries: Entry[] = [...pages, ...stateEntries, ...topicEntries, ...cityEntries, ...stormEntries, ...blogCategoryEntries, ...blogEntries];

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ entries }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
