import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><strong>欢迎来到我的文档站</strong><br><em>这也是我的博客 <s> (或许) </s></em><br><em>你可以查阅信息</em><br><em>这是中文的首页</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"主页","lang":"zh-CN","frontmatter":{"home":true,"icon":"home","title":"主页","bgImage":"https://theme-hope-assets.vuejs.press/bg/6-light.svg","bgImageDark":"https://theme-hope-assets.vuejs.press/bg/6-dark.svg","bgImageStyle":{"background-attachment":"fixed"},"heroText":"yyyyt博客/文档站","tagline":"yyyyt博客/文档站","actions":[{"text":"文档","icon":"book","link":"./guide/","type":"primary"},{"text":"博客","link":"./blog/"}],"copyright":false,"footer":"使用 <a href=\\"https://theme-hope.vuejs.press/zh/\\" target=\\"_blank\\">VuePress Theme Hope</a> 主题搭建 | MIT 协议, 版权所有 © 2024-present yyyyt(awa)","description":"欢迎来到我的文档站 这也是我的博客 你可以查阅信息 这是中文的首页 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"主页"}],["meta",{"property":"og:description","content":"欢迎来到我的文档站 这也是我的博客 你可以查阅信息 这是中文的首页 "}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"主页\\",\\"description\\":\\"欢迎来到我的文档站 这也是我的博客 你可以查阅信息 这是中文的首页 \\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.4,"words":119},"filePathRelative":"README.md","autoDesc":true}');
export {
  index_html as comp,
  data
};
