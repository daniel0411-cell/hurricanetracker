# 城市内容优先级与六页补强

日期：2026-11-11（Asia/Shanghai）。

## 版本与判断边界

开始前完整阅读 AGENTS.md，并执行 status、remote、branch、fetch、远程 HEAD 查询及提交图比较。`main` 跟踪 `origin/main`；origin fetch/push 均为 https://github.com/daniel0411-cell/hurricanetracker.git ，默认分支 main。双方为 `68e5fab9b9aa391493549db4409f6589e6789a73`，0 领先／0 落后。本轮叠加六个城市的数据修订；已有 ReminderSignup、push/send 和未跟踪材料不属于本批。

本次是本地内容审查与编辑，没有重新读取 GSC、Bing、GA 或 AdSense 后台。优先级来自正文缺口、决策风险与官方来源可用性，不是根据未经验证的流量排名。缺少 sourceCheck 字段本身不能证明页面低质；检查的是实际正文。

## 为什么先做这些

已完善的州准备指南和多数核心博客可以回答具体问题，但抽查的六个城市追踪页仍主要是通用风险、简短行动清单和三条 FAQ。它们已有可用的天气入口，欠缺的是本地资料的区别和能让读者实际完成的任务。本轮复用原数据与页面组件，没有新增文章、路由、模板、依赖或地图。

| 现有页面 | 原缺口／发现 | 本轮独立任务 |
| --- | --- | --- |
| `/hurricane-tracker/city/mobile/` | 旧 mcema.net 返回错误正文；Mobile 与 Baldwin 的机构及规则容易混用 | 从 Mobile 自己的地址与指令开始，分开核对 Zone 1 工具、211 信息、实际接收和接送；练习识别不能移用的 Baldwin 计划 |
| `/hurricane-tracker/city/biloxi/` | 原 Harrison County 来源返回 403，河流、潮位、地图与返程缺少区分 | 改用城市官方入口，辨认不同监测地点和地图用途；练习说明为何 Lyman 站水位变化不能放行沿海住宅返程 |
| `/hurricane-tracker/city/pensacola/` | 有桥梁与避难常识，缺少具体开启与接收核对 | 用县明确的“先确认开启再前往”规则，分开核对宠物、照护、车辆、桥梁行程；练习识别旧名单中未确认的安排 |
| `/hurricane-tracker/city/myrtle-beach/` | 旅游疏散描述笼统，缺少出发片区和条件性交通管制 | 识别县路线说明的地标分段，按执法指示进入反向车流；练习处理导航出口与受控路线冲突 |
| `/hurricane-tracker/city/galveston/` | 岛屿风险已有，但 ZIP 规划区、命令、接收确认混在一起；县首页返回 403 | 区分 Zip Zone Coastal 与实际命令，完成接收人、替代目的地、211 转介的记录；练习目的地改变后的交接 |
| `/hurricane-tracker/city/corpus-christi/` | 旧 cctexas 入口落到城市首页，登记与返程范围不清 | 替换为现行城市 hurricane hub，区分 STEAR 年度登记、路线资源、实际车辆与公司返程申请；练习判断三份不同记录各能证明什么 |

每页增加四个本地内容段（含一道明确标为虚构的练习与答案），并将 FAQ 从三项补到五项。修改的是这六个对象，其他城市对象保持不变。没有查任何真实家庭资料、申请、临床情况或当前道路。保留的广泛危险背景未全部重新核验，不称这六页已获完整事实认证。

## 实际读取的官方资料

以下返回了有实质内容的 HTML，并解析、阅读全文或所列相关章节。未识别可靠的文章修订日期；11 月 11 日表示本次读取日期，不表示官方发布时间。

- Mobile：州官方县联系人目录 https://ema.alabama.gov/contact/county-contacts/ 中的 Mobile 行，与 https://www.mobilecountyema.gov/ 机构介绍交叉核对；读取 https://mobilecountyema.gov/evacuation-routes/ 的 Zone 1 查询入口、211、出发与返程规划，以及 https://mobilecountyema.gov/shelters/ 的按需开启说明。没有读取互动地图结果、采用网站“当前无命令”字样，或引用具体接送规则。
- Biloxi：https://biloxi.ms.us/residents/storm-and-flood-preparedness/ 的分别列出的撤离／洪水地图、Bmail／B-Alert、Tchoutacabouffa River、Biloxi River near Lyman／Wortham、Popp's Ferry Bridge 潮位站及商业进入资料入口。未读取链接地图、年度刊物、实时测站、订阅回执或商业资格规则；不从文件名年份推断地图版本，也不引用页面署名者作为现任职务核验。
- Pensacola：https://myescambia.com/our-services/public-safety/beready 、https://myescambia.com/our-services/public-safety/beready/hurricane-shelters/evacuation-shelter-list 及 https://myescambia.com/our-services/public-safety/beready/pets-special-needs 。只采用逐事件确认开启、随身物品和家庭猫狗选项等明确的长期规划说明。页面模板有旧事件横幅，宠物页还混入不相关的 disability／farm 正文；没有把它们用作当前撤离、医疗或动物专业指导，没有复制旧设施名单作为已开启名单。
- Myrtle Beach：https://www.horrycountysc.gov/departments/emergency-management/ 、https://www.horrycountysc.gov/departments/emergency-management/hurricanes/evacuations/ 和 https://www.horrycountysc.gov/departments/emergency-management/hurricanes/shelters/ 。核对路线的地标分段、US 501 条件性反向车流与执法指示、逐事件开启、SCEMD／Red Cross 活跃信息入口及 Coast RTA 联系入口。未复制旧机构名称、类别触发的避难所规则、医疗电话或入场资格为当前操作；未读取接送地图、表格或地图交互。
- Galveston：https://www.galvestontx.gov/154/Emergency-Management 和 https://www.galvestontx.gov/496/Hurricane-Evacuation 。核对岛屿属于 Zip Zone Coastal、适用行政辖区的命令、接收联系、替代目的地与 211 信息。来源链接地图标有不同年份，本轮未读 PDF；不复制旧酒店查号、燃油供应或巡逻保障为当前承诺。
- Corpus Christi：https://www.corpuschristitx.gov/beready 及其同域 OEM 的 `prepare-for-disasters/hurricane-preparedness-response/register-with-stear/`、`evacuation-routes-and-maps/`、`prepare-for-disasters/hurricane-preparedness-response/hurricane-reentry-request/`。核对年度登记、211、分开的地图和 CCRTA 入口、公司／组织的返程申请范围。没有读链接 PDF、CCRTA 规则或申请状态，不保证车辆、照护、入场或时限。

来源失败也保留为失败：mcema.net 与其无 www 版本返回错误正文；猜测的 Mobile County 路径显示找不到页面，两个城市 emergency／ready 候选返回 404；Alabama 的旧目录候选 404 后从州首页找到实际联系人目录；原 Harrison County 和 gcoem.org 返回 403。Corpus 的 `/emergency` 候选落到首页，随后从首页发现实际 hub。Escambia 猜测的 `/evacuation` 返回错误正文，使用页面实际列出的 shelter／pet 路径。Broward 候选 403，未据此补写 Fort Lauderdale 规则。HTTP 200、官网域名和旧事件横幅都不等于内容适用。

## 下一轮排序

1. 继续检查岛屿与交通依赖页面：`outer-banks` 的正文同时提 Dare／Hyde／Currituck，却主要给 Dare 入口；应先核实不同管辖区、游客／居民指令及道路／渡轮／返程的对应关系。`key-west` 也应先审查其实际命令、运输、接收任务，不能只扩写风险。
2. 检查 `lake-charles` 与 `brownsville`：前者将两 parish 的指导并列，晚期增强解释仍过于依赖暖水；后者的 Cameron 协助与接收安排还需具体来源。这些是本地代码初筛，尚未重新读取当地官方规则，不能直接称已确认错误。
3. 补来源与任务归属：剩余 Florida 城市先按机构覆盖和实际缺口核对，尤其 Fort Lauderdale／West Palm Beach 不能复制 Miami-Dade 的区号或服务；受阻源应找可靠替代或暂保留未知。
4. 单独整理导航与历史证据：已有 NJ／MA 指向通用 tracker 的标签问题已记入上一发布记录；共享模板或核心路由变更需提出具体范围。弱风暴档案应逐份原始 advisory／TCR 核查，不能从城市段落、同名历史风暴或自动留存量推断本年经历。

优先级可能因活跃风暴、真实后台流量或新发现的安全错误调整。此排序不是新增页面清单、固定篇数指标或 AdSense 通过承诺。

## 验证检查点

- 构建通过；Astro check：0 errors、0 warnings、6 个既有 hints。
- metadata／schema／static links／media 检查通过；55 个本地页日期在 sitemap、schema 与 resolver 中一致，未编辑 sitemap 源码。
- 本地 Worker 内容回归：112/112 路径，46 个文章来源／资产记录，无跳过；另单独核验这六个城市的实际正文。
- Playwright：1440／360 宽度共 12 个城市视图均为 200，单 H1、canonical 正确，新来源范围、修订日期、本地正文和练习存在；五条编辑 FAQ 与 JSON-LD 匹配；FAQ 可展开，未发现横向溢出或脚本错误。30 个站内链接最终返回 200。
- 代表性 Myrtle Beach 手机练习卡、Corpus Christi 桌面练习卡截图已目视检查；文字换行完整。脚本与截图在 `scratch/city-priority-2026-11-11/`，没有声称逐像素人工检查全部页面。
- 此文记录发布前检查点；实际提交和发布证据另记 `docs/deployments/`。不提交搜索引擎，不将这些结构检查作为 AdSense 质量裁定。

本批无需生成装饰图或添加外部视频。如果以后增加地图教学素材，应保留真实图例、区域、版本、来源、权利及“历史／规划示例”标记；不要手绘当前撤离线、桥梁关闭状态或避难所开启状态。
