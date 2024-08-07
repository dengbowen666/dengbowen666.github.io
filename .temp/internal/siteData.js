export const siteData = JSON.parse("{\"base\":\"/MyVuePressWeb/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"href\":\"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap\",\"rel\":\"stylesheet\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Mr.Deng Blog\",\"description\":\"A blog demo for vuepress-theme-hope\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
