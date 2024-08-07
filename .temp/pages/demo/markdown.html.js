import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/demo/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/demo/markdown.html\",\"title\":\"Markdown Enhance\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Markdown Enhance\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"Guide\"],\"tag\":[\"Markdown\"],\"description\":\"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP...\",\"gitInclude\":[\"README.md\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dengbowen666.github.io/MyVuePressWeb/demo/markdown.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Deng Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Markdown Enhance\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Deng\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Markdown\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Markdown Enhance\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Deng\\\",\\\"url\\\":\\\"https://dengbowen666.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Markdown Introduction\",\"slug\":\"markdown-introduction\",\"link\":\"#markdown-introduction\",\"children\":[]},{\"level\":2,\"title\":\"Markdown Config\",\"slug\":\"markdown-config\",\"link\":\"#markdown-config\",\"children\":[]},{\"level\":2,\"title\":\"Markdown Extension\",\"slug\":\"markdown-extension\",\"link\":\"#markdown-extension\",\"children\":[{\"level\":3,\"title\":\"VuePress Enhancement\",\"slug\":\"vuepress-enhancement\",\"link\":\"#vuepress-enhancement\",\"children\":[]},{\"level\":3,\"title\":\"Theme Enhancement\",\"slug\":\"theme-enhancement\",\"link\":\"#theme-enhancement\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.67,\"words\":801},\"filePathRelative\":\"demo/markdown.md\",\"excerpt\":\"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\\n\",\"autoDesc\":true}")
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
