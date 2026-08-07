# Google Search Console (GSC) 提交指南 — HurricaneHub

本文件说明如何把 hurricanetracker.cc 提交到 Google Search Console，并请求索引。

## 1. 验证站点所有权（Cloudflare DNS TXT 记录）

GSC 推荐用「网域提供方」验证。由于本站托管在 Cloudflare，直接在 Cloudflare DNS 里加一条 TXT 记录即可，无需改动代码：

1. 打开 Google Search Console：https://search.google.com/search-console
2. 点击「添加资源」→ 选择「网域」(Domain) → 输入 `hurricanetracker.cc`
3. GSC 会给出一条类似下面的 TXT 记录：
   - **类型**：TXT
   - **名称 / Host**：`@`（即根域）
   - **内容 / Value**：`google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXX`
4. 登录 Cloudflare → 选中站点 `hurricanetracker.cc` → **DNS** → **记录** → 添加记录，粘贴上面的 TXT。
5. 回到 GSC 点击「验证」。TXT 记录全球生效通常几分钟内完成。

（备用方案：GSC 也支持 HTML 标记验证，但本站用 DNS TXT 最省事，且不会因为部署被覆盖。）

## 2. 提交 sitemap

本站的 sitemap 索引地址：

> https://www.hurricanetracker.cc/sitemap-index.xml

提交步骤：

1. GSC 左侧菜单 → **Sitemaps**（站点地图）
2. 在输入框填写 `sitemap-index.xml`（只需填相对路径，不要带域名）
3. 点击「提交」。
4. 状态会显示「成功」，并列出发现的网址数量。

> 说明：`sitemap-index.xml` 内部指向 `/sitemap.xml`，后者由 `src/pages/sitemap.xml.ts` 在构建时生成，已包含首页、9 个州追踪页、各城市页、工具页、博客文章、决策指南页等全部核心路由。新增页面后无需手动改这个索引——只要它在 `sitemap.xml` 里，索引会自动带上。

## 3. 请求索引新页面（URL Inspection）

当你发布了一篇新博客或新页面，想让它尽快被收录：

1. GSC 顶部搜索框（URL Inspection / 网址检查）→ 粘贴完整网址，例如：
   `https://www.hurricanetracker.cc/blog/hurricane-watch-vs-warning/`
2. 若显示「网址不在 Google 中」，点击 **「请求编入索引」(Request indexing)**。
3. 通常 24–48 小时内会被抓取。同一时间不要对大量网址批量请求，以免被限流。

> 提示：内链（站点内互相链接）能显著提升抓取效率。本站各州页、博客文章之间已建立环状内链，有助于 Google 发现新内容。

## 4. 检查 Coverage（覆盖率）报错

GSC 左侧 → **Coverage（覆盖率 / 索引覆盖率）** 报告：

- **有效 (Valid)**：已收录的正常网址。
- **已排除 (Excluded)**：
  - `Discovered - currently not indexed`：已发现但未抓取，通常因抓取配额有限，可对上述网址主动请求索引。
  - `Duplicate, submitted URL not selected as canonical`：有重复内容，检查是否有多套路由指向同一内容（本站在意：州页唯一使用 `/tracker/{slug}/` 规范路径，旧的 `/hurricane-tracker/{slug}/` 已 301 重定向到 `/tracker/{slug}/`）。
  - `Page with redirect`：被重定向，正常。
- **错误 (Errors)**：
  - `Server error (5xx)`：服务端返回 5xx，需排查 Cloudflare Worker / 源站。
  - `Soft 404`：返回 200 但实际是空/不存在页面，检查自定义 404 页是否正确返回 404 状态码。
  - `Submitted URL blocked by robots.txt`：被 robots.txt 拦截；本仓库 `src/pages/robots.txt.ts` 已允许全部公共路径，仅排除内部管理类路径。

建议每周查看一次 Coverage，对新增内容确认「有效」数量随发布增长。

## 5. 其他建议

- 保持 sitemap 与线上一致：每次 `git push` 触发部署后，sitemap 会自动更新。
- 用 GSC 的 **Core Web Vitals** 和 **Mobile Usability** 报告定期体检。
- 若更换域名或大规模改路径，使用 GSC 的「网址迁移 / 更改地址」工具并设置 301 重定向。
