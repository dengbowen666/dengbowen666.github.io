import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/game/": "structure",

  // 记录页 / 前端专区：使用 structure 模式
  // structure 会按目录结构自动生成侧边栏：
  //   /posts/      → 显示 README（"记录"首页）+ 子目录"前端"
  //   /posts/前端/ → 显示 README（"前端"首页）+ css/JavaScript/vue/chart-demo/教程/我的项目
  // 这样层级与 URL 完全一致：主页 / 记录 / 前端 / (css, JavaScript, vue, ...)
  "/posts/": "structure",
  "/posts/前端/": "structure",

  "/tools/": "structure",
  "/changelog/": "structure",
});
