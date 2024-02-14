import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>该目录是关于我博客的内容<br> 不定时更新<br><em>具体内容可以看目录哦</em></p><h2 id="目前内容" tabindex="-1"><a class="header-anchor" href="#目前内容"><span>目前内容:</span></a></h2><ul><li>图片<s>(可能是搞笑/奇葩一类)</s></li><li>个人生活分享<s>(bushi)</s></li><li><s>二中生活周报(估计万年也上不了,老师看了不带弄死我)</s></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/blog/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/blog/","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","description":"该目录是关于我博客的内容 不定时更新 具体内容可以看目录哦 目前内容: 图片 个人生活分享 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"该目录是关于我博客的内容 不定时更新 具体内容可以看目录哦 目前内容: 图片 个人生活分享 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.eu.org\\"}]}"]]},"headers":[{"level":2,"title":"目前内容:","slug":"目前内容","link":"#目前内容","children":[]}],"git":{},"readingTime":{"minutes":0.27,"words":82},"filePathRelative":"blog/README.md","autoDesc":true}');
export {
  index_html as comp,
  data
};
