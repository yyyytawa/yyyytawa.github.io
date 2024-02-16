import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="第一次" tabindex="-1"><a class="header-anchor" href="#第一次"><span>第一次</span></a></h3><p>更新 **《大碗宽面》 **（作者具体不说,懂得都懂）</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/blog/music_updata_log/1-10.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _110_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "1-10.html.vue"]]);
const data = JSON.parse('{"path":"/blog/music_updata_log/1-10.html","title":"第1-10次更新","lang":"zh-CN","frontmatter":{"title":"第1-10次更新","order":-1,"description":"第一次 更新 **《大碗宽面》 **（作者具体不说,懂得都懂） ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/music_updata_log/1-10.html"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"第1-10次更新"}],["meta",{"property":"og:description","content":"第一次 更新 **《大碗宽面》 **（作者具体不说,懂得都懂） "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第1-10次更新\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.eu.org\\"}]}"]]},"headers":[{"level":3,"title":"第一次","slug":"第一次","link":"#第一次","children":[]}],"git":{},"readingTime":{"minutes":0.09,"words":28},"filePathRelative":"blog/music_updata_log/1-10.md","autoDesc":true}');
export {
  _110_html as comp,
  data
};
