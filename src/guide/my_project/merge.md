---
title: merge.html
---

*merge.html*是负责合并文件的一个有js脚本的html文件,可以将多个分割的文件合并为一个文件.通过调用网页Js的功能,文件处理合并全在浏览器本地完成的.需要Blob,所以不支持通过blob下载文件的无法使用(例如第三方下载器,安卓webview等)  

## 参数:  

> [!warning]
> 请求链接最好不要有中文,空格特殊字符等,如果有的话请先编码
> if参数和il参数必须有其中一个,而且两个不能共存

### if参数:  

if参数是要合并的文件的url/链接,全名叫 inputfile(输入文件)  

**示例:**  

合并单个文件(一般不用,相当于直接下载单个文件):  

```
https://tools.yyyyt.top/merge.html?if=https://chat-img.jwznb.com/01bc022d1b538a6dc9c279021fe61392.jpg
```

合并多个文件:  

> [!tip]
> 多个链接请使用","隔开,例如xxxx?if=链接1,链接2,链接3,链接N

> [!warning]
> 请注意链接的顺序,错误的顺序会导致合并出来的文件不可用

```
https://tools.yyyyt.top/merge.html?if=https://alist.yyyyt.top/d/%E5%85%AC%E5%BC%80%E5%88%86%E4%BA%AB/temp_share/il.txt,https://alist.yyyyt.top/d/%E5%85%AC%E5%BC%80%E5%88%86%E4%BA%AB/temp_share/SteamSetup.exe-0
```
### of参数:  

输出的文件名称,可以不写这个参数(不写这输出文件名为默认的merged.bin),全名叫outputfile(输出文件)  

**示例:**  

```
https://tools.yyyyt.top/merge.html?if=https://chat-img.jwznb.com/01bc022d1b538a6dc9c279021fe61392.jpg&of=test.jpg
```

这时候输出的文件名就变成了test.jpg  
**暂时不支持多文件输出,一次只能合并为一个文件**  

### il参数:  

输入一个inputlist,全名叫inputlist(输入列表)  
相当于多个输入链接,但是链接都存在一个文件里面  

> [!warning]
> 请注意链接的顺序,错误的顺序会导致合并出来的文件不可用

**示例:**  

```
https://tools.yyyyt.top/merge.html?il=https://alist.yyyyt.top/d/%E5%85%AC%E5%BC%80%E5%88%86%E4%BA%AB/temp_share/il.txt&of=steam.exe
```

li.txt内容:

```
# 使用#来注释内容
https://chat-img.jwznb.com/01bc022d1b538a6dc9c279021fe61392.jpg #文件1
https://chat-img.jwznb.com/8016baea9047d39fc26d1da51a82612e.jpg #文件2
https://chat-img.jwznb.com/814b2cfa2066ca51b04c30189eb0665b.jpg #文件3
https://alist.yyyyt.top/d/公开分享/temp_share/test%201 #URL中有空格请使用%20代替,默认会删掉inputlist里面的所有空格,建议使用编码后URL
```