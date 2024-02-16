import comp from "/data/data/com.termux/files/home/repo/test/src/.vuepress/.temp/pages/blog/music_updata_log/1to10.html.vue"
const data = JSON.parse("{\"path\":\"/blog/music_updata_log/1to10.html\",\"title\":\"第1-10次更新\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第1-10次更新\",\"order\":-1,\"description\":\"第一次 更新 大碗宽面 (作者具体不说,懂得都懂) \"},\"headers\":[{\"level\":3,\"title\":\"第一次\",\"slug\":\"第一次\",\"link\":\"#第一次\",\"children\":[]}],\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"blog/music_updata_log/1to10.md\",\"autoDesc\":true}")
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
