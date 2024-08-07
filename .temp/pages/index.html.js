import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Blog Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"Blog Home\",\"heroImage\":\"/logo.png\",\"heroText\":\"欢迎来到为拉妮变成狼人模样的个人博客\",\"tagline\":null,\"heroFullScreen\":true,\"date\":\"2024-08-06T00:00:00.000Z\",\"projects\":[{\"icon\":\"project\",\"name\":\"尚品汇商城项目\",\"desc\":\"project detailed description\",\"link\":\"https://your.project.link\"},{\"icon\":\"link\",\"name\":\"link name\",\"desc\":\"link detailed description\",\"link\":\"https://link.address\"},{\"icon\":\"book\",\"name\":\"逆天邪神\",\"desc\":\"Detailed description of the book\",\"link\":\"https://link.to.your.book\"},{\"icon\":\"article\",\"name\":\"article name\",\"desc\":\"Detailed description of the article\",\"link\":\"https://link.to.your.article\"},{\"icon\":\"friend\",\"name\":\"friend name\",\"desc\":\"Detailed description of friend\",\"link\":\"https://link.to.your.friend\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"custom item\",\"desc\":\"Detailed description of this custom item\",\"link\":\"https://link.to.your.friend\"}],\"footer\":\"customize your footer text\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Blog Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-08-06T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Blog Home\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.44,\"words\":133},\"filePathRelative\":\"README.md\",\"localizedDate\":\"August 6, 2024\",\"excerpt\":\"\"}")
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
