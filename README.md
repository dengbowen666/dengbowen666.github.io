---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ff726c0e-1893-480e-af38-67cd20f00f57'
  PropagateID: 'ff726c0e-1893-480e-af38-67cd20f00f57'
  ReservedCode1: 'a4d88680-3c2b-4664-9087-c55dc78ebe83'
  ReservedCode2: 'a4d88680-3c2b-4664-9087-c55dc78ebe83'
---

# Hiki's Blog

> 千里之行，始于足下

个人博客站点，基于 **VuePress 2 + vuepress-theme-hope** 构建，通过 GitHub Actions 自动部署到 **GitHub Pages**，并集成 **Decap CMS** 实现在线写作与内容管理。

- 在线地址：https://dengbowen666.github.io
- 内容仓库：https://github.com/dengbowen666/dengbowen666.github.io

## 功能特性

### 内容分区

| 模块 | 路径 | 说明 |
| --- | --- | --- |
| 记录（随笔/博文） | `src/posts/` | 随笔 + 前端学习笔记（css / JavaScript / vue 子分类） |
| 展柜（图集） | `src/gallery/` | Cosplay、旅游记录，支持轮播 / 九宫格 / 时间线三种图集形态 |
| 收藏 | `src/favorite/` | 游戏、影视、音乐、图集、工具五大收藏分类 |
| 关于我 | `src/intro.md` | 个人主页（头像 / 打字机 / 社交图标 / Live2D 看板娘） |
| 更新日志 | `src/changelog/` | 站点编年与学习进度记录 |

### 博客能力（主题插件）

- 文章分类 / 标签 / 时间轴聚合页
- 全文搜索（slimsearch，含分类与标签索引）
- 文章贡献者与变更历史（Git 插件）
- 页面加密（`/demo/encrypt.html` 示例）
- 富 Markdown 增强：Tabs、代码组、任务列表、图片懒加载、ECharts / Mermaid / Markmap 图表
- PWA、评论（Waline）等插件按需预留

### 自定义组件（`src/.vuepress/components/`）

| 组件 | 用途 |
| --- | --- |
| `PortfolioHome` / `PortfolioHero` | 「关于我」页面布局与英雄区（通过 `scripts/patch-theme.mjs` 在 install 后自动覆盖主题原版） |
| `GalleryCarousel` | Element Plus 轮播图集（响应式高度、自动播放） |
| `GalleryGrid` | 瀑布流九宫格图集（桌面 3 列 / 平板 2 列 / 手机 1 列） |
| `TimelineGallery` | 时间线图集（按日期降序、左右交替排版） |
| `ChinaMap` | ECharts 中国地图足迹（阿里 DataV GeoJSON，散点标记） |
| `typed` | 通用打字机组件（逐字循环 + 光标闪烁） |
| `HeroHitokoto` | 首页一言（hitokoto API，失败自动切换备用域名） |
| `BlogBeautify` / `TopNavBeautify` | 全局博客样式美化、导航栏滚动透明化 |

### 页面特效（`src/.vuepress/client.js`）

- 首页 hero 打字机效果（"千里之行，始于足下"）
- 雷姆 Live2D 看板娘（仅「关于我」页加载，离开自动卸载）
- 雪花粒子、透明导航栏、页脚运行时长
- 导航栏下拉父项点击跳转修复
- `mo7` 特效脚本（canvas 粒子连线 / 颗粒视差，位于 `public/mo7-script/`）

## 技术栈

- **框架**：VuePress 2（`vuepress-vite`）+ vuepress-theme-hope
- **前端**：Vue 3、TypeScript、Sass、Element Plus
- **可视化**：ECharts、Mermaid、markmap-lib / view / toolbar
- **数据请求**：axios、@vueuse/core
- **部署**：GitHub Pages（GitHub Actions）、Vercel Serverless（OAuth 代理）

## 目录结构

```
dengbowen666.github.io/
├── src/                          # 站点源码（VuePress 文档根目录）
│   ├── README.md                 # 主页（hero、项目卡片配置）
│   ├── intro.md                  # 关于我（portfolio 布局）
│   ├── .vuepress/
│   │   ├── config.ts             # 站点配置（标题、语言、head）
│   │   ├── theme.ts              # 主题配置（导航、插件、Markdown 增强）
│   │   ├── client.js             # 客户端增强（Live2D、打字机、雪花等）
│   │   ├── components/           # 自定义 Vue 组件
│   │   ├── navbar/ sidebar/      # 导航栏与侧边栏配置
│   │   ├── styles/               # palette / index / portfolio-override
│   │   ├── types/                # 全局类型声明
│   │   └── public/
│   │       ├── admin/            # Decap CMS（config.yml + 入口页）
│   │       ├── assets/           # 背景图、案例素材
│   │       ├── mo7-script/       # canvas-nest / grain-parallax 特效
│   │       └── uploads/          # CMS 上传的媒体文件
│   ├── posts/ gallery/ favorite/ changelog/
├── api/
│   └── auth.js                   # Decap CMS GitHub OAuth 代理（Vercel）
├── scripts/
│   └── patch-theme.mjs           # postinstall 覆盖主题组件脚本
├── .github/workflows/
│   └── deploy-docs.yml           # push 到 master 自动构建并部署 Pages
├── vercel.json                   # Vercel 路由（/api/auth、/callback）
├── .vercelignore                 # Vercel 仅上传 api 与 vercel.json
├── .env.local                    # Vercel CLI 本地环境（勿提交泄露）
├── run.bat                       # 一键启动本地开发
└── git_push.bat                  # 一键提交推送
```

## 快速开始

环境要求：Node.js 20+、npm。

```bash
# 安装依赖（postinstall 会自动执行 patch-theme.mjs 覆盖主题组件）
npm install

# 本地开发（热更新，http://localhost:8080）
npm run docs:dev

# 生产构建（输出到 src/.vuepress/dist）
npm run docs:build

# 升级依赖
npm run docs:update-package
```

Windows 下也可以直接双击 `run.bat` 启动本地开发。

## 部署

### GitHub Pages（站点本体）

推送 `master` 分支即触发 `.github/workflows/deploy-docs.yml`：

1. `npm ci` 安装依赖
2. `npm run docs:build` 构建静态站点
3. `actions/deploy-pages@v4` 部署到 GitHub Pages

本地也可以一键 `git_push.bat` 提交并推送（Commit 信息为当天日期）。

### Vercel（Decap CMS OAuth 代理）

`api/auth.js` 是零依赖的 CommonJS Serverless Function，作为 Decap CMS 的 GitHub OAuth 两步握手代理：

```bash
vercel deploy --prod
```

需要的环境变量（Vercel 项目设置中配置）：

| 变量 | 说明 |
| --- | --- |
| `GITHUB_CLIENT_ID` | GitHub OAuth App 的 Client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App 的 Client Secret |
| `OAUTH_REDIRECT_URI` | 回调地址，默认取 `https://<host>/callback` |

`.vercelignore` 已把部署体积压缩到仅 `api/` 与 `vercel.json`（几 KB），避免国内网络上传超时。

## 内容管理（Decap CMS）

访问 `https://dengbowen666.github.io/admin` 即可在线写作：

- 后端为 GitHub 仓库 `dengbowen666/dengbowen666.github.io`（master 分支）
- 通过 Vercel 部署的 OAuth 代理完成 GitHub 授权登录（一次登录长期有效，浏览器自动续 token）
- 已配置 5 个内容集合：记录（posts）、展柜（gallery）、收藏（favorite）、更新日志（changelog）、独立页面（pages）
- 图集正文内置 `GalleryCarousel` / `GalleryGrid` 组件模板，替换图片 URL 即可发布
- 媒体文件上传至 `src/.vuepress/public/uploads/`，部署后映射为 `/uploads/*`

## 自定义说明

- **覆盖主题组件**：theme-hope 的 `PortfolioHome` / `PortfolioHero` 由 `scripts/patch-theme.mjs` 在 `npm install` 后自动替换为本地版本（`src/.vuepress/components/` 下同名文件），无需 fork 主题。
- **主题样式**：全局配色与字体在 `src/.vuepress/styles/palette.scss` 中修改（主题色 `#83bceb`，字体 Noto Serif SC）。
- **新增组件**：在 `components/` 中创建，并在 `client.js` 中注册（`rootComponents` 全局挂载或 `enhance` 中全局组件）。
- **Markdown 增强**：图表（ECharts / Mermaid / Markmap）在 `theme.ts` 的 `markdown` 选项中按需开启。

## 许可

MIT

> AI生成