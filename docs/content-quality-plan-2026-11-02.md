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

1. P0：有来源的事实和数据可靠性。风暴页要保留年份、basin ID、每个事件的原始 advisory URL，区分当时预测和事后实况；找不到证据就标资料不足，不编补时间线。
2. P1：处理内容重叠。先确定读者任务和主页面，再搬有价值内容与内链；涉及永久跳转、删除、noindex 或 sitemap 时提交具体 URL 对应方案取得授权。
3. P1：每轮完善 2-3 篇核心指南或 1-2 个本地页面。每页至少有一个可核对的示例或实际可用产出，不能只增加篇幅和 FAQ。
4. P2：其余存量逐篇复核。图片、视频只在解释真实数据、地图或操作时加入；保留来源和日期，不凭装饰图、YouTube 嵌入或 Reddit 摘录宣称质量提升。

编辑验收：直接回答问题；关键事实能定位来源；示例明确历史/假设/当前；说明输入与未知；同站文章各有独立任务；网页和相关链接实际可用。字数、文章数、等候天数不作为 AdSense 通过门槛，本计划不提供通过率承诺。重提申请应在主要缺陷修复且线上复核之后，并遵守后台可申请时间。

## 逐 URL 初筛

范围：从当前 sitemap 真相源读取的 189 个 URL（pages 69、tools 15、locations 50、blog 55）。这是全量登记与风险分流，不是 189 页逐句事实审查。状态为“待复核”的页面不能据此宣称内容合格。KV 动态新增的风暴及未列入 sitemap 的路由不在此清单；后续档案审计须单独导出核对。未修改 sitemap 真相源。

| URL | 处置 | 下一项具体工作／状态 |
| --- | --- | --- |
| `/` | P2 复核 | 尚未逐页编辑验收；检查独立任务、证据、内链与时间含义 |
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
| `/city/miami/hurricane-tracker/` | P1 归并评估 | 与对应 city/tracker 页逐段对照，选内容归属；本轮不执行跳转或下线 |
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
| `/tracker/florida/` | P1 深化 | 核对州资源，解释州级数据与地址级命令边界；串联真正不同的本地指南 |
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
| `/hurricane-tracker/storm/erin/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/hurricane-tracker/storm/melissa/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/hurricane-tracker/storm/isaias/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
| `/hurricane-tracker/storm/dolly/` | P0 重写 | 按年份与编号核验档案；补原始 advisory/TCR、时间线、资料缺口。Dolly 本轮仅改历史说明 |
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
| `/blog/hurricane-home-preparedness-room-by-room-checklist/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/hurricane-safety-seniors-children-disability/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-insurance-claim-guide-documentation/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
| `/blog/hurricane-home-hardening-checklist/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
| `/blog/hurricane-medical-needs-registry-preparedness/` | P1 归并评估 | 对照同主题文章，以不同输入和产出区分；无独立任务则提具体合并方案 |
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
| `/blog/hurricane-water-storage-purification-emergency/` | P2 逐篇编辑 | 尚未完成逐句事实审查；要求一个具体问题、来源证据、案例及适用边界 |
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
