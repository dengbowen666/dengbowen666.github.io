import { defineClientConfig } from "vuepress/client";
/*import { setupSnowFall } from "vuepress-theme-hope/presets/setupSnowFall.js";*/
//import "vuepress-theme-hope/presets/left-blog-info.scss"
//: 将博主信息移动至文章列表的左侧。

//为页面图标添加鼠标悬停的跳动效果。
import "vuepress-theme-hope/presets/bounce-icon.scss"

import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import BlogHero from './components/BlogHero.vue'
export default defineClientConfig({
  layouts: {
    //BlogHero,
  },
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
    setupRunningTimeFooter(
      new Date("2024-08-07"),
      {
        
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupSnowFall();
  },
  enhance({ app }) {
    // 注册element-plus
    app.use(ElementPlus)
    //app.component("BlogHero",BlogHero)
  },
  
});