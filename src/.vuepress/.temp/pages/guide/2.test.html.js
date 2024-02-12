import comp from "/data/data/com.termux/files/home/vuepresshope/src/.vuepress/.temp/pages/guide/2.test.html.vue"
const data = JSON.parse("{\"path\":\"/guide/2.test.html\",\"title\":\"test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"test\",\"description\":\"test \"},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":\"guide/2.test.md\",\"autoDesc\":true}")
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
