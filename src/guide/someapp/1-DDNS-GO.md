---
order: -1
title: 1.DDNS-GO简单教程
---

### 简介     
**DDNS-GO** 是一款使用GO语言，开源DDNS软件，意在解决家宽公网IP不固定，每回访问都要换IP。用了之后只需要弄一个固定的域名即可  

### 在开始本篇教程前，你需要  
1. 托管在**DDNS-GO支持的DNS服务商的域名**(如Cloudflare，阿里云，DNSpod(腾讯云)等等)(当然你也需要有一个域名才行)   
<s> 如果要用Cloudflare不能是.tk .cf .ga 这类在Freenom上申请的免费域名 </s> 现在已经申请不了了......  
2. 你要有**公网IP**(v4/v6均可)  
3. 有一定的动手能力   

### 让我们一起开始吧  
- **首先**  
下载DDNS-GO(Github打不开的话可以尝试steam++加速GitHub)(这边用Windows来演示,Linux桌面和MacOS同理)  
一般没有特殊需求选Latest版本即可   
![img1](https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS-GO01.png)
- **运行**  
以下方式，按照自己系统选择即可   
Windows:   
直接双击运行即可   
Linux&MacOS:  
在运行目录打开终端，输入以下命令:  
./ddns-go    
按照提示打开浏览器,访问 IP:9876  
按照提示设置即可  
- **自启**  
到ddns-go的目录下,按照以下操作即可   
Windows:cmd执行(记得要有管理员权限哦) ddns-go -s install  
Linux:  sudo .\ddns-go -s install  
MacOS:自己琢磨吧 我这边没设备  

### 开始使用   
打开浏览器,进入ddns-go的后台填写信息(这边以cloudflare为例,其他服务商自行搜索)   

**获取令牌**  
1.打开[Cloudflare Dashboard](https://dash.cloudflare.com)  
2.打开我的个人资料  
![cloudflare_home](https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_account_home.png)  
3.创建API令牌  
![cloudflare_api_gui](https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_gui.png)  
![cloudflare_api_2](https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_2.png)  
![cloudflare_api_create](https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_create.png)  
然后核对摘要信息,无误的话点击"创建令牌",然后就会显示令牌  
![cloudflare_api_show](https://img.yyyyt.top/vuepress/guide/someapp/DDNS-GO/DDNS_GO_Cloudflare_api_show.png)  
记得一定要保存好令牌信息,不会再次显示  

**填写信息**  
按照界面提示填写即可  
IPv4/IPv6按照自己需求和情况选择即可  
然后到日志看一下是否有相应提示即可  