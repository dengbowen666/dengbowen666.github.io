import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";



const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Hiki",
      description: "A blog demo for DengBowen",
      
    },
    /*"/zh/": {
      lang: "zh-CN",
      title: "Mr.Deng的博客",
      description: "vuepress-theme-hope 的博客演示",
    },*/
  },

  theme /*: hopeTheme(
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
  },*/,
  alias: {
    "@components": path.resolve(__dirname, "components"),
  },

  head: [
    // ...
    ["link", { rel: "icon", href: "/public/logo.png" }],

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
