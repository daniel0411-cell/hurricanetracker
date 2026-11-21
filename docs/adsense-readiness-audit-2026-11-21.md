# AdSense 再次未通过后的生产站审计

审计日期：2026-11-21（Asia/Shanghai）。范围：用户所选第 2 项——线上内容、重复入口、工具与公开抓取入口。此次只审计，不修改业务代码、不提交、不推送、不部署、不重新申请。

## 结论

当前站点已有实质性的来源解释、历史案例、具体操作记录与工具，不能仅因再次收到通用拒审邮件，就认定整个站点都是低质内容。此次发现更值得先解决的，是查询失败仍显示旧结果、错误的地区入口、深色模式可读性，以及少量信任信息残留。继续堆文章数量不是优先事项。

下列问题均为站点自身的可改进项，**不是 Google 已确认的拒审原因**。此次未获得审核人员说明、真实 Google 请求日志或账号审核内部信息；不能确定审核涉及哪个站点版本，也不能从这些检查推算通过概率。

## 版本与范围

- 当前 detached HEAD，无上游分支；origin fetch/push 为 `https://github.com/daniel0411-cell/hurricanetracker.git`；远程默认分支 main，经本轮 `ls-remote --symref` 确认。
- 本轮已成功 fetch。HEAD 和 origin/main 均为 `4b8a1856cb86342be5a5352365e60caf04ba4bfe`，提交图比较为 0/0，无已跟踪改动。
- 原有 7 份未跟踪 docs 文档及未跟踪 node_modules 保留，未混入本次工作。仅新增本报告。
- 生产站：`https://www.hurricanetracker.cc/`。Cloudflare deployments list 确认当前 100% Worker 版本为 `d0348349-4548-48d5-ab6d-330dd9c5b1b1`，创建于 2026-11-18 08:57:43 UTC。versions view 中无 Git 提交注释，故**未能独立确认线上版本对应的 Git 提交**；不以本地 HEAD 推断线上提交。下列核心缺陷均在生产浏览器重现，并与本地代码交叉核对。
- 公开 HTTP 检查覆盖 sitemap 的 189 个页面（包括 49 篇博客详情）；另检查 54 个 sitemap 外链接目标，含 21 个保留风暴记录、下载记录、示例数据、图片、sitemap 和纽约 tracker 目的地。54 个目标含主动加入的纽约链接，并非全部来自静态正文。
- 浏览器实际操作：首页 ZIP 查询、距离工具、雷达页及明暗主题、县级风险工具、风暴潮工具、预警定义文章。正文抽查覆盖近期限时准备、逐房间清单、watch/warning 定义与阅读练习、ENSO、季节展望、实时入口、Arthur 2026 档案、Isaias 档案。
- 这是全清单状态/正文扫描加重点人工抽查，不是 189 页逐句事实认证；未完成全设备、所有工具和所有第三方素材的浏览器测试。

## 已确认问题与对应方案

### 1. P1：查询失败仍残留旧地点和旧结果

页面：

- `https://www.hurricanetracker.cc/tools/county-hurricane-risk/`
- `https://www.hurricanetracker.cc/tools/storm-surge-checker/`

线上复现：县级工具先查询 `10001`，正常显示 New York City, NY 和 0 条点位预警；随后查询无效邮编 `00000`，状态变为 Local lookup unavailable，但结果区仍显示纽约旧地点、旧预警数量和旧链接。风暴潮工具先查询 `33101`，再查询 `00000`：显示 Surge check unavailable，同时结果标题滞留 Checking...，说明仍为 Miami、ZIP 33101、0 条 tropical alerts。

问题在于输入、状态、结果不再对应。即使旧文字带有“不是安全结论”的提示，也无法消除用户误读当前结果的风险。

代码证据：`src/pages/tools/county-hurricane-risk.astro:50` 起提交逻辑，失败分支约 70 行只更新状态；`src/pages/tools/storm-surge-checker.astro:180` 起请求逻辑及 210 行失败分支。两者均未像距离工具一样在失败时清空结果，也无明确的请求顺序保护。并发覆盖是代码层风险，未在本轮浏览器复现。

方案：新请求开始即清空旧地点/结果；失败显示明确 Unavailable，不保留“0 alerts”；成功结果标注查询 ZIP、点位与可核验的 feed 时间；为连续查询增加 request ID 或取消旧请求；校验 feed 结构和时效，不能把缺失数组解释为空预警。时效异常属于后续需专门验证的场景，本轮没有向生产注入异常响应。

验收：成功→无效 ZIP、成功→服务失败、连续更换 ZIP 均不能显示前一次结果；距离工具已有相应保护，可复用思路。属于已有工具核心逻辑修复，实施前需按 AGENTS.md 获得具体授权。

### 2. P2：县级工具承诺纽约入口，却跳到阿拉巴马概况

线上 `10001` 查询结果提供 Open New York tracker，目标 `/tracker/new-york/`；点击后到 `/tracker/`，首屏显示 Alabama: Monitor 与 Alabama NWS alerts。最终返回 200，因此只检查 HTTP 成功会漏掉此问题。

证据：`src/pages/tools/county-hurricane-risk.astro:68` 无条件拼接州 tracker；`src/pages/tracker/[id].astro:44` 未匹配 storm 时跳转通用 tracker；`src/pages/tracker/index.astro:51` 获取 AL 预警。纽约没有专用州 tracker。工具的“正确州 tracker”承诺与实际结果不符。

方案：仅对真实支持的 9 个州生成专用 tracker；其他地区给准确标注的通用 live tracker，加官方点位预报与现有本地准备指南。不要为了补一个链接新建一批州页面，也不要让纽约用户默认读到阿拉巴马状态。

验收：纽约、New Jersey、Massachusetts 和任意不支持州的链接名称与落点一致；支持州仍进入专用页。若仅修工具构造逻辑也涉及核心页面逻辑，需具体授权。

### 3. P2：雷达页深色模式浅底浅字，首屏阅读困难

页面：`https://www.hurricanetracker.cc/radar/`。

线上截图确认深色模式标题和说明变为浅色，但 `.radar-page` 顶部仍为浅色背景；切换浅色模式后恢复正常。读取的 H1 颜色为 `rgb(232,238,241)`，背景渐变从 `rgb(238,244,246)` 开始。未测量完整渐变区域的 WCAG 对比度，不给虚构精确分数。

证据：`src/pages/radar.astro:1267` 的背景使用固定浅色端点与 `var(--surface)` 混合，文字继承深色主题。雷达框架和数据本身已成功加载；这是可读性缺陷，不是“雷达完全不可用”。

方案：让背景、标题、正文共同使用主题变量或提供明确深色覆盖；同时检查底部说明区。保留一条清楚的安全提示，精简首屏重复警示条以缩短到地图的距离。

验收：桌面/手机，明暗两种主题，标题、来源说明与操作按钮均可读，不横向溢出。CSS 修复通常不需要改动核心路由逻辑。

### 4. P2：首页空风暴列表触发“平静天气”措辞

页面：`https://www.hurricanetracker.cc/`。

线上正确区分空 active-system 列表与其他危险，并显示当前 NHC outlook，但同一空列表准备区仍说 Use quiet weather to finish three records。NHC 原文在本轮浏览器直接核验：700 PM EST Fri Nov 20 2026，Southeast U.S. offshore 非热带低压未来 48 小时/7 天生成概率均 30%，并提示东南部和 mid-Atlantic 强风、危险海浪、离岸流、沿海洪水与暴雨/山洪。

因此，“没有活跃热带气旋”成立，“当前是平静天气”却不能由该列表推出。不能把 30% 形成概率当作上述危险发生概率。

证据：`src/components/Homepage.astro:155` 起的空列表区，160 行 quiet weather。直接来源：`https://www.nhc.noaa.gov/text/MIATWOAT.shtml`，观察日期 2026-11-21；动态产品后续会变，以上为当次 issue 的观察记录。

方案：改成条件式准备提示，例如“在当地条件允许时提前完成准备”；无命名风暴时继续突出 developing disturbances 和本地非热带危险。没有必要为了改一句话设计自动风险判断系统。

验收：空风暴列表配合有危险 outlook 时不暗示无危险；数据失效不展示“平静”结论。

### 5. P2：三篇独立文章 JSON-LD 仍写 HurricaneHub team

线上 HTML 已核验三篇 BlogPosting 的 author 均为 Organization，name 为 HurricaneHub team：

- `/blog/hurricane-watch-vs-warning/`
- `/blog/rip-current-statement-gulf-coast/`
- `/blog/flood-advisory-vs-watch-vs-warning/`

用户之前已明确没有实际团队，因此该称谓应统一。它不是虚构某个具名气象专家，但仍是上次清理后漏掉的团队表述，且机器读取的信息与 About 的独立项目描述不够一致。

证据：对应三个 `.astro` 文件各 19 行的 `authorName: "HurricaneHub team"`；`src/lib/schema.ts:106` 将其写入组织作者。About 已明确 AI 辅助和有限范围事实核对，未承诺专业专家审核。

方案：三个显式作者统一为真实发布品牌 HurricaneHub，保留 Organization 类型。不要改成虚构姓名、补头衔或编造作者履历；组织署名本身没有问题。

验收：正文署名、JSON-LD 作者、About 均一致，不再残留无实际团队的称谓。

### 6. P3：修改日期与来源核验日期的区别表达不清

`/blog/hurricane-watch-vs-warning/` 首段写 Updated November 17, 2026，随后紧接 Definitions checked；结尾却写 NWS definitions checked November 2，且 NHC glossary 在“this revision”无法读取。两者可以分别代表编辑和研究日期，并不证明伪造核查，但读者很容易误读为 17 日刚做完全部核验。

证据：`src/pages/blog/hurricane-watch-vs-warning.astro:33` 与 109–113 行；生产正文已对应核对。雷达首屏仍引用 November 16 的空风暴观察，虽然标明历史日期，却给实时入口增加过时信息负担。

方案：明确分开“编辑更新：11/17”“定义核查：11/02”，注明未重查来源；若本次重新阅读，则真实记录新核查日期并处理旧失败提示。实时页的历史观察移入例子或删去无必要的固定日期句，当前状态交给独立带时间的数据区。

验收：不通过统一刷新日期制造新鲜感；旧检查失败说明仅在仍适用时保留。

## 内容质量：应继续优化，但不建议盲目合并

- 预警“定义比较”与“阅读具体消息”有不同任务；近期限时房屋准备、逐房间库存、长期加固也已主动互链并区分用途。抽查未发现需要仅凭标题相近就删除的重复文章。
- 189 页五词片段重合扫描中，超过设定 0.57 包含率阈值的配对主要是博客分类、总目录与 site-map。该指标是交集占较小文本集合的比例，受导航/列表影响，既不是 Google 相似度算法，也不能证明其余页面全部原创。目录正常重合不应当作违规证据。
- 重复提示仍可精简：45 页出现相同的博客“阅读后下一步”组合，33 个城市页共用相同的三工具描述，30 页共用一段离开前确认本地指令的提示。计数来自 main 正文句段扫描，包含卡片与导航；不是“重复内容比例”。保留必要安全提醒，但不必在每页反复解释同一组限制。
- 一些博客在答案前堆叠 Source check、插图声明、Correction check 和很长的未核查范围。例如逐房间清单先出现两组范围说明，之后才到实际任务。建议首屏先给简短答案/清单，留一行日期和范围摘要，将详细方法说明放到相关证据附近或可展开区。不要删除核查责任，也不要以更多免责声明代替回答。
- 工具页面正文短不等于薄内容。此次 hurricane brief、dashboard、family communication 等页面的初始 main 文字不足 300 词，但实际价值依赖交互；不建议为了字数追加无关文字。应逐项验收成功、失败、输入变更、数据失效及离线导出功能。
- 更高价值的后续内容：把现有近似任务变成能完成的记录或可用素材，例如预警原文标注、家用清单和交接记录；补充有来源的地方差异。新增当日天气文章必须核验当日官方产品，不能沿用 11/13 的无生成预期或把历史天气当今日情况。

## 本轮通过与不能推出的结论

1. sitemap 189 页均 HTTP 200，canonical 全部匹配所请求规范 URL，未发现缺失 canonical 或意外 noindex。
2. 另测 54 个链接均最终 200；这不等于目的地语义正确，纽约案例就是反例。未对全部站外来源链接做实时穷尽检测。
3. 21 个保留历史风暴记录均有 noindex，当前无新活跃系统时未自动回流 sitemap。11/11 已处理的索引策略没有在本轮复发；这些 URL 仍可访问，noindex 不保证 AdSense 不会评估其内容。
4. `node scripts/verify-seo-endpoints.mjs` 通过：主页、ads.txt、robots、信任页、图标及 sitemap；HTTP/HTTPS、根域/www 的主页和 ads.txt，在模拟 Mediapartners-Google、AdsBot-Google、Googlebot 的 GET/HEAD 请求下均按预期落到 www，未复现 challenge。
5. www ads.txt 内容为 `google.com, pub-1321310404115919, DIRECT, f08c47fec0942fa0`；首页 AdSense 脚本与检查脚本中的此账号一致。这里只确认公开配置，不确认账号所有权或后台审批状态。
6. 模拟 UA 的测试来自本机网络，不是真实 Google 网络请求。未读取本轮 Cloudflare 真实安全事件/日志；不能证明 Google 从未被拦截，也不能把没有日志解释为未抓取。
7. 首页 ZIP 33101 正常显示 Miami 点位与检查时间；距离工具正确显示已核验 feed 中无活跃气旋，并明确这不取消本地警报。没有在其上复现旧距离残留。
8. 雷达 RainViewer 图层显示成功加载帧的时间，Florida 预警和全国计数成功加载。没有穷尽验证卫星/forecast/wind 每一层与移动设备操作。
9. About 的 AI 辅助、来源范围、组织发布责任说明较坦诚；服务结构化数据实际类型为 Service，不因本地函数名称 governmentServiceSchema 就错误判定它在冒充政府机构。
10. 未测试邮箱收信、订阅/退订实际送达、广告同意平台的地区配置、Google 后台状态、Core Web Vitals 或账号层面的资格限制。上述项目应列入下一轮独立验证，不当作已通过。

## 实施顺序和工作量

| 顺序 | 任务 | 大致规模 | 验证重点 |
| --- | --- | --- | --- |
| 第一批 | 两工具失败清理、连续请求保护、州入口映射 | 2 个主要工具页，必要时小型共享帮助函数 | 成功→失败、连续 ZIP、不支持州、feed 异常 |
| 同批 | 首页条件措辞、雷达主题、3 篇作者、日期说明 | 约 6 个文件，和前项可能合计约 8 个文件 | 明暗/手机、JSON-LD、前后日期语义 |
| 第二批 | 首屏答案和核查说明排版、按意图选择工具入口 | 先选 3–5 篇高展示页面 | 读者能更快得到答案；保留来源和事实边界 |
| 独立核验 | 邮箱/订阅可达性、地区同意配置、真实抓取证据 | 取决于可用后台与测试账号 | 区分公开配置与服务端实际运行 |

这是一至两批有明确边界的整改，不需要重写全站或新增几十篇。第一批涉及既有工具核心逻辑，按 AGENTS.md 需具体授权后实施；本轮没有实施这些修改。整改后再 build、工具回归、生产验证，是否重新申请仍以账号允许的流程和实际说明为准。

## 检查记录

只读抓取临时结果位于 `/tmp/hh-production-audit.json`、`/tmp/hh-extra-results.json`；不是发布产物，可能被系统清理。本报告保留关键 URL、步骤和观察，不依赖临时文件才能理解结论。首次 Python 抓取因本机 CA 路径失败，切换系统 CA `/etc/ssl/cert.pem` 后完成；全程没有关闭 TLS 校验。未把该本机错误报告为生产站 SSL 故障。

本轮仅新增审计文档，未运行业务构建，未提交、推送、部署或提交 AdSense 审核。

## 后续整改（2026-11-21，用户已授权修复与上线）

已修复上述六项：两个 ZIP 工具在输入变化、新查询及失败时清空旧结果，增加取消/超时与请求顺序保护；县级工具复用现有 NWS 时效验证，仅为真实支持州生成专用链接；风暴潮响应验证时间、结构、点位、ZIP 和预警等级一致性，API 拒绝缺失或异常 features。其他州使用准确标注的通用 live tracker。雷达改用主题变量并去掉固定日期天气观察；首页准备措辞增加当地条件限制；三个组织作者统一 HurricaneHub；定义文章明确 11 月 21 日编辑说明与 11 月 2 日来源检查的区别。

发布前验证：

- `node scripts/verify-zip-tool-results.mjs` 通过。直接执行实际页面处理器，覆盖成功、支持/不支持州入口、输入变化、无效 ZIP、HTTP/网络失败、缺字段/过期数据、请求乱序及超时；实际 surge API 的缺失 features 响应测试返回 502。
- `npm run check`：0 errors、0 warnings、4 hints（既有提示）。
- `npm run build`：通过。存在既有 robots.txt 静态文件覆盖路由的提示；未修改 robots 配置。
- 本地浏览器：桌面默认尺寸与 390×844 手机尺寸，明暗主题均可读，无横向溢出。浅色 H1 为 rgb(23,33,43)，深色 H1 为 rgb(232,238,241)，背景随主题变化；不再使用固定浅色渐变端点。
- 新增脚本为模拟数据回归，不是真实 Google 网络请求，也不是全部浏览器或全部气象状态的穷尽验证。

待发布后另记真实 Worker 版本和生产验证结果。本次整改仍不能据此确定 Google 的具体拒审原因，也不代表已经重新提交审核。
