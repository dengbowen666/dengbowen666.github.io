import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/posts/banana/4.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/4.html\",\"title\":\"Banana 4\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-08T00:00:00.000Z\",\"category\":[\"Banana\"],\"tag\":[\"yellow\",\"curly\",\"long\"],\"description\":\"Banana 4 Heading 2 Here is the content. Heading 3 Here is the content.\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/posts/banana/4.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Banana 4\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Banana 4 Heading 2 Here is the content. Heading 3 Here is the content.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"yellow\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"curly\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"long\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-08T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Banana 4\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-08T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"posts/banana/4.md\",\"localizedDate\":\"January 8, 2022\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
