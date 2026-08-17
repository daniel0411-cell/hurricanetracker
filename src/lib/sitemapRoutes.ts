import { BLOG_CATEGORY_PAGES, blogPosts } from "../data/blog";
import { hurricaneCities } from "../data/cities";
import { site } from "../data/site";
import { coastalStates } from "../data/states";
import { stormTrackerPages } from "../data/stormPages";
import { topicPages } from "../data/topicPages";

export type SitemapSection = "pages" | "blog" | "tools" | "locations";

export type SitemapRoute = {
  path: string;
  lastmod: string;
  priority: string;
  changefreq?: string;
  section: SitemapSection;
};

const updated = site.contentLastModified;
const blogLastMod = "2026-08-17";

const pageRoutes: SitemapRoute[] = [
  { path: "", lastmod: updated, priority: "1.0", changefreq: "daily", section: "pages" },
  { path: "tracker/", lastmod: updated, priority: "0.8", changefreq: "daily", section: "pages" },
  { path: "hurricane-tracker/live/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "pages" },
  { path: "radar/", lastmod: updated, priority: "0.8", changefreq: "daily", section: "pages" },
  { path: "alerts/", lastmod: updated, priority: "0.8", changefreq: "daily", section: "pages" },
  { path: "learn/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "pages" },
  { path: "preparedness/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "pages" },
  { path: "compare/", lastmod: updated, priority: "0.7", changefreq: "weekly", section: "pages" },
  { path: "newsletter/", lastmod: updated, priority: "0.5", changefreq: "monthly", section: "pages" },
  { path: "site-map/", lastmod: updated, priority: "0.6", changefreq: "weekly", section: "pages" },
  { path: "updates/", lastmod: updated, priority: "0.7", changefreq: "daily", section: "pages" },
  { path: "storm-archive/", lastmod: updated, priority: "0.7", changefreq: "daily", section: "pages" },
  { path: "decision-guide/", lastmod: blogLastMod, priority: "0.8", changefreq: "monthly", section: "pages" },
  { path: "about/", lastmod: updated, priority: "0.8", changefreq: "monthly", section: "pages" },
  ...topicPages.map((page) => ({ path: `hurricane-tracker/${page.slug}/`, lastmod: updated, priority: "0.8", changefreq: "weekly", section: "pages" as const }))
];

const toolRoutes: SitemapRoute[] = [
  { path: "tools/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" },
  { path: "tools/my-hurricane-dashboard/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "tools" },
  { path: "tools/impact-window-estimator/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "tools" },
  { path: "tools/local-risk-plan/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "tools" },
  { path: "tools/preparedness-checklist/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" },
  { path: "tools/evacuation-decision-helper/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" },
  { path: "tools/hurricane-brief/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "tools" },
  { path: "tools/power-outage-planner/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" },
  { path: "tools/storm-distance-calculator/", lastmod: updated, priority: "0.8", changefreq: "daily", section: "tools" },
  { path: "tools/alert-action-decoder/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" },
  { path: "tools/storm-surge-checker/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "tools" },
  { path: "tools/family-communication-plan/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "tools" }
];

const locationRoutes: SitemapRoute[] = [
  ...coastalStates.map((state) => ({ path: `tracker/${state.slug}/`, lastmod: updated, priority: "0.9", changefreq: "hourly", section: "locations" as const })),
  { path: "hurricane-tracker/city/", lastmod: updated, priority: "0.8", changefreq: "weekly", section: "locations" },
  ...hurricaneCities.map((city) => ({ path: `hurricane-tracker/city/${city.slug}/`, lastmod: updated, priority: "0.8", changefreq: "daily", section: "locations" as const })),
  { path: "hurricane-tracker/storm/", lastmod: updated, priority: "0.8", changefreq: "daily", section: "locations" },
  ...stormTrackerPages.map((storm) => ({ path: `hurricane-tracker/storm/${storm.slug}/`, lastmod: updated, priority: "0.8", changefreq: "daily", section: "locations" as const }))
];

const blogRoutes: SitemapRoute[] = [
  { path: "blog/", lastmod: blogLastMod, priority: "0.8", changefreq: "weekly", section: "blog" },
  ...BLOG_CATEGORY_PAGES.map((category) => ({ path: `blog/category/${category.slug}/`, lastmod: updated, priority: "0.7", changefreq: "weekly", section: "blog" as const })),
  ...blogPosts.map((post) => ({ path: `blog/${post.slug}/`, lastmod: new Date(post.dateModified).toISOString(), priority: "0.7", changefreq: "weekly", section: "blog" as const })),
  { path: "blog/hurricane-watch-vs-warning/", lastmod: blogLastMod, priority: "0.7", changefreq: "weekly", section: "blog" },
  { path: "blog/flood-advisory-vs-watch-vs-warning/", lastmod: blogLastMod, priority: "0.7", changefreq: "weekly", section: "blog" },
  { path: "blog/rip-current-statement-gulf-coast/", lastmod: blogLastMod, priority: "0.7", changefreq: "weekly", section: "blog" }
];

export const sitemapRoutes: SitemapRoute[] = [...pageRoutes, ...toolRoutes, ...locationRoutes, ...blogRoutes]
  .filter((route) => !route.path.startsWith("api/") && !route.path.startsWith("admin/"));

export function routesBySection(section: SitemapSection) {
  return sitemapRoutes.filter((route) => route.section === section);
}

export function renderUrlset(routes: SitemapRoute[]) {
  const urls = routes.map((route) => `  <url><loc>${site.url}/${route.path}</loc><lastmod>${route.lastmod}</lastmod><changefreq>${route.changefreq ?? "weekly"}</changefreq><priority>${route.priority}</priority></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}
