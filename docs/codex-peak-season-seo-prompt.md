# Codex 任务：飓风高峰期 SEO 三步走

## 项目背景

- **站点**：HurricaneHub (hurricanetracker.cc)，Astro 7 SSR + Cloudflare Workers
- **目标**：抓住 8-10 月飓风高峰期，通过 SEO 提升站点流量
- **技术栈**：Astro 7 + TypeScript + Cloudflare KV/R2 + Leaflet
- **运行方式**：`npm run build` = `astro check` + `astro build`

## 禁区（绝对不可修改）

- `src/pages/` 下已有路由文件（除非本任务明确要求新建）
- `package.json` 依赖
- `wrangler.toml` / `wrangler.deploy.toml`
- `gcp-sa.json`
- `src/pages/sitemap.xml.ts`（可修改 `src/lib/sitemapRoutes.ts`）

## 现有代码模式参考

### 风暴追踪页数据结构（`src/data/stormPages.ts`）

```typescript
export type StormTrackerPage = {
  slug: string;          // 小写风暴名，如 "danielle"
  name: string;          // 首字母大写，如 "Danielle"
  basin: string;         // "Atlantic"
  title?: string;        // SEO title，≤60 字符
  description?: string;  // SEO description，≤160 字符
  primaryKeywords: string[];     // 3-4 个高搜索量关键词
  searchDemandNote: string;      // 搜索需求说明
  overview: string;              // 2-3 句页面概述
  trackerFocus: string[];        // 4 条追踪要点
  faqs: Array<{ question: string; answer: string }>;  // 3-4 个 FAQ
};
```

动态路由 `src/pages/hurricane-tracker/storm/[storm].astro` 会：
1. 从 URL 取 slug
2. 在 `stormTrackerPages` 数组中查找 `knownPage`
3. 如果找到，用 `knownPage` 的内容渲染富页面
4. 如果没找到但有活跃 NHC 风暴匹配，用默认模板兜底
5. 都没有就 302 跳转到 `/storm-archive/`

**关键**：`[storm].astro` 已经有完整的默认模板逻辑——只要在 `stormPages.ts` 数组中添加条目，页面就会自动渲染富内容。不需要新建任何 .astro 文件。

### 现有 stormPages.ts 中已有的条目

- erin, melissa, dolly, edouard, fay（5 个，但其中只有 dolly 是 2026 命名表里的名字）

### 2026 大西洋命名表（共 21 个名字）

Arthur, Bertha, Cristobal, Danielle, Earl, Fiona, Gordon, Hermine, Ian, Julia, Karl, Lisa, Martin, Nicole, Owen, Paula, Richard, Shary, Tobias, Virginie, Walter

### 已有档案页的风暴（`src/pages/storm/2026-*/`）

Arthur, Bertha, Cristobal（这 3 个已有独立档案页，不需要再在 stormPages.ts 中添加）

### 需要在 stormPages.ts 中新增的 18 个名字

Danielle, Earl, Fiona, Gordon, Hermine, Ian, Julia, Karl, Lisa, Martin, Nicole, Owen, Paula, Richard, Shary, Tobias, Virginie, Walter

---

## 任务 1：批量生成 18 个 2026 风暴名页面

### 目标

在 `src/data/stormPages.ts` 的 `stormTrackerPages` 数组中，为上述 18 个名字各添加一个 `StormTrackerPage` 条目。

### 内容要求

每个条目必须包含：

1. **slug**：名字小写，如 `"danielle"`
2. **name**：首字母大写，如 `"Danielle"`
3. **basin**：`"Atlantic"`
4. **title**：格式 `"Tropical Storm {Name} 2026 Tracker: NHC Path & Live Map"`，≤60 字符
5. **description**：格式 `"{Name} 2026 tracker: live NHC position, forecast path, radar and advisory links. Standing hub for the 2026 Atlantic season."`，≤160 字符
6. **primaryKeywords**：3-4 个，如：
   - `"tropical storm {name lower} tracker"`
   - `"hurricane {name lower} path"`
   - `"{name lower} live tracker map"`
   - `"where is storm {name lower} now"`
7. **searchDemandNote**：说明该名字在 2026 命名表中的位置（第几个），搜索需求在命名时激增
8. **overview**：2-3 句，说明这是一个常驻搜索枢纽页，用于 NHC 状态检查、官方公告链接、雷达/卫星快捷入口。如果该风暴尚未形成，页面作为准备指南和官方来源核查工具使用。不编造生命周期数据。
9. **trackerFocus**：4 条要点，参考现有 erin/dolly 的模式：
   - 检查 NHC 当前 feed 是否有该风暴
   - 使用实时追踪器和雷达页查看位置和卫星
   - 搭配本地 NWS 警报做疏散决策
   - 使用风暴距离计算器获取位置上下文（不是登陆预测）
10. **faqs**：3-4 个，参考现有模式：
    - `"{Name} is active right now?"` → 查看实时状态和 NHC 公告链接
    - `"Where can I see a {Name} tracker map?"` → 使用 HurricaneHub 实时追踪和雷达页
    - `"Can this page predict where {Name} will make landfall?"` → 不能，NHC 和本地应急管理控制登陆和疏散信息
    - 可加第 4 个：`"What category is {Name}?"` → 查看 NHC 最新公告获取分类

### 重要约束

- **不编造风暴数据**：这些风暴可能尚未形成。内容必须是"常驻枢纽页"性质——风暴形成后由 `[storm].astro` 挂接实时 feed；未形成时渲染准备指南。
- **参考 dolly 条目的注释模式**：dolly 条目有注释说明 2026 状态，其他条目也应有类似注释
- **每个条目的 overview 和 searchDemandNote 要有变化**，不能 18 个完全一样的模板文本——至少在风暴名、序号、区域重点上有所区分
- **FAQ 问题措辞要自然多样**，不要 18 个页面问完全一样的问题

### 序号参考

| 序号 | 名字 | 2026 位置 |
|------|------|-----------|
| 4 | Danielle | 第 4 个名字 |
| 5 | Earl | 第 5 个名字 |
| 6 | Fiona | 第 6 个名字 |
| 7 | Gordon | 第 7 个名字 |
| 8 | Hermine | 第 8 个名字 |
| 9 | Ian | 第 9 个名字 |
| 10 | Julia | 第 10 个名字 |
| 11 | Karl | 第 11 个名字 |
| 12 | Lisa | 第 12 个名字 |
| 13 | Martin | 第 13 个名字 |
| 14 | Nicole | 第 14 个名字 |
| 15 | Owen | 第 15 个名字 |
| 16 | Paula | 第 16 个名字 |
| 17 | Richard | 第 17 个名字 |
| 18 | Shary | 第 18 个名字 |
| 19 | Tobias | 第 19 个名字 |
| 20 | Virginie | 第 20 个名字 |
| 21 | Walter | 第 21 个名字 |

---

## 任务 2：创建「2026 Hurricane Season Live」枢纽页

### 目标

新建 `src/pages/2026-hurricane-season.astro`，作为 2026 飓风季节的权威枢纽页。

### 页面内容

1. **SEO 元数据**
   - title: `"2026 Hurricane Season: Live Tracker, Storm List & Forecast"` (≤60 字符)
   - description: `"Track the 2026 Atlantic hurricane season live: named storms, NHC advisories, forecast outlook, and state-by-state impact."` (≤160 字符)

2. **页面模块**（从上到下）
   - **Hero section**：标题 + 简介 + 当前活跃风暴数（从 `/api/nhc/current.json` 拉取）
   - **Active storms section**：如果有活跃风暴，列出名称、分类、位置、公告链接；如果没有，显示 `"No active tropical cyclones at this time. The next name on the 2026 list is {next name}."`
   - **Season statistics**：2026 季节统计（命名风暴数、飓风数、强飓风数）——可从 `readStormRegistry()` 读取已归档风暴
   - **2026 name list**：完整 21 个名字列表，已形成的标记为活跃/已消散，未形成的标记为"next"
   - **State-by-state impact**：链接到 9 个州追踪页（`/tracker/{state}/`）
   - **Preparedness CTA**：链接到 `/preparedness/` 和 `/tools/`
   - **FAQ section**：4-5 个季节相关 FAQ
   - **Related links**：链接到 `/storm-archive/`、`/hurricane-tracker/live/`、`/blog/`

3. **JSON-LD 结构化数据**
   - `Article` schema（articleSchema）
   - `FAQPage` schema（faqSchema）
   - `BreadcrumbList` schema（breadcrumbSchema）
   - 使用 `graph()` 组合输出

4. **数据获取模式**（参考 `storm-archive.astro` 和 `index.astro`）

```typescript
type StormFeed = {
  storms?: Array<NhcStorm & { summary?: string }>;
  updatedAt?: string;
  fetchedAt?: string;
};

let feed: StormFeed | null = null;
try {
  const response = await fetch(new URL("/api/nhc/current.json", Astro.url));
  if (response.ok) {
    feed = await response.json() as StormFeed;
  }
} catch (error) {
  console.error("HurricaneHub season hub feed failed", { error });
}
const storms = feed?.storms ?? [];
const registryStorms = await readStormRegistry();
```

5. **2026 名字列表数据**

可在页面 frontmatter 中定义一个静态数组：

```typescript
const names2026 = [
  "Arthur", "Bertha", "Cristobal", "Danielle", "Earl",
  "Fiona", "Gordon", "Hermine", "Ian", "Julia",
  "Karl", "Lisa", "Martin", "Nicole", "Owen",
  "Paula", "Richard", "Shary", "Tobias", "Virginie", "Walter"
];
```

然后与 `registryStorms` 和 `storms` 交叉比对，标记状态。

6. **样式**：手写 scoped CSS（`<style>`），不使用 Tailwind。深色模式通过 `data-theme` 属性适配。参考现有页面的样式模式。

### FAQ 内容建议

1. `"When is the 2026 hurricane season?"` → June 1 to November 30, with peak from mid-August through October.
2. `"How many storms are predicted for 2026?"` → 参考 NOAA seasonal outlook（如果有的话链接到 NOAA），否则说明季节预测会随条件更新。
3. `"What was the first storm of 2026?"` → Tropical Storm Arthur (June 2026).
4. `"When does hurricane season peak?"` → Statistical peak is around September 10.
5. `"Where can I track active hurricanes?"` → 链接到 HurricaneHub live tracker + NHC 官方。

---

## 任务 3：在 sitemapRoutes.ts 中注册新页面

### 目标

在 `src/lib/sitemapRoutes.ts` 的 `pageRoutes` 数组中添加：

```typescript
{ path: "2026-hurricane-season/", lastmod: updated, priority: "0.9", changefreq: "daily", section: "pages" },
```

放在 `storm-archive/` 条目之后。

---

## 任务 4：在 search-index.json.ts 中注册新页面

### 目标

在 `src/pages/search-index.json.ts` 中，确保新的 season hub 页面被包含在搜索索引中。检查现有的数据导入方式，确保新页面有对应的 Entry。

如果 search-index.json.ts 是从 sitemapRoutes 或其他数据源自动生成的，确认新页面会被自动包含。如果是手动维护的，添加对应条目。

---

## 任务 5：添加 LiveBlogPosting Schema 支持

### 目标

在 `src/lib/schema.ts` 中新增 `liveBlogPostingSchema` 函数：

```typescript
export function liveBlogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  liveCoverageEndTime?: string;
}) {
  return {
    "@type": "LiveBlogPosting",
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? new Date().toISOString(),
    liveCoverageEndTime: params.liveCoverageEndTime,
    coverageStartTime: params.datePublished,
  };
}
```

这样后续的风暴实时更新博文就可以使用这个 schema。

---

## 执行顺序

1. 任务 1：修改 `src/data/stormPages.ts`（添加 18 个条目）
2. 任务 5：修改 `src/lib/schema.ts`（添加 LiveBlogPosting 函数）
3. 任务 2：新建 `src/pages/2026-hurricane-season.astro`
4. 任务 3：修改 `src/lib/sitemapRoutes.ts`（添加 season hub URL）
5. 任务 4：检查/修改 `src/pages/search-index.json.ts`
6. 运行 `npm run build` 验证
7. 修复所有类型错误

## 完成标准

- `npm run build` 零错误通过
- 18 个新风暴页可通过 `/hurricane-tracker/storm/danielle/` 等路径访问
- `/2026-hurricane-season/` 页面可访问且 JSON-LD 输出正确
- sitemap 包含新 URL
- search-index.json 包含新条目
- 深色模式下页面样式正常
