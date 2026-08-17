import { blogPosts } from "./blog";
import { hurricaneCities } from "./cities";
import { coastalStates } from "./states";
import { topicPages } from "./topicPages";

type ClusterLink = {
  title: string;
  href: string;
  description: string;
};

export type ContentCluster = {
  id: string;
  title: string;
  intent: string;
  description: string;
  primaryHref: string;
  links: ClusterLink[];
};

function blogLink(slug: string): ClusterLink | null {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  return {
    title: post.title,
    href: `/blog/${post.slug}/`,
    description: post.description
  };
}

function cityLink(slug: string): ClusterLink | null {
  const city = hurricaneCities.find((item) => item.slug === slug);
  if (!city) return null;
  return {
    title: `${city.name} Hurricane Tracker`,
    href: `/hurricane-tracker/city/${city.slug}/`,
    description: city.planningNote
  };
}

function stateLink(slug: string): ClusterLink | null {
  const state = coastalStates.find((item) => item.slug === slug);
  if (!state) return null;
  return {
    title: `${state.name} Hurricane Tracker`,
    href: `/tracker/${state.slug}/`,
    description: state.preparednessNote
  };
}

function topicLink(slug: string): ClusterLink | null {
  const topic = topicPages.find((item) => item.slug === slug);
  if (!topic) return null;
  return {
    title: topic.title,
    href: `/hurricane-tracker/${topic.slug}/`,
    description: topic.description
  };
}

function compact(items: Array<ClusterLink | null>): ClusterLink[] {
  return items.filter((item): item is ClusterLink => Boolean(item));
}

export const contentClusters: ContentCluster[] = [
  {
    id: "tracking",
    title: "Hurricane Tracking and Map Reading",
    intent: "live hurricane tracker, hurricane tracker map, hurricane path tracker, radar, cone",
    description:
      "Use this cluster when the searcher wants to understand where a storm is, where it may go, and how to compare official forecast products with radar and satellite.",
    primaryHref: "/hurricane-tracker/live/",
    links: compact([
      topicLink("live-tracker"),
      topicLink("map"),
      topicLink("path"),
      topicLink("spaghetti-models"),
      topicLink("radar"),
      { title: "Live Hurricane Tracker Map", href: "/hurricane-tracker/live/", description: "Active storm checks, radar shortcuts, alerts, city pages, and decision tools." },
      { title: "Interactive Hurricane Radar", href: "/radar/", description: "Radar, satellite, wind, and alert map layers for tropical weather monitoring." },
      blogLink("real-time-hurricane-tracking-2026"),
      blogLink("how-to-read-the-hurricane-cone-of-uncertainty"),
      blogLink("how-to-read-hurricane-spaghetti-models"),
      blogLink("hurricane-radar-vs-satellite")
    ])
  },
  {
    id: "local-risk",
    title: "Local Hurricane Risk and Evacuation",
    intent: "hurricane evacuation zones, city hurricane tracker, storm surge map, local alerts",
    description:
      "Use this cluster when a searcher needs city, state, storm surge, evacuation-zone, and alert context for a real place.",
    primaryHref: "/hurricane-tracker/city/",
    links: compact([
      topicLink("evacuation-zones"),
      topicLink("storm-surge-map"),
      { title: "Local Hurricane Risk", href: "/local-hurricane-risk/", description: "ZIP, city, state, alert, storm surge, evacuation-zone, and household planning paths." },
      { title: "City Hurricane Trackers", href: "/hurricane-tracker/city/", description: "Local surge, flooding, route, outage, and evacuation planning pages." },
      stateLink("florida"),
      stateLink("texas"),
      cityLink("miami"),
      cityLink("tampa"),
      cityLink("houston"),
      cityLink("new-orleans"),
      { title: "Storm Surge ZIP Checker", href: "/tools/storm-surge-checker/", description: "Check active NWS storm surge watches and warnings near a ZIP code." },
      { title: "Evacuation Decision Helper", href: "/tools/evacuation-decision-helper/", description: "Turn orders, zone, housing, pets, transport, and medical needs into a planning level." }
    ])
  },
  {
    id: "preparedness",
    title: "Hurricane Preparedness and Household Planning",
    intent: "hurricane preparedness checklist, emergency kit, home preparation, family plan",
    description:
      "Use this cluster before a storm threatens or when a watch gives the household time to finish supplies, documents, communication, and outage planning.",
    primaryHref: "/preparedness/",
    links: compact([
      topicLink("preparedness-checklist"),
      { title: "Hurricane Preparedness Decision Matrix", href: "/preparedness/", description: "Monitor, Prepare, Act, and Leave levels tied to household actions." },
      { title: "Preparedness Checklist Generator", href: "/tools/preparedness-checklist/", description: "Generate a household hurricane kit checklist." },
      { title: "Family Communication Plan", href: "/tools/family-communication-plan/", description: "Build a contact, destination, pet, and medical-needs plan." },
      { title: "Power Outage Planner", href: "/tools/power-outage-planner/", description: "Plan for food, medicine, charging, generators, and communication during outages." },
      blogLink("hurricane-emergency-kit-checklist"),
      blogLink("hurricane-preparation-timeline-72-48-24-hours"),
      blogLink("hurricane-home-preparedness-room-by-room-checklist"),
      blogLink("hurricane-home-hardening-checklist"),
      blogLink("hurricane-pet-safety"),
      blogLink("hurricane-medical-needs-registry-preparedness")
    ])
  },
  {
    id: "alerts",
    title: "Warnings, Watches, and Official Alert Language",
    intent: "hurricane watch vs warning, NWS alerts, storm surge warning, flood warning",
    description:
      "Use this cluster when the searcher sees an official watch, warning, advisory, or evacuation phrase and needs a plain-language next step.",
    primaryHref: "/alerts/",
    links: compact([
      { title: "Active NWS Alerts", href: "/alerts/", description: "Browse active National Weather Service alerts by state." },
      { title: "Alert Action Decoder", href: "/tools/alert-action-decoder/", description: "Translate official alert language into planning prompts." },
      blogLink("what-hurricane-watch-warning-means"),
      blogLink("nws-hurricane-alert-meanings"),
      blogLink("storm-surge-warning-vs-hurricane-warning"),
      blogLink("flood-advisory-vs-watch-vs-warning"),
      blogLink("what-to-do-during-a-hurricane-warning")
    ])
  },
  {
    id: "recovery",
    title: "Flooding, Insurance, and Recovery After Landfall",
    intent: "hurricane flood insurance, insurance claim, cleanup, mold prevention",
    description:
      "Use this cluster when the immediate tracking question turns into property documentation, flood insurance, power, cleanup, and recovery planning.",
    primaryHref: "/blog/category/insurance-recovery/",
    links: compact([
      { title: "Insurance and Recovery Articles", href: "/blog/category/insurance-recovery/", description: "Guides for flood insurance, claims, documentation, cleanup, and recovery." },
      { title: "Power Outage Planner", href: "/tools/power-outage-planner/", description: "Plan for food safety, medicine, charging, and generator constraints." },
      blogLink("hurricane-flood-insurance-guide-nfip"),
      blogLink("hurricane-insurance-claim-guide-documentation"),
      blogLink("hurricane-contractor-scams-insurance-claim"),
      blogLink("hurricane-mold-prevention-after-flood"),
      blogLink("what-to-do-after-a-hurricane"),
      blogLink("hurricane-power-outage-food-medicine-plan")
    ])
  }
];
