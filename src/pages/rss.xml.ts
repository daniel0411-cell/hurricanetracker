import type { APIRoute } from "astro";
import { blogPosts } from "../data/blog";
import { hurricaneCities } from "../data/cities";
import { site } from "../data/site";
import { stormTrackerPages } from "../data/stormPages";

export const prerender = true;

type FeedItem = {
  title: string;
  url: string;
  description: string;
  date: string;
};

function escapeXml(value: string): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
  const coreItems: FeedItem[] = [
    {
      title: "Live Hurricane Tracker Map",
      url: `${site.url}/hurricane-tracker/live/`,
      description: "Live NHC storm checks, radar shortcuts, active alerts, city pages, and household decision tools.",
      date: site.contentLastModified
    },
    {
      title: "City Hurricane Trackers",
      url: `${site.url}/hurricane-tracker/city/`,
      description: "Local hurricane tracker pages for coastal cities with storm surge, flooding, evacuation-route, outage, NWS alert, and NHC storm context.",
      date: site.contentLastModified
    },
    {
      title: "Hurricane Tools",
      url: `${site.url}/tools/`,
      description: "Decision-support tools for hurricane checklists, evacuation planning, outage preparation, storm distance, surge alerts, and local risk planning.",
      date: site.contentLastModified
    },
    {
      title: "Hurricane Radar",
      url: `${site.url}/radar/`,
      description: "Live hurricane radar, satellite, storm markers, alert overlays, and map-to-action guidance.",
      date: site.contentLastModified
    },
    {
      title: "Active NWS Alerts",
      url: `${site.url}/alerts/`,
      description: "Active National Weather Service alerts by state with plain-language action guidance.",
      date: site.contentLastModified
    },
    {
      title: "Hurricane Learning Center",
      url: `${site.url}/learn/`,
      description: "Plain-language hurricane lessons about tracker maps, cones, spaghetti models, storm surge, radar, satellite, and categories.",
      date: site.contentLastModified
    }
  ];

  const cityItems: FeedItem[] = hurricaneCities.map((city) => ({
    title: `${city.name} Hurricane Tracker`,
    url: `${site.url}/hurricane-tracker/city/${city.slug}/`,
    description: city.planningNote,
    date: site.contentLastModified
  }));

  const stormItems: FeedItem[] = stormTrackerPages.map((storm) => ({
    title: `Hurricane ${storm.name} Tracker`,
    url: `${site.url}/hurricane-tracker/storm/${storm.slug}/`,
    description: storm.searchDemandNote,
    date: site.contentLastModified
  }));

  const blogItems: FeedItem[] = blogPosts.map((post) => ({
    title: post.title,
    url: `${site.url}/blog/${post.slug}/`,
    description: post.description,
    date: post.dateModified || post.datePublished
  }));

  const feedItems = [...coreItems, ...cityItems, ...stormItems, ...blogItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const items = feedItems
    .map((item) => {
      const pubDate = new Date(item.date).toUTCString();
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} Updates</title>
    <link>${site.url}/</link>
    <description>${escapeXml(`${site.description} Latest hurricane tracker pages, tools, city guides, and preparedness articles.`)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
};
