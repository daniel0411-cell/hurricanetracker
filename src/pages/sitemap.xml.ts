import type { APIRoute } from "astro";
import { blogPosts } from "../data/blog";
import { site } from "../data/site";
import { coastalStates } from "../data/states";

export const prerender = true;

const updated = new Date().toISOString();
const routes = [
  { path: "", lastmod: updated, priority: "1.0" },
  { path: "tracker/", lastmod: updated, priority: "0.8" },
  { path: "alerts/", lastmod: updated, priority: "0.8" },
  { path: "preparedness/", lastmod: updated, priority: "0.8" },
  { path: "tools/", lastmod: updated, priority: "0.8" },
  { path: "tools/preparedness-checklist/", lastmod: updated, priority: "0.8" },
  { path: "tools/evacuation-decision-helper/", lastmod: updated, priority: "0.8" },
  ...coastalStates.map((state) => ({ path: `hurricane-tracker/${state.slug}/`, lastmod: updated, priority: "0.8" })),
  { path: "blog/", lastmod: updated, priority: "0.8" },
  ...blogPosts.map((post) => ({ path: `blog/${post.slug}/`, lastmod: new Date(post.dateModified).toISOString(), priority: "0.8" })),
  { path: "about/", lastmod: updated, priority: "0.8" }
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${site.url}/${route.path}</loc><lastmod>${route.lastmod}</lastmod><changefreq>daily</changefreq><priority>${route.priority}</priority></url>`).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
};
