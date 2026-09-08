import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

// theme-hope 自己设了 alias: { "@theme-hope": node_modules/.../dist/client }
// 这导致 defineUserConfig 里的 alias 永远不生效（前缀 alias 先匹配）
// 覆盖方式：scripts/patch-theme.mjs 在 npm install 后直接修改 theme 的 PortfolioHome.js / PortfolioHero.js
// 让它们 import 本地自定义版本

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Hiki",
      description: "A blog demo for DengBowen",
    },
  },

  theme,

  head: [
    ["link", { rel: "icon", href: "/public/logo.png" }],
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
});
