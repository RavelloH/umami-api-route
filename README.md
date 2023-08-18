# umami-api-route
umami统计的api转发，用于隐藏token

## 部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRavelloH%2Fumami-api-route&env=API_TOKEN,URL_NAME,START_TIME,SITE_ID)  

需要设置环境变量，在上面的链接部署式会自动提示你添加。需要添加的项及其有效的值的示例如下：  
```
API_TOKEN xxxxxxxxxxxxxxxxx
URL_NAME https://analytics.ravelloh.top
START_TIME 1672502400000
SITE_ID f47e2dc3-f6bf-4d7c-b311-7467bb1b17e5
```

### API_TOKEN  
在[Umami的官方文档](https://umami.is/docs/authentication)中查看如何生成。  

### URL_NAME  
你的Umami站点链接，不需要加尾缀斜杠。需要包含协议类型，整体如`https://analytics.ravelloh.top`。

### START_TIME  
一个标明统计信息开始时间的时间戳，精确至毫秒。例如，`1672502400000`表示获取到的数据在`2023-01-01 00:00:00`之后。

### SITE_ID
你可以在你的Umami站点的网站设置中查看其值。它应该是类似于这样的格式:`f47e2dc3-f6bf-4d7c-b311-7467bb1b17e5`
