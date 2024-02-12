import comp from "/data/data/com.termux/files/home/my-docs/src/.vuepress/.temp/pages/guide/someapp/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/someapp/\",\"title\":\"一些软件教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"一些软件教程\",\"index\":false,\"dir\":{\"order\":1},\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/someapp/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"yyyyt文档站/Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"一些软件教程\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"yyyyt\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"一些软件教程\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"yyyyt\\\",\\\"url\\\":\\\"https://docs.yyyyt.eu.org\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"guide/someapp/README.md\",\"autoDesc\":true}")
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
