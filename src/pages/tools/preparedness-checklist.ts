import type { APIRoute } from "astro";
import { faqs, site } from "../../data/site";
import { articleSchema, faqSchema, graph, websiteSchema } from "../../lib/schema";

const pageFaqs = [
  {
    question: "What should I put in a hurricane emergency kit?",
    answer:
      "Put water, shelf-stable food, medications, first aid, flashlights, batteries, phone charging, hygiene supplies, cash, copies of important documents, and pet supplies when needed."
  },
  ...faqs
];

const title = "Hurricane Preparedness Checklist Generator";
const description = "Generate a hurricane preparedness checklist for 1-4 people, with optional pet supplies, emergency documents, food, water, medicine, and decision-focused planning items.";
const canonical = `${site.url}/tools/preparedness-checklist/`;

function escapeHtml(value: unknown) {
  const replacements: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return String(value ?? "").replace(/[&<>"']/g, (char) => replacements[char] ?? char);
}

function renderFaqs() {
  return pageFaqs.map((faq) => `
    <article class="faq-item">
      <h3>${escapeHtml(faq.question)}</h3>
      <p>${escapeHtml(faq.answer)}</p>
    </article>
  `).join("");
}

function renderPage(lastModified: string) {
  const jsonLd = graph(
    websiteSchema(),
    articleSchema({ title, description, url: canonical, dateModified: lastModified }),
    faqSchema(pageFaqs)
  );

  return `<!doctype html>
<html lang="en">
  <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3FWT0XXYP2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-3FWT0XXYP2');
    </script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title} | ${site.name}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta name="last-modified" content="${lastModified}" />
    <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title} | ${site.name}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="article:modified_time" content="${lastModified}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <style>
      :root {
        color-scheme: light;
        --ink: #17212b;
        --muted: #5b6670;
        --line: #d7dde2;
        --panel: #ffffff;
        --surface: #f4f7f8;
        --ocean: #0e6f8f;
        --signal: #c1442e;
        --amber: #c9891a;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      * { box-sizing: border-box; }
      body { margin: 0; color: var(--ink); background: var(--surface); }
      a { color: inherit; }
      .site-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 14px clamp(18px, 4vw, 56px);
        border-bottom: 1px solid var(--line);
        background: rgba(244, 247, 248, 0.94);
      }
      .brand { display: inline-flex; gap: 10px; align-items: center; text-decoration: none; font-weight: 800; }
      .brand-mark {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: radial-gradient(circle at 62% 38%, #fff 0 12%, transparent 13%), conic-gradient(from 210deg, var(--ocean), #74b7c9, var(--signal), var(--ocean));
      }
      nav { display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-end; }
      nav a {
        min-height: 38px;
        display: inline-flex;
        align-items: center;
        padding: 0 12px;
        border-radius: 6px;
        color: var(--muted);
        text-decoration: none;
        font-size: 0.94rem;
        font-weight: 700;
      }
      nav a:hover, nav a:focus-visible { background: #e7eef1; color: var(--ink); }
      .disclaimer {
        background: linear-gradient(90deg, #d47b08, #b9481f);
        color: #fff;
        padding: 12px clamp(18px, 4vw, 56px);
        font-weight: 800;
      }
      .disclaimer p {
        width: min(1180px, 100%);
        margin: 0 auto;
        line-height: 1.5;
      }
      .disclaimer a {
        color: #fff;
        text-decoration-thickness: 2px;
      }
      .ad-slot {
        width: min(1180px, calc(100% - 36px));
        margin: 16px auto;
        border: 1px dashed #b8c0c7;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.6);
      }
      .ad-slot:empty { display: none; }
      .ad-slot-bottom {
        min-height: 250px;
      }
      .band { padding: clamp(34px, 6vw, 76px) clamp(18px, 4vw, 56px); }
      .inner { width: min(1180px, 100%); margin: 0 auto; }
      .hero {
        color: #fff;
        background: linear-gradient(90deg, rgba(10, 30, 45, 0.9), rgba(14, 111, 143, 0.65)), url("https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=1800&q=80");
        background-size: cover;
        background-position: center;
      }
      .eyebrow {
        margin: 0 0 10px;
        text-transform: uppercase;
        font-size: 0.78rem;
        letter-spacing: 0.12em;
        font-weight: 800;
        color: #a6dae8;
      }
      h1, h2, h3 { margin: 0; line-height: 1.06; letter-spacing: 0; }
      h1 { max-width: 840px; font-size: clamp(2.4rem, 6vw, 5rem); }
      h2 { font-size: clamp(1.8rem, 4vw, 3rem); }
      h3 { font-size: 1.08rem; }
      p, li { line-height: 1.65; }
      .answer { max-width: 760px; margin: 20px 0 0; font-size: clamp(1.05rem, 2vw, 1.25rem); }
      .grid-2 { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr); gap: 18px; align-items: start; }
      .panel, .checklist-card, .faq-item {
        background: var(--panel);
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: clamp(18px, 3vw, 28px);
        box-shadow: 0 1px 0 rgba(23, 33, 43, 0.04);
      }
      .tool-form { display: grid; gap: 16px; }
      label { display: grid; gap: 8px; font-weight: 800; }
      select, button, textarea {
        width: 100%;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: #fff;
        color: var(--ink);
        padding: 10px 12px;
        font: inherit;
      }
      button {
        min-height: 42px;
        background: var(--ocean);
        color: #fff;
        font-weight: 800;
        cursor: pointer;
      }
      .checklist-card ul { margin: 14px 0 0; padding-left: 22px; }
      .badge {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        padding: 0 9px;
        border-radius: 999px;
        background: #fff3d7;
        color: #8b5a00;
        font-size: 0.8rem;
        font-weight: 800;
      }
      textarea { min-height: 260px; margin-top: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
      .stack { display: grid; gap: 14px; }
      footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 18px;
        padding: 28px clamp(18px, 4vw, 56px);
        border-top: 1px solid var(--line);
        color: var(--muted);
      }
      footer p { margin: 0; max-width: 820px; }
      .footer-links { display: flex; gap: 12px; align-items: center; }
      @media (max-width: 860px) {
        .site-header, .grid-2 { display: grid; grid-template-columns: 1fr; }
        nav { justify-content: flex-start; }
      }
    </style>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label="HurricaneHub home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>${site.name}</span>
      </a>
      <nav aria-label="Primary">
        <a href="/">Home</a>
        <a href="/tracker/">Tracker</a>
        <a href="/tools/">Tools</a>
        <a href="/blog/">Blog</a>
        <a href="/about/">About</a>
      </nav>
    </header>
    <aside class="disclaimer" aria-label="NOAA and National Hurricane Center data disclaimer">
      <p>⚠️ Data sourced from NOAA/National Hurricane Center. This site is for informational purposes only and should not be used for life-critical decisions. Please rely on official alerts at <a href="https://www.weather.gov/">weather.gov</a>.</p>
    </aside>
    <main>
      <section class="hero band" aria-labelledby="checklist-title">
        <div class="inner">
          <p class="eyebrow">Emergency decision tool</p>
          <h1 id="checklist-title">Hurricane Preparedness Checklist Generator</h1>
          <p class="answer">Generate a hurricane emergency kit checklist for your household size, including water, food, medicine, documents, power, hygiene, and pet supplies when needed.</p>
        </div>
      </section>

      <section class="band" aria-labelledby="generator-heading">
        <div class="inner grid-2">
          <article class="panel">
            <h2 id="generator-heading">Build Your Checklist</h2>
            <form class="tool-form" id="checklist-form">
              <label>
                Household size
                <select id="people" name="people">
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                </select>
              </label>
              <label>
                Pets
                <select id="pets" name="pets">
                  <option value="no">No pets</option>
                  <option value="yes">Yes, include pet supplies</option>
                </select>
              </label>
              <button type="submit">Generate Checklist</button>
            </form>
            <p><span class="badge">Decision note</span></p>
            <p>Use this tool before watches become warnings. If your county issues an evacuation order, take the kit and leave before route options shrink.</p>
          </article>

          <article class="checklist-card" aria-labelledby="output-heading">
            <h2 id="output-heading">Generated Checklist</h2>
            <div id="checklist-output" class="stack" aria-live="polite"></div>
            <h3>Markdown Version</h3>
            <textarea id="markdown-output" readonly></textarea>
          </article>
        </div>
      </section>

      <section class="band" aria-labelledby="faq-heading">
        <div class="inner stack">
          <h2 id="faq-heading">Hurricane Checklist FAQ</h2>
          ${renderFaqs()}
        </div>
      </section>
      <div class="ad-slot ad-slot-bottom"><!-- AD SLOT 2: 300x250 Rectangle --></div>
    </main>
    <footer>
      <p>Uses official NOAA, National Hurricane Center, and National Weather Service public feeds. Decision support only; follow official alerts at weather.gov.</p>
      <div class="footer-links">
        <a href="/sitemap.xml">Sitemap</a>
        <span><!-- FTC DISCLOSURE: Future affiliate links --></span>
      </div>
    </footer>
    <script>
      const form = document.querySelector("#checklist-form");
      const peopleSelect = document.querySelector("#people");
      const petsSelect = document.querySelector("#pets");
      const output = document.querySelector("#checklist-output");
      const markdown = document.querySelector("#markdown-output");

      function buildChecklist(people, hasPets) {
        const waterGallons = people * 3;
        const meals = people * 9;
        const items = [
          ["Water", waterGallons + " gallons of drinking water for a 3-day minimum"],
          ["Food", meals + " shelf-stable meals plus manual can opener"],
          ["Medicine", "7-day medication supply, prescriptions list, first-aid kit"],
          ["Power", "Flashlights, spare batteries, power banks, weather radio"],
          ["Documents", "IDs, insurance, medical records, cash, printed contacts"],
          ["Hygiene", "Soap, sanitizer, wipes, trash bags, menstrual supplies"],
          ["Safety", "Work gloves, whistle, masks, local map, evacuation route notes"]
        ];
        if (hasPets) {
          items.push(["Pets", "Pet food, water bowl, leash or carrier, vaccination record, waste bags"]);
        }
        return items;
      }

      function render() {
        if (!output || !(markdown instanceof HTMLTextAreaElement)) return;
        const people = peopleSelect instanceof HTMLSelectElement ? Number(peopleSelect.value) : 1;
        const hasPets = petsSelect instanceof HTMLSelectElement ? petsSelect.value === "yes" : false;
        const items = buildChecklist(people, hasPets);
        const checklistTitle = "Hurricane emergency kit for " + people + " " + (people === 1 ? "person" : "people") + (hasPets ? " with pets" : "");
        output.innerHTML = "<h3>" + checklistTitle + "</h3><ul>" + items.map(([label, text]) => "<li><strong>" + label + ":</strong> " + text + "</li>").join("") + "</ul>";
        markdown.value = "## " + checklistTitle + "\\n\\n" + items.map(([label, text]) => "- **" + label + ":** " + text).join("\\n");
      }

      form?.addEventListener("submit", (event) => {
        event.preventDefault();
        render();
      });
      peopleSelect?.addEventListener("change", render);
      petsSelect?.addEventListener("change", render);
      render();
    </script>
  </body>
</html>`;
}

export const GET: APIRoute = () =>
  new Response(renderPage(site.contentLastModified), {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300"
    }
  });
