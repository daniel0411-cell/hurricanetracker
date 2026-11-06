# 核心页面内容优化实施记录

日期：2026-11-06。状态：内容及素材接入已完成，按用户授权进行构建、提交和部署；实际发布结果另记部署记录。未进行搜索引擎提交。

## 基准和边界

已完整阅读 AGENTS.md，重新检查状态、远程、分支配置，执行 fresh fetch 和远程默认分支查询。`main` 跟踪 `origin/main`，远程默认分支 `main`；双方均为 `1c8c9eda3c063f339fd0ba522125ccc08ac0afe0`，领先/落后 0/0。初次沙箱内 fetch 和 DNS 查询失败，获准在沙箱外重试后成功。

原有 `ReminderSignup.astro`、`api/push/send.ts` 修改及未跟踪研究文件保留。本轮更新内容数据及精确页面编辑日期；不修改路由逻辑、工具算法、依赖、部署配置或 sitemap 真相源。审计文档中的撤离工具权重调整是另一个涉及行为的任务，本轮未实施。

## 已实施内容

| 页面 | 证据与解释 | 读者任务 |
| --- | --- | --- |
| 风力等级博客 | NHC sustained-wind 定义和各单位阈值；Irma discussion 28；Michael best-track 1200 与 1730 UTC | 从真实 INIT/forecast 字段判断类别，区分当前/预测、登陆与早先时刻，完成五字段记录 |
| 洪水保险博客 | NFIP coverage、Claims Checklist、start-a-claim；保留此前已核对的 loss-avoidance 条件 | 分别记录建筑/财物限额和免赔额；完成明确虚构的教学例子；带着未确认条款与安全损失清单联系保险人 |
| 快速增强博客 | HURDAT2 AL142018：2018-10-09 1200 UTC 90 kt，1800 UTC 100 kt；10-10 1200 UTC 125 kt | 计算严格 24h 的 +35 kt，并解释为何另一个 18h 配对不能代替 |
| 模型读图博客 | 保留 Danny 历史 PDF 例子，新增已上线 Joaquin 阅读练习及假设时间算术的直接锚点 | 选择有相应标签的材料作答；不从 Joaquin 缺失的逐点时效补造答案 |
| Why Forecasts Change | Irma discussion 26/28 原始预报表，统一 valid 2017-09-06 1200 UTC | 配对 26 的 24H 与 28 的 12H；识别 +5 kt / 0.1° west 的预报修订，不说成观测增强或验证成绩 |
| Evacuation Zones | 实读 Miami-Dade、Hillsborough、Chatham 的官方解释页及服务入口 | 分开记录地图结果、版本、当前命令和已确认/待确认安排；知道三地字母体系不能互相套用 |
| Savannah 常备指南 | CEMA 新分区/协助页；NWS Matthew 的 Fort Pulaski storm tide 与 datum | 完成地方地图、指令、交通、照护及目的地的确认记录；阅读具体潮位时保留单位、基准和初步状态 |

风力等级已移除未注明事件/基准的泛化潮高、无统计期间的 major-hurricane 比例和 total-destruction 简写，修正从 cone 读取精确登陆强度的措辞。保险已移除 universal wind/water line、固定 48/24h 风暴倒计时以及通过 cone/wind radii 判断到达时刻的引导。

## 核对过的来源和字段

- `https://www.nhc.noaa.gov/aboutsshws.php`：kt/mph 阈值和潜在风损描述。
- `https://www.nhc.noaa.gov/aboutgloss.shtml`：一分钟平均持续风、best track、RI 定义。页面不把事后 best-track 估计包装成单一仪器直接观测。
- `https://www.nhc.noaa.gov/data/`：链接到本次采用的 `hurdat2-1851-2025-092326.txt` 发布版。
- `https://www.nhc.noaa.gov/data/hurdat/hurdat2-1851-2025-092326.txt`：核对 AL142018 三条 RI 练习记录，以及 October 10 1730 UTC 带 L 标记的 140 kt 登陆行。正文提取日期、UTC 和风速，并解释如何定位原始字段；完整原文件还包含状态、位置、压力及风圈字段。
- `https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml`：1100 AM AST September 5 / 1500 UTC；printed 24H 行为 `06/1200Z 18.1N 63.0W 150 KT 175 MPH`。
- `https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml`：1100 PM AST September 5 / September 6 0300 UTC；printed 12H 行为 `06/1200Z 18.1N 63.1W 155 KT 180 MPH`，printed 24H 则为 `07/0000Z`。保留其条件性结构诊断，不把 5 kt 修订独立归因于一次已确认眼墙置换。
- `https://www.floodsmart.gov/get-insured/buy-a-policy`：coverage、独立 deductible、除外和等待期例外；没有认证私营保单条款。
- `https://www.floodsmart.gov/claims-checklist`：安全、declarations、建筑与财物分别记录、照片、联系日志和文件提交。
- `https://www.floodsmart.gov/recover/start-a-claim`：通知、adjuster 和按保单及证明材料确定赔付。
- `https://www.miamidade.gov/global/emergency/hurricane/storm-surge-zones.page`：五个 A-E planning zones 及 Know Your Zone 入口。
- `https://www.hcfl.gov/residents/public-safety/emergency-management/find-evacuation-information`：HEAT、A-E、2025/2026 地图对照和 HART 入口。
- CEMA 旧 `/prepare-now/evacuation-zones/` 返回包含 `404 / PAGE NOT FOUND` 的 HTTP 200 页面。实际从官网导航确认并改用 `https://chathamemergency.org/PrepareNow/EvacuationZones`；该页解释 A/B/C，链接 `https://public.sagis.org/evaczones/`。
- `https://chathamemergency.org/PrepareNow/EvacuationResources`：assembly-area、CAT、Enmarket 无停车约束、动物安排和 Registry，均为常备程序；未声称当前已启动或个人已获安排。
- `https://www.weather.gov/chs/HurricaneMatthew-Oct2016`：preliminary Fort Pulaski 12.56 ft MLLW storm tide，2016-10-08 0742 UTC / 3:42 AM EDT。保留 preliminary，明确不是住宅地面以上水深，最大 surge 与 storm tide 的时刻不同；不沿用其当时的最高纪录措辞作为今天的纪录。

临时原始抓取和解析文件：`/private/tmp/hh-evidence-sources-20261106/`。HTML 使用已安装的 parse5 解析；HURDAT2 为官方逗号分隔纯文本，按 storm ID 和原始记录字段定位。尚未验证任何实际家庭地址、地图交互结果、当下命令、道路、班车启动或避难所状态。

## 已接入素材

Michael 24h 风速记录已接入快速增强博客，Irma 同有效时刻预报对照已接入 Why Forecasts Change 专题。两图均用官方原始数值代码绘制，提供桌面/手机 WebP 与可编辑 SVG，保留来源和历史标记。快速增强博客以真实数据图替换无信息增量的手机场景封面。原始 Prompt 在 `content-media-prompts-2026-11-06.md`；来源与编辑记录见 `content-media-provenance-2026-11-06.md`。

Irma 公共发行时间与原表 horizon 分开标注：打印 24H/12H 的两行实际分别在公共发行后 21/9 小时有效。同有效时刻 +5 kt 是预报修订，不是观测增强。Michael 使用严格 24h 的 +35 kt，另列 18h 的 +25 kt 作为不匹配对照。

发布采用从基准提交导出的独立目录，仅复制本轮内容文件和素材。既有 ReminderSignup / push/send 未提交改动不进入发布产物。使用直接 Wrangler 部署，避免现有 npm deploy 自动附带的搜索引擎提交。

## 验证

### 素材接入后的发布验证

- 独立发布目录 `/private/tmp/hh-content-release-20261106-cst6UN`：`npm run build` 通过；`npm run check` 为 0 errors、0 warnings、4 条既有 hints。
- 内链 64 个 HTML、媒体 46 条博客和 62 个静态 sitemap HTML、内容 94/94 页与 46 条文章记录检查通过。
- 七个更新页面在 1440px / 360px 共 14 项浏览器检查通过：HTTP 200、单一 H1、canonical、11 月 6 日 schema 日期、指定正文、两图完整加载及响应式选择、读图题展开、无横向溢出或脚本异常。两张手机图人工查看通过。
- `schema:audit` 仍在首页 SSR 包装文件上报三项 source missing。`src/pages/index.astro` 与基准提交相同，仅调用 Homepage；另用浏览器读取实际首页 JSON-LD，确认含 WebSite、Article、BreadcrumbList。此脚本项未计为通过。
- 浏览器校验脚本 `/private/tmp/hh-content-release-check.mjs`，本地截图及结果 `/private/tmp/hh-content-release-proofs/`；原始素材各自的 SVG 布局与来源哈希校验仍保存在 handoff 目录。

### 前一轮纯内容验证记录

- `npm run check`：0 errors、0 warnings，4 条既有 hints。
- `npm run build`：通过；最后压缩 RI 与 NFIP 案例前言后再次构建通过。
- `npm run links:audit`：64 个 HTML 文件通过。
- `npm run media:audit`：46 条博客记录、62 个静态 sitemap HTML 通过。
- `CONTENT_AUDIT_BASE_URL=http://127.0.0.1:8820 npm run content:audit`：94/94 页面和 46 条文章记录通过。初次沙箱 localhost 请求失败，在获准的本地网络检查环境中复测通过。
- Playwright：7 个页面分别检查 1440px 和 360px；核对 HTTP 状态、单一 H1、canonical、编辑日期与 schema、新内容、图片、横向溢出和脚本错误；另检查三处读图练习锚点。首轮及最后两段前言调整后的复测均为 14 项通过；最终手机截图已人工查看。
- `node scripts/home-feed-content-regression.mjs` 未通过：其导入的 `home-preview-regression.mjs:65` 在 mixed-basin fixture 期望 1 个 Atlantic，实际为 0。使用 `git show HEAD:<path>` 读取基准提交源文件，在内存中重跑同一检查，复现相同失败。该失败存在于本次内容修改之前；本轮没有修改测试或相关 feed 逻辑，不将此项计作通过。

本地预览：`http://127.0.0.1:8820/`，使用临时 Wrangler 配置和本地 KV，无部署或远程 KV 写入。重新构建会重置构建产物中的静态资源绑定；已将临时预览配置调整为本次构建要求的 `ASSETS`，图片响应恢复为 HTTP 200，未修改项目配置。

浏览器脚本和截图：`/private/tmp/hh-evidence-browser-20261106.mjs`、`/private/tmp/hh-evidence-browser-20261106/`。这些是本地版本的观察，不代表线上部署已更新。
