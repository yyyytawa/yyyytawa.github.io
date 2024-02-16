import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>这里是写音乐更新日志的<br> 更新可以在侧边栏去看<br> 数字代表第N次更新</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/blog/music_updata_log/introduction.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "introduction.html.vue"]]);
const data = JSON.parse('{"path":"/blog/music_updata_log/introduction.html","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","order":1,"description":"这里是写音乐更新日志的 更新可以在侧边栏去看 数字代表第N次更新 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/music_updata_log/introduction.html"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"这里是写音乐更新日志的 更新可以在侧边栏去看 数字代表第N次更新 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.eu.org\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.12,"words":35},"filePathRelative":"blog/music_updata_log/introduction.md","autoDesc":true}');
export {
  introduction_html as comp,
  data
};
