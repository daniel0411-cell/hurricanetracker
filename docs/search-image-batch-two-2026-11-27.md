# 第二批搜索图片与阅读体验优化

## 基准与审计

2026-11-27，detached HEAD，无上游；fresh fetch 后 HEAD 与 origin/main 均为 `700d1dfea7c197d0ce5ec205242965ef9fe9e039`，0/0，无已跟踪改动，原有未跟踪笔记保留。Cloudflare 部署列表独立确认生产 `https://www.hurricanetracker.cc/` 的 100% Worker 版本为 `c8766c1e-7423-46bd-98b1-6bb4eafea75e`，消息标记同一完整提交。

已发现：风级专题已有正文 SVG，但未登记审校代表图，横排小字不适合窄屏；本批其余页面没有与相应正文图解一致的审校代表图。独立 watch/warning 博客仍手写社交卡路径，且原自动检查仅认 blog.ts，不能覆盖该独立文章。以上不是“搜索结果不出图”的已证实原因。没有查询今日 GSC 数据或验证 Google 是否已选择图片。

## 实施范围（8 页）

| 页面 | 有助阅读的内容 |
| --- | --- |
| /hurricane-tracker/hurricane-categories/ | mph、knots 双单位风级对照，风级只描述风的限制 |
| /blog/saffir-simpson-hurricane-wind-scale-explained/ | 在风速定义与阈值正文后复用同图 |
| /hurricane-tracker/hurricane-warning/ | 48/36 小时共享的热带风暴级风到达参照 |
| /blog/what-hurricane-watch-warning-means/ | 在时间与地点阅读步骤后解释时间参照 |
| /blog/hurricane-watch-vs-warning/ | 保留原比较表，随后以同一时间轴辅助理解 |
| /hurricane-tracker/evacuation-zones/ | 地址、天气消息、当前本地命令、安排确认分开记录 |
| /hurricane-tracker/evacuation-plan/ | 同一空白流程用于核对安排，非当地地图 |
| /blog/how-to-check-your-hurricane-evacuation-zone/ | 在地址查询步骤后复用核对图 |

新原创风级图、预警时间图均保留 SVG 和桌面/手机 PNG；撤离页复用第一批已审校流程，不制造地方地图或实际地址结果。四个新 PNG 约 63–91 KiB，无低清放大。源文件 `scripts/gen-warning-guides.mjs` 可显式再生成；不增加依赖或每次构建的渲染开销。

正文 img / OG / Twitter / WebPage / 适用 Article 或 BlogPosting 使用同一代表图登记；手机 source 独立测量。新增独立 Astro 博客的源文件配图检查，实际 HTML 仍由 SSR 校验兜底。直接答案、操作入口和原表格优先保留；只改呈现，不刷新文章或 sourceCheck 日期。旧 sourceCheck 描述的是旧核验，本次图片证据范围在此和图注中单列。

## 事实与素材来源

观察日 2026-11-27，通过后台浏览器先搜索 NHC 预警定义，再打开一手页面核验：

- https://www.nhc.noaa.gov/aboutsshws.php — 74–95 / 96–110 / 111–129 / 130–156 / 157+ mph；64–82 / 83–95 / 96–112 / 113–136 / 137+ kt；3–5 为 major；不计 surge、rain flooding、tornadoes。页面未提供本次读取可确认的出版日期。
- https://www.nhc.noaa.gov/aboutgloss.shtml — hurricane watch: possible / 48h；warning: expected / 36h；参照 anticipated tropical-storm-force winds，不是 landfall 或重新起算的个人倒计时。仅读定义，未核实任何当前预警。
- https://www.ready.gov/evacuation — 查地方计划、提前确认目的地和交通、遵循地方指令、路况与重返限制。仅读指导，未输入地址、验证路线或确认任何收容安排。

图解为 HurricaneHub 原创排版，没有复制第三方摄影、界面、地图或风暴观测；使用依据、来源和限制逐页登记在 representativeImages.json。不是官方紧急协议。不同县的区划和命令不能由该图推导。

## 仍需素材和后续范围

登记由 21 页增至 29 页：46 篇数据源博客中 12 篇有审校代表图，另覆盖 1 篇独立博客。登记不等于 Google 收录或缩略图展示。剩余 34 篇数据源博客不能以社交卡视为配图完成。

本批未覆盖 map/path、ENSO、热带发展阶段、准备时间轴、应急包和工具系列。map/path 优先复核并复用真实历史产品，ENSO 先查来源与图例；准备时间轴避免把固定小时当个人安全期限；CDC 小图保持原生大小。地方指南如需区域地图，仍须核对具体机构、日期、图例和使用依据。没有合适素材就保留缺口，不用虚构截图或关键词海报补数。

## 验收

- `npm run check`：241 files，0 errors、0 warnings、4 个既有 hints。
- `npm run build`：成功；203 个实际测量素材、29 个登记代表页。既有 public robots.txt 与同名端点的构建提示保留，本轮未改路由。
- `node scripts/verify-rendered-images.mjs http://127.0.0.1:4323`：29 个代表页、全部 46 篇数据源博客、23 个图片资源通过；404 与 preview 的索引限制保留。首次命令早于服务就绪而连接失败，服务就绪后完整重跑通过。
- 8 个受影响页面逐页实测桌面 innerWidth/Height=1440×1000，clientWidth/scrollWidth=1425/1425；手机=360×800，345/345。所有代表图 complete、naturalWidth>0，手机加载 mobileSrc，没有整页横向溢出。桌面图宽 603.9–1120 CSS px，手机图宽 305–309 CSS px，无低清放大。
- 人工查看四个新源 PNG，以及窄屏风级、预警、撤离页面截图；没有裁切关键图文或扭曲比例。复杂图旁保留等价正文，独立比较页仍有原始 HTML 表格。
- 逐行对比确认数据源博客的 datePublished/dateModified/sourceCheck 未变，独立文章 modified 也保留。
- 本地浏览器数据证据保存在仓库外 `search-image-batch-two-local-layout.json`；发布提交、Worker 版本、生产验收和截图另记仓库外 release 回执，发布后才计为线上完成。

未来更新继续遵守 [内容图片发布规范](content-image-publishing-standard.md)。本轮不承诺 Google 缩略图、点击率或 AdSense 结果。
