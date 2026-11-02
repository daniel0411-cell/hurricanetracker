# 内容质量更新计划与 URL 处置清单

日期：2026-11-02。基准：`987df4116e868b65a5bf09e7e3f2a71b64ba0015`，main 与刚获取的 origin/main 一致（0/0），叠加本轮工作区修改。此前未跟踪草稿不纳入。

## 本轮交付

- 修正独立 watch/warning 文章的 48/36 小时计时、风与风暴潮警报混淆及过度确定的建议。保留发表日期，实质修订日期设为 11 月 2 日。
- 将同主题旧文章明确为“阅读一条完整警报”，增加六字段记录、示例的已知与未知，和定义文章互链。
- 撤离区指南补 Miami-Dade 官方地图入口、A-E 与本次命令的区别、住宅/医疗例外、私有记录样例和查询失败处理。未查任何真实地址或当前命令。
- Dolly 入口区分历史峰值与登陆强度，去掉“2026 若形成”的冲突说明，并明确最新留存观测不是完整 best track。其他风暴仍需逐份原始资料核验；本轮不把它们称为合格档案。

## 来源与限制

成功读取 NWS https://www.weather.gov/safety/hurricane-ww ，仅采用风/风暴潮定义；该页仍含旧的 outlook 周期说明，本轮不采用。成功读取 Miami-Dade https://www.miamidade.gov/global/emergency/hurricane/storm-surge-zones.page ，只核验区域解释和其链接的地图入口，未验证 ArcGIS 交互结果、实时命令或道路。

NHC glossary 请求 curl 28 SSL connection timeout；2025 TCR 索引请求超时；FEMA portal 请求 fetch failed。不把这些失败记为成功 source check。既有链接仍作参考，不声称完成其当前资料核验。

成功下载 https://www.nhc.noaa.gov/data/tcr/AL042008_Dolly.pdf ，用 MarkItDown 转文本核对第 1-2 页：2008 年峰值 85 kt / Category 2，South Padre Island 登陆 75 kt / Category 1。原文 Category 1 登陆本来正确，不应误改为 Category 2。

以上为本地内容审查阶段的记录；当时未重新核验线上部署版本，不能由本地 SHA 推断线上发布内容。当时未执行提交、推送、部署、IndexNow 或 Google URL 提交。用户随后授权提交部署；实际发布版本以 Git 提交和 Cloudflare 部署记录为准。

## 近期工作顺序与验收

首批已按用户后续授权发布：GitHub `c469807f4e9bf7cf4b7656d8475f56900fe480c4` 的应用代码与发布构建一致；Cloudflare deployment `11c54670-d7e6-490e-8636-8695ddc815d1`，Worker version `adf899e0-0738-4f02-abb8-b005fca3ba47`，100% 流量。三篇指南和 Dolly 正式 URL 均返回 200，更新内容、canonical 和 JSON-LD 已核对。

第二批本地样板：Erin 2025 和 Dolly 2008 加入独立历史报告节，含原始 NHC PDF、报告版本、核验日期、节选时间线及数据解释。Erin 原始报告完整下载并转文本，版本为 2026-01-30；Dolly 使用完整的 2009-01-22 版报告。Melissa `AL132025_Melissa.pdf` 两次 curl 18（Transferred a partial file），不将部分文件用作核验材料，也未添加其历史记录。这些历史案例不替代 2026 记录或实时预警核验。

用户已明确批准普通合并。`f168709` 保留本地检查记录修订与远程首批提交两边历史，未使用强推、reset 或 rebase。第二批开发时保留工作区，不混入首批发布；用户随后于 11 月 2 日授权第二批提交部署。

1. P0：有来源的事实和数据可靠性。风暴页要保留年份、basin ID、每个事件的原始 advisory URL，区分当时预测和事后实况；找不到证据就标资料不足，不编补时间线。
2. P1：处理内容重叠。先确定读者任务和主页面，再搬有价值内容与内链；涉及永久跳转、删除、noindex 或 sitemap 时提交具体 URL 对应方案取得授权。
3. P1：每轮完善 2-3 篇核心指南或 1-2 个本地页面。每页至少有一个可核对的示例或实际可用产出，不能只增加篇幅和 FAQ。
4. P2：其余存量逐篇复核。图片、视频只在解释真实数据、地图或操作时加入；保留来源和日期，不凭装饰图、YouTube 嵌入或 Reddit 摘录宣称质量提升。

编辑验收：直接回答问题；关键事实能定位来源；示例明确历史/假设/当前；说明输入与未知；同站文章各有独立任务；网页和相关链接实际可用。字数、文章数、等候天数不作为 AdSense 通过门槛，本计划不提供通过率承诺。重提申请应在主要缺陷修复且线上复核之后，并遵守后台可申请时间。

## 第三批：事实一致性与家庭准备指南

基准：`b331fa97163b28c6274d2424e45325d41fa38777`，main 与本轮刚获取的 origin/main 一致（0/0）。第二批已发布到 Worker version `4d603603-7d8c-437c-aa3a-1f2bc9a68312`，deployment `38465203-be93-410e-9d75-9c00b6335903`，100% 流量，发布注释含该提交 SHA；Erin/Dolly 正式页面中的历史节、原始 PDF、五项事件、核验日期、canonical 和 JSON-LD 已核对。

本批开发内容：

- Miami 常备指南正文与 FAQ 统一为官方五个 Planning Zones A-E；增加私有地址/交通/目的地记录、查询失败处理，以及仅限本次分区核验的日期和范围。Duval 的 A-F 保留。常备页组件允许每页提供实质修订日期，其余页面仍沿用既有日期。
- 家庭逐房指南只承担物品、补给、通行和未完成任务检查；纠正燃气实操演练、固定倒计时、warning 后一律留家的建议。增加一个明确标为假设的完成记录示例，并指向独立结构加固指南。
- 结构加固指南聚焦屋顶、额定车库门、门窗保护及安装证据；区分年度升级与临近风暴部署已有防护。增加 PSF 标签记录示例和承包商五问，去掉与家庭、宠物、恢复文章重叠的段落。纠正预报锥边缘代表到达时间的误读，不把额定标签转换为全屋安全保证。
- 两篇保留原发表日期和 URL，实质修订日期为 2026-11-02，并注明所读来源和未核验的房屋、产品、当前警报等边界。

本轮成功读取并用 MarkItDown 核对：Miami-Dade 官方分区页；Ready.gov `/hurricanes`、`/safety-skills`；NHC `/aboutcone.shtml`、`/aboutnhcgraphics.shtml#TOA`；IBHS `/hurricanereadyhomeupgrades/`、`/hurricanereadyhomebeforeevent`。这些页面支持通用指导，不代表对某个房屋、地址或当前天气完成核验。NHC `/abouttafw.shtml` 与 NWS `/safety/hurricane-prepare` 返回 404，未用作来源；NWS `/wrn/hurricane-preparedness` 仅提取到导航，没有把它记成已核实的结构技术依据。实际使用的替代来源为上述 NHC 图表说明与 IBHS 指南。

以上为开发阶段记录，当时未提交、部署或通知搜索引擎；用户随后明确授权本批提交部署，实际发布版本以 Git 提交及 Cloudflare 发布记录为准。构建通过；类型检查为 0 errors、0 warnings，保留既有 4 hints。23 路由数据与页面回归通过，核对本批三页的修订日期、来源范围、canonical 和 JSON-LD；三页均经 1440/390px 浏览器检查，图片正常、无横向溢出，并检查了桌面示例、手机标题和 Miami 正文截图。本地预览为 `http://127.0.0.1:8803/`。未获授权的搜索引擎 URL 通知不随部署执行。

### 重新申请与重新抓取的检查标准

Google AdSense 官方拒绝处理说明（`https://support.google.com/adsense/answer/12176698?hl=en`）要求解决内容、体验及可访问性问题后从 Sites 申请审核，没有给所有站点规定统一优化等待天数；后台若显示下一次可申请日期，须遵守。通常审核几天，部分情况 2-4 周；这是申请后的审核耗时，不是修改后必须等待的时间。

建议重提前确认：主要入口和代表性内容没有仍未处理的重大事实或安全缺陷；相近页面各有独立任务和可验证产出；来源、日期和失败状态表达真实；修订已部署，正式页面、导航、canonical、robots 与广告账号配置可访问且一致。当前清单中仍有待复核页面，不能因少量样板完成便宣称全站整改完成。无需把所有 URL 收录作为申请的前置条件；搜索抓取和 AdSense 审核分别核验。

Google Search 官方重新抓取说明（`https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl`）写明可能几天到几周，不保证即时纳入，重复申请同一 URL 不会加速。部署后可对少量重点 URL 用 Search Console URL Inspection 请求抓取，查看最近抓取时间和索引状态；即时测试能访问不等于已更新索引。Bing 可用 IndexNow 告知已发生的变更，但官方 FAQ（`https://www.indexnow.org/faq`）明确通知不保证索引，须检查 Bing Webmaster Tools 的 URL 诊断与抓取记录。上述链接本轮已读取；未登录两家后台，未核实本域名当前抓取/索引状态，也未提交任何 URL。

已知发现信号限制：`src/lib/sitemapRoutes.ts` 的博客 lastmod 已读取每篇 dateModified，但常备指南等非博客路由仍沿用 `site.contentLastModified`（2026-09-01）。本轮 Miami HTML/JSON-LD 已用本页日期，sitemap 对应日期仍旧；这不阻止抓取，但没有向 sitemap 传递本次修订日期。该文件属于项目禁区，本轮未改，后续应取得明确授权后按实际页面日期修正，不能把全站日期一起改为今天来代替。

## 逐 URL 初筛

范围：从当前 sitemap 真相源读取的 189 个 URL（pages 69、tools 15、locations 50、blog 55）。这是全量登记与风险分流，不是 189 页逐句事实审查。状态为“待复核”的页面不能据此宣称内容合格。KV 动态新增的风暴及未列入 sitemap 的路由不在此清单；后续档案审计须单独导出核对。未修改 sitemap 真相源。

| URL | 处置 | 下一项具体工作／状态 |
| --- | --- | --- |
| `/` | 本轮已改 | 展示三篇带官方历史图表的解读，保留原文章日期；正文链接 84→50，保留主要入口、来源时间与失败状态。详见本轮首页／Florida 核验记录 |
| `/tracker/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/hurricane-tracker/live/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/hurricane-tracker/tropical-disturbances/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/radar/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/alerts/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/learn/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/topics/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/local-hurricane-risk/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/preparedness/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/compare/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/newsletter/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/site-map/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/updates/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/storm-archive/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/2026-hurricane-season/` | P0 核验 | 分别检查数据时间、失败状态与 NHC 一致性；本轮未认证实时数据 |
| `/storm/2026-arthur/` | P0 核验 | 逐项核对原始 advisory 与预测/实况，不能用当前 feed 代替历史证据 |
| `/storm/2026-bertha/` | P0 核验 | 逐项核对原始 advisory 与预测/实况，不能用当前 feed 代替历史证据 |
| `/storm/2026-cristobal/` | P0 核验 | 逐项核对原始 advisory 与预测/实况，不能用当前 feed 代替历史证据 |
| `/state/florida/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/texas/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/louisiana/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/north-carolina/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/south-carolina/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/georgia/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/virginia/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/alabama/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/mississippi/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/new-york/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/new-jersey/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/state/massachusetts/preparedness/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/miami/hurricane-tracker/` | 本地修订／局部核验 | A-E 正文与 FAQ、地址记录、查询失败及核验范围已修正；历史段落仍待逐项来源复核，不执行跳转或下线 |
| `/city/tampa/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/orlando/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/jacksonville/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/houston/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/new-orleans/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/charleston/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/savannah/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/wilmington/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/city/virginia-beach/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
| `/decision-guide/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/about/` | 保留／核实真实性 | 核对身份、联系方式、编辑责任与实际服务；政策页不承担内容充数 |
| `/contact/` | 保留／核实真实性 | 核对身份、联系方式、编辑责任与实际服务；政策页不承担内容充数 |
| `/privacy/` | 保留／核实真实性 | 核对身份、联系方式、编辑责任与实际服务；政策页不承担内容充数 |
| `/terms/` | 保留／核实真实性 | 核对身份、联系方式、编辑责任与实际服务；政策页不承担内容充数 |
| `/hurricane-tracker/why-hurricane-forecasts-change/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/nhc-hurricane-basins-and-names/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/hurricane-landfall-forecast/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/tropical-storm-vs-hurricane/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/hurricane-categories/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/southeast/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/gulf/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/how-hurricanes-are-tracked/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/hurricane-warning/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/what-does-a-hurricane-look-like/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/map/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/path/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/evacuation-zones/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/storm-surge-map/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/spaghetti-models/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/hurricane-travel-cruise-flights/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/radar/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/live-tracker/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/preparedness-checklist/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/evacuation-plan/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/mitigation/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/hurricane-training/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/hurricane-tracker/after-hurricane/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
| `/tools/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/tools/my-hurricane-dashboard/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/impact-window-estimator/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/local-risk-plan/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/county-hurricane-risk/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/preparedness-checklist/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/evacuation-decision-helper/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/hurricane-brief/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/power-outage-planner/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/storm-distance-calculator/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/alert-action-decoder/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/storm-surge-checker/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/family-communication-plan/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/business-preparedness/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tools/wind-mitigation-calculator/` | P1 核验工具 | 复核输入、来源、算法假设、失败情形和一份完整示例；不能以免责声明代替验证 |
| `/tracker/florida/` | 本轮已改 | 用 NHC 修订报告核对 Ian 峰值／登陆风速、沿海淹水和内陆雨量；加入地址／撤离记录与明确假设案例，五项规划 FAQ 正文与 schema 一致。当前警报和真实地址仍须另查 |
| `/tracker/texas/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/louisiana/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/north-carolina/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/south-carolina/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/georgia/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/alabama/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/mississippi/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/tracker/virginia/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
| `/hurricane-tracker/city/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/hurricane-tracker/city/orlando/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/miami/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/tampa/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/houston/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/new-orleans/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/virginia-beach/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/fort-myers/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/key-west/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/jacksonville/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/galveston/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/corpus-christi/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/charleston/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/wilmington/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/savannah/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/mobile/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/biloxi/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/fort-lauderdale/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/west-palm-beach/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/lake-charles/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/outer-banks/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/myrtle-beach/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/brunswick/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/gulf-shores/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/gulfport/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/norfolk/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/pensacola/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/brownsville/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/baton-rouge/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/clearwater/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/morehead-city/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/naples/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/sarasota/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/city/port-charlotte/` | P1 深化 | 核查本地 agency/zone/order 示例与交通、医疗限制；避免城市名模板替换 |
| `/hurricane-tracker/storm/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/hurricane-tracker/storm/erin/` | P0 部分改进 | 本地已补 Erin 2025 正式报告与时间线；2026 及动态留存记录仍须独立核验 |
| `/hurricane-tracker/storm/melissa/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/hurricane-tracker/storm/isaias/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/hurricane-tracker/storm/dolly/` | P0 部分改进 | 本地已补 Dolly 2008 正式报告与强度／登陆时间线；2026 记录仍须独立核验 |
| `/hurricane-tracker/storm/edouard/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/hurricane-tracker/storm/fay/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/blog/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/blog/category/preparedness/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/blog/category/safety-warnings/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/blog/category/insurance-recovery/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/blog/category/tracking-forecasting/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/blog/category/science-basics/` | 保留导航／待复核 | 确认能按读者任务找到完整答案；目录页不套文章字数标准 |
| `/blog/hurricane-eyewall-replacement-cycle-explained/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/official-hurricane-information-sources-rumor-verification/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/how-el-nino-affects-hurricanes/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/2025-atlantic-hurricane-season-outlook/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/how-to-prepare-your-home-for-a-hurricane/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/what-hurricane-watch-warning-means/` | 本轮已改 | 事实纠正／独立任务／可核对示例；待验证后发布 |
| `/blog/hurricane-emergency-kit-checklist/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/hurricane-evacuation-checklist/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/what-to-do-during-a-hurricane-warning/` | P1 区分任务 | 对照本轮两篇：分别承担定义、产品识别、现场行动或水/风差异；重复定义压缩并内链 |
| `/blog/hurricane-power-outage-food-medicine-plan/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/hurricane-documents-insurance-checklist/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/hurricane-preparation-timeline-72-48-24-hours/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/how-far-is-a-hurricane-from-me/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/storm-surge-warning-vs-hurricane-warning/` | P1 区分任务 | 对照本轮两篇：分别承担定义、产品识别、现场行动或水/风差异；重复定义压缩并内链 |
| `/blog/hurricane-family-communication-plan/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/how-to-check-your-hurricane-evacuation-zone/` | 本轮已改 | 事实纠正／独立任务／可核对示例；待验证后发布 |
| `/blog/hurricane-radar-vs-satellite/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/nws-hurricane-alert-meanings/` | P1 区分任务 | 对照本轮两篇：分别承担定义、产品识别、现场行动或水/风差异；重复定义压缩并内链 |
| `/blog/real-time-hurricane-tracking-2026/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/how-to-read-the-hurricane-cone-of-uncertainty/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/hurricane-insurance-deductibles-guide/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-tracking-after-landfall-inland-flooding-tornadoes/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-rapid-intensification/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/saffir-simpson-hurricane-wind-scale-explained/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/how-to-read-hurricane-spaghetti-models/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-vs-typhoon-vs-cyclone/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-storm-surge-forecasting/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/below-normal-hurricane-season-2026-real-time-tracker/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/what-to-do-after-a-hurricane/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-pet-safety/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-home-preparedness-room-by-room-checklist/` | 本地修订／待发布 | 逐房物品与任务记录；燃气演练、固定倒计时和留家误导已纠正，与结构加固文章互链 |
| `/blog/hurricane-safety-seniors-children-disability/` | 本地修订／待发布 | 聚焦本人意愿、家庭照护分工、沟通与无障碍行程交接；纠正 ADA 证件前提和固定提前离开天数，保留来源核对边界 |
| `/blog/hurricane-insurance-claim-guide-documentation/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-home-hardening-checklist/` | 本地修订／待发布 | 聚焦屋顶/车库门/门窗及承包商记录，补 IBHS 依据，纠正预报锥与工期，删重叠段落 |
| `/blog/hurricane-medical-needs-registry-preparedness/` | 本地修订／待发布 | 聚焦医疗连续性记录；纠正备用电源、药品储备/防冻、登记确认与转移触发条件，与家庭照护文章互链 |
| `/blog/hurricane-flood-insurance-guide-nfip/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-generator-safety-carbon-monoxide/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/hurricane-additional-living-expenses-ale-coverage/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/how-to-use-hurricane-tracker-live-tools/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-mold-prevention-after-flood/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-flood-zone-map-fema-understanding/` | 保留样板／待复核 | 已有来源示例，保留；复核图片版本、结论边界与来源检查范围 |
| `/blog/hurricane-small-business-preparedness-plan/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/apartment-hurricane-preparedness-renters-checklist/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/hurricane-school-daycare-emergency-plan/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-contractor-scams-insurance-claim/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-water-storage-purification-emergency/` | 本地修订／待发布 | 纠正过滤替代煮沸的 FAQ 冲突，同查可见 FAQ 与 JSON-LD；保留 Austin 历史案例及原核对日期 |
| `/blog/hurricane-watch-vs-warning/` | 本轮已改 | 事实纠正／独立任务／可核对示例；待验证后发布 |
| `/blog/flood-advisory-vs-watch-vs-warning/` | P1 区分任务 | 对照本轮两篇：分别承担定义、产品识别、现场行动或水/风差异；重复定义压缩并内链 |
| `/blog/rip-current-statement-gulf-coast/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |

## 验证

- `npm run build`：通过（含 33 城市检查与 OG 生成）。截图检查后修正三个行内链接与后文之间的空格，再次构建验证。
- `npm run check`：0 errors、0 warnings，4 个未改文件中的既有 hints。
- 扩展现有 `scripts/content-pilot-regression.mjs`：18 条路径的数据与构建后页面检查通过，覆盖新内容、日期、canonical、JSON-LD 和既有教学图片。
- Chrome/Playwright：三篇指南在 1440px 和 390px 均 HTTP 200；单一 h1/main、修订日期、canonical、文章内相关链接与无页面横向溢出检查通过。人工查看桌面/移动端截图与 Miami-Dade 示例。
- Dolly 本地构建页面显示 85 kt 峰值与 75 kt 登陆区别，canonical 正确。未据此验证实时 feed 或线上天气。
- `git diff --check`：本地验证阶段通过。当时所有更改保留本地，未提交、推送或部署。

本地构建预览：http://127.0.0.1:8799/blog/how-to-check-your-hurricane-evacuation-zone/ 。结构测试不构成内容质量或广告审核认证。

第二批本地验证：`npm run build` 通过；`npm run check` 为 0 errors、0 warnings、4 个既有 hints；扩展内容回归的 20 条本地构建路径通过。Chrome/Playwright 在 1440px 和 390px 检查 Erin 与 Dolly 的年份/编号、原始报告链接、五项时间线、canonical 与无横向溢出，截图人工核对通过。Melissa、Isaias、Edouard、Fay 未显示其他风暴的历史报告；退役名称 301 和未知名称 302 行为保持。没有把本地 feed 的可用性检查当作实时天气核验。本地验证阶段未提交、未推送、未部署；后续实际发布以 Git 与 Cloudflare 记录为准。

第二批预览：http://127.0.0.1:8801/hurricane-tracker/storm/erin/ 和 http://127.0.0.1:8801/hurricane-tracker/storm/dolly/ 。
