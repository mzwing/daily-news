# Daily News  

## Introduction | 介绍  

A simple daily news website, used the api of Zhihu Daily, deployed on Vercel.  
Inspired by @zkeq/news.  

一个简单的，使用知乎日报api的，部署在Vercel上的每日新闻网页。  
从@zkeq/news中获得灵感。

## Develop | 开发  

The project uses `pnpm` to manage dependencies.  
If you want to debug the Serverless Functions(the files in `/api`), please use
```bash
pnpm -g add vercel # because `vercel dev` doesn't allow to be executed by `package.json`
vercel dev # run this command in the root of the project directory
```  
The project is still developing, please don't use in your production environment.  

项目使用`pnpm`管理依赖。  
调试无服务器函数(`./api`里的文件)请使用
```bash
pnpm -g add vercel # 因为`vercel dev`不允许被`package.json`执行
vercel dev # 在项目根目录下执行此命令
```  
本项目仍在开发中，请勿用于生产环境。  

## License  | 许可证  

Licensed under the MIT License.  

使用MIT开源协议授权。  
