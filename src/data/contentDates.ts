import { topicPages } from "./topicPages";

// Editorial revisions only. Feed fetch times and advisory issue times belong to their products.
const revisions: Record<string, string> = {
  "hurricane-tracker/hurricane-landfall-forecast/": "2026-11-10T00:00:00.000Z",
  "hurricane-tracker/tropical-storm-vs-hurricane/": "2026-11-10T00:00:00.000Z",
  "hurricane-tracker/after-hurricane/": "2026-11-10T00:00:00.000Z",
  "hurricane-tracker/path/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/tropical-disturbances/": "2026-11-09T00:00:00.000Z",
  "hurricane-tracker/hurricane-categories/": "2026-11-10T00:00:00.000Z",
  "2026-hurricane-season/": "2026-11-09T00:00:00.000Z",
  "newsletter/": "2026-11-09T00:00:00.000Z",
  "privacy/": "2026-11-09T00:00:00.000Z",
  "hurricane-tracker/radar/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/live-tracker/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/city/charleston/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/city/wilmington/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/city/port-charlotte/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/why-hurricane-forecasts-change/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/evacuation-zones/": "2026-11-06T00:00:00.000Z",
  "hurricane-tracker/spaghetti-models/": "2026-11-05T00:00:00.000Z",
  "blog/hurricane-eyewall-replacement-cycle-explained/": "2026-11-05T00:00:00.000Z",
  "": "2026-11-10T00:00:00.000Z",
  "blog/": "2026-11-04T00:00:00.000Z",
  "updates/": "2026-11-04T00:00:00.000Z",
  "learn/": "2026-11-04T00:00:00.000Z",
  "preparedness/": "2026-11-04T00:00:00.000Z",
  "compare/": "2026-11-04T00:00:00.000Z",
  "decision-guide/": "2026-11-04T00:00:00.000Z",
  "site-map/": "2026-11-04T00:00:00.000Z",
  "storm-archive/": "2026-11-04T00:00:00.000Z",
  "tools/": "2026-11-06T00:00:00.000Z",
  "tools/local-risk-plan/": "2026-11-04T00:00:00.000Z",
  "tools/impact-window-estimator/": "2026-11-04T00:00:00.000Z",
  "tools/hurricane-brief/": "2026-11-04T00:00:00.000Z",
  "tools/my-hurricane-dashboard/": "2026-11-04T00:00:00.000Z",
  "tools/alert-action-decoder/": "2026-11-04T00:00:00.000Z",
  "tools/preparedness-checklist/": "2026-11-04T00:00:00.000Z",
  "tools/storm-surge-checker/": "2026-11-04T00:00:00.000Z"
};

export function contentModifiedFor(pathOrUrl: string, fallback: string) {
  const path = new URL(pathOrUrl, "https://www.hurricanetracker.cc/").pathname.replace(/^\//, "");
  const isCityGuide = /^hurricane-tracker\/city\/.+/.test(path);
  if (revisions[path] && !isCityGuide) return revisions[path];
  // These templates received material action, status, reading, or local-resource revisions.
  const templateRevision = /^tracker\//.test(path)
    || /^hurricane-tracker\/(city|storm)\/.+/.test(path)
    || ["hurricane-tracker/live/", "hurricane-tracker/storm/"].includes(path)
    || topicPages.some((page) => path === `hurricane-tracker/${page.slug}/`)
    || /^blog\/category\/[^/]+\/$/.test(path) ? "2026-11-04T00:00:00.000Z" : undefined;
  if (!isCityGuide) return templateRevision ?? fallback;
  // A material template revision must not hide a later page-specific revision.
  const timestamps = [fallback, revisions[path], templateRevision].filter((date): date is string => Boolean(date)).map(Date.parse).filter(Number.isFinite);
  return timestamps.length ? new Date(Math.max(...timestamps)).toISOString() : fallback;
}
