---
title: 云湖信息监视机器人
---

~~别问为啥现在才出教程,别问.~~  

## 来源:  
hehe以前制作过一个云湖用户信息监视机器人,看到这个代码实在不想说于是写了一个重构版并且额外添加了一些功能.  
请欣赏抽象命名: yonghu_data suo_data suo_time get_yonghu_info  
~~要不还是直接写中文变量算了.~~  

## 使用教程:  
### 下载:  
仓库地址: https://github.com/yyyytawa/tools/  
里面的 yh_info_monitor 就是监控程序源码,下载里面的 config.py 和 main.py.  
对于github有访问问题的可以尝试通过下面链接下载:  
[config.py](https://tools.yyyyt.top/yh_info_monitor/config.py)  
[main.py](https://tools.yyyyt.top/yh_info_monitor/main.py)  

### 环境要求:  
推荐Python 3.12+版本(实测可以正常运行).  
额外依赖要求: requests  

### 配置文件:  
文档仅供参考,实际使用请以实际为准.跨版本的配置文件可能不兼容.  

bot_token 填写机器人的token,可以在[云湖控制台](https://www.yhchat.com/control)获取.  
monitored_list 监控列表,使用Python词典,格式参考如下.  
```PYTHON
{
  "6301414": { # 被监控对象ID
    "type": "user", # 类型 user/group/bot
    "user": ["7354488"], # 推送通知到指定用户,注意里面的键的类型必须为str(外面需要""包裹),类型列表
  },
  "257731539": {
    "type": "group",
    "group": ["257731539"] # 推送通知到指定群聊
  },
  "34433153": {
    "type": "bot",
    "user": ["7354488"],
    "group": ["257731539"]
  }
}
```
monitor_data_file 监控数据文件名,内容为JSON格式,示例内容:  
```JSON
{
"6301414": {
    "name": "JuHao",
    "avatarUrl": "https://chat-img.jwznb.com/8e39c67dce763389abfd47e9cfdc9ec9.jpg",
    "introduction": ""
  }
}
```
monitored_list_url 填写被监控列表URL,格式TOML,不需要请留空.(注: 当监控列表URL和监控列表同时存在时只会监控监控列表URL里面的对象)示例如下:  
```TOML
[6301414] # 句号
type = "user"
user = ["7354488"]
group = ["11451419180"]
```
等待时间相关:  
time_per_object 每次检测后等待时长  
time_per_check 每轮检测后等待时长  
time_per_push 每次推送后的等待时间  
日志相关:  
log_file 日志文件名称,留空不保存日志文件  

### 运行:
修改好 config.py 后直接运行 main.py 即可.  