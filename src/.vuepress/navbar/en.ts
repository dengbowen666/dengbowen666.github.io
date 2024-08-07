import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",

  {
    text: "随笔-博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "css",
        icon: "pen-to-square",
        prefix: "css/",
        children: [{
          text: "css,启动！",
          icon: "pen-to-square",
          link: "css,启动！",
        } ],
      },
      {
        text: "vue",
        icon: "vue",
        prefix: "vue/",
        children: [
         
         
        ],
      },
      {
        text: "vuepress",
        icon: "vuepress",
        prefix: "vuepress/",
        children: [
         
         
        ],
      },
      {
        text: "小站日志",
       
        prefix: "小站日志/",
        children: [
         
         
        ],
      },
       {
        text: "道",
       
        prefix: "vuepress/",
        children: [
         
         
        ],
      },
    ],
  },
  
  "/study/",
  "/game/",
  "/tools/",
  "/intro.md",
   
]);
