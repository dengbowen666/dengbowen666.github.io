import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",

  {
    text: "我的博客",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "css",
        icon: "pen-to-square",
        prefix: "css/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
         
        ],
      },
      {
        text: "vue",
        icon: "vue",
        prefix: "vue/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
         
        ],
      },
      {
        text: "vuepress",
        icon: "vuepress",
        prefix: "vuepress/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
         
        ],
      },
    ],
  },
  
  "/study/",
  "/game/",
  "/intro.md",

]);
