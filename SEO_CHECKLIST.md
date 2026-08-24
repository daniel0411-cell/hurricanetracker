# HurricaneHub 代码规范检查清单

> 状态图例：✅ 通过 / ❌ 不通过 / ⚠️ 需改进。当前状态基于 2026-08-20 代码快照与 `npm run build` 验证。
> 配套规范见 [AGENTS.md](./AGENTS.md)。

## 1. 技术栈与构建

| 状态 | 检查项 | 当前状态 / 证据 |
|---|---|---|
| ✅ | Astro 版本明确 | `astro ^7.2.1`（[package.json](./package.json)） |
| ✅ | TypeScript strict 配置 | `tsconfig.json` extends `astro/tsconfigs/strict` + `@cloudflare/workers-types` |
| ✅ | Tailwind 状态明确 | **未使用 Tailwind**；[Layout.astro](./src/layouts/Layout.astro) 用原生 CSS 变量 + `:root[data-theme="dark"]` 暗色 |
| ✅ | `npm run build` 0 报错 | 2026-08-20 验证：prebuild（verify:city-data + gen-og 16 张 OG）+ astro build `Complete!` |
| ✅ | `npm run ship` 配置正确 | [scripts/ship.mjs](./scripts/ship.mjs) 守门发布；2026-08-20 已成功部署 Version `002acd89`，GitHub 与 Cloudflare 同步 |

## 2. SEO 基础（每个页面）

| 状态 | 检查项 | 当前状态 / 证据 |
|---|---|---|
| ⚠️ | title 长度 50–60 字符 | 抽样：首页 53 字符 ✅；风暴页 Arthur 46 字符（偏短）；需全量审计 `npm run metadata:audit` |
| ⚠️ | description 长度 120–160 字符 | 未全量校验；运行 `npm run metadata:audit` |
| ✅ | canonical URL 正确设置 | [SEO.astro](./src/components/SEO.astro) `normalizeCanonical()` 强制 `https://www.hurricanetracker.cc/` + 尾斜杠 |
| ✅ | Open Graph + Twitter Card 标签存在 | [SEO.astro](./src/components/SEO.astro) 统一渲染 og:* / twitter:*（含 og:image:width/height 1200×630） |
| ⚠️ | 结构化数据 JSON-LD（FAQ/Article/Dataset） | FAQ ✅、Article ✅、BlogPosting ✅、HowTo ✅、Breadcrumb ✅、ItemList ✅；**Dataset ❌ 未实现**（[schema.ts](./src/lib/schema.ts) 无 Dataset 工厂，项目无数据集内容，按需决定是否补） |

## 3. 程序化页面质量

| 状态 | 检查项 | 当前状态 / 证据 |
|---|---|---|
| ✅ | 每个风暴页 ≥800 字原创内容 | [arthur.ts](./src/pages/storm/2026-arthur/_data/arthur.ts) summary+live+timeline+impact+historical+forecast+preparedness+faqs 远超 800 字 |
| ✅ | 包含真实 NHC 数据（非占位符） | NHC code `AL012026`、真实 `nhc.noaa.gov` advisory/source URL、advisory number |
| ⚠️ | FAQ 问题每个页面唯一（不跨页重复） | 未全量比对 Arthur/Bertha/Cristobal FAQ；运行 `npm run faq:audit` |
| ✅ | 内链从 `/hurricane-tracker/` 出发 2–3 次可达 | 风暴页 `related[]` 链向 `/hurricane-tracker/storm/`、`/live/`、`/city/`、`/tracker/<state>/` |

## 4. 索引与提交

| 状态 | 检查项 | 当前状态 / 证据 |
|---|---|---|
| ✅ | XML Sitemap 包含所有规范 URL | [sitemapRoutes.ts](./src/lib/sitemapRoutes.ts) 覆盖 pages/tools/locations/blog 四组；自动过滤 `api/`、`admin/` |
| ⚠️ | lastmod 字段准确反映更新时间 | 多数页用 `site.contentLastModified`（当前 `2026-08-19`，需内容更新时**手动**改 [site.ts](./src/data/site.ts)）；博客用 `max(post.dateModified)` 自动 |
| ✅ | IndexNow 已配置并可正常提交 | [indexnow-submit.mjs](./scripts/indexnow-submit.mjs)；2026-08-20 提交 147 URLs HTTP 200 |
| ✅ | robots.txt 未误拦 Bingbot/Googlebot | [robots.txt.ts](./src/pages/robots.txt.ts)：`User-agent: * Allow: / Disallow: /api/ /admin/`，无 Bing/Google 限制 |

## 5. 性能与可访问性

| 状态 | 检查项 | 当前状态 / 证据 |
|---|---|---|
| ❌ | 图片使用 Astro `<Image />` 组件 + WebP + alt | **`<Image />` 未使用**（无 `astro:assets` 导入）；**无 WebP**（OG 图均为 PNG）；alt ✅（5 个 `<img>` 全部含 alt） |
| ⚠️ | 无未压缩的大图 | OG PNG ~66–69KB ✅；[radar.astro](./src/pages/radar.astro) 引用外部 Unsplash hero（`auto=format&fit=crop&w=1800`）✅；需 Lighthouse 复核 |
| ⚠️ | 无阻塞渲染的 JS | [Layout.astro](./src/layouts/Layout.astro) 用 `<script is:inline>`（theme/SW/搜索均为内联，非外部阻塞）；GoogleTag 需确认 async；建议跑 Lighthouse |

## 6. 禁区保护

| 状态 | 检查项 | 当前状态 / 证据 |
|---|---|---|
| ✅ | `package.json` 未被随意改动 | 2026-08-20 仅 `AGENTS.md` 入提交；依赖清单未变 |
| ✅ | `astro.config.mjs` 的 i18n 配置未被修改 | 未改动；i18n 仍为 `en/es` + `prefixDefaultLocale: false`（注：全站 hreflang 未落地 ⚠️，但属既有状态，非本次改动） |
| ✅ | 已有核心路由未被删除 | `src/pages/` 下 storm/tracker/hurricane-tracker/blog/tools/api 路由完整在位 |

---

## 待办优先级

- **P1**：跑 `npm run metadata:audit && npm run faq:audit` 补全 title/description/FAQ 全量校验
- **P1**：决定是否引入 Astro `<Image />` + WebP（迁移博客 hero 与 OG 路径，影响 `gen-og.mjs` 与 `[slug].astro`）
- **P2**：`site.contentLastModified` 改为按内容实际更新自动派生（避免手动漏改导致 sitemap lastmod 失真）
- **P3**：若未来上线数据集内容，再补 `Dataset` JSON-LD 工厂
