# HurricaneHub 项目规范

## 项目概况
- 类型：Astro 静态站点 + Cloudflare Workers
- 核心业务：飓风追踪、实时数据、SEO 博客自动化

## 目录与文件结构
- 配置核心：astro.config.mjs、wrangler.toml、package.json
- 源码目录：src/（页面、组件、布局）
- 博客草稿：blog-drafts/（每日自动化生成的博客草稿）
- 脚本目录：scripts/（发布器、SEO 审计脚本）
- 部署相关：workers/、gcp-sa.json（服务账号密钥）

## SEO 优化规范（重要）
- 命名：P1 性能/内链，P2 多媒体/i18n，P3 整洁度
- 禁区（绝对禁止随意修改）：src/pages/ 核心路由、package.json 依赖、sitemap.xml.ts、wrangler 部署配置
- 边缘授权：修改 astro.config.mjs（如 i18n/hreflang）需用户明确授权
- 执行要求：直接修改文件不输出全文，不解释不提问，改完运行构建并推送

## 安全与隐私
- 严禁泄露 gcp-sa.json 密钥内容
- 涉及 .zip（如 hurricanehub-blog-publisher.zip）仅作归档，不随意解压覆盖