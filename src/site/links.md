---
title: 友情链接
sidebar: false
icon: link

otherlinks:
 - name: B84F2246的博客
   desc: TECH OTAKUS SAVE THE WORLD
   logo: https://tc.d3tt.com/images/FvAhkiZ5Y1U2kyCbkl75nq-a0Ef0.png
   url: https://blog.b84f2246.top/
   preview: https://img.yyyyt.top/vuepress/site/links/preview/B84F2246_Blog.png

 - name: Dream
   desc: 一个乐于分享的博客
   logo: https://github.hqycloud.top/https://raw.githubusercontent.com/hqycloud/blog-images/main/hexo-images/24/7/dream_54379e44aa8d8843e7cc8d95b55b189d.jpg
   url: https://blog.hqycloud.top/
   preview: https://img.yyyyt.top/vuepress/site/links/preview/Dream_Blog.png

 - name: Hehe
   desc: 收录各种破解工具
   logo: https://tc.d3tt.com/images/FsetBcYU0rrM1v55iwzzAoDNmRPV.jpg
   url: https://hehenya.us.kg
   preview: https://tc.d3tt.com/images/FsetBcYU0rrM1v55iwzzAoDNmRPV.jpg

 - name: JuHao的博客
   desc: 写些小东西
   logo: https://chat-img.jwznb.com/6dc8c5b3b316f0458deac76e6a99b7a9.jpg
   url: https://juhao.hashnode.dev/
   preview: https://img.yyyyt.top/vuepress/site/links/preview/JuHao_Blog.png

 - name: Qrasa的小站
   desc: 记录一些活着的日常
   logo: https://blog.qrasa.cn/wp-content/uploads/2024/07/IMG_6095.jpeg
   url: https://blog.qrasa.cn/
   preview: https://img.yyyyt.top/vuepress/site/links/preview/Qrasa_Blog.png

 - name: Runoneall の 小破站
   desc: 一个混迹互联网的普通人
   logo: https://filecdn.runoneall.nyc.mn/BlogResource/avatar.webp
   url: https://runoneall.us.kg
   preview: https://img.yyyyt.top/vuepress/site/links/preview/Runoneall_Blog.png

 - name: r1a dev
   desc: r1a的开发记录/博客
   logo: https://r1a.rr.nu/favicon.webp
   url: https://r1a.rr.nu
   preview: https://img.yyyyt.top/vuepress/site/links/preview/Runoneall_dev.png

 - name: 一个一个一个小站（悲
   desc: 114514个三连的站
   logo: https://sanlian.us.kg/favicon.ico
   url: https://sanlian.us.kg/
   preview: https://img.yyyyt.top/vuepress/site/links/preview/Sanlian_Blog.png
---

我自己的站点
<div class="vp-card-container">
<VPCard
  title="YYYYT的AList站点"
  desc="分享一些视频/文件"
  logo="https://img.yyyyt.top/Alist/Alist_logo.svg"
  link="https://alist.yyyyt.top"
/>
</div>

其他站点友链

<SiteInfo
  v-for="item in $frontmatter.otherlinks"
  :key="item.link"
  v-bind="item"
/>

::: details 鸣谢名单
<div class="vp-card-container">
<VPCard
  title="Cloudflare"
  desc="网站性能与防护.提供了本站静态页面服务器(Pages).同时也提供了cdn服务和内网穿透服务"
  logo="https://img.yyyyt.top/vuepress/site/links/CloudflareLogo.ico"
  link="https://www.cloudflare.com"
/>
<VPCard
  title="Github"
  desc="提供了本站的Git存储库"
  logo="https://img.yyyyt.top/vuepress/site/links/github-mark.svg"
  link="https://github.com"
/>
<VPCard
  title="VuePress-Theme-Hope"
  desc="一个具有强大功能的 vuepress 主题✨"
  logo="https://img.yyyyt.top/vuepress/site/links/VuePress-theme-hopelogo.svg"
  link="https://theme-hope.vuejs.press/zh/"
/>
<VPCard
  title="Giscus"
  desc="利用 GitHub Discussions 实现的评论系统"
  logo="https://img.yyyyt.top/vuepress/site/links/giscuslogo.png"
  link="https://giscus.app/"
/>
</div>
<VPCard
  title="Runoneall"
  desc="提供了本站图床的SaaS优选"
  logo="https://r1a.rr.nu/favicon.webp"
  link="https://r1a.rr.nu"
/>
:::

友链申请:  
要求支持HTTPS(必须支持TLS1.3 or Later)  
能正常访问  
不能有违法违规内容  
添加本站友链  

在下方评论区留言即可,格式:  
```
 - name: 名称
   desc: 114514
   logo: 图标
   url: 链接
   repo: Github仓库(可不填)
   preview: 背景(推荐网站主页)
```