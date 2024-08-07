import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/demo/layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/layout.html\",\"title\":\"Layout\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Layout\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"Guide\"],\"tag\":[\"Layout\"],\"description\":\"The layout contains: Navbar Sidebar Footer Also each page can contain: BreadCrumb Title and information TOC (Table of Contents) Meta information including update time and contri...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/demo/layout.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Layout\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"The layout contains: Navbar Sidebar Footer Also each page can contain: BreadCrumb Title and information TOC (Table of Contents) Meta information including update time and contri...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Layout\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Layout\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":105},\"filePathRelative\":\"demo/layout.md\",\"excerpt\":\"<p>The layout contains:</p>\\n<ul>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/navbar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Navbar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/sidebar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Sidebar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/footer.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Footer</a></li>\\n</ul>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
