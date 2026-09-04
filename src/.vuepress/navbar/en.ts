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
  {
    text: '记录',
    icon: 'clipboard',
    // 父项点文字 → /posts/（配合 client.js 父项跳转）
    link: '/posts/',
    // 下拉子项：只放"前端"一条真正的分支入口
    children: [
      { text: '前端', icon: 'laptop-code', link: '/posts/前端/' },
    ],
  },
  {
    text: '展柜',
    icon: 'images',
    link: '/gallery/',
    children: [
      { text: '旅游记录', icon: 'image', link: '/gallery/travel/' },
      { text: 'Cosplay', icon: 'mask', link: '/gallery/cosplay/' },
    ],
  },
  {
    text: '收藏',
    icon: 'star',
    link: '/favorite/',
    children: [
      '/favorite/game/',
      '/favorite/movies/',
      '/favorite/music/',
      '/favorite/photos/',
      '/tools/',
    ],
  },
  {
    text: '关于我',
    icon: 'circle-info',
    link: '/intro.html',
    children: [
      { text: '更新日志', icon: 'timeline', link: '/changelog/' },
    ],
  },
]);
