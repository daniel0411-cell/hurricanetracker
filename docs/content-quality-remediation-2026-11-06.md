# 旧安全内容、历史证据与撤离确认清单修订

日期：2026-11-06。基于 `content-quality-comparison-audit-2026-11-06.md` 的已确认问题实施。本轮为本地修改，未提交、推送、部署或提交搜索引擎。

## 版本和授权

- 修改前完整阅读 AGENTS.md，检查工作区、分支配置和远程，重新 fetch 并查询 remote HEAD。
- `main` 跟踪 `origin/main`；远程 `https://github.com/daniel0411-cell/hurricanetracker.git` 的默认分支为 `main`。
- 本地和刚获取的远程均为 `d445279bc944dd393c17842821391b917b66716e`，领先/落后 0/0。本轮在此提交上叠加以下本地修订。
- 用户先授权实施内容优化，随后明确允许撤离工具取消家庭评分、默认官方状态未确认、按官方预警显示行动、单列医疗/宠物/交通安排。未修改路由文件名或 URL。
- 既有 `ReminderSignup.astro`、`api/push/send.ts` 及原有未跟踪文件保留；不计入本轮交付。未修改依赖、sitemap、部署配置、canonical 或 i18n。

## 实际修订

| 范围 | 修复与新增价值 |
| --- | --- |
| Flood Advisory vs Watch vs Warning | 删除固定升级阶梯、watch 证明尚未洪水和 warning=go；按 NWS 解释 advisory/watch/warning/flash flood，区分 surge；加入 Isaias 公告内不同产品作用范围的阅读题与五字段记录 |
| Rip Current Statement | 删除 Gulf/Georgia 混淆、无来源的地形和死亡排名；加入 NWS Mobile 的真实 surf forecast 字段、风险 key、已保存原文及 low 不等于无风险的阅读题；按 NOAA/NWS 保留能量与求助指导 |
| Hurricane Insurance Claims | 修正普遍报损期限、固定 24-48h 和无条件 wind coverage；区分通知、证明材料和争议期限；加入双保单未完成任务例子，更新正文、FAQ、references、sourceCheck、correction 和日期 |
| Fay / Edouard / Isaias | 分别核实 NHC AL062026/AL052026/AL092026 原始公共公告；加入当时分类、单位、UTC/地方时、预警变化与带答案任务；去掉本轮未证实的峰值/命名顺序等概括 |
| HistoricalStormReport | 复用组件，增加可选 advisory 类型；公告显示为原始 bulletin 和业务记录，不误标 PDF、post-season analysis 或完整 best track；原有 Erin/Dolly/Melissa 报告保持原类型 |
| Brunswick / Baton Rouge | 增加县级通知/协助安排和 Red Stick Ready 通信/事件日期阅读任务，记录来源核对范围；不把登记表或站点入口当成已确认接送、当前命令或道路状态 |
| 撤离工具 | 删除家庭权重、分数、阈值和自定义风险等级推导；默认 unknown/Unconfirmed，异常状态也回到未确认；按用户选择的官方状态显示相应行动，住房/医疗/宠物/交通只生成待确认事项，不改变行动 |
| 站内入口和回归 | 更新工具目录、path/evacuation-zones 主题链接及内容聚合入口，移除旧评分描述；自动发现独立 Astro 博客，并加入全部六个命名风暴页、撤离工具和针对本次错误的检查 |

撤离工具不自动查询或验证用户输入的官方状态。记录栏没有提交字段名，脚本阻止表单提交，不使用 localStorage；不把来源笔记或家庭信息发送给分析服务。多个即时威胁同时出现时，页面明确要求读取完整警报并遵从即时保护指令；单选记录不能替代真实多灾害判断。

## 核实来源

本次原始响应和解析文本保留于 `scratch/content-quality-review-2026-11-06/revision-sources/`。

- NWS `https://www.weather.gov/safety/flood-watch-warning`：四类洪水产品定义。
- NWS `https://www.weather.gov/safety/flood-during`：高地、避开洪水和电气危险、遵守命令及受困求助。
- NWS `https://www.weather.gov/safety/ripcurrent` 与 `https://www.weather.gov/safety/ripcurrent-surviving`：海滩预报、lifeguard、不要对抗水流、沿岸游出、无法到岸时放松并面对岸边求助。
- NOAA `https://oceanservice.noaa.gov/facts/ripcurrent.html`：离岸流解释及平行于岸游出后斜向返回。
- NWS Mobile SRFMOB，`FZUS54 KMOB 060253`，8:53 PM CST November 5, 2026 / November 6 0253 UTC：ALZ265-266、printed TODAY 的 low / 1-2ft，以及 risk key。保留相对期间原标签，没有替官方产品重写有效日期。
- NHC `https://www.nhc.noaa.gov/archive/2026/al06/al062026.public.039.shtml`：Fay final public advisory，September 29 2100 UTC，23.7N/48.2W、30mph/1011mb，结束 NHC public advisory、转向 High Seas 信息；未把 forecast dissipation 当成已验证结果。
- NHC `https://www.nhc.noaa.gov/archive/2026/al05/al052026.public.002.shtml` 与 `.003.shtml`：depression 到 Edouard，August 31 2100 / September 1 0300 UTC；独立风力和 surge 边界、watch 到 warning 的业务变化。
- NHC `https://www.nhc.noaa.gov/archive/2026/al09/al092026.public.015.shtml`：October 10 0900 UTC，post-tropical、32.0N/86.5W、35mph/1002mb、coastal cancellation 与持续雨洪风险及宣布的 WPC handoff。
- NFIP `https://www.floodsmart.gov/recover/start-a-claim`、`https://www.floodsmart.gov/claims-checklist`；NAIC `https://content.naic.org/consumer/natural-disasters`：通知、材料、损失证明和争议程序分开；未向所有保单套用 NFIP 期限或核实私人保障。
- Glynn `https://www.glynncounty.org/government/departments/emergency-management-agency-ema/evacuation`：通知渠道、ride assistance 与功能需求入口。未沿用站点上关于登记即可保证协助的措辞，也未认证登记资格或真实派车。
- East Baton Rouge `https://city.brla.gov/dept/oep/default.asp` 链接 Red Stick Ready，现入口为 `https://www.brla.gov/3407/Red-Stick-Ready`：提供 family communication plan、hazard guides 和 May 17-20 事件的 recovery entry。本轮只核实入口和说明，未读取其 PDF、确认 App 服务或当下通知送达。

### 保留的官方教学原文

站内资产 `public/examples/nws/srfmob-20261106-0253Z.txt` 为上述 NWS surf forecast 的完整 preformatted 产品文本：通过 parse5 移除网站 glossary 链接标记，保留文字、字段、数值、空白和两段海岸预报，不重写内容。页面注明这是历史保存版，并同时链接会变化的官方最新产品。

SHA-256：`a29478e1ce6e56be812096bd29bb644bd0eccc67f741292a2f457fcf9c3c75c1`。

这不是 HurricaneHub 制作的新预报，来源为 NOAA/NWS Mobile。它是教学原文资产，不是新增可索引文章，不需注册 sitemap 路由。

### 查证失败或错跳

- `/safety/ripcurrent-tips`、NAIC `/consumer/insurance-search` 返回 404，未用作成功来源。
- 猜测的 BRLA `/375/Homeland-Security-Emergency-Preparedness` 实际跳到 Alternatives to Detention，虽 HTTP 200 仍不属于相关来源；改从已有 MOHSEP 页面找到 Red Stick Ready。
- Fay final 首次连接超时，重试后取得并核对完整公告；不把第一次失败写成公告内容已确认。

## 验证

- `npm run check`：0 errors、0 warnings，6 hints（其中两条来自前轮 scratch 审计脚本，其余为既有提示）。
- `npm run build`：通过。最终入口文案调整后重新构建。
- `node --test scripts/adsense-safety.test.mjs`：5/5 通过，覆盖 official actions、unknown/非法输入不成为 no-alert、tornado shelter、flood action 和官方链接校验。
- `CONTENT_AUDIT_BASE_URL=http://127.0.0.1:8830 npm run content:audit`：104/104 required routes、46 博客 source/asset records 通过。之前为 94 个 routes；本次增加 3 篇独立文章、6 个风暴页、1 个工具页。
- 内链检查：64 HTML 通过；媒体检查：46 博客记录与 62 个静态 sitemap HTML 通过。
- 浏览器检查：九个修订页面，1440px/360px 共 18 次通过；单一 H1、canonical、修订日期、正文、展开答案、历史来源类型、Edouard 第二公告链接、无整页横向溢出或页面脚本错误。
- 工具浏览器验证：八种官方状态；四项未确认安排全部勾选也不改变对应行动；初始 unknown、提交 unknown、tornado shelter 均符合预期；保存的 NWS 文本 HTTP 200 且标识正确。
- 手机工具截图人工查看通过。截图和结果在 `scratch/content-quality-review-2026-11-06/revision-browser/`。
- 最终构建后，运行中的本地 Wrangler 预览曾因静态资源清单未刷新返回 404；重启同一 scratch 预览后，最终版本的 18 次桌面/手机检查和工具交互检查再次全部通过。这是本地预览问题，不是线上观察。

本地预览 `http://127.0.0.1:8830/` 使用 scratch 独立配置、本地 KV 和工作区构建；不是线上发布。既有用户代码改动会存在于本地预览，未来发布时仍需选择本轮文件。

## 后续边界

本轮没有批量 noindex、路由合并、删页、伪造专业署名或扩充文章数量。其余城市与 path/live-tracker/radar 等主题的独立任务定位仍可继续分批改进。上述完成项并不证明所有 189 页均已逐句核实，也不代表 Google 已抓取修订或 AdSense 将批准。
