# Codex Prompt：Bing 索引诊断 + /storm 修复

> 把本文件全文复制给 Codex 即可。Codex 会在本机自主完成「诊断 → 修 robots.txt → 推 Bing → 验证」全流程。

---

## 任务

你正在维护 HurricaneHub（hurricanetracker.cc）——一个基于 Astro 7 的 SSR 站点，通过 `wrangler.deploy.toml` 部署到 Cloudflare Workers。工作目录：`/Users/daniel/Documents/hurricanetracker`

诊断并修复 3 个新上线的 2026 命名风暴档案页为何没被 Bing 收录，并提升整站 Bing 索引覆盖率。

## 问题背景（来自 Bing Webmaster Tools）

- 3 个页面于 2026-08-20 上线：`/storm/2026-arthur/`、`/storm/2026-bertha/`、`/storm/2026-cristobal/`
- 在 Bing 的 URL 检查里，`/storm` 这一组完全没有任何数据（无点击、无印象、无抓取日期、无 HTTP 状态），而 `/live` 是正常的（26 点击、2.1K 印象、最后抓取 8月17日、HTTP 200）。
- Bing 的 URL 检查面板显示「Robots.txt 阻止：true」——危险信号，说明可能有 robots.txt 规则把 `/storm` 网址挡在抓取/索引之外。
- 站点 sitemap 约有 73 个 URL，但 Bing 索引数看起来只有约 26 → 覆盖率约 35%。

**注意：你无法打开 Bing Webmaster 图形界面。请全部用代码验证：读取真实的 robots.txt 文件、sitemap 文件，并 curl 线上站点。**

## 步骤（先只读诊断，再动手修）

### 1）读取 robots.txt（最大嫌疑）

- 读取 `dist/client/robots.txt`（Cloudflare 实际对外提供的版本）。
- 找出它是怎么生成的（在 `src/` 和 `public/` 里搜 robots 源文件，或找构建时写入它的脚本）。
- 重点检查：`/storm/`（或通配符如 `/s*`、`/*`）是否被 Disallow？`/blog/`、`/tracker/`、`/tools/`、`/hurricane-tracker/` 是否也被挡？
- 报告你找到的具体拦截规则。

### 2）核对 sitemap

- 打开 `dist/client/sitemap.xml`（以及可能的分片文件：`sitemap-index` / `-pages` / `-blog` / `-locations` / `-tools`）。
- 确认 3 个 `/storm/2026-*` 网址已列出，且 canonical 为 `https://www.hurricanetracker.cc/storm/2026-*/`（带尾斜杠）。
- sitemap 的真相源是 `src/lib/sitemapRoutes.ts`——除非发现真 bug，否则不要改它（按 AGENTS.md 它是受保护文件）。

### 3）如果 robots.txt 挡了内容页，就修

- 若 `/storm`（或其他内容路径）被 Disallow，请移除或调整该规则。保留 `/api/` 和任何内部/管理路径的封锁；放行所有公开内容页。
- 重新构建，然后部署（见下方操作说明）。

### 4）推送到 Bing

- 使用 `indexnow-submitter` 技能（或 `scripts/indexnow-submit.mjs`）通过 IndexNow 把 sitemap + 3 个新 `/storm/` 网址提交给 Bing。
- sitemap 地址：`https://www.hurricanetracker.cc/sitemap.xml`
- 确认 IndexNow 密钥文件（如 `/<KEY>.txt`）存在于 `public/` 且能通过 `https://www.hurricanetracker.cc/<KEY>.txt` 正常访问。
- 另外请在 Bing Webmaster 后台确认 sitemap 已提交（注：这步无法用代码完成，若无权限请提示用户去界面里手动确认）。

### 5）验证

- 对 `https://www.hurricanetracker.cc/storm/2026-{arthur,bertha,cristobal}/` 各执行 `curl -I` → 必须返回 HTTP 200，且 `<title>` 与 canonical 正确。
- `curl https://www.hurricanetracker.cc/robots.txt` → 确认 `/storm` 已不再被挡。

## 操作须知（这台 Mac Mini 机器）

- **构建**：`npm run build`。若卡在 `.vite` 缓存清理这一步，请关闭沙箱/网络限制再跑（沙箱的安全删除守卫会拦截 `.vite` 清理）。
- **部署**：`env -u HTTP_PROXY -u HTTPS_PROXY npx wrangler deploy --config wrangler.deploy.toml`（必须去掉代理，否则连不上 Cloudflare）。
- **Git 推送**：保留代理环境变量（git 不要 `env -u`）。若返回 502，重试即可——沙箱代理偶尔会瞬时拦截 github。
- **受保护文件，禁止修改**：`package.json` 依赖、`astro.config.mjs` 的 i18n/site 字段、`src/pages/sitemap*.xml.ts`、`src/lib/sitemapRoutes.ts`、`wrangler*.toml`、`gcp-sa.json`。
- **修完后**：`git add . && git commit -m "seo: 修复 robots.txt 误挡 /storm；提交 sitemap 到 Bing" && git push`，然后部署。

## 请回报

1. 具体是哪条 robots.txt 规则在拦截（如果有）；
2. 3 个 `/storm` 网址是否已在 sitemap.xml 中；
3. IndexNow 提交结果；
4. 对 3 个页面 + robots.txt 的最终 curl 验证结果。
