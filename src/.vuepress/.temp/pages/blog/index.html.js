import comp from "/data/data/com.termux/files/home/repo/test/src/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"简介\",\"description\":\"该目录是关于我博客的内容 不定时更新 具体内容可以看目录哦 目前内容: 图片 个人生活分享 \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"yyyyt文档站/Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"简介\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"该目录是关于我博客的内容 不定时更新 具体内容可以看目录哦 目前内容: 图片 个人生活分享 \"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"yyyyt\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"简介\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"yyyyt\\\",\\\"url\\\":\\\"https://docs.yyyyt.eu.org\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"目前内容:\",\"slug\":\"目前内容\",\"link\":\"#目前内容\",\"children\":[]}],\"readingTime\":{\"minutes\":0.27,\"words\":82},\"filePathRelative\":\"blog/README.md\",\"autoDesc\":true}")
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
