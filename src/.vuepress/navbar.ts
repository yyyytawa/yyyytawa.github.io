import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
   text: "文档",
   icon: "book",
   prefix: "guide/",
  },
  {
   text: "Blog",
   prefix: "blog/",
  },
  {
    text: "Github主页",
    icon: "/assets/image/github-dark.svg",
    link: "https://github.com/yyyytawa",
  },
]);
