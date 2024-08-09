import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
//搜索框
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
//自动注册组件
import registerComponentsPlugin from"@vuepress/plugin-register-components"
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from '@vuepress/plugin-comment'


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

   theme,/*: hopeTheme(
    {
      // 主题选项
      // ...
    },
    { custom: true },
  ),

 alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
  //  "@theme-hope/components/HomePage": path.resolve(
  //     __dirname,
  //     "./components/HomePage.vue",
   //   ),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },*/
 alias: {
    '@components': path.resolve(__dirname, 'components')
  },

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
    registerComponentsPlugin({
      // 配置项
       componentsDir: path.resolve(__dirname, './components')
    }),
    commentPlugin({
      // 选项
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
 

  // Enable it with pwa
  // shouldPrefetch: false,
});
