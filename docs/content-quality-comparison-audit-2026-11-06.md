# 内容质量对比审计：整改前基准与当前线上版本

审计日期：2026-11-06。任务为只读内容审计；本次未修改业务代码、页面或发布配置，未提交、推送、部署或提交搜索引擎。

## 结论

**变化明显，而且核心提升发生在证据、解释和读者任务上，不只是视觉或篇幅。** 但改进覆盖不均：重点文章已具备实际学习价值，旧的独立文章、部分风暴档案、城市页和导航主题仍有明显差距。两篇旧安全文章存在应先处理的具体错误。建议先完成这些确定的问题，再考虑下一次 AdSense 复审。

不能根据本次观察确定上次拒审的具体原因，也不能承诺通过概率、固定等待天数或整改后必然通过。Google 实际审核了哪个版本、哪些页面，没有可核验记录。

## 版本与审计范围

- 本地 `main` 跟踪 `origin/main`；实际远程为 `https://github.com/daniel0411-cell/hurricanetracker.git`，默认分支 `main`。本次已重新查询默认分支并 fetch。
- 本地和刚获取的远程均为 `d445279bc944dd393c17842821391b917b66716e`，领先/落后 0/0。
- 通过 Wrangler 部署记录独立确认生产 Worker `hurricanehub`：版本 `035659e2-219d-43d8-9155-94f7c85b2d45`，100% 流量，创建时间 `2026-11-06T07:17:06.043Z`，发布消息对应上述完整提交。
- 生产站点：<https://www.hurricanetracker.cc/>。
- 对比基准：`987df4116e868b65a5bf09e7e3f2a71b64ba0015`，2026-10-30 的可追溯整改前代码。它是代码比较基准，**不等同于已确认的 Google 拒审评估版本**。
- 工作区已有 `ReminderSignup.astro`、`api/push/send.ts` 未提交修改，以及多份未跟踪草稿、文档和 scratch 文件。均保留，未将其作为已上线内容评价。

覆盖：抓取生产 sitemap 的全部 189 个 URL，提取正文、标题、canonical、robots、图片、表格、引用链接和 JSON-LD；对比博客、主题、地方指南和命名风暴数据；对首页、实时页、三州、两城市、核心教学文章、旧安全文章、撤离工具、About 和 Privacy 共 16 个地址做桌面/手机浏览器抽查。

这是**全站清单检查加重点语义审阅**，不是对 189 页每句话的独立事实认证。未访问 GSC、Bing、GA 或 AdSense 后台，无法判断 Google 是否已抓取新版、搜索流量变化或账户复审资格。

## 可复核的前后变化

| 维度 | 10 月 30 日基准 | 当前生产 | 判断 |
| --- | --- | --- | --- |
| 博客生产数据 | 46 条文章记录 | 仍为 46 条；12 条记录发生变化 | 主要是改善存量，未靠扩量制造更新 |
| 明确标记 sourceCheck 的博客 | 9/46 | 19/46 | 核对范围更透明；标记不是整篇已通过专家审查的证明 |
| 数据中配有 figures 的博客 | 7/46 | 9/46 | 数量变化小；真实数据图与读图题的学习价值比数量更重要 |
| 23 条主题数据 | 旧数据 | 5 条变化 | 重点主题提升，不代表所有主题完成深度重写 |
| 22 条地方准备数据 | 旧数据 | 4 条变化 | 州 tracker 的独立文件另有改进；城市常备内容仍覆盖不均 |
| 6 条命名风暴数据 | 旧数据 | 3 条变化 | Erin、Dolly、Melissa 已有明确历史报告对照；其他记录较弱 |
| 9 个州规范页 | 旧内容 | 9 个文件均有内容变化 | FL/TX/NC 历史案例及其他州地方检查，优于通用建议 |

统计以指定数据记录的序列化差异为准，不是独立原创事实、原创图片或专家审核次数。未标记 sourceCheck、没有图片、字数较少均不能单独证明低质。

### 实质性提升

1. **从讲概念进步到使用原始证据。** Michael 的 NHC best-track 数值可算出严格 24 小时 +35 kt，另有 18 小时 +25 kt 对照；Irma 两份 discussion 对齐同一有效时刻，区分预报修订与实际增强。两者都能让读者完成有明确答案的任务。
2. **从装饰图进步到教学图。** 当前 Michael、Irma 图有历史标记、单位、时间、来源、英文解释和手机版本。Joaquin 原图保留标识，页面另有局部图；没有替原图补造缺失的逐点预报时效。
3. **预警语言更准确。** 核心指南把 48/36 小时的参照对象讲清楚；工具对龙卷风先避难、洪水按产品行动和撤离命令分开处理。数据失败、陈旧数据与有效的空风暴列表也做了区分。
4. **地方和家庭任务更明确。** 州页区分风暴峰值与登陆强度、潮位基准与地面淹水；准备指南区分物资、结构加固、医疗注册和交通安排，不再让每篇都承担同一份泛化清单。
5. **责任说明更诚实。** About 说明组织署名、AI 辅助、核对范围与更正途径，没有杜撰气象专家审核。

注意：部分图片、保险文章更正和案例在 10 月底就已存在，不能把当前所有优点都归功于拒审后的几轮更新。

## 当前发现（按优先级）

### P1：旧洪水预警文章把不同产品写成固定升级阶梯

线上：<https://www.hurricanetracker.cc/blog/flood-advisory-vs-watch-vs-warning/>。

代码：`src/pages/blog/flood-advisory-vs-watch-vs-warning.astro:9`、`:27`、`:34`、`:47`、`:60`、`:76`。

明确问题：

- 将 advisory/watch/warning 描述为 three-step scale，并说级别上升意味着水离读者越来越近。这些产品不是必须依次发生的升级流程。
- 将 watch 简化为“flooding is not happening yet”，不能据此确认读者当地没有正在发生的洪水。
- advisory 写成“No immediate threat to life is expected”，弱化了不谨慎行动可能造成生命危险的情况。
- 合并 flash flood 和 storm surge 场景，用 warning = “go” 作为统一记忆法，未充分区分原始产品、受影响位置和实际安全行动。

NWS 原文：<https://www.weather.gov/safety/flood-watch-warning>。其解释 advisory 的洪水虽未达到 warning 标准，不谨慎仍可能威胁生命财产；warning 表示洪水正在发生或即将发生；flash flood warning 的具体行动需按场景判断。

最小整改：重写产品解释与 FAQ，加入真实产品字段阅读例子，区分 river/flash flood 与 storm surge；删除固定升级阶梯和通用“warning=go”。引用具体官方定义。此页没有生产数据博客的统一 references 区。

### P1：旧离岸流文章有地理混淆及无依据的排名断言

线上：<https://www.hurricanetracker.cc/blog/rip-current-statement-gulf-coast/>。

代码：`src/pages/blog/rip-current-statement-gulf-coast.astro:9`、`:34`、`:45`。

问题：以 Gulf Coast 为主题，却将 Georgia 海岸混入同一地理解释；Georgia 面向 Atlantic。把整个 Gulf 概括成 narrow continental shelf 缺少依据。声称离岸流是 hurricane-season 的“#1 killer away from the storm itself”，没有统计范围、时期和原始来源；“最常见于远处飓风”的概括也没有依据。

这些问题会削弱整站可信度，比缺少一张封面更值得先修。文章中合理的避险提示不能抵消错误的地域和统计解释。

最小整改：以 NWS 离岸流安全页和具体海滩预报为基础，说明无命名风暴时同样可能发生；删除未经支持的机制和排名，加入实际预报的区域、时段、risk 和 lifeguard 指令阅读任务。

核对入口：<https://www.weather.gov/safety/ripcurrent>。本次另一个候选 `/safety/ripcurrent-survive` 返回 404，没有将它作为已成功核实的来源。

### P2：旧保险正文和 FAQ 仍有未限定的期限及保障概括

线上：<https://www.hurricanetracker.cc/blog/hurricane-insurance-claim-guide-documentation/>。

代码：`src/data/blog.ts:2340` 附近。

FAQ 将报损时限概括为 days to a few weeks，又称州级期限“many are one year”；没有说明具体险种、州、保单、损失日期、通知时限与提交证明/争议程序之间的区别。另有 standard homeowners cover wind 的概括，没有充分提醒沿海地区可能有 wind exclusion 或独立保障安排。

本次没有逐州核查上述期限，所以结论是**无法用现有引用支持该普遍概括**，不是认定每个期限数字都错误。

最小整改：删去无适用条件的数字，区分 notification/proof-of-loss/dispute deadlines，提供保单字段与书面确认清单。与已改好的 flood insurance 页面衔接，避免一个站内的新旧文章给出不同程度的保证。

### P2：部分命名风暴档案只有保留观测，缺少对应历史证据链

线上：`/hurricane-tracker/storm/fay/`、`/edouard/`、`/isaias/`。

这三页并非全空：实际有 ID、分类、坐标和记录时间的保留观测表。不能说它们完全没有数据，也不能把保留观测等同于最终 NHC 报告。

问题在于大部分外链只到 NHC/NWS/WPC 首页或资料目录。Edouard 和 Isaias 有具体日期、warning 边界或 advisory 编号的叙述，读者却不能从对应段落直接打开支持它的原始公告。Fay 的主体主要是通用核对清单。三页正文约 485/551/603 词，仅作定位信息，不作低质判据。

代码：`src/data/stormPages.ts:139`、`:238`；`src/pages/hurricane-tracker/storm/[storm].astro:200` 的保留观测表。

最小整改：逐条找原始公告，绑定年份、storm ID、公告号和 UTC；区分最后保留记录与 final advisory，加入一个实际数据解释任务。核实不到就删去未支持细节或说明缺失，不能靠补写更多常识填满篇幅。

### P2：部分主题/城市页的独立价值仍主要是导航

代表：`/hurricane-tracker/path/`、`/live-tracker/`、`/radar/`，以及 Brunswick 等城市页。

这些页面有可读介绍、风险说明、官方入口和相关工具，但若读者已访问真正的 live map、radar 或州页，部分中间页的新增信息有限。城市页已有地方风险段落，不能一概归为变量替换；不过地方规则、地图字段和可核验的具体案例仍不足。

建议：按读者任务逐页识别必要页面，优先在重要城市加入真实地方产品阅读与记录任务。对于任务重叠的主题，提出合并/定位方案后再决定；**本审计不建议直接按 URL 相似、无活跃风暴、低流量或字数批量 noindex**。

### P2：撤离工具仍用未经验证的权重生成“建议等级”

线上：<https://www.hurricanetracker.cc/tools/evacuation-decision-helper/>。

代码：`src/pages/tools/evacuation-decision-helper.astro:54`、`:93`；`src/lib/evacuationDecision.ts`。

当前行为已比旧版稳妥：强制撤离、龙卷风、洪水、surge 和 hurricane 的行动有区分；公开方法表也说明评分不是撤离命令。桌面/手机实测 none、tornado、evacuation 分支均给出相应结果。

遗留问题：官方状态默认就是“没有预警”，缺少“尚未确认”；家庭变量的权重和 2/4 分阈值没有验证依据，却输出 Recommended Planning Level。建议逐步改为“已确认/待确认的准备安排与下一步”，弱化计算式决策的权威感。不要误写成当前工具会把龙卷风直接解释为开车撤离。

### P2：内容自动审计的覆盖比站点范围窄

代码：`scripts/content-audit.mjs:17`。

当前 content:audit 检查 94 个 required routes 和 46 条博客数据。洪水与离岸流两篇独立 `.astro` 文章不在博客数据中，也未列入 required routes；此前脚本通过不能证明这两页正确。

最小整改：把独立内容页纳入清单，并给已确认的错误建立针对性的回归检查。结构、references 是否存在与逐句语义核查要分开报告，不能用测试通过替代编辑审阅。

## 技术与呈现观察

- 本次 sitemap 189/189 URL HTTP 200；未发现 canonical 与请求 URL 不一致，未发现 sitemap 中的 noindex 页面，每页均有单一 H1。这些结果不能证明外部引用、所有内部链接、站内非 sitemap 页面或全部 schema 都正确。
- 16 个地址在 1440/360 宽度共 32 次浏览器检查，无整页横向溢出；没有覆盖所有地图、表单、订阅和存储功能。
- 撤离工具初次测试因审计脚本同时匹配订阅按钮而失败，收窄到工具表单后重测六个分支通过。这是审计脚本问题，不计作站点故障。
- Michael、Irma、Joaquin 教学图均在实际滚动、解码后正常显示；Michael/Irma 手机端选中 mobile WebP。首次全页截图中的未加载图片区属于 lazy loading，不作为生产图片丢失的证据。
- Michael 手机图人工查看可读；Joaquin 整图缩到手机后标签较小，但页面有独立局部图与原图入口。后续应以读图任务是否能在局部图完成来评价，不宜只看整图缩略图。
- 当前无 active storms 与有 development outlook 可以同时成立。本次官方 CurrentStorms 为空，NHC Atlantic TWO 于 2026-11-06 06:00 UTC 给 Bermuda 以南系统 48h 20%、7d 30%；站点同次获取的 feed 记录相同。不能把无 active storm 解释成未来七天无发展区。
- About 已有责任主体、AI 使用、更正范围和联系方法；Privacy 有 Google/广告伙伴 cookie、个性化与官方控制入口。真实维护者背景仍可补充，但应由本人提供；不能虚构专业经历，也没有“必须假装气象团队才能过审”的依据。

## 下一批应做什么

1. **先修两篇旧安全文章和保险期限 FAQ。** 这是已确认错误或证据不足，优先级高于再加文章、视频或首页视觉。
2. **补齐审计覆盖。** 以后每轮回归显式包含独立文章与老 FAQ，避免重点数据文件变好、老入口漏检。
3. **完成三个较弱风暴档案的原始来源闭环。** 每条重要历史断言能定位公告；无来源的内容先收窄。
4. **选两座重点城市做地方任务样板。** 真正读取官方地图/产品说明，记录 jurisdiction、地图版本、预警和交通安排，不继续复制同一套提示。
5. **再处理主题定位与工具表达。** 先说明页面独立解决什么问题，再决定补案例、调整入口或提出合并建议；涉及路由、sitemap、工具行为时遵守项目授权边界。

素材以帮助完成具体任务为准：下一张有价值的图是可核验的洪水产品字段标注，或特定地方官方分区读图。不建议为了显得丰富先嵌入 YouTube/Reddit；它们不能替代原始数据核实，也不能修正安全信息错误。

## AdSense 复审判断

目前已能展示比基准更明确的原创整理价值，特别是历史数据解释、来源范围、比较练习和家庭任务。但核心优质页面与少量老页面的落差仍会影响读者信任；建议完成上述第一、二项后再评估复审，而不是现在凭“图片多了、文章长了”判断准备完毕。

Google 官方要求高质量、原创、对受众有价值的内容与良好体验：

- <https://support.google.com/adsense/answer/9724?hl=en>
- <https://support.google.com/adsense/answer/12176698?hl=en>

没有可靠依据给本网站估算 80%/85% 的通过率，也没有通用的“整改后必须等 14 天”规则。官方提到的部分 2-4 周是审核处理时间，不是内容更新后的统一等待期。实际再次申请时间应服从账户显示的资格/日期，并以修复已上线、访问正常、内容可核验为前提；搜索收录和广告审核是不同过程。

## 本地证据

目录：`scratch/content-quality-review-2026-11-06/`。

- `pages.json`、`html/`、`sitemap.xml`：生产抓取快照与结构数据。
- `comparison.json`、`summary.json`：指定提交的数据对比和清单汇总。
- `browser-results.json`、`tool-results.json`、`image-results.json`：浏览器抽查、工具分支补测及图片解码记录。
- NWS、NHC、Google 官方抓取文件：本次查证依据。404 候选单独保留，不混入成功来源。

未运行 build：本轮只新增审计文档和 scratch 检查产物，没有业务或内容实现修改。既有两处代码改动与其他未跟踪文件保持原状。
