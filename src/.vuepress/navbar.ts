import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
 {
        text: "指南",
        link: "/guide/",
        icon: "lightbulb",
  },
  {
        text: "Blog",
        link: "/blog/",
  },
  {
      text: "图册",
      icon: "image",
      link: "/album/",
  },
  {
        text: "文章",
        prefix: "/articles/",
        children: ["article/","books/","poems_and_songs/"],
  },
  {
      text: "站点",
      icon: "network-wired",
      prefix: "/site/",
      children: ["about_me.md","links.md","privacy.md","notice/","copyright.md", "faq.md"],
  },
]);