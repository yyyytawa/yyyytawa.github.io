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
    text: "Github主页",
    icon: "/assets/image/github-dark.svg",
    link: "https://github.com/yyyytawa",
 },
]);