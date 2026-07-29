import type { APIRoute } from "astro";
import { blogPosts } from "../data/blog";
import { site } from "../data/site";
import { coastalStates } from "../data/states";

const routes = [
  "",
  "tracker/",
  "alerts/",
  "preparedness/",
  "tools/",
  "tools/preparedness-checklist/",
  "tools/evacuation-decision-helper/",
  ...coastalStates.map((state) => `hurricane-tracker/${state.slug}/`),
  "blog/",
  ...blogPosts.map((post) => `blog/${post.slug}/`),
  "about/"
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${site.url}/${route}</loc><changefreq>hourly</changefreq><priority>${route ? "0.8" : "1.0"}</priority></url>`).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" }
  });
};
