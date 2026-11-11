import type { APIRoute } from "astro";
import { renderUrlset, routesBySection, type SitemapRoute } from "../lib/sitemapRoutes";
import type { NhcStorm } from "../lib/weather";
import { getNhcCurrentFeed } from "../lib/nhcCurrent";
import { isStormFeedAvailable } from "../lib/weatherFeedStatus";

export const prerender = false;

export const GET: APIRoute = async () => {
  let activeRoutes: SitemapRoute[] = [];
  try {
    const { feed, cacheStatus } = await getNhcCurrentFeed();
    const lastmod = feed.updatedAt ?? feed.fetchedAt ?? new Date().toISOString();
    activeRoutes = (isStormFeedAvailable({ ...feed, cacheStatus }) ? feed.storms : []).filter((storm: NhcStorm) => storm.name).map((storm: NhcStorm) => ({
        path: `hurricane-tracker/storm/${String(storm.name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/`,
        lastmod: storm.lastUpdate ?? lastmod,
        priority: "0.9",
        changefreq: "hourly",
        section: "locations"
    }));
  } catch (error) {
    console.error("Dynamic storm sitemap feed failed", { error });
  }
  const routes = [...routesBySection("locations"), ...activeRoutes.filter((active) => !routesBySection("locations").some((route) => route.path === active.path))];
  return new Response(renderUrlset(routes), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=600"
    }
  });
};
