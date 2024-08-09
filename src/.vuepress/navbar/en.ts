import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
{
    text: '随笔-博文',
    icon: 'book',
    children: [
      { text: '全部', icon: 'list', link: '/article/' },
      { text: '分类', icon: 'sort', link: '/category/' },
      { text: '标签', icon: 'tag', link: '/tag/' },
      { text: '时间轴', icon: 'timeline', link: '/timeline/' },
    ],
  },
  
  "/study/",
  {
    text: '收藏',
    icon: 'star',
    link: '/favorite',
    children: ['/favorite/game/', '/favorite/movies/', '/favorite/music/', '/favorite/photos/'],
  },
  "/tools/",
  "/intro.md",
   
]);
