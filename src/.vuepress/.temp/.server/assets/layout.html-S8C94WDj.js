import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>布局包括:</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><p>同时每个页面包含:</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html" target="_blank" rel="noopener noreferrer">路径导航`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/feature/page-info.html" target="_blank" rel="noopener noreferrer">标题和页面信息`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8" target="_blank" rel="noopener noreferrer">TOC (文章标题列表)`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/guide/feature/meta.html" target="_blank" rel="noopener noreferrer">贡献者、更新时间等页面元信息`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/feature/comment.html" target="_blank" rel="noopener noreferrer">评论`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><p>主题也带有以下元素:</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html" target="_blank" rel="noopener noreferrer">夜间模式按钮`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/guide/interface/others.html#%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%E6%8C%89%E9%92%AE" target="_blank" rel="noopener noreferrer">返回顶部按钮`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://theme-hope.vuejs.press/guide/interface/others.html#%E6%89%93%E5%8D%B0%E6%8C%89%E9%92%AE" target="_blank" rel="noopener noreferrer">打印按钮`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><p>你可以在主题选项和页面的 frontmatter 中自定义它们。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/layout.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "layout.html.vue"]]);
const data = JSON.parse('{"path":"/demo/layout.html","title":"布局","lang":"zh-CN","frontmatter":{"title":"布局","icon":"object-group","order":2,"category":["指南"],"tag":["布局"],"description":"布局包括: 导航栏 侧边栏 页脚 同时每个页面包含: 路径导航 标题和页面信息 TOC (文章标题列表) 贡献者、更新时间等页面元信息 评论 主题也带有以下元素: 夜间模式按钮 返回顶部按钮 打印按钮 你可以在主题选项和页面的 frontmatter 中自定义它们。 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/layout.html"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"布局"}],["meta",{"property":"og:description","content":"布局包括: 导航栏 侧边栏 页脚 同时每个页面包含: 路径导航 标题和页面信息 TOC (文章标题列表) 贡献者、更新时间等页面元信息 评论 主题也带有以下元素: 夜间模式按钮 返回顶部按钮 打印按钮 你可以在主题选项和页面的 frontmatter 中自定义它们。 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["meta",{"property":"article:tag","content":"布局"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布局\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.eu.org\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.53,"words":159},"filePathRelative":"demo/layout.md","autoDesc":true}');
export {
  layout_html as comp,
  data
};
