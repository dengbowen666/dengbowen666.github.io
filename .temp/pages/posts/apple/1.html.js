import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/posts/apple/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/apple/1.html\",\"title\":\"Apple 1\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"Apple\"],\"tag\":[\"red\",\"big\",\"round\"],\"description\":\"Apple 1 Heading 2 大大的苹果 Heading 3 Here is the content.\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/posts/apple/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Apple 1\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Apple 1 Heading 2 大大的苹果 Heading 3 Here is the content.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"red\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"big\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"round\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Apple 1\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.1,\"words\":29},\"filePathRelative\":\"posts/apple/1.md\",\"localizedDate\":\"January 1, 2022\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>大大的苹果</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
