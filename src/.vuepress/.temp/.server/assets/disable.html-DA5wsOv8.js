import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p><!-- more --><p>本页面就是一个示例，禁用了如下功能:</p><ul><li>导航栏</li><li>侧边栏</li><li>路径导航</li><li>页面信息</li><li>贡献者</li><li>编辑此页链接</li><li>更新时间</li><li>上一篇/下一篇 链接</li><li>评论</li><li>页脚</li><li>返回顶部按钮</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/disable.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const disable_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "disable.html.vue"]]);
const data = JSON.parse('{"path":"/demo/disable.html","title":"布局与功能禁用","lang":"zh-CN","frontmatter":{"title":"布局与功能禁用","icon":"gears","order":4,"category":["使用指南"],"tag":["禁用"],"navbar":false,"sidebar":false,"breadcrumb":false,"pageInfo":false,"contributors":false,"editLink":false,"lastUpdated":false,"prev":false,"next":false,"comment":false,"footer":false,"backtotop":false,"description":"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 本页面就是一个示例，禁用了如下功能: 导航栏 侧边栏 路径导航 页面信息 贡献者 编辑此页链接 更新时间 上一篇/下一篇 链接 评论 页脚 返回顶部按钮 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/disable.html"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"布局与功能禁用"}],["meta",{"property":"og:description","content":"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 本页面就是一个示例，禁用了如下功能: 导航栏 侧边栏 路径导航 页面信息 贡献者 编辑此页链接 更新时间 上一篇/下一篇 链接 评论 页脚 返回顶部按钮 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["meta",{"property":"article:tag","content":"禁用"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布局与功能禁用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.eu.org\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"demo/disable.md","autoDesc":true}');
export {
  disable_html as comp,
  data
};
