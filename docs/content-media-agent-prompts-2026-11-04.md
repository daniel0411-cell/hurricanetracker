# HurricaneHub 素材制作 Prompt

按优先级依次执行三个任务。每段都可单独交给一个 agent；素材先交回项目审核，再决定接入。不要让多个 agent 同时修改业务页面。

## Prompt 1：眼墙置换三阶段教学图

```text
你是一名科学信息图设计师。请为 HurricaneHub 制作一套可直接审核的英文教学素材，解释眼墙置换过程中，最大持续风速为什么可能下降，同时风场可能扩大。

项目：/Users/daniel/Documents/hurricanetracker
使用页面：/blog/hurricane-eyewall-replacement-cycle-explained/

先完整阅读项目 AGENTS.md，完成规定的版本检查，再阅读：
- docs/content-media-brief-2026-11-04.md
- src/data/blog.ts 中 hurricane-eyewall-replacement-cycle-explained 的内容

本次只制作素材和说明，不改业务页面、依赖、路由或部署配置，不提交、不推送、不部署。输出到 scratch/media-handoff/eyewall-cycle/。

交付真实素材文件，不要只给设计建议：
1. 1600×900 桌面版，横向三个阶段。
2. 1080×1800 手机版，纵向三个阶段；按 360px 显示宽度预览并检查文字可读。
3. 可编辑源文件，以及适合网页的 PNG/WebP 导出。
4. README.md，含 alt、英文图注、中文解释、来源、权利说明、处理记录和预览。

三阶段必须准确表达：
- Original eyewall：眼和原始内眼墙。
- Concentric eyewalls：旧内环与正在组织的外环，明确标记两者。
- Outer eyewall replaces inner：原始内眼墙消散，外眼墙成为主要环；这是概念过程，不代表每次都按固定时间发生。

图中必须出现：
- Eye / Inner eyewall / Outer eyewall 标签。
- Conceptual sequence, not observations or a forecast.
- Not to scale.
- Maximum sustained wind may decrease while the wind field expands.

使用清楚的平面科学示意，保留足够留白，限制装饰。优先采用可控的矢量绘图工具；如果用生成式图片制作底图，文字和环的位置必须另行准确排版。不要生成伪装成观测的雷达或卫星图，不要虚构强度、时间、风圈半径、测量数据或机构标识，不要暗示置换结束后必然再次增强。概念图不能变成当前避险建议。

事实核对起点：
https://www.nhc.noaa.gov/archive/2017/al11/al112017.discus.028.shtml
该讨论描述 Irma 的条件性证据，不是三个阶段的实测序列；不得给概念图挂上“实测 Irma 序列”的标题。你可以补充 NOAA 官方结构解释，并列出实际使用的具体链接。

README 附一道读图题及答案：两圈眼墙是否意味着更安全？答案要说明结构、峰值风速和不同灾害不能混为一谈，不得从概念图推导当前危险程度。
```

## Prompt 2：真实模型轨迹图的读图练习

```text
请为 HurricaneHub 制作一套“读懂一张真实历史 spaghetti plot”的教学素材。目标是让读者辨认 model ID、初始化时间、预报时效和有效时间；不要制作普通飓风封面。

项目：/Users/daniel/Documents/hurricanetracker
使用页面：/hurricane-tracker/spaghetti-models/

先完整阅读 AGENTS.md 并完成版本检查，再阅读 docs/content-media-brief-2026-11-04.md、src/components/ModelTimingExercise.astro 和对应主题页。现有页面已教初始化时间加预报时效；本次补充一个可核验的真实历史图。

仅制作素材，不改页面、依赖、路由或配置，不提交、不推送、不部署。输出到 scratch/media-handoff/spaghetti-reading/。

可以从这里开始找历史教学图：
https://www.weather.gov/media/tbw/workouts/2021feb09_ww_models.pdf#page=7
必须实际核对页码、风暴、日期、图例和署名；不要把候选链接视为已经确认适合引用。如果该图的时间或权利不清楚，请找另一个明确的 NOAA/NWS 官方历史例子；仍找不到时，交付缺失信息报告，不要生成一张假观测或假模型图补位。

交付：
1. 未编辑的原始参考文件，保留完整图例和时间标签。
2. 添加编号 callout 的阅读版：只增加说明，不篡改轨迹、图例、数值或官方标记。
3. 手机局部图：每个局部图清楚说明来自哪张原图，保留必要时间和图例；同时提供整图。
4. 可编辑源文件、网页导出、README.md，含原始 URL、发布机构、风暴年份、产品/初始化时间及其时区、权利署名、编辑记录、alt 和英文图注。

标记至少三个可核验的位置：model ID、initialization time、forecast/valid-time 标记。图中不存在的字段不能补造，也不能把一个点解释成图上未给出的预报时效。不同初始化的模型，只有换算后对应同一有效时刻才适合直接比较。

必须说明这是 Historical example，不是当前预报。不要把线条密度换算成城市登陆概率，不要由模型线手绘“官方 NHC cone”，不要把所有彩线说成同一个 ensemble。说明实际选图中各线的身份和你未能核实的部分。

写 150–250 词英文解读，另给一道有明确答案的读图题。使用原图真实信息作答；如果原图不足以做有效时间换算题，就选择辨认时间/图例题，不要虚构数据。按 1440px 桌面和 360px 手机宽度提供可读性预览。
```

## Prompt 3：筛选可嵌入的官方教学视频

```text
请为 HurricaneHub 筛选一个真正有教学价值的 NHC/NOAA/NWS 视频，制作“视频片段 + 本站文字练习”的接入方案。本次先交付选材和可核验文案，不修改网站或嵌入播放器，不提交、不推送、不部署。

项目：/Users/daniel/Documents/hurricanetracker
先阅读 AGENTS.md、完成版本检查，再阅读 docs/content-media-brief-2026-11-04.md。
输出到 scratch/media-handoff/official-video/。

优先主题二选一：
A. Forecast cone 表示中心路径不确定性，不是灾害范围。
B. Tropical-storm-force wind arrival time 与 alert expiration 的区别；earliest reasonable 和 most likely 的用途。

从官方目录开始：
https://www.nhc.noaa.gov/TCvideos.shtml
最多比较 3 个候选，最终推荐 1 个。通过机构官网的链接确认发布者身份，不要只凭频道名。优先选能准确解释当前产品定义的短片；明确标出历史产品版本，不能把旧产品变化当成现行规则。

每个候选给出：准确标题、原始视频 URL、官方身份依据、发布日期、主题、是否有字幕/文字稿、是否允许嵌入、推荐或不推荐的具体理由。不要下载或重传没有取得许可的视频。

最终推荐必须交付：
1. 实际观看并核对的起止时间戳及该段内容摘要。
2. 一段简短、准确的已核对字幕摘录和对应时间；没有可用字幕或无法观看时，直接说明，不能编造文字稿或声称已看过。
3. 150–250 词的本站英文解读，说明读者应看哪一处，以及与本站对应图解的关系。
4. 一个读图/理解问题与明确答案，并给出不看视频也能理解的文字版本。
5. 接入建议：点击后再加载播放器、明确第三方来源、不自动播放、提供原始观看链接；不要让外部视频成为理解核心内容的必要条件。

不要选择泛泛的新闻直播或旧风暴实况充当当前风险信息；不要拿 Reddit 评论作撤离、饮用水、医疗或保险结论的依据。选不出合适片段时，说明原因，不为增加视频数量而硬塞内容。
```
