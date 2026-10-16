# HurricaneHub 项目规范

> 任何 AI 工具（Trae CN / WorkBuddy / Codex 等）在修改或审计本项目前必须先完整阅读本文件，并完成下述版本检查，再按规范操作。

## 修改与审计前检查版本（必须遵守）

### 仓库配置与发现
- 2026-10-15 已核实：远程 `origin` 的 fetch/push 地址均为 `https://github.com/daniel0411-cell/hurricanetracker.git`；当前本地分支为 `main`，上游为 `origin/main`；远程 HEAD 指向 `refs/heads/main`，默认分支为 `main`。此记录仅供参考，每次工作仍须重新检查实际配置，不能假定远程名或默认分支固定为 `origin/main`。
- 每次修改或审计前，先执行 `git status --short --branch`、`git remote -v`、`git branch -vv`，检查分支的 remote/merge 配置和上游；检查已暂存、未暂存及未跟踪文件，必要时分别查看 `git diff`、`git diff --cached` 和相关文件。不得输出凭据或敏感文件内容。
- 从当前分支配置和任务目标确定相关远程；使用 `git ls-remote --symref <remote> HEAD` 确认远程默认分支。涉及多个远程时，分别识别上游远程、默认分支所属远程及推送目标；无上游、detached HEAD 或远程 HEAD 无法解析时如实报告，不擅自设置上游或切换分支。

### 获取与比较
- 开始实质工作前，对相关远程执行 `git fetch <remote>`，确保上游分支及远程默认分支已获取；若 fetch refspec 不包含目标分支，显式获取目标引用。不能仅凭缓存的远程跟踪分支、旧的 `origin/HEAD` 或本地 `git status` 声称版本最新。
- 用提交图判断关系，例如 `git rev-list --left-right --count HEAD...<远程引用>`（左侧为本地独有提交数，右侧为远程独有提交数），必要时使用 `git merge-base --is-ancestor` 和提交日志确认：两侧为 0 是一致，仅左侧非 0 是领先，仅右侧非 0 是落后，两侧均非 0 是分叉；无共同祖先时明确报告历史不相关。不得按提交时间判断版本先后。
- 功能分支除与自身上游比较外，还必须与刚获取的远程默认分支比较；没有上游时仍比较远程默认分支，并说明缺少上游。功能分支相对默认分支的差异不等于必须同步或合并。
- 开始编辑、运行审计或形成审计结论前，简要报告：当前分支及上游、相关远程和默认分支、`HEAD` 与比较目标的提交 ID、领先/落后数量及关系、未提交改动概况，以及本次工作的版本基准（提交 ID，是否叠加工作区改动或采用用户指定旧版本）。

### 同步与保护现有工作
- 当前本地分支跟踪远程默认分支、工作区干净（包括无未跟踪文件）、本地落后且可快进时，应先执行 `git merge --ff-only <刚获取的上游引用>` 同步，并报告同步后的基准；用户指定旧版本时除外。该条件范围内的快进同步无需再次确认，不自动切换其他分支。
- 本地领先时保留本地提交，默认以本地版本继续；分叉或存在未提交改动时，先检查相关提交与文件差异，保护已有工作，在基准明确且不覆盖现有工作的前提下继续。仅在确实需要用户选择版本基准时询问，不把功能分支正常差异当作必须询问的理由。
- 无法 fetch、查询默认分支失败或目标引用未成功获取时，明确说明“未能确认远程最新状态”，列明失败环节和已知本地基准；可在任务允许时基于本地版本继续，但不得声称本地已是最新版本。
- 未经用户明确授权，不得为同步而丢弃改动、清理未跟踪文件、自动 stash、reset、rebase、合并分叉历史、推送或部署。版本检查、fetch 和上述条件内的快进同步不构成提交、推送或部署授权。

### 推送、部署与线上审计
- 推送或部署前，再次 fetch 相关远程并复核提交关系与目标提交；检查后如出现远程变化，重新判断，不使用强制推送解决差异。发布命令内部的检查仅在覆盖实际相关远程及目标分支时才可视为完成此要求。
- 审计线上站点时，单独通过部署记录、构建提交标识或可核验的发布元数据确认部署版本，报告站点地址、部署 ID/提交 ID 及其与本地基准的关系；不得由本地 HEAD 或远程分支推断线上版本。无法确认时明确说明“未能确认线上部署版本”，并区分线上观察与本地代码结论。

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
- 发布上线：`npm run ship`（须先提交预期文件；脚本要求工作区无已跟踪改动，执行 build → fetch → 校验 → push → deploy；当前脚本固定使用 `origin/main`，配置变化时先检查适用性；**仅在用户明确说"上线"时使用**）
- 仅重发已提交版本：`npm run deploy`（须有部署授权，并先完成发布前版本检查）
- 中间提交（未上线）：仅在用户明确授权提交、推送时，选择性暂存本次文件，再执行 `git commit -m "type: message"` 和 `git push`；不自动使用 `git add .` 混入已有工作
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
- 简洁沟通，必须提供上述版本基准报告；遇禁区或确实需要选择版本基准时询问用户
- 业务代码或站点内容改完运行 `npm run build` 验证；构建失败立即修复，不进入提交。仅修改规范或文档时检查差异与格式即可，除非用户另有要求
- 构建通过不构成提交、推送或部署授权；仅在用户明确授权相应操作时执行，并遵守发布前版本检查。用户说“上线”时才可使用 `npm run ship`
- 完成后简要报告实际修改、验证结果及提交/推送/部署状态；未执行的操作不得宣称已完成。用户指定只更新规范文件时，只更新该文件，不提交、不推送、不部署

## 当不确定时
- 遇禁区改动 → 停下询问用户授权
- 遇歧义 → 选保守方案，优先保证不破坏现有功能
- 遇已存在但与本规范冲突的实现 → 以实际代码为准并在响应中说明
