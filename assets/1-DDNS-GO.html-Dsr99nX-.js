import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a,o}from"./app-DQMyWHlt.js";const p={};function l(s,e){return o(),r("div",null,e[0]||(e[0]=[a('<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><p><strong>DDNS-GO</strong> 是一款使用GO语言，开源DDNS软件，意在解决家宽公网IP不固定，每回访问都要换IP。用了之后只需要弄一个固定的域名即可</p><h3 id="在开始本篇教程前-你需要" tabindex="-1"><a class="header-anchor" href="#在开始本篇教程前-你需要"><span>在开始本篇教程前，你需要</span></a></h3><ol><li>托管在<strong>DDNS-GO支持的DNS服务商的域名</strong>(如Cloudflare，阿里云，DNSpod(腾讯云)等等)(当然你也需要有一个域名才行)<br><s><a href="http://xn--Cloudflare-2j2pr31ivp8axfekw5d9t0bri4a.tk" target="_blank" rel="noopener noreferrer">如果要用Cloudflare不能是.tk</a> .cf .ga 这类在Freenom上申请的免费域名 </s> 现在已经申请不了了......</li><li>你要有<strong>公网IP</strong>(v4/v6均可)</li><li>有一定的动手能力</li></ol><h3 id="让我们一起开始吧" tabindex="-1"><a class="header-anchor" href="#让我们一起开始吧"><span>让我们一起开始吧</span></a></h3><ul><li><strong>首先</strong><br> 下载DDNS-GO(Github打不开的话可以尝试steam++加速GitHub)(这边用Windows来演示,Linux桌面和MacOS同理)<br> 一般没有特殊需求选Latest版本即可<br><img src="https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS-GO01.png" alt="img1" loading="lazy"></li><li><strong>运行</strong><br> 以下方式，按照自己系统选择即可<br> Windows:<br> 直接双击运行即可<br> Linux&amp;MacOS:<br> 在运行目录打开终端，输入以下命令:<br> ./ddns-go<br> 按照提示打开浏览器,访问 IP:9876<br> 按照提示设置即可</li><li><strong>自启</strong><br> 到ddns-go的目录下,按照以下操作即可<br> Windows:cmd执行(记得要有管理员权限哦) ddns-go -s install<br> Linux: sudo .\\ddns-go -s install<br> MacOS:自己琢磨吧 我这边没设备</li></ul><h3 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用"><span>开始使用</span></a></h3><p>打开浏览器,进入ddns-go的后台填写信息(这边以cloudflare为例,其他服务商自行搜索)</p><p><strong>获取令牌</strong><br> 1.打开<a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare Dashboard</a><br> 2.打开我的个人资料<br><img src="https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_account_home.png" alt="cloudflare_home" loading="lazy"><br> 3.创建API令牌<br><img src="https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_gui.png" alt="cloudflare_api_gui" loading="lazy"><br><img src="https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_2.png" alt="cloudflare_api_2" loading="lazy"><br><img src="https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_create.png" alt="cloudflare_api_create" loading="lazy"><br> 然后核对摘要信息,无误的话点击&quot;创建令牌&quot;,然后就会显示令牌<br><img src="https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_show.png" alt="cloudflare_api_show" loading="lazy"><br> 记得一定要保存好令牌信息,不会再次显示</p><p><strong>填写信息</strong><br> 按照界面提示填写即可<br> IPv4/IPv6按照自己需求和情况选择即可<br> 然后到日志看一下是否有相应提示即可</p>',10)]))}const d=t(p,[["render",l],["__file","1-DDNS-GO.html.vue"]]),g=JSON.parse('{"path":"/guide/someguide/1-DDNS-GO.html","title":"1.DDNS-GO简单教程","lang":"zh-CN","frontmatter":{"order":-1,"title":"1.DDNS-GO简单教程","description":"简介 DDNS-GO 是一款使用GO语言，开源DDNS软件，意在解决家宽公网IP不固定，每回访问都要换IP。用了之后只需要弄一个固定的域名即可 在开始本篇教程前，你需要 托管在DDNS-GO支持的DNS服务商的域名(如Cloudflare，阿里云，DNSpod(腾讯云)等等)(当然你也需要有一个域名才行) 现在已经申请不了了...... 你要有公网IP...","head":[["meta",{"property":"og:url","content":"https://docs.yyyyt.top/guide/someguide/1-DDNS-GO.html"}],["meta",{"property":"og:site_name","content":"yyyyt的文档站"}],["meta",{"property":"og:title","content":"1.DDNS-GO简单教程"}],["meta",{"property":"og:description","content":"简介 DDNS-GO 是一款使用GO语言，开源DDNS软件，意在解决家宽公网IP不固定，每回访问都要换IP。用了之后只需要弄一个固定的域名即可 在开始本篇教程前，你需要 托管在DDNS-GO支持的DNS服务商的域名(如Cloudflare，阿里云，DNSpod(腾讯云)等等)(当然你也需要有一个域名才行) 现在已经申请不了了...... 你要有公网IP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS-GO01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-12T16:13:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-12T16:13:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.DDNS-GO简单教程\\",\\"image\\":[\\"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS-GO01.png\\",\\"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_account_home.png\\",\\"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_gui.png\\",\\"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_2.png\\",\\"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_create.png\\",\\"https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_show.png\\"],\\"dateModified\\":\\"2024-10-12T16:13:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yyyyt\\",\\"url\\":\\"https://docs.yyyyt.top/site/about_me\\"}]}"]]},"headers":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"在开始本篇教程前，你需要","slug":"在开始本篇教程前-你需要","link":"#在开始本篇教程前-你需要","children":[]},{"level":3,"title":"让我们一起开始吧","slug":"让我们一起开始吧","link":"#让我们一起开始吧","children":[]},{"level":3,"title":"开始使用","slug":"开始使用","link":"#开始使用","children":[]}],"git":{"createdTime":1706794519000,"updatedTime":1728749602000,"contributors":[{"name":"yyyytawa","username":"yyyytawa","email":"yyyytawa@qq.com","commits":9,"url":"https://github.com/yyyytawa"}]},"readingTime":{"minutes":1.73,"words":518},"filePathRelative":"guide/someguide/1-DDNS-GO.md","localizedDate":"2024年2月1日","excerpt":"<h3>简介</h3>\\n<p><strong>DDNS-GO</strong> 是一款使用GO语言，开源DDNS软件，意在解决家宽公网IP不固定，每回访问都要换IP。用了之后只需要弄一个固定的域名即可</p>\\n<h3>在开始本篇教程前，你需要</h3>\\n<ol>\\n<li>托管在<strong>DDNS-GO支持的DNS服务商的域名</strong>(如Cloudflare，阿里云，DNSpod(腾讯云)等等)(当然你也需要有一个域名才行)<br>\\n<s> <a href=\\"http://xn--Cloudflare-2j2pr31ivp8axfekw5d9t0bri4a.tk\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">如果要用Cloudflare不能是.tk</a> .cf .ga 这类在Freenom上申请的免费域名 </s> 现在已经申请不了了......</li>\\n<li>你要有<strong>公网IP</strong>(v4/v6均可)</li>\\n<li>有一定的动手能力</li>\\n</ol>","autoDesc":true}');export{d as comp,g as data};
