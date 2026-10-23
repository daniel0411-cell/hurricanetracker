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
    intent: "Maps and forecasts",
    description:
      "Check where a storm is, where it may go, and how official forecasts compare with radar and satellite imagery.",
    primaryHref: "/hurricane-tracker/live/",
    links: compact([
      topicLink("live-tracker"),
      topicLink("map"),
      topicLink("path"),
      topicLink("hurricane-landfall-forecast"),
      topicLink("tropical-storm-vs-hurricane"),
      topicLink("hurricane-categories"),
      topicLink("spaghetti-models"),
      topicLink("why-hurricane-forecasts-change"),
      topicLink("nhc-hurricane-basins-and-names"),
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
    intent: "Local safety and evacuation",
    description:
      "Find city and state resources, storm surge alerts, evacuation zones, and local instructions for your address.",
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
    intent: "Household planning",
    description:
      "Prepare supplies, documents, communication plans, and outage arrangements before conditions deteriorate.",
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
      blogLink("hurricane-medical-needs-registry-preparedness"),
      blogLink("apartment-hurricane-preparedness-renters-checklist"),
      blogLink("hurricane-school-daycare-emergency-plan"),
      blogLink("hurricane-small-business-preparedness-plan")
    ])
  },
  {
    id: "alerts",
    title: "Warnings, Watches, and Official Alert Language",
    intent: "Official warnings and next steps",
    description:
      "Understand an official watch, warning, advisory, or evacuation instruction and identify the next protective action.",
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
    intent: "Insurance and recovery",
    description:
      "Document damage, review flood insurance, and plan safe power restoration, cleanup, and recovery.",
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
