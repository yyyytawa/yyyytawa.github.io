import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.yyyyt.top",

  author: {
    name: "yyyyt",
    url: "https://docs.yyyyt.top/site/about_me",
  },

  logo: "https://img.yyyyt.top/avatar/avatar",

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
  markdown: {
    alert: true,
    hint: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    footnote: true, // 脚注
    gfm: true,
    imgLazyload: true, // 这里是图片
    imgSize: true,
    imgMark: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
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
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    git: {
      contributors: {
        avatar: true,
      },
      changelog: {
        repoUrl: "https://github.com/yyyytawa/yyyytawa.github.io",
        maxCount: 10,
      },
    },
    // 你应该自行生成自己的评论服务
    comment: {
      provider: "Giscus",
      repo: "yyyytawa/yyyytawa.github.io",
      repoId: "R_kgDOLKM3yw",
      category: "Announcements",
      categoryId: "DIC_kwDOLKM3y84Cc2zJ",
    },
    notice: [
      {
        path: "/",
        title: "公告",
        content: "点击下方按钮查看最新公告</br><mark><strong>本站由于\"不可抗力\"因素,不再保证中国大陆的访问</strong></mark></br><blod><strong>在评论区留言即代表同意本站的留言规范</strong></blod>",
        actions: [
          {
            text: "跳转公告",
            link: "/site/notice/",
            type: "primary",
          },
          { text: "关闭弹窗" },
        ],
      },
    ],
//    shiki: {
//      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'go'],
//    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    icon: {
      assets: "fontawesome",
    },
    components: {
      components: ["Badge", "ArtPlayer", "VPCard", "SiteInfo"],
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
     pwa: {
       favicon: "https://img.yyyyt.top/avatar/avatar",
    //   cacheHTML: true,
    //   cacheImage: true,
       appendBase: true,
       update: "hint",
       apple: {
         icon: "https://img.yyyyt.top/avatar/avatar",
         statusBarColor: "black",
       },
       msTile: {
         image: "https://img.yyyyt.top/avatar/avatar",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "https://img.yyyyt.top/avatar/avatar",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "https://img.yyyyt.top/avatar/avatar",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "https://img.yyyyt.top/avatar/avatar",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "https://img.yyyyt.top/avatar/avatar",
             sizes: "192x192",
             type: "image/png",
           },
         ],
         shortcuts: [
           {
             name: "教程",
             short_name: "教程",
             url: "/guide/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                 purpose: "maskable",
                 type: "image/png",
               },
             ],
           },
         ],
       },
     },
   },
});
