import comp from "/data/data/com.termux/files/home/repo/yyyytawa.github.io/src/.vuepress/.temp/pages/guide/someapp/2-test.html.vue"
const data = JSON.parse("{\"path\":\"/guide/someapp/2-test.html\",\"title\":\"2.test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":-2,\"title\":\"2.test\",\"description\":\"test \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/someapp/2-test.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"yyyyt文档站/博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2.test\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"test \"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"yyyyt\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2.test\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"yyyyt\\\",\\\"url\\\":\\\"https://docs.yyyyt.eu.org\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":5},\"filePathRelative\":\"guide/someapp/2-test.md\",\"autoDesc\":true}")
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
