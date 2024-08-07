import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"Intro Page\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/edge_background.jpg\",\"description\":\"Intro Page 一个大三学生，努力学习前端中~\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Intro Page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Intro Page 一个大三学生，努力学习前端中~\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/assets/images/edge_background.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/assets/images/edge_background.jpg\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Intro Page\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Intro Page\\\",\\\"image\\\":[\\\"https://dengbowen666.github.io/MyVuePressWeb/assets/images/edge_background.jpg\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>一个大三学生，努力学习前端中~</p>\\n\",\"autoDesc\":true}")
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
