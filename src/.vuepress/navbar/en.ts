import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
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
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  
{
    text: "学习",
    children: [
      {
        text: "教程",
        children: [
          { text: "Markdown 介绍", link: "/Markdown 介绍" },
          { text: "Vuepress", link: "/Vuepress" },
             {
       text: "V2 Docs",
       icon: "book",
       link: "https://theme-hope.vuejs.press/",
  },
        ],
      },
      {
        text: "项目",
        children: [
          { text: "变更日志", link: "/变更日志" },
          { text: "迁移指南", link: "/迁移指南" },
        ],
      },
   
    ],
  },

  {
    text: "游戏",
    children: [
      {
        text: "教程",
        children: [
          { text: "Markdown 介绍", link: "/Markdown 介绍" },
          { text: "Vuepress", link: "/Vuepress" },
             {
       text: "V2 Docs",
       icon: "book",
       link: "https://theme-hope.vuejs.press/",
  },
        ],
      },
      {
        text: "项目",
        children: [
          { text: "变更日志", link: "/变更日志" },
          { text: "迁移指南", link: "/迁移指南" },
        ],
      },
   
    ],
  },



]);
