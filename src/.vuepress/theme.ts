import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.yyyyt.top",

  author: {
    name: "yyyyt",
    url: "https://docs.yyyyt.top/others/about_me",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://img.yyyyt.top/avatar/Haku.png",

  repo: "yyyytawa/yyyytawa.github.io",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "11451419180",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    // 你应该自行生成自己的评论服务
    comment: {
      provider: "Giscus",
      repo: "yyyytawa/yyyytawa.github.io",
      repoId: "R_kgDOLKM3yw",
      category: "Announcements",
      categoryId: "DIC_kwDOLKM3y84Cc2zJ",
    },
    markdownImage: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    },
     markdownHint: {
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    components: {
      components: ["Badge", "ArtPlayer", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      // 启用 GFM 警告
      align: true,
      attrs: true,
      component: true,
      demo: true,
      footnote: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
     pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       appendBase: true,
       update: "disable",
       apple: {
         icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/ms-icon-144.png",
         color: "#ffffff",
       },
       manifest: {
       },
     },
  },
});
