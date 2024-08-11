import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar} from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/dengbowen666/MyVuePressWeb",

  author: {
    name: "Dr.Deng",
    url: "https://github.com/dengbowen666/MyVuePressWeb",
    email: " 2763201730@qq.com"
  },
  favicon:"src/.vuepress/public/favicon.ico",
  iconAssets: "fontawesome-with-brands",

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
    
  },
navbarLayout: {
    start: ['Brand'],
    center: [ 'Links',],
    end: ['Search', 'Outlook'],
  },
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      navbarAutoHide:"always",
      // sidebar
      sidebar: enSidebar,

      footer: "为拉妮变成狼人模样",

      displayFooter: true,

      blog: {
        //avatar: 'https://sm.ms/image/tfEID9gawl6oJPW',
        description: "一个热爱前端的萌新",
        intro: "/intro.html",
        sidebarDisplay:"mobile"
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
    blog: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    //  comment: {
    //  provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    //  },

    components: {
      components: ["Badge", "VPCard",'BiliBili', 'PDF'],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
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
      gfm:true,
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

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

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

  
});
