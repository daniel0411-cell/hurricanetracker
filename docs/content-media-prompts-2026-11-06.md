# 本轮内容配图 Prompt

对应审计：`content-evidence-task-audit-2026-11-06.md`。

优先制作下面两张。正文已经有完整数据、解释和答案，不依赖新图才能使用。配图完成后还需核对科学内容、时间、图例和手机可读性，再决定上站。

两项均优先交给能够查源并用代码绘图的 agent。不要用文生图生成数值、官方轨迹或气象观测。无需另做灾难封面、虚构风暴地图或真人专家照片。

## Prompt 1：Michael 真实 24 小时增强读图练习

```text
为 HurricaneHub 制作一套可核验的历史数据教学图。

项目：/Users/daniel/Documents/hurricanetracker
页面：/blog/hurricane-rapid-intensification/

先完整阅读 AGENTS.md，完成规定的版本检查，再阅读 src/data/blog.ts 中该文章的 Work Through Michael's Actual 24-Hour Change 和 Reading Check 两节，以及 docs/content-evidence-implementation-2026-11-06.md。

只制作素材，输出到 scratch/media-handoff/rapid-intensification-michael/。不修改页面、数据源、路由、配置或依赖；不提交、不推送、不部署。

原始证据：NHC Atlantic HURDAT2 的 AL142018（MICHAEL）记录。
https://www.nhc.noaa.gov/data/hurdat/hurdat2-1851-2025-092326.txt
格式说明入口：https://www.nhc.noaa.gov/data/
定义：https://www.nhc.noaa.gov/aboutgloss.shtml

必须实际重新核对原始记录和格式，保留未编辑参考文件或完整风暴记录，注明原始 URL、发布机构、数据发布版本、下载时间和提取方法。链接或数值不能仅因为出现在本 Prompt 中就被当成已复核。遇到失败，交付缺失信息报告，不伪造官方数据补位。

本轮已核对的三个时间点，均为 UTC、最大持续风速 kt：
- 2018-10-09 1200 UTC：90 kt。
- 2018-10-09 1800 UTC：100 kt。
- 2018-10-10 1200 UTC：125 kt。

请用代码绘制可编辑 SVG，并导出 PNG 或 WebP。不是普通飓风插画。最重要的视觉任务是让读者看出：90 到 125 kt 相隔严格 24 小时，增加 35 kt，达到 NHC 至少 30 kt / 24 h 的定义；100 到 125 kt 只有 18 小时，不能冒充同一个 24 小时比较。

图上英文必须包含：
Historical example — Michael (AL142018), 2018
NHC post-storm best-track analysis
Maximum sustained wind (kt)
24 hours: 125 − 90 = +35 kt
18 hours: not a 24-hour comparison

可选两端数据卡加中间真实点，或三个时间点的离散图。不生成未给出的中间观测；不画平滑曲线暗示每小时测量；如用连接线，明确它只是视觉连接。30 kt 的定义阈值不能误写成 30 mph；35 kt 的实际差值不能误写成 35 mph。

必须区分 post-storm analyzed estimate、当时 operational advisory、未来 forecast。不要把 best-track 值写成某个地面站的直接测量；不要把它变成居民撤离时限、城市遭遇风速或当前预报。不要添加 NHC/NOAA 标志造成官方制作或背书的印象。数据署名与自己的设计署名分开。

交付：
1. 可编辑 SVG 源文件、导出的网页位图、未经编辑的原始参考文件。
2. 桌面横版建议 1600×1000，手机竖版建议 720×1200；另提供在 1440px 和 360px 实际页面宽度下的可读性预览。页面可用内容宽度小于视口时也要测试。
3. README.md：源 URL、机构、风暴 ID/年份、版本与时区、字段说明、权利/署名、编辑记录、英文 alt 和英文图注。
4. 英文问题及答案：Which two entries establish the 24-hour change, and why is the 18-hour pair insufficient? 答案必须根据图上实际字段完成。

图不能只靠颜色传递区别；小字号不应承担核心标签。所有时间、数字和单位应为可编辑文字。图注写明 historical example, not a current forecast；来源或字段核验不通过时不要交付“已验证”图。
```

## Prompt 2：两次 Irma 预报如何比较同一有效时刻

```text
为 HurricaneHub 制作一张真实历史 NHC 预报对照教学图，让读者区分 issue time、printed horizon label 和 valid time。

项目：/Users/daniel/Documents/hurricanetracker
页面：/hurricane-tracker/why-hurricane-forecasts-change/

先完整阅读 AGENTS.md 并完成规定的版本检查，再阅读 src/data/topicPages.ts 中 why-hurricane-forecasts-change 的历史比较和阅读题，以及 docs/content-evidence-implementation-2026-11-06.md。

仅制作素材，输出到 scratch/media-handoff/irma-forecast-comparison/。不改页面、数据、路由、配置或依赖；不提交、不推送、不部署。

必须实际读取以下两份官方档案，核对页首身份、发行时间及 FORECAST POSITIONS AND MAX WINDS 表，保存原始文件：
https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.026.shtml
https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml

已核对的原始信息，制作前仍需重新核对：

Earlier forecast / Discussion 26 / AL112017:
Issue time: 1100 AM AST, September 5, 2017 = September 5, 1500 UTC.
Printed row: 24H 06/1200Z 18.1N 63.0W 150 KT 175 MPH.

Later forecast / Discussion 28 / AL112017:
Issue time: 1100 PM AST, September 5, 2017 = September 6, 0300 UTC.
Printed row: 12H 06/1200Z 18.1N 63.1W 155 KT 180 MPH.

Common valid time: September 6, 2017, 1200 UTC.
另一个不能直接配对的行来自 Discussion 28：
24H 07/0000Z 19.1N 65.9W 150 KT 175 MPH.
它对应 September 7, 0000 UTC，与上面的目标时刻不同。

请用代码绘制英文对照图，可编辑 SVG + PNG/WebP。核心结构是两列历史产品、两列各自 issue time 和 printed row、一条指向相同 valid time 的视觉对齐，再用一小块说明为什么另一个 24H 行不能配对。手机版按同样字段顺序堆叠。

重要：NHC 表内 printed 24H/12H 标签不能擅自改成“发行后 24/12 小时”。这里公开发行时间到对应有效时间分别是 21/9 小时。原始标签应按原样引用，比较依赖明确的有效日期/时间。不要为了图面整齐修改原标签、平移时间或伪造中间点。

读者结论：针对同一有效时刻，后一次预测比前一次多 5 kt，预测中心在相同纬度上西移 0.1 度。这是 forecast revision，不是观测到的风速变化、模型投票概率、官方撤离时间或预报准确率。不要把经度差转换成未经核验的里程，也不要画虚构官方 cone 或额外轨迹。

图上包含：
Historical example — Irma (AL112017), 2017
Match the valid time, not just the horizon label
Issue time / Printed forecast row / Valid time
Forecast revision: +5 kt at the same valid time
Not observed intensification; not a current forecast

关于变化原因，正文提供 aircraft/radar 与条件性眼墙表述。配图不能声称已经证明是一次眼墙置换独立造成这 5 kt 修订；如果引用原文，仅使用核对过的短句并保留条件语气。不要使用机构标志或假造官方图外观。

交付：原始参考文件、可编辑 SVG、网页位图、英文 alt/图注、README.md（源 URL、机构、风暴年份、产品时间及时区、权利署名、编辑记录）、1440px 桌面和 360px 手机预览。
建议母版尺寸：桌面 1600×1100、手机 720×1600；以实际可读性调整，不压缩时间和单位。

提供读图题和明确答案：Can the 24H rows in both discussions be compared directly? Why? 答案必须指出有效时间不同，并选择 Discussion 26 的 24H 与 Discussion 28 的 12H 作为正确配对。
若原文读取失败、与以上信息不符或署名条件不清楚，交付缺失信息报告；不生成一张看似正确的假预报图。
```

## 暂不需要另找素材的页面

- 风力等级：已有可用阈值图，本次新增文字读图任务及 Irma/Michael 证据，不需要再生成破坏场景。
- NFIP：已有合成保单字段例子、问题和空白记录字段；不制作冒充真实承保文件的截图。
- 撤离分区及 Savannah：官方入口、地方差异和家庭确认记录比无版本的地图截图更有价值；以后确需截图时，再按实际服务版本、权利和隐私核验制作。
