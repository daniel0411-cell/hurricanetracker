# 核心内容审计与优化方案：证据、解释、读者任务

日期：2026-11-06。状态：审计和实施建议，尚未修改站点内容，未提交、推送或部署。

## 1. 版本、范围和结论限制

- 已完整阅读 `AGENTS.md`，检查状态、远程、分支配置，查询远程默认分支并执行 fresh fetch。
- 当前分支 `main`，上游 `origin/main`；相关远程 fetch/push 地址均为 `https://github.com/daniel0411-cell/hurricanetracker.git`，远程默认分支为 `main`。
- 本地 HEAD 与已获取的 `origin/main` 均为 `1c8c9eda3c063f339fd0ba522125ccc08ac0afe0`，本地独有 0、远程独有 0。
- 工作区原有已跟踪修改：`src/components/ReminderSignup.astro`、`src/pages/api/push/send.ts`；另有未跟踪草稿、研究文件和脚本。本次保留且不纳入内容整改。
- 独立核验生产发布元数据：站点 `https://www.hurricanetracker.cc/`，Cloudflare deployment `8e6daff6-8174-489f-9d6a-de2b427f9813`，Worker version `0de71f0f-57dd-4995-95d5-9ec5c5297641`，100% 流量；版本注释对应上述完整提交，创建时间 `2026-11-05T10:56:47.271469Z`。
- 审计依据为该提交的内容源码与当前生产页面；不以现有推送功能工作区改动作为已上线行为。
- 浏览器抽查 20 个生产页面，均返回 HTTP 200，未捕获页面脚本异常；对两个工具执行指定情景交互，对三页检查 360px 页面宽度。不是全站逐条事实核查、全功能测试或当前风暴巡检。
- 阅读了 11 月 4 日审计、实施记录和素材 brief。已经修复的预警定义、危险天气行动、数据失败状态及州级案例，不再列作缺失项目。

**核心结论：下一轮应优先把已有知识转成可核验的判断过程和可带走的结果。** 部分页面的问题是具体措辞仍可能误导；更多页面的问题是讲了原则，却没有原始材料、示范和完成标准。扩大文章数量、增加装饰图片或统一拉长文字，不能替代这项工作。

## 2. 已经值得保留的样板

| 页面 | 已有价值 | 后续要求 |
| --- | --- | --- |
| `/blog/hurricane-eyewall-replacement-cycle-explained/` | 三阶段教学图、Irma 官方讨论证据、阅读检查；实际 Michael 雷达与概念图分开 | 保留概念图与真实观测的身份区分，不把 Michael 图说成眼墙置换证据 |
| `/hurricane-tracker/spaghetti-models/` | Joaquin 2015 原图、编号说明、手机局部图、问题与答案 | 原图未给出的逐点预报时效不得补造；时间换算练习继续明确标为假设情景 |
| `/blog/hurricane-water-storage-purification-emergency/` | Austin 2022 实际通知时间线、通知类型解释、五字段记录任务 | 保持通知发布与解除时间可追溯，不把一次城市事件当成通用处理标准 |
| `/blog/hurricane-flood-zone-map-fema-understanding/` | FEMA 教学例子、地图版本检查、可复查记录 | 保留洪水分区与撤离分区的区别 |
| `/tracker/mississippi/` 等已更新州页 | 地方机构、路况、NWS 分工，历史记录和家庭填写字段 | 下一步选择具体地方问题补深，不把已上线页面重新写成泛化长文 |
| `/tools/alert-action-decoder/` | 本次测试 Extreme Wind Warning + vulnerable，结果要求立即进入坚固建筑内部避险 | 保留按灾种区分行动的已修复逻辑，不为提高交互感改成统一出发建议 |

源码清点有 46 篇生产博客，其中 8 篇有正文 `figures` 字段，16 篇有 `sourceCheck` 字段。字段数量仅帮助找检查入口，不代表其余文章没有来源，也不作为质量评分或提审门槛。

## 3. 具体发现，按优先级排序

### P1-A：风力等级文章的部分解释超过证据所能支持的范围

页面：`/blog/saffir-simpson-hurricane-wind-scale-explained/`。

定位：`src/data/blog.ts:1266`、`:1299`、`:1304`、`:1308`、`:1314`、`:1322`。

- 正文将 Category 5 概括为 “total destruction is likely”，FAQ 说 “catastrophic to total destruction at landfall”。这把最大持续风速等级延伸为过强的登陆后果概括，不能作为读者具体房屋的损失判断。
- “Check the NHC forecast cone for the projected intensity at landfall” 容易让读者把中心路径不确定性图直接当成精确登陆强度产品。部分 NHC 路径图有强度符号，整改不能反过来说图上绝无强度信息；应说明符号对应的预测时刻，并带读者核对 advisory / forecast advisory 的强度表。
- description 仍承诺解释 “storm surge potential”；正文又正确说明等级不衡量风暴潮，两处表达需要统一。
- “Category 2 ... 10 feet or higher” 缺少具体事件、地点与水位基准；“about a fifth ... typical season” 缺少统计期间、口径和对应数据。它们未在本次审计中被证明为错误，但目前不足以让读者核验。

优化：保留正确等级范围，收紧后果描述；用已核实历史报告中的最大强度与登陆强度说明差别；把潮高数字换成有地点、测量类型和基准的案例，或删除无来源数字。新增一个读 advisory 的任务：找出最大持续风速及单位、归类等级、说明为何不能据此回答住宅淹水深度。答案与来源放在同一阅读流程中。

验收：标题、description、正文、FAQ 的口径一致；不混淆持续风与阵风、峰值与登陆、风速与淹水；练习可由展示的原始字段直接作答。已有等级示意图可复用，不需要新做灾难封面。

### P1-B：保险页仍有过度简化的理赔措辞，正文任务也不够集中

页面：`/blog/hurricane-flood-insurance-guide-nfip/`。

定位：`src/data/blog.ts:2519`、`:2542`、`:2559`、`:2570`、`:2618`。

- FAQ 用绝对的 “No” 回答风损和水损是否属于同一理赔，并称理赔员按 “wind versus water line” 分开。读者不能把一条水痕当成保险责任和损失原因的统一判定线；私营保单安排也不能一概而论。
- 仍有 “48 hours out / 24 hours out” 的固定准备安排，未绑定当地实际行动窗口；“cone and wind radii so you can judge arrival” 也容易夸大图层能支持的判断。
- 标题承诺 NFIP、私营保单和理赔，正文却穿插家庭成员、宠物及通用准备内容。有效的保险信息已有基础，但读者没有一个完整的保单核对示范。

优化：围绕“带着哪些问题找保险代理人，以及怎样整理损失证据”重排。保留已修正的等待期例外、建筑/财物分开限额、收据和 Proof of Loss 条件。补一份明确标为虚构教学资料的保单字段示例和空白记录：保险类型/表格、实际生效日、建筑与财物限额、各自免赔额、结算方式、除外责任、理赔电话、尚待书面确认的问题。不得虚构真实保单截图或承保承诺。

验收：读者可填出自己的核对记录，并识别“尚未确认”；普通索赔通知与 Proof of Loss 区分；截止日来自适用保单和事件通知；通用准备信息通过必要内链承接，不继续挤占主任务。

### P2-A：快速增强文章解释了如何核验，却没有可练习的真实记录

页面：`/blog/hurricane-rapid-intensification/`。

定位：`src/data/blog.ts:1207`、`:1215`、`:1220`。

文章已解释 30 kt / 24 h、观测与预测、缺失数据的区别，也披露本站监测规则。但历史核验部分只是建议打开 TCR，没有指定两条记录、计算过程和答案。手机持机的封面不能解决这一缺口。

优化：先选一份可读的 NHC TCR / best-track 原始记录，再选严格相隔 24 小时的两行，展示 UTC、最大持续风速 kt、来源表号或页码，计算差值。另给一个时间不足或缺值的对照，让读者判断“无法据此完成 24 小时比较”。30 kt 是定义阈值，35 mph 是近似换算，计算时保持原始单位。

验收：所有数值能回到原表；读者可独立复算；观测、预测、类别变化分开；历史记录与本站近似时间容差的监测实现分开解释。本次没有选定最终数据行，不预填未经核验的风暴数字。

### P2-B：预报变化、路径、登陆主题之间，仍缺少一个完整的历史比较

页面：`/hurricane-tracker/why-hurricane-forecasts-change/`、`/hurricane-tracker/path/`、`/hurricane-tracker/hurricane-landfall-forecast/`。

定位：`src/data/topicPages.ts:19`、`:36`、`:85`、`:424`。

三个页面已各有用途说明，但主要仍是通用步骤和跳转。本次生产抓取中各自正文外链只有 NHC/NWS 通用入口；没有一组可读者核对的两次 advisory、预测有效时刻和解释节选。预报变化页的 “same initialization cycle” 还需与模型页已解释的 native initialization / chart cycle / same valid time 对齐。

优化：先只把“Why Forecasts Change”做成样板：选同一历史风暴的两次 official advisories，比较同一个有效时刻的位置或强度，并引用 discussion 对变化原因的原文短节选。路径页负责识别当前产品字段与入口；登陆页负责区分中心过岸、危险天气先到以及地方行动，不复制三份同样长文。

验收：每列都有发行时间、有效时间、单位和档案链接；不能比较不同运行各自的 +72h 后称为同一时刻变化；区分当时预测与事后 best track。是否需要合并 URL，必须另看实际内容重叠及 GSC 数据，本次不提出自动合并或 noindex。

### P2-C：撤离分区专题尚未把读者带到一份可以复查的地方记录

页面：`/hurricane-tracker/evacuation-zones/`。

定位：`src/data/topicPages.ts:507`。现有 `/blog/how-to-check-your-hurricane-evacuation-zone/` 已有 Miami-Dade 示例，应当复用其基础。

专题告诉读者找当地分区，但正文只有通用机构入口和下一页链接，没有在本页走完“分区来源 → 当前命令 → 覆盖范围 → 时间 → 联系方式”的示范。

优化：先核验已有 Miami-Dade 示例与官方入口，再补另一个县的对照，突出不同地方字段不通用。输出空白记录：辖区、官方地图及版本/查询日、分区、命令发布机构、命令覆盖区和时间、交通协助联系方式。家庭地址由用户私下填写；找不到地图时提供县级机构备用入口。地图分区与当前命令分别查询，不能把查到分区当成正在撤离。

验收：从专题可直接到具体官方服务；无当前命令信息时明确“未核实”，不写“没有命令”；完整示范与博客分工清楚，不复制整篇。实际地图截图必须核对版本、署名和复用条件。

### P2-D：撤离工具可操作，但数字权重带来的判断权威需要收紧

页面：`/tools/evacuation-decision-helper/`。

定位：`src/pages/tools/evacuation-decision-helper.astro:8`、`:88`、`:110`、`:160`；`src/lib/evacuationDecision.ts:32`。

本次实际选择 locationRisk=2、housingRisk=2，无官方警报，结果为 Act，正文正确说明要提前安排协助，并明确不是撤离令。之前“脆弱家庭自动出发”的问题已修复。

剩余问题是 “assessment / Calculate Decision” 与 0/1/2 权重、2/4 阈值仍容易被当成经验证的风险模型，方法表披露了规则但未提供权重验证依据；结果也不能让用户记录交通和目的地是否已确认。

优化方向：以准备事项核对代替风险分数的产品承诺。官方警报行动继续优先；家庭部分输出尚未落实的交通、目的地、照护支持和官方命令核对项。“尚未查看命令”和“已查看且没有适用命令”应能区分。结果提供可复制的核对记录及已核验官方帮助入口。

验收：读者能说出“我还缺什么确认”，而不是只获得一个等级；保留现有立即避险和命令优先的回归场景。此项涉及工具行为，实际实施前需确认项目对核心路由逻辑禁区的授权范围，本次只列建议。

### P3：地方页及后续主题按具体读者问题继续补深

- Savannah 常备页：`src/data/localPreparednessPages.ts:835`，十个历史风暴多为一句概述。选择 Matthew / Irma 中可核验的一两个地方案例，给具体测量、地点和来源，再走完 Chatham 分区与交通核对任务。现有 CEMA 分区链接尚需实际验证，不把候选链接当作可用资源。实时城市页继续负责当下警报，常备页负责长期记录，暂不合并。
- Mississippi：已有 Katrina 峰值与登陆区别和家庭记录。下一步可补一个真正与当地有关的淹水/潮位测量，保留测站、基准、日期、报告位置；不能把 storm tide、surge、地面以上淹水互换。
- ENSO 博客：已有三幅说明图。后续如要加强，优先选一张明确日期、单位及距平基期的 NOAA 实际产品做读图任务；不是继续增加相似海温图。
- 登陆后追踪博客：具体提到 2026 Isaias 最后一份 advisory 及交接日期，但目前所列来源为机构入口。应找到确切 advisory 和 WPC 接续产品后做机构交接示范；本次未核实这条历史细节，不直接判假，也不按其制作新图。

## 4. 建议实施顺序与每批交付

| 批次 | 页面范围 | 读者应得到的结果 | 验收重点 |
| --- | --- | --- | --- |
| 第一批：纠正口径并聚焦任务 | 风力等级博客、NFIP 博客 | 一次 advisory 风速归类；一份保单/索赔核对记录 | 正文、FAQ、description 一致；原始出处；去掉不必要固定倒计时 |
| 第二批：真实数据练习 | RI 博客、Why Forecasts Change 专题；spaghetti 博客小幅补链 | 一次可复算的 24h 风速变化；一次同有效时刻的预报比较 | 数据表、逐步解释、题目及答案、来源页码；时间语义一致 |
| 第三批：地方任务闭环 | 撤离分区专题、Savannah 常备页；工具另按授权实施 | 一份当地地图/命令/交通确认记录 | 具体机构入口、无法确认状态、隐私与版本、灾种行动不回退 |

第二批的小修改：从 spaghetti 博客直接链接已上线 Joaquin 阅读练习的确切锚点，说明它能练什么。保留 Danny PDF 作为另一个带时效标签的历史例子；不把缺少逐点时效的 Joaquin 强行当成时间换算题，也不在两页复制整套素材。

每批先完成证据核对，再写解释和练习，最后做版式。实际内容改动后按项目要求构建，并检查相应页面的 SEO、FAQ、移动端和交互。只调整实际修改页面的可见编辑日期，不借机批量刷新全站日期；涉及 sitemap 真相源或核心路由逻辑时另行明确授权。

## 5. 图片、视频与外部材料的具体需求

| 素材 | 用途与规格 | 制作前提 |
| --- | --- | --- |
| RI 真实时间序列 | 两至数条官方记录的小表 + 可选折线图，标出 24h 起止、UTC、kt；桌面及手机可读 | 先核验 TCR 表格；图由真实数据绘制，不用生成式图片伪造观测 |
| 两次 advisory 对照 | 两列预测字段/表格，同有效时刻；必要时附保留完整时间和图例的官方图 | 先确认对应档案和 discussion，标记 Historical example |
| 保单字段教学图 | 合成示例字段卡 + 空白核对单；用文字明确为虚构示例，不含个人资料 | 字段及解释对应适用官方条款；不能做成冒充真实保险公司文件的截图 |
| 地方分区查询图 | 官方界面的必要局部及完整上下文，说明地图版本、分区与命令的区别 | 核对服务实际可用、版权、时间；不虚构住址或 AI 绘制官方分区 |

每项都要有原始 URL、机构、访问日、数据时间及其时区、单位/图例、权利与署名、编辑说明、alt、英文图注和一道可验证答案的读图题。原图字段不存在时，调整问题，不能补造。

优先使用可检查的表格、少量标注图及现有教学资产。视频只在能展示静态图难以表达的过程时加入；候选必须核对官方身份、对应时间段、字幕/文字摘要和关键时间点，并提供不用播放也能完成任务的文字版本。YouTube 视频数量和 Reddit 讨论热度不作为质量依据；Reddit 可启发读者问题，不承担预警、保险或水安全事实的依据。

1440px 桌面与 360px 手机验收：标签、表头和图例可读；局部图可追溯完整原图；答案不依赖颜色；无横向页面溢出；不播放视频也能完成主要任务。

## 6. 统一验收标准

1. 证据：关键事实有具体产品、报告页码/表号或档案，不止机构首页；资料失败时记录缺口。
2. 解释：紧贴展示的证据说明每个字段、单位、时间和局限，不以免责声明替代解释。
3. 任务：明确读者最终得到什么，例如计算结果、产品辨识答案、可复查记录或待确认事项。
4. 答案：学习题有可核验解答；个人规划没有统一答案时，提供完整填写示范和完成条件。
5. 行动边界：历史例子、假设教学、当前产品分别标明；当地命令与即时灾种行动保持原有优先级。
6. 页面分工：新模块服务本页主题，必要内链指向下一任务，不在所有页复制同一整段或同一练习。

不以篇幅、图片数量、可索引页面数量或个人署名包装代替上述验收。此方案针对可见内容价值，不推测 AdSense 内部拒审原因，也不承诺通过概率或固定重提日期。

## 7. 核验记录与待核实项

- NHC 风力等级：`https://www.nhc.noaa.gov/aboutsshws.php`。浏览器直访返回 403，随后 curl 成功获取官方 HTML 并解析正文，核对了 Category 4/5 的潜在损害描述。其原文包含 framed homes 的限定，不能简写为读者所在地的全部毁坏结论。
- NHC cone：`https://www.nhc.noaa.gov/aboutcone.shtml`。浏览器返回 403，curl 重试成功；原文定义为中心路径及历史官方预报误差形成的范围，支持本次产品用途区分。不是本次对所有路径图符号的穷尽核查。
- NFIP 索赔：原 `https://www.floodsmart.gov/how-do-i-start-my-flood-claim` 正常重定向至 `https://www.floodsmart.gov/recover/start-a-claim`，200；核对了报告损失、核验 adjuster、记录损失及赔付依保单和证明材料的说明。不能据此认证全部私营保险条款。
- NHC arrival-time 说明候选：浏览器返回 403，另一次 HTML 浏览器解析发生 navigation / execution-context 错误；未完成内容核验。实施涉及到达时间的练习前需重新选取并核验正式产品说明。
- 尚待研究：RI 最终历史数据行、双 advisory 的最终风暴/时刻、地方地图服务及权利、Isaias/WPC 具体交接记录。以上不以推测补齐。
- 浏览器记录：`/private/tmp/hurricanehub-evidence-audit-20261106/pages.json`；三页 360px 截图在同目录。临时审计脚本为 `/private/tmp/hurricanehub-evidence-audit-20261106.mjs`。测试浏览器已关闭。

抽查路径：

```text
/blog/hurricane-eyewall-replacement-cycle-explained/
/hurricane-tracker/spaghetti-models/
/blog/how-to-read-hurricane-spaghetti-models/
/blog/saffir-simpson-hurricane-wind-scale-explained/
/blog/hurricane-flood-insurance-guide-nfip/
/blog/hurricane-rapid-intensification/
/blog/hurricane-tracking-after-landfall-inland-flooding-tornadoes/
/blog/how-el-nino-affects-hurricanes/
/hurricane-tracker/why-hurricane-forecasts-change/
/hurricane-tracker/path/
/hurricane-tracker/hurricane-landfall-forecast/
/hurricane-tracker/evacuation-zones/
/tools/evacuation-decision-helper/
/tools/alert-action-decoder/
/tools/storm-surge-checker/
/tracker/mississippi/
/hurricane-tracker/city/savannah/
/city/savannah/hurricane-tracker/
/blog/hurricane-water-storage-purification-emergency/
/blog/hurricane-flood-zone-map-fema-understanding/
```

保险、RI、撤离分区三页的 360px 页面检查未发现横向溢出；不等于全站所有图表均通过可读性验收。两个工具只测试了前述情景，未在本次重跑整个预警组合矩阵。本次仅新增本文档，不需要站点构建，未触发任何搜索引擎提交。
