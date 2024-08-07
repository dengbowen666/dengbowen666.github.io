import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
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
        icon: "pen-to-square",
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
        icon: "pen-to-square",
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
  
{
    text: "学习",
    children: [
      {
        text: "教程",
        children: [
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
         
        ],
      },
   
    ],
  },

  {
    text: "图书",
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
  "/game/"


]);
