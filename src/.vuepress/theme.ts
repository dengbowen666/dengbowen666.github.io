import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar} from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/dengbowen666/MyVuePressWeb",

  author: {
    name: "Hiki",
    url: "https://github.com/dengbowen666/MyVuePressWeb",
    email: " 2763201730@qq.com",
  },
  favicon: "src/.vuepress/public/favicon.ico",
  externalLinkIcon: false,
  fullscreen: true,

  logo: "/logo.png",

  repo: "https://github.com/dengbowen666/MyVuePressWeb",

  docsDir: "src",

  blog: {
    medias: {
      BiliBili: "https://space.bilibili.com/446703056?spm_id_from=333.1007.0.0",
      Email: "mailto:2763201730@qq.com",
      GitHub: "https://github.com/dengbowen666/MyVuePressWeb",
      QQ: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
    articlePerPage: 5,
  },
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search", "Outlook"],
  },
  locales: {
    "/": {
     // rtl: true,
      // navbar
      navbar: enNavbar,
      navbarAutoHide: "always",
      // sidebar
      sidebar: enSidebar,

      footer: "为拉妮变成狼人模样",

      displayFooter: true,

      // 页面底部展示贡献者与变更历史
      changelog: true,
      contributors: "content",

      blog: {
        //avatar: 'https://sm.ms/image/tfEID9gawl6oJPW',
        description: "一个热爱前端的萌新",
        intro: "/intro.html",
      },

      /*   metaLocales: {
        editLink: "Edit this page on GitHub",
      },*/
    },

    /**
     * Chinese locale config
     */
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: {
      excerptLength: 0,
    },

    // 页面贡献者与更新日志（@vuepress/plugin-git，需在 git 仓库内构建）
    git: {
      createdTime: true,
      updatedTime: true,
      contributors: true,
      changelog: true,
    },
    //图标资源：iconAssets 已迁移至 plugins.icon.assets
    icon: {
      assets: "fontawesome-with-brands",
    },
    //搜索框：search-pro 已弃用，改用官方 slimsearch
    slimsearch: {
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    },
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    //  comment: {
    //  provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    //  },

    components: {
      components: ["Badge", "VPCard", "BiliBili", "PDF"],
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },

  // markdown 增强选项（rc.60 起 mdEnhance 迁移至顶层 markdown）
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    sup: true,
    gfm: true,
    tabs: true,
    tasklist: true,

    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    vPre: true,

    // 图表/流程图/思维导图（@vuepress/plugin-markdown-chart）
    // 已安装 echarts、mermaid、markmap-lib/view/toolbar
    echarts: true,
    mermaid: true,
    markmap: true,

    // 以下需额外安装对应包后再按需开启：
    // chart: true,         // 需 chart.js
    // flowchart: true,     // 需 flowchart.ts
    // katex: true,         // 需 katex（math 选项）
    // mathjax: true,       // 需 mathjax-full（math 选项）

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install reveal.js before enabling it
    // revealJs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,
  },
});
