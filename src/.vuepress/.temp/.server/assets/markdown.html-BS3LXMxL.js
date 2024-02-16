import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeTabs = resolveComponent("CodeTabs");
  const _component_VPCard = resolveComponent("VPCard");
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p><p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p><!-- more --><h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍"><span>Markdown 介绍</span></a></h2><p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 和 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>。</p><h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置"><span>Markdown 配置</span></a></h2><p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>。</p></div><h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展"><span>Markdown 扩展</span></a></h2><p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 。</p><h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展"><span>VuePress 扩展</span></a></h3><p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p><p>关于这些扩展，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>。</p><h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展"><span>主题扩展</span></a></h3><p>通过 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code>`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p><h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/hint.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h4>`);
  _push(ssrRenderComponent(_component_CodeTabs, {
    id: "89",
    data: [{ "id": "pnpm" }, { "id": "yarn" }, { "id": "npm" }],
    active: 2
  }, {
    title0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`pnpm`);
      } else {
        return [
          createTextVNode("pnpm")
        ];
      }
    }),
    title1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`yarn`);
      } else {
        return [
          createTextVNode("yarn")
        ];
      }
    }),
    title2: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`npm`);
      } else {
        return [
          createTextVNode("npm")
        ];
      }
    }),
    tab0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"${_scopeId}><pre class="language-bash"${_scopeId}><code${_scopeId}><span class="token function"${_scopeId}>pnpm</span> <span class="token function"${_scopeId}>add</span> <span class="token parameter variable"${_scopeId}>-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-bash line-numbers-mode",
            "data-ext": "sh",
            "data-title": "sh"
          }, [
            createVNode("pre", { class: "language-bash" }, [
              createVNode("code", null, [
                createVNode("span", { class: "token function" }, "pnpm"),
                createTextVNode(),
                createVNode("span", { class: "token function" }, "add"),
                createTextVNode(),
                createVNode("span", { class: "token parameter variable" }, "-D"),
                createTextVNode(" vuepress-theme-hope\n")
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"${_scopeId}><pre class="language-bash"${_scopeId}><code${_scopeId}><span class="token function"${_scopeId}>yarn</span> <span class="token function"${_scopeId}>add</span> <span class="token parameter variable"${_scopeId}>-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-bash line-numbers-mode",
            "data-ext": "sh",
            "data-title": "sh"
          }, [
            createVNode("pre", { class: "language-bash" }, [
              createVNode("code", null, [
                createVNode("span", { class: "token function" }, "yarn"),
                createTextVNode(),
                createVNode("span", { class: "token function" }, "add"),
                createTextVNode(),
                createVNode("span", { class: "token parameter variable" }, "-D"),
                createTextVNode(" vuepress-theme-hope\n")
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab2: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"${_scopeId}><pre class="language-bash"${_scopeId}><code${_scopeId}><span class="token function"${_scopeId}>npm</span> i <span class="token parameter variable"${_scopeId}>-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "language-bash line-numbers-mode",
            "data-ext": "sh",
            "data-title": "sh"
          }, [
            createVNode("pre", { class: "language-bash" }, [
              createVNode("code", null, [
                createVNode("span", { class: "token function" }, "npm"),
                createTextVNode(" i "),
                createVNode("span", { class: "token parameter variable" }, "-D"),
                createTextVNode(" vuepress-theme-hope\n")
              ])
            ]),
            createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标"><span>上下角标</span></a></h4><p>19<sup>th</sup> H<sub>2</sub>O</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐"><span>自定义对齐</span></a></h4><div style="${ssrRenderStyle({ "text-align": "center" })}"><p>我是居中的</p></div><div style="${ssrRenderStyle({ "text-align": "right" })}"><p>我在右对齐</p></div><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs"><span>Attrs</span></a></h4><p>一个拥有 ID 的 <strong id="word">单词</strong>。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h4><p>此文字有脚注<a href="%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9">^first</a>.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记"><span>标记</span></a></h4><p>你可以标记 <mark>重要的内容</mark> 。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4><ul><li><p>[x] 计划 1</p></li><li><p>[ ] 计划 2</p></li><li><p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强"><span>图片增强</span></a></h3><p>支持为图片设置颜色模式和大小</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/image.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h4>`);
  _push(ssrRenderComponent(_component_VPCard, { "title": "Mr.Hope", "desc": "Where there is light, there is hope", "logo": "https://mister-hope.com/logo.svg", "link": "https://mister-hope.com", "background": "rgba(253, 230, 138, 0.15)" }, null, _parent));
  _push(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/component.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件"><span>导入文件</span></a></h4><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/include.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化"><span>样式化</span></a></h4><p>向 Mr.Hope 捐赠一杯咖啡。 `);
  _push(ssrRenderComponent(_component_Badge, { type: "tip" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Recommended`);
      } else {
        return [
          createTextVNode("Recommended")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法"><span>Tex 语法</span></a></h4><p>$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表"><span>图表</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>Echarts</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示"><span>交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/playground.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="kotlin-交互演示" tabindex="-1"><a class="header-anchor" href="#kotlin-交互演示"><span>Kotlin 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示"><span>Vue 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="sandpack-交互演示" tabindex="-1"><a class="header-anchor" href="#sandpack-交互演示"><span>Sandpack 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片"><span>幻灯片</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html" width="100%" height="400"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html" target="_blank" rel="noopener noreferrer">查看详情`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/demo/markdown.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdown_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "markdown.html.vue"]]);
const data = JSON.parse('{"path":"/demo/markdown.html","title":"Markdown 展示","lang":"zh-CN","frontmatter":{"title":"Markdown 展示","icon":"fab fa-markdown","order":2,"category":["使用指南"],"tag":["Markdown"],"description":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。 Markdown 介绍 如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。 Mark...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"yyyyt文档站/博客"}],["meta",{"property":"og:title","content":"Markdown 展示"}],["meta",{"property":"og:description","content":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。 Markdown 介绍 如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。 Mark..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"yyyyt"}],["meta",{"property":"article:tag","content":"Markdown"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 展示\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.eu.org\\"}]}"]]},"headers":[{"level":2,"title":"Markdown 介绍","slug":"markdown-介绍","link":"#markdown-介绍","children":[]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[]},{"level":2,"title":"Markdown 扩展","slug":"markdown-扩展","link":"#markdown-扩展","children":[{"level":3,"title":"VuePress 扩展","slug":"vuepress-扩展","link":"#vuepress-扩展","children":[]},{"level":3,"title":"主题扩展","slug":"主题扩展","link":"#主题扩展","children":[]},{"level":3,"title":"图片增强","slug":"图片增强","link":"#图片增强","children":[]}]}],"git":{},"readingTime":{"minutes":3.08,"words":924},"filePathRelative":"demo/markdown.md","autoDesc":true}');
export {
  markdown_html as comp,
  data
};
