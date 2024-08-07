import comp from "E:/学习/VuePress/vuepress-starter/.temp/pages/game/index.html.vue"
const data = JSON.parse("{\"path\":\"/game/\",\"title\":\"游戏\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"游戏\",\"index\":false,\"category\":[\"Guide\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"game/README.md\",\"excerpt\":\"\"}")
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
