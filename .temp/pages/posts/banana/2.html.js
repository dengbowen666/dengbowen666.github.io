import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/posts/banana/2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/2.html\",\"title\":\"Banana 2\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-06T00:00:00.000Z\",\"category\":[\"Banana\",\"Fruit\"],\"tag\":[\"yellow\",\"curly\",\"long\"],\"star\":10,\"description\":\"A banana article being stared with number 10.\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/posts/banana/2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Banana 2\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"A banana article being stared with number 10.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"yellow\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"curly\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"long\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-06T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Banana 2\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-06T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.14,\"words\":41},\"filePathRelative\":\"posts/banana/2.md\",\"localizedDate\":\"January 6, 2022\",\"excerpt\":\"\\n<p>A banana article being stared with number <code>10</code>.</p>\\n\",\"autoDesc\":true}")
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
