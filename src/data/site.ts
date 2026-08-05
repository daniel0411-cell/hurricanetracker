export const site = {
  name: "HurricaneHub",
  url: "https://www.hurricanetracker.cc",
  contentLastModified: "2026-08-05T00:00:00.000Z",
  description:
    "HurricaneHub tracks North American hurricanes, official warnings, risk windows, and evacuation decisions from NOAA, NHC, and NWS data.",
  sameAs: [
    "https://www.nhc.noaa.gov/",
    "https://www.weather.gov/",
    "https://www.noaa.gov/"
  ]
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/tracker/", label: "Tracker" },
  { href: "/tools/", label: "Tools" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" }
];

export const states = [
  ["FL", "Florida"],
  ["AL", "Alabama"],
  ["GA", "Georgia"],
  ["LA", "Louisiana"],
  ["MS", "Mississippi"],
  ["NC", "North Carolina"],
  ["SC", "South Carolina"],
  ["TX", "Texas"],
  ["VA", "Virginia"]
] as const;

export const faqs = [
  {
    question: "What is HurricaneHub's direct answer for people in the risk zone?",
    answer:
      "Check your official local warning first, compare it with the current NHC storm position, then decide whether your home, route, or medical needs require earlier action than the county deadline."
  },
  {
    question: "How often should hurricane data refresh?",
    answer:
      "NHC advisories usually update on a cycle set by the storm situation, while NWS alerts can change at any time. HurricaneHub caches public feeds for short windows to reduce latency without hiding official updates."
  },
  {
    question: "Is this a replacement for emergency management orders?",
    answer:
      "No. HurricaneHub summarizes official data for decision support, but evacuation orders, shelter rules, road closures, and rescue instructions come from local emergency management and the National Weather Service."
  }
];

export const differentiators = [
  "Decision-first risk bands for households, routes, and care needs instead of map layers alone.",
  "Per-state alert summaries joined with hurricane context for coastal North America.",
  "SEO and generative-answer pages with direct answers, source notes, and reusable JSON-LD.",
  "Cloudflare KV caching and Worker-side proxying so NOAA/NWS APIs are not exposed as brittle browser-only dependencies."
];
