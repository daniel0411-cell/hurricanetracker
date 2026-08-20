# HurricaneHub 项目规范

> 任何 AI 工具（Trae CN / WorkBuddy / Codex 等）在修改本项目前必须先完整阅读本文件，再按规范操作。

## 项目概况
- 类型：Astro SSR 站点（`output: "server"`）+ Cloudflare Workers 部署
- 核心业务：飓风实时追踪、州级准备指南、SEO 博客自动化
- 生产域名：hurricanetracker.cc（规范 host 为 `www.hurricanetracker.cc`，canonical 一律带尾斜杠）

## 技术栈
- Astro `^7.2.1` + TypeScript `^5.9.2`（strict）+ 原生 CSS 变量（**未使用 Tailwind**）
- 适配器：`@astrojs/cloudflare ^14.2.1`，`imageService: "compile"`
- 依赖：`leaflet`（地图）、`fflate`（zip）、`@resvg/resvg-js`（OG 图渲染，devDep）、`wrangler`
- i18n：已声明 `en`/`es`，但全站 hreflang 未落地（**改动需用户明确授权**）
- **未集成 `@astrojs/sitemap`**：sitemap 为自研多文件方案（见下文）

## 命令
- 开发：`npm run dev`
- 构建：`npm run build`（prebuild 自动跑 `verify:city-data` + `gen-og`）
- 类型检查：`npm run check`
- SEO 全量审计：`npm run seo:full`
- 发布上线：`npm run ship -- "<msg>"`（build → commit → 校验 main 不落后 origin → push → deploy；**仅在用户明确说"上线"时使用**）
- 仅重发已提交版本：`npm run deploy`
- 中间提交（未上线）：`git add . && git commit -m "type: message" && git push`
- 搜索引擎推送：`npm run indexall`

## 目录结构（真实路径）
- `src/pages/storm/2026-{name}/` → 命名风暴档案页：`index.astro` + `_data/<name>.ts`（导出 `StormArchive`）
- `src/pages/tracker/{state}.astro` → 州级规范页（FL/AL/GA/LA/MS/NC/SC/TX/VA 共 9 个）+ `[id].astro` + `index.astro`
- `src/pages/hurricane-tracker/` → `[state].astro`（SSR，中间件 301 到 `/tracker/<state>/`）、`[topic].astro`（SSG 主题页）、`live.astro`、`tropical-disturbances.astro`、`city/`、`storm/`
- `src/pages/blog/` → `index.astro` + `[slug].astro`（SSR）+ `category/[category].astro` + 3 个独立 `.astro`
- `src/pages/tools/` → 11 个工具页 + `index.astro`
- `src/pages/api/` → NHC/NWS/location/push/reminders/radar/vapid/subscribe/wind（SSR JSON，robots/sitemap 已禁收）
- `src/pages/sitemap*.xml.ts` + `src/lib/sitemapRoutes.ts` → sitemap 真相源（**禁区**）
- `src/layouts/` → `Layout.astro`（**管理 meta 的主布局**，注入 SEO/Header/Footer/GoogleTag + 全局 CSS）+ `BaseLayout.astro`（薄包装）
- `src/components/SEO.astro` → **集中渲染 title/description/canonical/OG/Twitter/JSON-LD + 自动 breadcrumb**
- `src/components/` → 24 个组件（Header/Footer/Disclaimer/FaqBlock/StormCard/LiveDashboard/StateAlerts 等）
- `src/data/blog.ts` → **博客生产源**（`BlogPost[]`，247KB）；`src/content/blog/*.md` 是历史残骸，**不要改 .md**
- `src/data/site.ts` → 站点元数据 + `canonicalUrl` + `contentLastModified`
- `src/lib/schema.ts` → JSON-LD 工厂（WebSite/Organization/Article/BlogPosting/FAQPage/HowTo/WebApplication/GovernmentService/ItemList/BreadcrumbList + `graph()`）
- `src/lib/sitemapRoutes.ts` → sitemap 路由清单 + `renderUrlset()`
- `src/middleware.ts` → 全局异常边界 + non-www→www 301 + 旧 `/hurricane-tracker/<state>`→`/tracker/<state>/` 301
- `scripts/` → `gen-og.mjs`（OG 图生成）、`ship.mjs`（守门发布）、各 `*-audit.mjs`、`indexnow/gindex-submit.mjs`
- `public/images/blog/og/<slug>.png` → OG 卡（1200×630，由 `gen-og.mjs` 从 SVG 生成）

## SEO 规范（必须遵守）
- 每页经 `Layout.astro` 注入 `SEO.astro`，**不要手写 `<title>`/`<meta>` 绕过**
- 每页传 `title`（建议 50–60 字符）+ `description`（120–160 字符）+ `canonical`（带尾斜杠）
- canonical 由 `SEO.astro` 自动归一到 `https://www.hurricanetracker.cc/...`，不要手写绝对 URL
- 必含 canonical / Open Graph / Twitter Card（`SEO.astro` 已统一渲染）
- 图片必须含 `alt`；博客 hero 用显式 `width/height` 的 `<img>` + `decoding="async"`；OG 图由 `gen-og.mjs` 生成 1200×630 PNG（**不要手写 og:image 路径**）
- 结构化数据用 JSON-LD，通过 `graph()` 拼装（实际类型：WebSite/Organization/Article/BlogPosting/FAQPage/HowTo/ItemList/BreadcrumbList）
- 内部链接用描述性锚文本，从首页 `/` 或 `/hurricane-tracker/` 出发 2–3 次点击可达
- 动态数据页 SSR（fetch `/api/*.json`），静态内容页 `export const prerender = true` + `getStaticPaths()`
- 每页须有 `lastModified`（来自 `site.contentLastModified` 或页面 prop）

## 程序化 SEO 页面规范
- 每个生成页面 ≥800 字原创内容（禁止纯模板变量替换）
- **风暴档案页**（`storm/2026-{name}/`）须含：NHC 数据 + 时间线 + 预测讨论 + 历史同名风暴对比 + 受影响州内链 + FAQ；JSON-LD 组合 Article+Breadcrumb+ItemList+FAQ
- **州准备页**（`tracker/{state}.astro`）须含：该州飓风风险/历史背景 + 应急与撤离资源 + ≥5 FAQ + 内链到工具与城市页
- **新增可索引页面必须同步** `src/lib/sitemapRoutes.ts`（按 section 分组注册：pages/tools/locations/blog），否则 sitemap 漏收
- 新增博客文章改 `src/data/blog.ts` 的 `BlogPost[]`，**不要**改 `src/content/blog/*.md`

## 禁区（绝对禁止随意修改）
- 不动 `package.json` 依赖（不加/不删/不升）
- 不动 `astro.config.mjs` 的 i18n / site 字段（除非明确授权）
- 不动 `src/pages/` 下已有核心路由的逻辑与文件名
- 不动 `src/pages/sitemap*.xml.ts` 与 `src/lib/sitemapRoutes.ts`（sitemap 真相源）
- 不动 `wrangler.toml` / `wrangler.deploy.toml` / `wrangler.monitor.toml`
- 不删除已有 SEO meta、JSON-LD、canonical
- 不批量生成 300+ 页面（分批，每批 ≤50 页）
- 不泄露 `gcp-sa.json` 内容；不随意解压 `*.zip` 归档覆盖现网

## AI 执行约束
- 直接修改文件，**不输出完整代码**
- 不解释、不总结、不问确认（除非遇到禁区）
- 改完运行 `npm run build` 验证；构建失败立即修复，不进入提交
- 构建通过：`git add . && git commit -m "seo: ..." && git push`（或用户说"上线"时用 `npm run ship`）
- 最后只输出一行：`Done. 修改 N 个文件，构建通过，已推送。`

## 当不确定时
- 遇禁区改动 → 停下询问用户授权
- 遇歧义 → 选保守方案，优先保证不破坏现有功能
- 遇已存在但与本规范冲突的实现 → 以实际代码为准并在响应中说明
