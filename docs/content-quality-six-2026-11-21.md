# 内容质量修复与六篇深化（2026-11-21）

## 授权、基准与范围

用户明确授权处理内容深审的前三项、深化 5–6 篇文章并直接部署。按 AGENTS.md 阅读规范并重新检查 status / remote / branch 配置、远程 HEAD、fetch 和提交关系。工作区为 detached HEAD、无上游；origin 默认 main，地址 https://github.com/daniel0411-cell/hurricanetracker.git。起始 HEAD 与新获取的 origin/main 均为 aa452a1a1381e36d99766d20db635994472a7d72，领先/落后 0/0。已有未跟踪文档及 node_modules 链接均保留。

审计时已用 Cloudflare 版本记录确认上一版生产 Worker 5e40c9ca-d24d-4010-8e14-322fe526d88a 的发布消息关联上述提交；本文件记录本批修改和本地验收，不能代替本次发布后的部署版本证明。

## 前三项修复

1. 城市页：同州城市按球面直线距离排序，不再用数据数组顺序充当附近顺序。没有同州候选时不混入远州。原“邻近州”推荐改为准确的“其他沿海州”，不宣称所列州相邻。Miami 首项为 Fort Lauderdale，后续为 West Palm Beach、Naples、Fort Myers、Key West、Port Charlotte。明确浏览距离不能指认撤离路线或安全目的地。
2. 当地 NWS 预警移到 NHC 当前风暴相关性区块后、规划与推荐内容之前；首段新增当前预警/官方指令/准备指南锚点。未改数据请求及成功、空结果、失败处理代码。手机实查 Miami 预警标题约在文档顶部 1,598 CSS px（390×844），为该视口观察值；不与上一轮不同视口的 5,763 px 直接计算改善百分比。本次实际观察到无活跃当地预警的空结果，未伪称实测全部数据状态。
3. 46 篇数据驱动博客逐篇指定两个下一步资源，保险→理赔/洪水、停电→规划器/发电机、距离→距离工具/锥形图等。不再因正文偶然出现关键词而挤占推荐位。保留现有相关文章算法和结构化数据。

## 六篇实质深化

| 路径（/blog/ 下） | 本次变化 |
| --- | --- |
| hurricane-additional-living-expenses-ale-coverage/ | 7 天普通/实际/额外费用对照；同日期酒店/租房预算，分开可退押金、最终费用与初始现金。金额均为虚构教学例子，不能当作价格或赔付承诺。 |
| hurricane-documents-insurance-checklist/ | 可复制的私密离线文件索引；明确保单分类、负责人、实际打开日期和未解决项。加强完整文件离线检索步骤，不收集密码或健康资料。 |
| hurricane-home-preparedness-room-by-room-checklist/ | 留家/随身/最后装包矩阵，实际可用性核对；保留一个工作灯重复计数练习，去掉第二个近似场景。保留燃气禁止实际关闭练习和专业恢复要求。 |
| how-to-use-hurricane-tracker-live-tools/ | 空白家庭交接日志及已标注为示例的庇护所任务表，分开来源事实、负责人和确认状态；移除重复测验。 |
| hurricane-power-outage-food-medicine-plan/ | 食物 4h / 48h / 24h 与闭门条件、温度暴露和冰淇淋例外放进同一表；食物规则不用于药品判定。 |
| real-time-hurricane-tracking-2026/ | 删除 11/8、11/14、11/16 三段过时天气快照及 AL94 专属 FAQ；前置来源—问题—时间工作流，保留四种时钟的虚构练习并给出对照表。未声称核实今日天气。 |

共 9 张原生表格，caption / 列表头 / 行表头完整，滚动区域可键盘聚焦，适配打印。修复文章网格最小宽度，手机表格在自身区域滚动，避免整页溢出。其他 40 篇正文未修改；其共享下一步推荐随模板修复生效。

## 本轮实际重读的一手来源

观察日期均为 2026-11-21，通过后台浏览器读取：

- https://www.tdi.texas.gov/tips/additional-living-expenses.html — 页面更新 2025-04-10。核对额外费用、承保损害、凭证/限额及 NFIP 不含 ALE。Texas 专属安排不推广为全国规则。
- https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage — 页面审核 2024-08-08。核对闭门估计、冷藏品类/暴露列、复冻条件及冰淇淋例外。2 小时暴露条件不是在 4 小时之后追加的宽限。
- https://www.nhc.noaa.gov/aboutnhcprod.shtml — 本轮观察未记录页面修订日期。核对公告发布频率、中间/特别公告及预报有效时刻。

其余三篇只标注本轮编辑复核，保留早前来源核验日期，没有把未重读的来源标为今天新核验。没有编造团队、专家、当日天气或真实家庭个案。

## 已完成本地验收

- `node scripts/verify-editorial-recommendations.mjs`：33 城市同州、排序、无自身、无数组变异及 46 篇显式推荐、无重复/自链、目标路由存在均通过；含 Miami 已知距离检查及无同州候选边界。
- 独立数据检查：恰好六篇内容实质修改，9 张表每行列数一致，其余 40 篇未改；实时指南无残留 AL94 引用或三段旧快照标题。
- `npm run check`：0 errors、0 warnings，4 条原有 hints。
- `npm run build`：通过，33 城市数据及 46 张博客 OG 检查通过。保留原有 public/robots.txt 与同名生成路由的构建提示，未更改该路由。
- 浏览器在 390×844 逐篇检查六篇表格、canonical、下一步推荐，无横向整页溢出（布局宽度 375 px，视口 390 px 含滚动条）。桌面 1280 px 检查停电表格与浅色主题；手机检查深色主题。原生表格有内部滚动及打印样式；未声称导出 PDF 实测。
- 城市页浏览器检查 Miami：预警顺序早于行动/风险/城市推荐，附近六城市顺序符合数据检查；当前当地预警空结果有明确文案。
- `git diff --check` 通过；依赖、配置、路由名、sitemap、ads.txt 发布商未改。

## 发布方法与后续判断

本工作树 detached HEAD，现有 ship 脚本只允许 main，不能据此切走另一工作树正在使用的 main。使用再次 fetch/比较、选择性暂存提交、非强推 `HEAD:refs/heads/main`、核对完整远程提交、Wrangler 显式部署及生产 SEO 验证。部署消息应包含完整 Git 提交，发布后用 Cloudflare 版本/流量记录和线上六篇+城市页确认，不能仅用 Git HEAD 推断线上已更新。

这批改善对应可用性、地域准确性、时效表达和任务完成度；不证明 Google 拒审的具体原因，也不保证 AdSense 通过。下一批应继续按搜索需求及页面独有价值深化，不为增加频率累积重复状态快照。
