import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/posts/apple/2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/apple/2.html\",\"title\":\"Apple 2\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"Apple\"],\"tag\":[\"arknights\",\"big\",\"round\"],\"star\":true,\"description\":\"会有变化吗\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/posts/apple/2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Apple 2\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"会有变化吗\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"arknights\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"big\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"round\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-02T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Apple 2\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-02T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"posts/apple/2.md\",\"localizedDate\":\"January 2, 2022\",\"excerpt\":\"\\n<p>会有变化吗</p>\\n\",\"autoDesc\":true}")
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
