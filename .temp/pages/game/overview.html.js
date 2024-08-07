import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/game/overview.html.vue"
const data = JSON.parse("{\"path\":\"/game/overview.html\",\"title\":\"Tomato\",\"lang\":\"en-US\",\"frontmatter\":{\"cover\":\"/assets/images/cover2.jpg\",\"icon\":\"pen-to-square\",\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"Vegetable\"],\"tag\":[\"red\",\"round\"],\"star\":true,\"sticky\":true,\"description\":\"Tomato Heading 2 Here is the content. Heading 3 Here is the content.\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/game/overview.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Tomato\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Tomato Heading 2 Here is the content. Heading 3 Here is the content.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/assets/images/cover2.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/assets/images/cover2.jpg\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Tomato\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"red\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"round\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-12T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Tomato\\\",\\\"image\\\":[\\\"https://dengbowen666.github.io/MyVuePressWeb/assets/images/cover2.jpg\\\"],\\\"datePublished\\\":\\\"2022-01-12T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"game/overview.md\",\"localizedDate\":\"January 12, 2022\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
