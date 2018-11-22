const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const static = require('koa-static')
const controller = require('./util/controller')

const app = new Koa()

// 配置模版引擎中间件
app.use(views(__dirname + '/views',{ extension:'ejs' }))

// 静态资源目录对于相对入口文件index.js的路径
app.use(static(path.join( __dirname,  './static')))

// 解析post请求的参数
app.use(bodyParser())

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log(`process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
});

// 扫描controllers目录，导入所有js文件，注册每个URL
app.use(controller().routes())

// 在端口3000监听:
app.listen(3000)
console.log('app started at port 3000...')