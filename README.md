# koa-Template

```
A koa templatetemplate
一个基础功能搭建的koa2项目模板，开箱即用，加快开发效率。
```

## 基础功能

-  快速路由初始化 `/controllers/` 文件夹下的路由控制文件
-  加载 `/static/` 文件夹下静态资源，与 index 路由访问同级
-  ejs文件模板引擎渲染  `/views/`

## 项目目录

```
├─ config             // 配置文件
│  ├─ default.js      // 默认基础
│  ├─ development.js  // 开发配置
│  └─ production.js   // 生产配置
├─ controllers        // 路由控制器
│  ├─ index.js        // 路由文件
│  └─ api
├─ static             // 静态资源文件
│  └─ images
├─ util               // 公用工具文件
│  └─ controller.js   // 支持文件路由控制器生成（勿删）
│  └─ async-db.js     // 数据库查询封装
├─ views              // 模板文件
├─ app.js             // 服务启动入口
```

## 服务运行

```
1. git clone https://github.com/AKA-BEN/koa-app.git
2. npm install
3. npm run dev || npm run prod
```

## 使用注意事项

- `/controllers/` 下路由文件
  - `index`文件名路由路径为 `/`
  - `index`文件夹名路由路径为 `/index`
  - 同级同名出现时，文件夹优先级`大于`文件（请避免同级同名）