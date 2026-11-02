# 首页与 Florida 内容质量核验

日期：2026-11-02。基准：`f3e50780ee0dab7491cffee5349e9dfe321d86e2`，main 跟踪 origin/main；本轮开始时成功 fetch，领先／落后 0/0。保留此前未跟踪草稿。本记录描述本轮开发和发布前验证，发布结果以 Git 及 Cloudflare 元数据为准。

## 内容改动

- 首页在活动概览后展示三篇既有地图解读，使用原文章的 NHC、NWS、FEMA 图片、来源、历史日期及真实修订日期。未将文章日期统一改成今天，未将历史图片描述为当前天气。
- 首页正文链接从 84 个减至 50 个，移除 23 项主题链接墙和重复入口；保留主要地图、实时动态、城市、州、工具及指南入口。压缩重复提示，保留数据失败、过期、盆地与地址范围的必要说明。
- Florida 用 Ian 的原始报告说明峰值与登陆强度、沿海淹水、内陆雨量的不同问题；增加可保存的地址／撤离记录和明确假设的 Miami→Orlando 目的地核对案例。五项规划 FAQ 同时显示在正文与 JSON-LD。
- 其余八州仅通过共享组件移除可见搜索词串、SEO 工作术语和通用 72/48/24 小时承诺；不称为完成八州事实审查。

## 本轮成功读取的证据

- NHC Ian 报告：<https://www.nhc.noaa.gov/data/tcr/AL092022_Ian.pdf>。完整下载 7,049,210 字节，经 MarkItDown 转文本；版本为 2026-03-12，修订说明移除混合实测与推导的 WeatherStem 数据。
- 报告 p. 4：2022-09-28 1200 UTC 峰值 140 kt／Category 5；1905 UTC Cayo Costa 登陆 130 kt／Category 4。p. 8：Fort Myers Beach／Estero Island 最大淹水 10–15 ft above ground level。p. 11：中东部 Florida 10–20 in 雨量与河流洪水，Grove City 最大值 26.95 in 是另一种统计。保留位置、单位、时间和水位参考面的区别。
- Florida Know Your Zone, Know Your Home：<https://www.floridadisaster.org/knowyourzone/>。读取官方说明及地址查询入口，未操作交互地图、未核验真实地址、当前命令、道路、目的地、收容或医疗安排。每个县的实际分区与当前指令仍需独立核对。
- 三张首页图片沿用已核验的既有指南资源：Helene 2024-09-25 NHC 图、Ian 2022-09-30 NWS Wilmington 雷达／卫星图、FEMA 2022-01 教学地图；本轮核对本地文件、原来源链接和渲染，未据此认证当前天气。

## 验证与限制

- `npm run build` 通过；`npm run check` 为 0 errors、0 warnings，4 个既有 hints。
- 首页 feed 回归通过，覆盖失败、陈旧数据、盆地范围、ZIP 查询结果、转义与并发请求。内容回归 36 路由的数据及实际渲染检查通过，包含首页、九州页和此前内容样板。
- Chrome 1440／768／390px 检查首页和 Florida：HTTP 200、唯一 H1、规范 canonical、三张图片成功解码、无整页横向溢出；手机表格在自身容器内滚动。桌面与手机截图、桌面深色模式截图已查看。
- 本地预览的部分外部实时源返回 `Network connection lost`，页面显示不可用。本轮测试证明错误状态可见，不代表认证当前 NHC／NWS 活动；不把失败当作零风暴／零警报，也未更新每日比较快照。
- 首页与 Florida 的 HTML／JSON-LD 实质修订日期为 2026-11-02；sitemap 对这类页面仍沿用旧的站点日期。未改 sitemap 真相源，不声称其日期已同步。
- 未新增路由、noindex、跳转或依赖，未提交 IndexNow／Google URL，未重新申请 AdSense。本批完成不代表全站事实审查完成，也不提供审核通过率承诺。

下一批优先复核城市追踪页与常备城市指南的任务重叠，按具体 URL 提出保留／整合方案。涉及 noindex、永久跳转或 sitemap 修改时另取明确授权。
