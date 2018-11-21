// 路由控制器生成
const fs = require('fs')
const Router = require('koa-router')

function addControllers(router, dir, prePath=''){
    const files = fs.readdirSync(__dirname + dir)
    console.log(files)
    files.forEach((f) => {
        if (f.endsWith('.js')) {
            // 文件
            addRouters(router, dir, prePath, f)
        } else if (!/\.+/.test(f)) {
            // 文件夹
            addControllers(router, dir + f + '/', f)
        }
    })
}

function addRouters (router, dir, prePath, file) {
    let fRouter = new Router()
    prePath += file.replace('.js', '') || ''
    require(__dirname + dir + file)(fRouter)
    router.use('/' + prePath, fRouter.routes(), fRouter.allowedMethods())
}

module.exports = function(dir){

    const controller_dir = dir || '/controllers/',
          router = new Router()

    addControllers(router, controller_dir)
    return router;
    
}