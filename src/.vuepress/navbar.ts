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
        text: "个人文章",
        link: "/article/",
  },
  {
      text: "其他",
      prefix: "/others/",
      children: ["about_me.md","links.md","privacy.md","notice.md","copyright.md"],
  },
]);