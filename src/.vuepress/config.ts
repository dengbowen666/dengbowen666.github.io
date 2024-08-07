import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
//搜索框
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";


const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/MyVuePressWeb/",
  
  locales: {
    "/": {
      lang: "en-US",
      title: "Dr.Deng",
      description: "A blog demo for DengBowen",
    },
    /*"/zh/": {
      lang: "zh-CN",
      title: "Mr.Deng的博客",
      description: "vuepress-theme-hope 的博客演示",
    },*/
  },

  theme,

  plugins: [
    searchProPlugin({
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
    }),
  ],

   head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
