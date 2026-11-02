# 城市任务区分与州级案例核验

日期：2026-11-02。开发基准：main 跟踪 origin/main，两者经成功 fetch 后均为 `53718fbd880783c3b8ae096c138bd87160d171a1`（0/0）。叠加上轮计划修订；无关未跟踪草稿保留，不纳入提交。用户已明确授权本批提交、推送与部署。

开发前确认生产：`https://www.hurricanetracker.cc/`，Cloudflare deployment `82fba7c8-80cb-4d75-a508-f09079bca126`、Worker version `b5368d64-6b38-41d6-913e-56a8ff468de8`，100% 流量，发布注释对应上述 SHA。本批发布后的版本以新的 Git 和 Cloudflare 发布记录为准。

## URL 与内容归属

| 页面 | 独立任务与本批修改 |
| --- | --- |
| `/city/miami/hurricane-tracker/` | 常备指南：六步高层建筑、地址、交通、目的地与照护交接记录，附假设样例 |
| `/city/tampa/hurricane-tracker/` | 常备指南：县级责任、Hillsborough HEAT 地图版本、交通、桥梁及目的地确认 |
| `/city/houston/hurricane-tracker/` | 常备指南：把本地指令、雨量／河道观测、行程和照护分开记录 |
| `/hurricane-tracker/city/miami/`、`/tampa/`、`/houston/` | 当前信息入口：保留天气与警报展示，压缩常备教程并与对应指南互链；不再重复通用撤离清单 |
| `/tracker/texas/` | Harvey 历史案例三行数据表；区分登陆地点、雨量范围和水位基准；TxDOT 行程记录 |
| `/tracker/north-carolina/` | Florence 峰值／登陆、淹水和降雨数据表；县级分区、指令、目的地、道路／轮渡及返回记录 |
| `/about/` | 组织署名责任、AI 实际辅助、日期和核验范围含义、具体纠错方式 |

三份常备指南改用独有记录替换通用十场历史列表与七日补给清单，HowTo schema 同步为可见六步。其余 19 份常备指南保持既有呈现，未因此认定已合格。两州各有五项可见 FAQ，与 JSON-LD 一致。没有新增路由、跳转、合并、noindex 或 sitemap 变更；两类城市 URL 继续保留是基于不同读者任务，不是按页面数量保留。

## 原始资料与采用范围

- NHC Harvey，`https://www.nhc.noaa.gov/data/tcr/AL092017_Harvey.pdf`：完整 HTTP 200 下载 4,692,744 bytes，并用 MarkItDown 转文本。采用 2018-05-09 修订版 p.3 的 San Jose Island 115 kt 与三小时后大陆 105 kt；p.5 的 Port Aransas 至 Matagorda 湾区 6-10 ft AGL；p.6 的 Nederland 60.58 in、Houston metro 36-48 in，以及 Manchester 10.5 ft MHHW 和雨水径流解释。不同地点、积累量和基准不互换。
- NHC Florence，`https://www.nhc.noaa.gov/data/tcr/AL062018_Florence.pdf`：完整 HTTP 200 下载 24,000,802 bytes，并用 MarkItDown 转文本。采用 2019-09-25 修订版 pp.3-5 的峰值 130 kt 与 2018-09-14 约 1115 UTC 的 80 kt 登陆；p.6 的 Neuse River／Pamlico Sound 岸边 8-11 ft AGL，以及 New Bern 对岸传感器 10.08 ft NAVD88／约 10.4 ft MHHW；p.7 的 Elizabethtown 西北约 6 海里 35.93 in 与狭窄大于 30 in 雨带。
- Miami-Dade，`https://www.miamidade.gov/global/emergency/hurricane/storm-surge-zones.page`：五个 A-E 分区及 lookup 入口，不能用分类代替本次命令。
- Hillsborough，`https://hcfl.gov/residents/public-safety/emergency-management/find-evacuation-information`：五区图例、HEAT 入口、2025/2026 地图对照和 HART 交通入口。未把地图入口当作已完成地址查询。
- Houston OEM，`https://www.houstonoem.org/`：公共联系和规划导航；Harris County，`https://www.harriscountyfws.org/`：雨量、河道状态和水位界面。HTML 包含数据不可用提示模板，未由此判断实时服务故障，也未读取具体实时观测。
- TxDOT，`https://www.txdot.gov/safety/severe-weather/hurricane-preparation.html`：分地区路线资源、DriveTexas 和 contraflow 解释，不表示逆向车道已启用。
- North Carolina，`https://www.ncdps.gov/our-organization/emergency-management/emergency-preparedness/know-your-zone`：21 个沿海参与县、各县分区差别、当地命令、查询失败联系当地应急机构、道路和返回安排。

上述地方资源均 HTTP 200，并读取提取的正文。未核验真实地址、交互地图结果、当前命令、道路／轮渡／桥梁／巴士、收容所、医疗服务或实际家庭安排；示例明确为假设。没有更新每日比较快照。没有虚构主创姓名、气象资质、专家审稿或团队人数。

## 验证与后续

- `npm run build`、`npm run check` 通过；类型检查 0 errors、0 warnings，4 个未改文件中的既有 hints。
- 内容回归 40 条路径的数据与本地渲染检查通过，覆盖修订日期、canonical、FAQ／HowTo schema、双向链接与其他常备页的回退呈现。
- 既有首页 feed 回归通过，但不等于城市客户端的数据质量已认证。
- Playwright 在 1440px／390px 检查九页：HTTP 200、单一 h1／main、正确 canonical、无页面横向溢出；两州表格在手机上仅容器横向滚动。三份指南的六个可见步骤与 HowTo 完全对应。抽查桌面、手机及暗色截图。
- `git diff --check` 通过。发布前重新 fetch 和比较，选择性暂存；独立执行部署，不附带 IndexNow 或 Google URL 通知。

已知后续 P0：城市追踪页既有 NHC／NWS 客户端没有完整验证响应状态、结构和新鲜度，部分错误 JSON 有被当成零系统／零警报的风险。本批没有改其取数脚本，也没有把静态正文核验当作当前天气核验；应单独审计失败、陈旧、恢复分支后修复。

非博客 sitemap lastmod 仍沿用站点旧值；本批 HTML 和 JSON-LD 使用页面实际修订日期。sitemap 真相源属于项目禁区，本批未改；需要后续明确授权后按真实日期处理。其余州、城市与文章继续按计划逐项核验，本批不是全站质量认证，也不承诺 AdSense 通过概率或固定等待天数。
