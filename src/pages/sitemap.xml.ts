import type { APIRoute } from "astro";
import { blogPosts } from "../data/blog";
import { hurricaneCities } from "../data/cities";
import { site } from "../data/site";
import { coastalStates } from "../data/states";

export const prerender = true;

const updated = site.contentLastModified;
const routes = [
  { path: "", lastmod: updated, priority: "1.0", changefreq: "daily" },
  { path: "tracker/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  { path: "radar/", lastmod: updated, priority: "0.8", changefreq: "daily" },
  { path: "alerts/", lastmod: updated, priority: "0.8", changefreq: "daily" },
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
  { path: "tools/family-communication-plan/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  ...coastalStates.map((state) => ({ path: `hurricane-tracker/${state.slug}/`, lastmod: updated, priority: "0.8", changefreq: "daily" })),
  ...hurricaneCities.map((city) => ({ path: `hurricane-tracker/city/${city.slug}/`, lastmod: updated, priority: "0.8", changefreq: "daily" })),
  { path: "storm-archive/", lastmod: updated, priority: "0.7", changefreq: "daily" },
  { path: "blog/", lastmod: updated, priority: "0.8", changefreq: "weekly" },
  ...blogPosts.map((post) => ({ path: `blog/${post.slug}/`, lastmod: new Date(post.dateModified).toISOString(), priority: "0.8", changefreq: "monthly" })),
  { path: "about/", lastmod: updated, priority: "0.8", changefreq: "monthly" }
];

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
