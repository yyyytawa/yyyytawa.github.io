import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "yyyyt文档站/博客",
  description: "yyyyt文档站/博客",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
});
