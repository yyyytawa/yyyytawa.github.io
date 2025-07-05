import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";

export default defineUserConfig({
  base: "/",

  alias: {
    "@Sticker": path.resolve(__dirname, "components/Sticker.vue"),
  },

  lang: "zh-CN",
  title: "yyyyt的文档站",
  description: "yyyyt的文档站",

  theme,
  // 和 PWA 一起启用
   shouldPrefetch: false,
  
});
