# 发布后内容质量审计

日期：2026-11-02。任务：先部署上一批修订，再审计下一批需要优化的内容。以下发现记录审计时的 `ae77fe9` 版本；用户随后授权修订、提交和部署，处理记录见文末。

## 版本与发布

- 本地分支 main，上游 origin/main；远程默认分支 main，远程为 `https://github.com/daniel0411-cell/hurricanetracker.git`。
- 开始时 HEAD 与刚获取的远程均为 `b331fa97163b28c6274d2424e45325d41fa38777`，领先/落后 0/0，叠加上一轮已验证的 5 个文件。原有未跟踪草稿全部保留。
- 仅提交该 5 个文件，得到 `ae77fe90e4596b0ab87d16225abd5c8872955b49`。推送前再次 fetch，关系为领先 1、落后 0；推送后再次 fetch 并核实远程 main 为该 SHA，关系 0/0。
- Cloudflare deployment：`3fd4150a-19c6-4041-bc81-58f0468b6544`；Worker version：`16df7799-2b2e-4128-9375-2bad43313efd`，100% 流量。发布注释明确记录上述 SHA。
- 生产站：`https://www.hurricanetracker.cc/`。线上版本与本轮审计代码基准一致，不能将后续本地报告视为另一轮站点发布。
- Miami 常备页、家庭逐房指南、住宅加固指南均返回成功，已核对修订正文、来源范围、2026-11-02 修订日期、canonical 与可解析的 JSON-LD。此前构建、类型检查和 23 页本地渲染回归通过；本次发布前复核数据回归与差异检查。未提交 IndexNow 或 Google URL。

## 审计范围

逐段检查本地生产数据并读取以下三篇正式页面，确认下述原句存在于当前线上 HTML：

- `/blog/hurricane-water-storage-purification-emergency/`
- `/blog/hurricane-medical-needs-registry-preparedness/`
- `/blog/hurricane-safety-seniors-children-disability/`

另对照已修订的家庭准备和发电机指南中的相关建议。本轮不是全站逐句审核，不能据此宣称全站已达到 AdSense 审核要求，也不能由这些缺陷推断它们就是后台拒绝的具体原因。

## P1：饮水正文与 FAQ 给出冲突指示

位置：`src/data/blog.ts:3302` 与 `src/data/blog.ts:3326`。

正文写：在 boil-water advisory 下，即使通过家用滤芯也须煮沸；FAQ 回答能否用滤水器替代煮沸时，却以 “Only if the product is designed for the specific contaminants involved” 开头，容易被理解为产品标签足以构成例外。

CDC 原始说明明确写：**“Boil your tap water even if you filter it.”** 已读取并核对：

<https://www.cdc.gov/water-emergency/about/drinking-water-advisories-an-overview.html>

线上 `FAQPage` JSON-LD 的 acceptedAnswer 也包含该冲突答案。仅修改正文不能解决。

最小修订：FAQ 明确区分“日常处理某种已知污染物”和“当前煮沸通知”；后者按当地通知使用瓶装水或规定煮沸，不能自行以家用过滤替代。同步检查该条生成的 JSON-LD，保留已有 Austin 历史案例和正文。

## P1：医疗设备备用供电被写成通用设备清单

位置：`src/data/blog.ts:2444`、`src/data/blog.ts:2476`；另一篇见 `src/data/blog.ts:2101`、`src/data/blog.ts:2155`。

医疗指南把 “charged batteries, a generator, or a transfer switch sized for the device” 并列为备用电源。技术上转换开关用于切换供电来源，本身不产生或储存电能，不能单独成为续航方案。恢复段落还直接建议转接发电机或车辆电源，未要求先确认具体设备的兼容性与使用条件。

Ready.gov 的本轮可读取资料要求与医疗服务提供者讨论断电方案，而不是把通用充电或家用电器方法直接用于生命支持设备：

- <https://www.ready.gov/disability>：使用需电医疗设备时，与医生或医疗服务提供者讨论如何在断电时继续运行。
- <https://www.ready.gov/power-outages>：制定医疗设备与冷藏药物的断电方案，获取对生命至关重要药物的具体指导。

最小修订：区分实际电源、连接/切换设备和安装责任；删去通用车辆或发电机转接指示。增加由供应商/临床团队确认的设备型号、批准电源、使用条件下的备用时长、补电/燃料安排、故障联系人、替代照护地点及转移触发条件。未取得确认时记录“未解决”，不计算或承诺生命支持续航。

## P1：服务犬被附加不存在的 ADA 证件要求

位置：`src/data/blog.ts:2447`；相关模糊措辞见 `src/data/blog.ts:2147`、`src/data/blog.ts:2468`。

医疗清单要求 “food, vest, vaccinations, and ADA documentation”，另一篇要求携带 documentation，却未说明记录类型。可能使读者误以为必须购买服务犬证书或背心才能进入适用 ADA 的场所。

美国司法部官方 FAQ 已读取并核对：

<https://www.ada.gov/resources/service-animals-faqs/>

- Q7/Q17：适用实体不得将服务犬认证、训练或服务犬许可文件作为准入条件。
- Q8：ADA 不要求服务犬穿背心、佩戴身份标签或特定背带。
- Q18/Q19：普通动物管理中的疫苗及犬只登记规则仍可能适用；这些不同于服务犬资格认证。

最小修订：去掉 “ADA documentation” 必需项与背心必需暗示，区分可携带的普通疫苗/健康记录、日常照护物品和不可强制要求的服务犬认证。不要将宠物庇护规则等同于服务犬准入规则。

## P2：医疗转移时机仍是固定倒计时

位置：`src/data/blog.ts:2480`、`src/data/blog.ts:2485`、`src/data/blog.ts:2110` 及相应 FAQ。

医疗文章称完整 72/48/24 小时时间表适用于所有家庭，并写 “6 hours out: Stop travel”；另一篇规定一般命令前 1-2 天离开。没有交代倒计时相对于什么、路线/目的地是否确认、医疗机构安排、当地命令或天气风险，无法作为对所有家庭适用的时机。

最小修订：改为个体照护和交通计划中的触发条件、负责人、确认状态和备用选择。需要提前转移是合理的规划方向，但具体提前多久应按当地指示及照护/交通条件确认；不承诺固定时间段是安全行车或留家的界线。

## P2：药品储备和冷却缺少具体适用条件

位置：`src/data/blog.ts:2087`、`src/data/blog.ts:2100`、`src/data/blog.ts:2442`、`src/data/blog.ts:2443`。

相近文章分别规定 7 天与所有药品至少 14 天，却未解释目标、可获得性和医生/药师确认流程。较长储备本身不一定错误，但不应写成对全部处方适用的统一要求。胰岛素被泛化为必须用冷却方式运输，缺少防冻和具体产品条件。

Ready.gov disability 页面采用 several days supply 并要求规划日常需要；FDA 当前原始说明则明确不能使用已冻过的胰岛素，并列出不同产品/包装的不同存放条件，不能抽成对所有产品适用的统一温度或时长：

<https://www.fda.gov/drugs/emergency-preparedness-drugs/information-regarding-insulin-storage-and-switching-between-products-emergency>

最小修订：增加个人药品记录字段（产品、标签存储要求、供应商确认的运输方式、补配安排及联系人），在药师/临床团队指导下确定目标储备；说明避免冻结，不在飓风指南中给换药或剂量指示。

## 下一批建议

1. 先修饮水 FAQ，并验证正文、FAQ 与 JSON-LD 的同一结论。
2. 同批修医疗指南的备用电力、服务犬、倒计时和药品条件；把可用产出定位为设备/药品/交通连续性记录。
3. 将老人、儿童和残障家庭文章定位为家庭照护、沟通和无障碍安排，删除重复医疗/电力指示，链接到前者。分别保留 URL、发表日期和明确的实质修订日期。

以上是审计时提出的建议，不代表后续修订仍保留这些问题。

## 来源限制

美国司法部、CDC、Ready.gov 两页和 FDA 页面本轮均成功读取，并用 MarkItDown 转换核对。OSHA generator-safety 与 Ready.gov 链接的 Red Cross safe-generator-use 端点本轮都返回 HTTP 403；未把它们列为已读取证据，也不借此声称验证了任何电气安装规范。转换开关与电源的区分属于技术审查判断，具体安装和医疗设备适配仍需有资质人员确认。

本轮未查询真实患者、具体设备运行条件、处方、当前医疗点、交通、登记资格、庇护场所容量或当前警报。既有 sitemap 非博客 lastmod 旧日期问题仍保留在内容质量计划中；该禁区文件未修改。

## 授权后的修订

修订基准：`main` 跟踪 `origin/main`，重新查询默认分支并 fetch 成功，两者均为 `ae77fe90e4596b0ab87d16225abd5c8872955b49`，领先/落后 0/0；无已跟踪改动，保留原有未跟踪文件。

- 饮水 FAQ 改为煮沸通知下不能自行用家用过滤替代煮沸，并检查同源生成的可见 FAQ 与 FAQPage JSON-LD。保留 Austin 案例，来源范围明确其为 10 月 27 日核对，未冒充今日重查。
- 医疗文章聚焦设备、药品、登记、接收地点和交通连续性记录；区分转换开关与电源、申请与服务确认，删除固定倒计时、通用车辆供电和统一 14 天处方要求。新增 FDA 胰岛素防冻及产品条件依据，不提供换药或剂量建议。
- 家庭文章聚焦本人意愿、负责人和备援、可接收的警报、儿童接送、完整无障碍行程与交接；以明确标注的假设案例检查遗漏。两篇互链，各自承担独立任务。
- 两篇均纠正服务犬背心/证件前提，区分 ADA 资格认证与一般疫苗/犬只登记规则，链接 DOJ 原文及适用边界。
- 保留三条 URL、原发表日期与图片，实质修订日期为 2026-11-02。未动 sitemap、核心路由、配置或依赖，未提交搜索引擎 URL。

提交前验证：`npm run build` 通过；`npm run check` 为 0 errors、0 warnings、4 个既有 hints；26 条路径的数据和构建后页面回归通过，包括修订日期、来源范围、canonical、可解析 JSON-LD 与饮水 FAQ 答案一致性。Chrome/Playwright 在 1440px 和 390px 检查三篇均返回 200、单一 h1、图片正常且无横向溢出，并查看代表截图。本地历史风暴页实时 feed 有网络连接失败，未将历史页面回归当作实时天气源健康验证。

本文在提交前写入；该提交的推送、部署标识和正式页面核验结果见本轮交付及 Cloudflare 发布记录，不预先宣称部署完成或 AdSense 审核结果。
