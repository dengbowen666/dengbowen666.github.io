import { defineClientConfig } from "vuepress/client";
/*import { setupSnowFall } from "vuepress-theme-hope/presets/setupSnowFall.js";*/
//为项目主页的特性添加闪光效果。
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
//为页面图标添加鼠标悬停的跳动效果。
import "vuepress-theme-hope/presets/bounce-icon.scss"
/*export default defineClientConfig({
  setup() {
    setupSnowFall();
  },
});*/
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js"

export default defineClientConfig({
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
});