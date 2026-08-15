import type { APIRoute } from "astro";
import { BLOG_CATEGORY_PAGES, blogPosts } from "../data/blog";
import { hurricaneCities } from "../data/cities";
import { site } from "../data/site";
import { coastalStates } from "../data/states";
import { stormTrackerPages } from "../data/stormPages";

export const prerender = true;

// Sitemap priorities/changefreq per section (SEO batch):
//  home daily/1.0 · state pages hourly/0.9 · blog weekly/0.7 · decision-guide monthly/0.8
//  Excludes /api/* and /admin/* (never added to the route list below).
const updated = site.contentLastModified;
const blogLastMod = "2026-08-10";

const routes = [
  { path: "", lastmod: updated, priority: "1.0", changefreq: "daily" },
  { path: "tracker/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  { path: "hurricane-tracker/live/", lastmod: updated, priority: "0.9", changefreq: "daily" },
  { path: "radar/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  { path: "alerts/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  { path: "learn/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "preparedness/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "tools/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "tools/my-hurricane-dashboard/", lastmod: updated, priority: "0.9", changefreq: "daily" },
  { path: "tools/impact-window-estimator/", lastmod: updated, priority: "0.9", changefreq: "daily" },
  { path: "tools/local-risk-plan/", lastmod: updated, priority: "0.9", changefreq: "daily" },
  { path: "tools/preparedness-checklist/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "tools/evacuation-decision-helper/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "tools/hurricane-brief/", lastmod: updated, priority: "0.9", changefreq: "daily" },
  { path: "tools/power-outage-planner/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "tools/storm-distance-calculator/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  { path: "tools/alert-action-decoder/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "tools/storm-surge-checker/", lastmod: updated, priority: "0.9", changefreq: "daily" },
  { path: "tools/family-communication-plan/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  { path: "compare/", lastmod: updated, priority: "0.7", changefreq: "weekly" },
  { path: "newsletter/", lastmod: updated, priority: "0.5", changefreq: "monthly" },
  { path: "site-map/", lastmod: updated, priority: "0.6", changefreq: "weekly" },
  ...coastalStates.map((state) => ({ path: `tracker/${state.slug}/`, lastmod: updated, priority: "0.9", changefreq: "hourly" })),
  { path: "hurricane-tracker/city/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  ...hurricaneCities.map((city) => ({ path: `hurricane-tracker/city/${city.slug}/`, lastmod: updated, priority: "0.8", changefreq: "daily" })),
  { path: "hurricane-tracker/storm/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  ...stormTrackerPages.map((storm) => ({ path: `hurricane-tracker/storm/${storm.slug}/`, lastmod: updated, priority: "0.8", changefreq: "daily" })),
  { path: "storm-archive/", lastmod: updated, priority: "0.7", changefreq: "daily" },
  { path: "blog/", lastmod: blogLastMod, priority: "0.8", changefreq: "weekly" },
  ...BLOG_CATEGORY_PAGES.map((category) => ({ path: `blog/category/${category.slug}/`, lastmod: updated, priority: "0.7", changefreq: "weekly" })),
  ...blogPosts.map((post) => ({ path: `blog/${post.slug}/`, lastmod: new Date(post.dateModified).toISOString(), priority: "0.7", changefreq: "weekly" })),
  { path: "blog/hurricane-watch-vs-warning/", lastmod: blogLastMod, priority: "0.7", changefreq: "weekly" },
  { path: "blog/flood-advisory-vs-watch-vs-warning/", lastmod: blogLastMod, priority: "0.7", changefreq: "weekly" },
  { path: "blog/rip-current-statement-gulf-coast/", lastmod: blogLastMod, priority: "0.7", changefreq: "weekly" },
  { path: "decision-guide/", lastmod: blogLastMod, priority: "0.8", changefreq: "monthly" },
  { path: "about/", lastmod: updated, priority: "0.8", changefreq: "monthly" }
].filter((route) => !route.path.startsWith("api/") && !route.path.startsWith("admin/"));

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${site.url}/${route.path}</loc><lastmod>${route.lastmod}</lastmod><changefreq>${route.changefreq ?? "weekly"}</changefreq><priority>${route.priority}</priority></url>`).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
};
