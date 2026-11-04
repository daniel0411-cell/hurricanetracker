# HurricaneHub 内容质量深度审计

审计日期：2026-11-04。对象：<https://www.hurricanetracker.cc/>。

## 结论

当前最值得投入的是：纠正工具给出的避险动作、保证实时结果可信、让核心页面提供可读的实际证据和可以完成的当地任务。继续增加相似文章、字数、目录入口或装饰性封面，收益低于修复这些问题。

前几轮的修改有实际价值：Florida / Texas / North Carolina 的历史案例、FEMA 地图教学、NHC 风暴潮示例、家庭记录表和保险算例已经提供了信息增量。但这种质量还没有贯穿主题页、州页和工具输出。部分文章已经修正的定义，在另一套数据或工具规则中仍然错误。

这是一份内容与产品可信度审计，不能据此确定 Google 上次拒审的内部原因，也不能计算下一次 AdSense 通过率。伊莫站获批可以说明此前的方法有参考价值，不能代替本站的独立评估。

## 版本与范围

- 分支：`main`；上游：`origin/main`。
- 远程 fetch/push：`https://github.com/daniel0411-cell/hurricanetracker.git`；远程默认分支经 `ls-remote --symref` 确认为 `main`。
- 本次已成功执行 fetch；本地与远程均为 `b5cb26fda3aba113b23ac730c7d3cddda5212b08`，领先 / 落后 `0 / 0`。
- 审计开始时无已跟踪文件改动；存在 19 项既有未跟踪路径，包括草稿、检查脚本、部署记录和 scratch，均保留。
- 独立查询 Cloudflare 部署记录：部署 `1513c857-5127-4a2d-a072-e9125c208cc5`，Worker version `2ee2c910-1806-4a05-b1bf-1a3307797a38`，流量 100%；版本注释包含上述完整 Git 提交。线上与本地审计基准一致。
- 本轮仅新增本报告；未修改业务代码、站点内容、索引策略或配置，未提交、推送、部署或提交搜索引擎。

### 实际覆盖

从线上 XML sitemap 解析并抓取全部 **189 个 URL，189 个最终 HTTP 200**。逐页提取正文、标题、canonical、robots、图片、链接、FAQ 和 JSON-LD，并结合代码深入检查关键页面族。

| 页面族 | URL 数 | 说明 |
| --- | ---: | --- |
| 博客路径 | 50 | 含列表、独立页面；其中 `blog.ts` 生产文章 46 篇 |
| 博客分类 | 5 | 分类入口 |
| 城市实时路径 | 34 | 33 个城市及目录 |
| 州 tracker 路径 | 10 | 9 州及目录 |
| 常备地方指南 | 22 | 12 州、10 城市 |
| Tracker 主题及实时入口 | 25 | 23 个主题、live、tropical disturbances |
| 工具路径 | 15 | 含目录 |
| 风暴名称路径 | 7 | 含目录，不含所有动态注册表 URL |
| 独立 2026 风暴档案 | 3 | Arthur、Bertha、Cristobal |
| 其他 | 18 | 首页、季节页、政策及功能入口等 |

所有 189 页的 canonical 与所抓取 URL 一致，未发现页面级 noindex；每页有一个 H1、description，已出现的 JSON-LD 均可解析。这些是结构检查，**不表示每个气象、保险或地方历史事实均已逐条核实**。本轮也没有 GSC、Bing 或 AdSense 后台新数据，不能推断真实收录、流量或审核抓取版本。

执行现有检查：`media-audit` 通过，覆盖 46 条博客媒体记录、62 个静态 sitemap HTML；`internal-link-audit` 通过，覆盖 64 个 HTML。两者不等于所有 SSR 页面及其交互均已验证。另直接编译执行原有脚本，使用模拟响应复现了下面四个具体输出；模拟未写入生产环境。

## 优先问题

### 1. [P1] 自动动作建议把应当就地避险的警报映射成 Leave

证据：`src/lib/weather.ts:57`，尤其第 59 行；下游包括 NWS proxy、local-risk-plan、impact-window、hurricane-brief、个人 dashboard 等。`src/pages/tools/alert-action-decoder.astro:165` 还有另一套不一致的动作追加规则。

实际执行 `decisionLevel()`：

| 模拟警报 | 当前自动输出 | 问题 |
| --- | --- | --- |
| Hurricane Warning | Leave | 风警报并不自动构成地方撤离令；同站 decoder 却输出 Act |
| Extreme Wind Warning | Leave | NWS 对应动作是立即进入坚固建筑内部避险，不能默认建议上路 |
| Hurricane Watch | Act | 不同入口对 watch 的动作口径不一致 |
| Storm Surge Watch | Act | 前面的宽泛正则先匹配，后面的 Prepare 分支不会处理这种 watch |

在 impact-window 的模拟测试中，输入 `Miami 33101`，给州级 feed 返回一条 Extreme Wind Warning，页面显示 `Leave`，动作列表包括使用官方道路、携带物资等撤离式建议。

NWS 原文依据：<https://www.weather.gov/safety/hurricane-ww>，本轮读取成功：Extreme Wind Warning 的指引是 “Take immediate shelter in the interior portion of a well-built structure.” Hurricane Warning 与地方 evacuation order 也应分别判断。

另一个已复现的矛盾：decoder 选择 Tornado Warning + vulnerable，先显示立即进入室内避险，又追加“比公众截止时间更早转移弱势人员”。这不是当前龙卷风预警下适合追加的通用动作。

最小修复：按具体灾种输出动作；把“官方撤离令”“暴风眼墙极端风”“龙卷风即时避险”“较早阶段的家庭转移规划”分开。不要把它们压缩成一个数值或四档标签后生成统一建议。

验收：至少覆盖 hurricane watch/warning、surge watch/warning、extreme wind、tornado、flash flood、官方 evacuation order；不同页面对同一输入必须一致，极端风和龙卷风不能自动追加一般性上路转移建议。

### 2. [P1] 数据失败仍可能显示“没有风暴”，刷新也可能保留已结束风暴卡片

证据：

- `src/pages/hurricane-tracker/city/[city].astro:281`：不检查 HTTP 状态，缺少 storms 时默认空数组。
- `src/pages/hurricane-tracker/live.astro:18`：SSR 获取失败后 `storms = []`，生成 “No active NHC systems listed”。
- 同文件 `:465`：刷新不检查缓存新鲜度，缺失 timestamp 时用当前时间；`:476` 仅在数组非空时替换列表。
- `src/pages/hurricane-tracker/[topic].astro:24` 及 Gulf 客户端刷新同样需要检查可用性和新鲜度；该主题还在构建时预渲染，失败时可能留下旧状态。

已复现：给城市脚本返回 HTTP 503 + `{error: 'NHC unavailable'}`，页面显示 “No active NHC center is currently within 500 miles…”。这不是经成功查询得到的空结果。

已复现：live 列表已有一张活跃风暴卡，下一次成功响应返回空 storms，计数变为 0，但旧卡片仍在。

最小修复：明确区分“成功且空”“成功且有数据”“不可用 / 陈旧”；缺失数据时间不能显示为刚刚更新。正确清理旧卡片。可复用当前 `2026-hurricane-season.astro:17` 已有的新鲜度与结构验证思路，无需重造数据系统。

验收：HTTP 5xx、错误 JSON、字段缺失、过期缓存、成功空数组、最后一个系统结束分别验证；title / description / FAQ / 正文 / 客户端刷新保持同一含义。

### 3. [P1] 旧的预警定义仍留在主题页，已修正文与旧内容互相矛盾

证据：`src/data/topicPages.ts:285`、`:295`、`:305`。

线上 <https://www.hurricanetracker.cc/hurricane-tracker/hurricane-warning/> 仍把 Hurricane Warning 表述成飓风条件通常在 36 小时内到达；这里应该解释“提前于预计热带风暴级大风开始的时间”，不能把 hurricane-force 和 tropical-storm-force 的到达时间混为一谈。相同数据的 FAQ 也会进入 JSON-LD。

同页列表写着 `Storm surge warning: life-threatening water possible`，混淆了 watch 的 possible 与 warning 的 expected。已修正博客及 storm-surge-checker 的表述较准确。

最小修复：按概念查找全站所有变体，一起核对正文、摘要、FAQ、结构化数据和工具说明；不要只修一篇博客。

验收：主题页与 watch/warning 博客、surge checker、decoder 的定义一致；来源明确指向官方产品定义。

### 4. [P1] 当前警报会生成没有依据的 24 / 48 小时处理窗口

证据：`src/components/LocationRiskPlanner.astro:151`，尤其 `:159`。

Act 的输出包含 `Within 24 hours` 转移、`Within 48 hours` 确认目的地等文字，但没有读取真实风到达时间或给任务计算这些期限。Act 可能来自即时的龙卷风或山洪警报。已修改的家庭指南反复强调不能用固定倒计时，工具却仍然提供倒计时。

最小修复：未接入相应官方时序产品时，改成“现在按具体警报行动”“事前准备记录”“地方截止时间”；即时灾害动作不能挂在 24 / 48 小时窗口下。事前演练可保留阶段清单，但要与当前警报结果分开。

验收：没有官方 arrival / deadline 数据时不输出推算期限；tornado / flash flood 等即时警报不生成数十小时准备窗口。

### 5. [P2] 部分工具的标题承诺大于实际计算能力

证据：`src/pages/tools/impact-window-estimator.astro:37`、`:123`、`:127`、`:136`、`:139`。

页面 H1 是 “When Will a Hurricane Reach My Location?”，表单收集 City / ZIP，但城市输入只被加到结果文字前。实际请求只有全州 NWS alerts 和全局 NHC 系统列表；既无位置过滤，也无风暴到达计算。展示的时间是最早一条警报的 **expiration**，不是大风抵达时间。

已有说明承认“不预测 arrival”，但说明不能替代标题承诺的实际功能。

最小修复优先方案：把产品诚实收敛为“州级警报与行动清单”，移除无实际用途的 City / ZIP，清楚标注 expiration。未来若要真正提供到达窗口，应另行评估 NHC earliest reasonable / most likely tropical-storm-force wind arrival 产品及其覆盖范围，不能用中心距离除速度代替。

验收：标题、输入、实际请求、结果、description 和 schema featureList 对得上；输入必须实质影响输出，或直接移除。

### 6. [P2] 内部 SEO 关键词与“搜索意图”说明直接展示给读者

证据：`src/pages/hurricane-tracker/[topic].astro:87`、`src/components/StateTrackerSeoLinks.astro:49`、`src/pages/learn.astro:208`、`:226`、`:232`；还有 tracker 目录和 storm archive 的类似文本。

线上浏览器确认可见的例子：

- `LIVE HURRICANE TRACKER, HURRICANE TRACKER LIVE, CURRENT HURRICANE TRACKER`
- `WHAT DOES A HURRICANE LOOK LIKE, HURRICANE SATELLITE IMAGE, HURRICANE RADAR`
- `Learn by Search Intent`、`Tracker keyword hubs`
- archive 中出现 “Erin tracker queries often spike…”、“Melissa searches show strong live-tracker intent…” 等选题备注。

这些文字解释的是站长为什么建立页面，不是读者如何理解飓风。主题页、州页和学习入口因此仍有明显的关键词目录感。

最小修复：将 keyword intent / searchDemandNote 留在编辑数据内部，正文用实际问题或主题标签。精简重复的“去另一个页面继续看”模块，优先展示该页可以直接解决的任务。

验收：读者可见区域不再出现关键词串、搜索量备注或 SEO 工作术语；入口说明能区分具体产品用途。

### 7. [P2] 六个州页的当地信息还不足以支撑现有页面长度

线上正文检查：Alabama、Georgia、Louisiana、Mississippi、South Carolina、Virginia 六页均没有直接的外部官方资源链接。这里统计的是正文，不包括全局免责声明和页脚；有些警报是 JavaScript 后加载，因此也不能理解成整页绝无官方信息。

以 Alabama 为例，正文约 1,032 英文词，但核心地方介绍主要是一段概述。之后大量内容是工具入口、主题快捷入口、风险快捷入口、重复城市入口。Florida / Texas / North Carolina 则已有具体 TCR 和地方操作资源，可以直接比较出质量差距。

证据：`src/pages/tracker/alabama.astro:23`、`:94`，以及上述六州对应文件、`src/components/StateTrackerSeoLinks.astro`。

最小改法：一州一次完成一个真实任务闭环，例如“查地方 zone -> 确认官方交通路径 -> 做一条有出处的历史案例比较”。历史案例应有事件、时间、指标与基准，说明它为何影响当地的准备选择；不要为了每州十个历史风暴而加流水账。道路 contraflow、桥梁状态等事实要核对负责机关，不能把可能实施的措施写成固定可用功能。

优先下一州：Louisiana，再做 Alabama / Mississippi；具体排序可结合之后取得的流量与用户访问数据调整，本轮没有流量依据。

验收：读者能从本页直接进入当地官方 zone / emergency management / road 来源并完成记录；至少一段当地案例解释有原始依据，重复导航显著减少。无需把每页机械扩至相同字数。

### 8. [P2] 视觉主题仍缺实际可读示例，已有封面不能代替教学证据

线上 <https://www.hurricanetracker.cc/hurricane-tracker/what-does-a-hurricane-look-like/> 没有图片，却需要解释 eye、eyewall、rain bands、outflow。浏览器已确认。spaghetti-models 主题页同样无图；storm-surge-map 主题只有通用灾种示意图，没有在本页解释一个实际或清楚标明的教学水深图。

46 篇 `blog.ts` 文章中，7 篇配置了嵌入式 figures；15 篇有明确 sourceCheck 范围。没有 figures 不自动等于低质量，没有 sourceCheck 也不代表未校对，但对于视觉解释主题，证据确实不足。

已查看两个本地图像：spaghetti 封面是带 AI 标记的“预报员看屏幕”，eyewall 文章复用了“海边人看手机”的封面。页面已有 illustration 声明，不能说其伪装成真实观测；问题在于它们不能帮助读者辨认模型时间、眼墙或图例。增加更多此类封面的价值有限。

最小修复：先选 3 个高度依赖图形的问题，配官方历史图或清楚标明的教学图，加读图步骤和可核对的答案。复用现有 NHC / FEMA 教学图时，补足相关页的解读，不再另造一套无来源“真实预报图”。

验收：手机可读日期、单位和图例；至少解释 3 处具体标记；标明历史 / 教学 / 当前、来源、issue time 和编辑处理。图片用来增加理解，不以图片数量作为质量 KPI。

### 9. [P2] 仍有“告诉读者去核实”，但没有给出足以核实的记录或具体出处

所有 46 篇生产博客已有 sources，这是进步。但部分仍只引用 NHC / NWS 首页或宽泛 FAQ；段落中会反复出现“查看当地机构、不要只看类别”，却没有一个具体产品、输入记录或读图练习。Melissa 常备名称页目前主要提供空状态、一般清单和通用来源，不能与有原始报告的 Erin 页面等量齐观。

证据：`src/data/stormPages.ts:96` 附近 Melissa 数据；`src/data/blog.ts:28` 起 eyewall 文章；`src/pages/storm-archive.astro:303` 等多个导航模块。

最小改法：

- 为具体陈述指向相应产品定义或报告章节；不能只把参考链接数量补满。
- 用一个已核实例子说明读者应如何判断，而不是反复提醒“要核实”。
- 保留必要限制，删除跨模块重复的泛化提示；不能把医学、保险和即时避险的必要边界一并删掉。
- 对没有独立价值的常备名称页，先确定服务哪一年、哪个盆地、哪个问题，再决定补强、合并或限制索引；不能补造历史或当下预报。

75 个已抓取页面重复了同一组通用 FAQ 答案，33 个城市重复多段同样的导航说明。共享说明不是违规证据，但目前占用了本可用于当地解释的位置。

验收：每个优先页至少能交付一项有出处的读者产物：读图答案、单位清楚的案例比较、可以打印的家庭记录，或能走通的官方地方操作路径。

### 10. [P2] FAQ 与可见内容不一致，修改日期也未反映部分已发布更新

从生产 HTML 的 JSON-LD 逐题对照正文：**7 页有 schema 中的问题未出现在正文**，分别为六个尚未深改的州页和 `/blog/`。州页漏出的是季节、历史和路线 FAQ；它们在文件中定义并注入 schema，却没有实际渲染给读者。可折叠但正文存在的问题未计入此项。

证据：`src/pages/tracker/alabama.astro:52`、`:89`；`src/pages/blog/index.astro:156`；其他五州同类结构。

此外，189 条 sitemap 中 **135 条 lastmod 仍为 `2026-09-01T00:00:00.000Z`**；例如首页正文已有 11 月 2 日修订，但 sitemap 仍取全局旧值。这是修改时间元数据失真，不是“因此 Google 没抓取”的证明。

证据：`src/data/site.ts:8`、`src/lib/sitemapRoutes.ts:19`、`src/components/Homepage.astro:63`。

最小改法：真实有用的 FAQ 可见渲染并从同一数据生成 schema；没有用处的应从两边一起移除。lastmod 按实际内容修订维护，不能批量改为今天。sitemap 真相源属于项目禁区，后续实施前必须取得对应授权，本轮未改。

验收：FAQ 的问题和答案逐项一致；编辑更新时间、数据获取时间、官方 advisory issue time 各自标注准确。

## 应保留的工作与不建议照搬的旧建议

### 已有质量样板

- Florida / Texas / North Carolina：用 Ian / Harvey / Florence 的原始报告解释峰值、登陆、降雨、潮位等不同指标，优于常识拼接。
- FEMA flood-map、NHC surge、cone、radar-vs-satellite 博客：有具体教学素材、历史标签和读图操作，可继续推广这种方法。
- wind-mitigation-calculator：输入真实 wind premium、insurer-confirmed additional credit，说明公式并处理零值；其标题与能力相符，是其他工具的改造标准。
- About 已说明独立项目、AI 参与和纠错方式；文章已有署名、修订与来源。不能再次把这些功能当作不存在，也不能虚构气象专家团队补所谓 E-E-A-T。

### 不做未经证实的整站裁剪

目前不能将“189 页”本身视为拒审原因，也不能声称“压到 40-60 / 80-100 页就会通过”。共享模板可以提供独立价值，真正要判断的是任务、证据和输出。

Miami / Tampa / Houston 的 current 与 standing 页面已明显分别服务当前检查和家庭准备记录，不能因 URL 同名就认定文本重复。其余页面应逐对检查是否能独立完成任务，配合 GSC URL 数据后再决定合并、重定向或 noindex。

本次也不把 ads.txt、`.cc` 后缀、匿名组织署名或 AI 参与当作“已证明的低价值根因”。Google 官方资格要求强调吸引受众的优质原创内容：<https://support.google.com/adsense/answer/9724?hl=zh-Hans>，本轮读取成功。没有据此得出固定文章字数、页面数、等待周数或通过率。

## 下一轮实施顺序

| 批次 | 交付 | 验收重点 |
| --- | --- | --- |
| A：优先纠错 | 修正灾种动作、即时告警时间窗口、错误空状态、旧卡清理、主题 warning 定义 | 按真实分支做异常响应和危险动作回归；正文 / FAQ / schema 一致 |
| B：提升现有页面 | 收敛 impact-window 的承诺，清理前台关键词；完成 Louisiana 的地方任务与案例 | 输入实际影响结果；读者可走通一项地方任务；无裸关键词串 |
| C：形成差异内容 | 补 3 个读图练习；扩展 Alabama / Mississippi；评估剩余名称页和重叠主题 | 原始素材、可读图例、具体答案；逐页判断，不批量注水 |
| D：维护一致性 | FAQ 可见性、准确的修改日期、跨主题校对清单 | 需要触及 sitemap 禁区时先确认授权；更新时间有实际内容依据 |

每批完成后单独验证、再审查差异。用户尚未授权本轮实施或部署，本报告不代表这些修改已完成。

## 可交给配图 agent 的需求

1. **What does a hurricane look like**：选一张来源明确的历史可见光 / GeoColor 图和相应 radar 图；标出眼、眼墙、外雨带，说明两幅图的产品时间与观测差异。不能把不同时间的图说成同步。
2. **Eyewall replacement**：有官方支持的微波 / 雷达历史序列，或明确标为概念的双眼墙示意；标出内外环，说明单凭图像不能确定当前地面风速。没有合适原始图时不要生成“观测照片”。
3. **Spaghetti reading**：可合法引用的官方教学图或清楚注明为虚构的图解，包含 model ID、initialization、valid time、时区与图例；配一道“比较同一有效时刻”练习，不能把线密度转换为城市概率。
4. **地方案例**：从已核对的 TCR 制作峰值 / 登陆 / 当地观测的对照表或图；保留单位、时间、datum 及来源页码，不把潮位站水位画成室内水深。

交付图片应附原始来源 URL、用途与权利说明、处理记录、alt、完整图注，并保证手机上能阅读。正文解读由本项目对照来源审核后再发布。若要加 YouTube，先挑直接解释同一产品的官方片段，并附相关时间段和本站解读；Reddit 适合作为读者问题线索，不能证明撤离、医药或保险结论。外部视频与评论不是通过 AdSense 的条件。

## 证据位置与限制

- 本轮生产抓取缓存：`/tmp/hh-content-audit-20261104/`，含 `pages.json`、`summary.json`、`analysis.json`、`structure.json` 和逐页 HTML。
- 重现脚本：`/tmp/hh-audit-repro-20261104.mjs`；直接编译读取原文件，在模拟 DOM / fetch 下执行城市脚本、impact-window、live 刷新和 decoder。
- 这些临时文件用于本机复核，不是公开发布物，也不保证系统临时目录长期保留。
- 没有完整逐条复核全部历史 TCR、所有医疗 / 法律 / 保险陈述、所有第三方外链可用性、所有动态注册表页或真实用户地域网络。静态结构正常与假数据复现均不能替代这些后续验证。
- 未进入广告后台、提交审核、触发索引申请或修改线上数据。审计用浏览器临时标签在完成后关闭，保留用户已有标签和登录状态。
