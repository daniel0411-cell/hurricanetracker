# Codex 任务：飓风高峰期 SEO 扩量 —— 州准备页 + 城市长尾页

## 项目背景

- **站点**：HurricaneHub (hurricanetracker.cc)，Astro 7 SSR + Cloudflare Workers
- **已完成**：18 个 2026 风暴枢纽页已添加到 `src/data/stormPages.ts`，`/2026-hurricane-season.astro` 已创建，LiveBlogPosting Schema 已添加，sitemap 和 search-index 已更新。`npm run build` 已通过。
- **当前日期**：2026-08-21。大西洋目前无活跃热带气旋，但 9 月 10 日是历史峰值。
- **目标**：在 9 月 10 日前，铺完"备战型"页面矩阵，抢占收录，为第一个风暴预警爆发做准备。

## 禁区（绝对不可修改）

- `src/pages/` 下已有路由文件（除非本任务明确要求新建）
- `package.json` 依赖
- `wrangler.toml` / `wrangler.deploy.toml`
- `src/data/stormPages.ts`（已完成，不动）
- `src/pages/2026-hurricane-season.astro`（已完成，不动）

---

## 任务 1：生成 12 个核心州级飓风准备页

### 目标路由（新建以下 12 个页面文件）

- `src/pages/state/florida/preparedness.astro`
- `src/pages/state/texas/preparedness.astro`
- `src/pages/state/louisiana/preparedness.astro`
- `src/pages/state/north-carolina/preparedness.astro`
- `src/pages/state/south-carolina/preparedness.astro`
- `src/pages/state/georgia/preparedness.astro`
- `src/pages/state/virginia/preparedness.astro`
- `src/pages/state/alabama/preparedness.astro`
- `src/pages/state/mississippi/preparedness.astro`
- `src/pages/state/new-york/preparedness.astro`
- `src/pages/state/new-jersey/preparedness.astro`
- `src/pages/state/massachusetts/preparedness.astro`

### 页面内容规范（每个页面必须唯一，禁止模板变量替换）

1. **SEO 元数据**
   - `title`: `"{State} Hurricane Preparedness 2026: Evacuation Zones, Kit Checklist & Safety Guide"`（≤60 字符）
   - `description`: `"Complete {State} hurricane preparedness guide: evacuation zones, emergency kit checklist, shelter locations, and NWS alerts. Updated for 2026 Atlantic season."`（≤160 字符）
   - `canonical`: `https://hurricanetracker.cc/state/{state}/preparedness/`
   - Open Graph + Twitter Card

2. **页面模块**（从上到下）
   - **Hero**：州名 + 当前季节状态（"2026 Atlantic season is active. No current threat to {State}."）
   - **为什么该州面临风险**：该州的海岸线长度、历史飓风频率、独特脆弱性（如新奥尔良的 levee 系统、迈阿密的南佛罗里达位置）
   - **历史飓风清单**：该州过去 10 次重大飓风（名称、年份、登陆类别、损失），使用真实 NOAA 数据
   - **撤离路线详解**：该州的具体撤离路线（如佛罗里达的 I-75 逆向车道、南卡的 I-26 逆向车道）、撤离区划分
   - **应急清单（HowTo Schema）**：7 天水/食物、药品、文件、宠物用品等，用结构化数据标记
   - **当地应急资源**：该州的具体 FEMA 区域、州应急管理网站链接、当地红十字会
   - **内链矩阵**：
     - 链接到 `/2026-hurricane-season/`
     - 链接到 `/hurricane-tracker/storm/danielle/`（及其他 2026 风暴枢纽页）
     - 链接到 `/state/{state}/`（如果该路由存在）
   - **FAQ 模块（FAQPage JSON-LD）**：5 个独特问题，例如：
     - `"When is hurricane season in {State}?"`
     - `"What are the evacuation zones for {State}?"`
     - `"Does {State} have mandatory evacuation laws?"`
     - `"What was the worst hurricane to hit {State}?"`
     - `"How do I make a hurricane emergency kit for {State}?"`

3. **结构化数据**
   - `Article` schema
   - `FAQPage` schema
   - `HowTo` schema（应急清单部分）
   - `BreadcrumbList` schema

4. **样式**：手写 scoped CSS（`<style>`），不使用 Tailwind。深色模式通过 `data-theme` 属性适配。参考现有页面样式。

### 数据获取

- 历史飓风数据：从 NOAA NHC 热带气旋报告档案获取（<https://www.nhc.noaa.gov/data/tcr/>）
- 撤离路线：参考各州应急管理官网公开信息
- 如果无法获取实时数据，用占位符标注 `[PENDING_FEMA_DATA]` 并在代码注释中说明

---

## 任务 2：生成 10 个高危城市长尾页

### 目标路由（新建以下 10 个页面文件）

- `src/pages/city/miami/hurricane-tracker.astro`
- `src/pages/city/tampa/hurricane-tracker.astro`
- `src/pages/city/orlando/hurricane-tracker.astro`
- `src/pages/city/jacksonville/hurricane-tracker.astro`
- `src/pages/city/houston/hurricane-tracker.astro`
- `src/pages/city/new-orleans/hurricane-tracker.astro`
- `src/pages/city/charleston/hurricane-tracker.astro`
- `src/pages/city/savannah/hurricane-tracker.astro`
- `src/pages/city/wilmington/hurricane-tracker.astro`
- `src/pages/city/virginia-beach/hurricane-tracker.astro`

### 页面内容规范

每个页面聚焦"该城市如何追踪和准备飓风"：

1. **SEO 元数据**：title 含城市名 + "Hurricane Tracker 2026"，description 独特
2. **城市特定风险**：该城市的地理位置脆弱性（如迈阿密的南佛罗里达位置、新奥尔良的 below sea level）
3. **本地警报来源**：该城市所属的 NWS 办公室（如 Miami 是 NWS Miami）、当地紧急管理推特/网站
4. **疏散区**：该城市的具体疏散区（如迈阿密的 Evacuation Zones A-F）
5. **历史影响**：该城市过去受飓风影响的案例（如 Miami 受 Andrew 1992、Irma 2017 影响）
6. **内链**：链接到对应州的准备页、2026 赛季枢纽页、相关风暴枢纽页
7. **FAQ**：4 个城市特定问题 + `FAQPage` JSON-LD

---

## 任务 3：在 sitemapRoutes.ts 中注册新页面

在 `src/lib/sitemapRoutes.ts` 的 `pageRoutes` 数组中，添加：

```typescript
// 州准备页
{ path: "state/florida/preparedness/", lastmod: updated, priority: "0.8", changefreq: "monthly", section: "pages" },
// ... 其余 11 个州类似（同模式）

// 城市页
{ path: "city/miami/hurricane-tracker/", lastmod: updated, priority: "0.7", changefreq: "monthly", section: "pages" },
// ... 其余 9 个城市类似（同模式）
```

---

## 任务 4：在 search-index.json.ts 中注册新页面

确保新的州准备页和城市页被包含在搜索索引中。检查现有数据导入方式，添加对应条目。

---

## 任务 5：IndexNow 自动化准备

在 `src/lib/` 中创建一个简单的 IndexNow 提交工具函数（如果尚未存在），供后续手动或自动调用。不需要在本次任务中实际调用 API，只需创建函数。

---

## 执行顺序

1. 任务 1：生成 12 个州准备页（先生成 FL、TX、LA 3 个，确认质量后再生成剩余 9 个）
2. 任务 2：生成 10 个城市页
3. 任务 3：更新 sitemapRoutes.ts
4. 任务 4：更新 search-index.json.ts
5. 任务 5：创建 IndexNow 工具函数
6. 运行 `npm run build` 验证
7. 修复所有类型错误

---

## 完成标准

- `npm run build` 零错误通过
- 12 个州准备页可通过 `/state/{state}/preparedness/` 访问
- 10 个城市页可通过 `/city/{city}/hurricane-tracker/` 访问
- sitemap 包含所有新 URL
- search-index.json 包含所有新条目
- 每个页面有 ≥800 字原创内容（不是模板替换）
- 每个页面有 `FAQPage` + `HowTo` + `Article` JSON-LD
- 深色模式下页面样式正常

---

## 执行约束

- 直接修改/创建文件，不输出完整代码
- 不解释、不提问、不总结
- 生成后运行 `npm run build` 验证
- 构建通过则 `git add . && git commit -m "seo: add state preparedness + city tracker pages for 2026 peak season" && git push`
- 最后只输出："Done. 生成 N 个州准备页 + M 个城市页，构建通过，已推送。"

---

## 禁止

- 不生成 <800 字的瘦页面
- 不复制粘贴其他页面的内容
- 不一次性生成超过 5 个页面（分批：先 3 州 → 确认 → 再 9 州 → 再 10 城市）
- 不动已有核心路由文件
