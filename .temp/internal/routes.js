export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/edge_background.jpg","e":"\n<p>一个大三学生，努力学习前端中~</p>\n","r":{"minutes":0.07,"words":20},"t":"Intro Page","i":"circle-info","y":"a"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/index.html.js"), meta: {"t":"Blog Home","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/demo/disable.html.js"), meta: {"c":["Guide"],"g":["disable"],"e":"<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\n","r":{"minutes":0.28,"words":83},"t":"Disabling layout and features","i":"gears","O":4,"y":"a"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/demo/encrypt.html.js"), meta: {"c":["Guide"],"g":["encryption"],"n":true,"r":{"minutes":0.3,"words":90},"t":"Encryption Article","i":"lock","y":"a"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/demo/layout.html.js"), meta: {"c":["Guide"],"g":["Layout"],"e":"<p>The layout contains:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">Navbar</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">Sidebar</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">Footer</a></li>\n</ul>","r":{"minutes":0.35,"words":105},"t":"Layout","i":"object-group","O":2,"y":"a"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/demo/markdown.html.js"), meta: {"c":["Guide"],"g":["Markdown"],"e":"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\n","r":{"minutes":2.67,"words":801},"t":"Markdown Enhance","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/demo/page.html.js"), meta: {"a":"Mr.Deng","d":1577836800000,"l":"January 1, 2020","c":["Guide"],"g":["Page config","Guide"],"u":true,"e":"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\n","r":{"minutes":1.14,"words":341},"t":"Page Config","i":"file","O":3,"y":"a"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/demo/index.html.js"), meta: {"c":["Guide"],"r":{"minutes":0.04,"words":12},"t":"Features demo","i":"laptop-code","y":"a"} }],
  ["/game/overview.html", { loader: () => import(/* webpackChunkName: "game_overview.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/game/overview.html.js"), meta: {"d":1641945600000,"l":"January 12, 2022","c":["Vegetable"],"g":["red","round"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.11,"words":32},"t":"Tomato","i":"pen-to-square","y":"a"} }],
  ["/game/", { loader: () => import(/* webpackChunkName: "game_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/game/index.html.js"), meta: {"c":["Guide"],"r":{"minutes":0.02,"words":7},"t":"游戏","y":"a"} }],
  ["/posts/strawberry.html", { loader: () => import(/* webpackChunkName: "posts_strawberry.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/posts/strawberry.html.js"), meta: {"d":1641859200000,"l":"January 11, 2022","c":["Fruit","Strawberry"],"g":["red","small"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.09,"words":27},"t":"Strawberry","i":"pen-to-square","y":"a"} }],
  ["/posts/tomato.html", { loader: () => import(/* webpackChunkName: "posts_tomato.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/posts/tomato.html.js"), meta: {"d":1641945600000,"l":"January 12, 2022","c":["Vegetable"],"g":["red","round"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.11,"words":32},"t":"Tomato","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/category/index.html.js"), meta: {"t":"Category","I":false} }],
  ["/category/guide/", { loader: () => import(/* webpackChunkName: "category_guide_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/category/guide/index.html.js"), meta: {"t":"Guide Category","I":false} }],
  ["/category/vegetable/", { loader: () => import(/* webpackChunkName: "category_vegetable_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/category/vegetable/index.html.js"), meta: {"t":"Vegetable Category","I":false} }],
  ["/category/fruit/", { loader: () => import(/* webpackChunkName: "category_fruit_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/category/fruit/index.html.js"), meta: {"t":"Fruit Category","I":false} }],
  ["/category/strawberry/", { loader: () => import(/* webpackChunkName: "category_strawberry_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/category/strawberry/index.html.js"), meta: {"t":"Strawberry Category","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/index.html.js"), meta: {"t":"Tag","I":false} }],
  ["/tag/disable/", { loader: () => import(/* webpackChunkName: "tag_disable_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/disable/index.html.js"), meta: {"t":"Tag: disable","I":false} }],
  ["/tag/encryption/", { loader: () => import(/* webpackChunkName: "tag_encryption_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/encryption/index.html.js"), meta: {"t":"Tag: encryption","I":false} }],
  ["/tag/layout/", { loader: () => import(/* webpackChunkName: "tag_layout_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/layout/index.html.js"), meta: {"t":"Tag: Layout","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/markdown/index.html.js"), meta: {"t":"Tag: Markdown","I":false} }],
  ["/tag/page-config/", { loader: () => import(/* webpackChunkName: "tag_page-config_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/page-config/index.html.js"), meta: {"t":"Tag: Page config","I":false} }],
  ["/tag/guide/", { loader: () => import(/* webpackChunkName: "tag_guide_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/guide/index.html.js"), meta: {"t":"Tag: Guide","I":false} }],
  ["/tag/red/", { loader: () => import(/* webpackChunkName: "tag_red_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/red/index.html.js"), meta: {"t":"Tag: red","I":false} }],
  ["/tag/round/", { loader: () => import(/* webpackChunkName: "tag_round_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/round/index.html.js"), meta: {"t":"Tag: round","I":false} }],
  ["/tag/small/", { loader: () => import(/* webpackChunkName: "tag_small_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/tag/small/index.html.js"), meta: {"t":"Tag: small","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/article/index.html.js"), meta: {"t":"Articles","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/star/index.html.js"), meta: {"t":"Star","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"E:/学习/VuePress/vuepress-starter/.temp/pages/timeline/index.html.js"), meta: {"t":"Timeline","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
