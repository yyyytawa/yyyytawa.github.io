import comp from "/data/data/com.termux/files/home/vuepresshope/src/.vuepress/.temp/pages/blog/photo/sidebar.html.vue"
const data = JSON.parse("{\"path\":\"/blog/photo/sidebar.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\" \"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"blog/photo/_sidebar.md\",\"autoDesc\":true}")
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
