// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const controller = require('./controller');
const nunjucks_env = require('./nunjucks-env');


// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 解析post请求的参数
app.use(bodyParser());

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log(`process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 扫描controllers目录，导入所有js文件，注册每个URL
app.use(controller());

app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');