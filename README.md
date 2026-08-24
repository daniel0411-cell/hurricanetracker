# HurricaneHub

## Description

HurricaneHub is a North America hurricane tracking and emergency decision site built with Astro and Cloudflare. It combines semantic SEO pages, NOAA/National Hurricane Center data proxies, National Weather Service alerts, and preparedness tools for household planning.

## Tech Stack

- Astro
- TailwindCSS-ready frontend structure
- Cloudflare Pages
- Cloudflare Pages Functions / Workers
- Cloudflare KV for cached NOAA/NHC/NWS responses
- Cloudflare R2 reserved for future static assets

## Getting Started

Use Node.js 22 for local development and CI. If you use `nvm`:

```sh
nvm use
```

Install dependencies:

```sh
npm install
```

Run the local development server:

```sh
npm run dev
```

Build locally:

```sh
npm run build
```

## Deployment Guide

Production runs as a Cloudflare Worker configured by `wrangler.deploy.toml`. Use the guarded release command so the GitHub `main` branch and the production deployment always represent the same source revision:

```sh
npm run ship
```

Commit only the intended files first. The command refuses uncommitted tracked changes, ignores untracked local drafts without staging them, builds the site, verifies that local `main` is not behind GitHub, pushes `main`, and then deploys to Cloudflare. GitHub network operations have a bounded timeout and retry, and the remote revision must match local `HEAD` before deployment continues. It stops before deployment if any check still fails.

To redeploy an already committed revision without changing GitHub, use:

```sh
npm run deploy
```

Use `npm run deploy:monitor` separately when `workers/storm-monitor.mjs` or its configuration changes.

### Cloudflare Bindings

Create the KV namespace used by the API cache:

```sh
npx wrangler kv namespace create HURRICANEHUB_CACHE
npx wrangler kv namespace create HURRICANEHUB_CACHE --preview
```

Create the reserved R2 bucket:

```sh
npx wrangler r2 bucket create hurricanehub-assets
```

Then replace the placeholder KV IDs in `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "HURRICANEHUB_CACHE"
id = "replace-with-production-kv-id"
preview_id = "replace-with-preview-kv-id"
```

R2 is already declared as:

```toml
[[r2_buckets]]
binding = "HURRICANEHUB_ASSETS"
bucket_name = "hurricanehub-assets"
preview_bucket_name = "hurricanehub-assets-preview"
```

### Environment Variables

No required environment variables are needed for the MVP. The API routes call public NOAA/NHC/NWS feeds and use Cloudflare bindings when available.

## Folder Structure

```txt
.
├── public/                  Static headers and web manifest
├── src/
│   ├── components/          Header, footer, SEO, disclaimer, dashboard, FAQ blocks
│   ├── content/blog/        Markdown source content for initial blog infrastructure
│   ├── data/                Site navigation and mock blog metadata
│   ├── layouts/             Shared Astro layouts
│   ├── lib/                 Schema and weather utility functions
│   └── pages/               Astro pages and Cloudflare-compatible API endpoints
├── astro.config.mjs         Astro + Cloudflare adapter configuration
├── wrangler.toml            Cloudflare Pages/Workers bindings
├── .nvmrc                   Node.js version pin
└── package.json             Scripts and dependencies
```

## Official Data Sources

- NHC current storms JSON: `https://www.nhc.noaa.gov/CurrentStorms.json`
- NWS active alerts API: `https://api.weather.gov/alerts/active`

HurricaneHub is informational only and must not be used for life-critical decisions. Always rely on official alerts at `weather.gov` and local emergency management.
