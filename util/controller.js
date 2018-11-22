/* 路由控制器生成 */
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 获取js路由文件
function addControllers(router, dir, prePath=''){
    const files = fs.readdirSync(dir)
    dir += '/'
    files.forEach((f) => {
        if (f.endsWith('.js')) {
            // 文件
            addRouters(router, dir, prePath, f)
        } else if (!/\.+/.test(f)) {
            // 文件夹
            let _prePath = prePath ? prePath + '/' + f : f
            addControllers(router, dir + f + '/', _prePath)
        }
    })
}

// 注册js文件里的路由
function addRouters (router, dir, prePath, file) {
    let fRouter = new Router(),
        fileName = file.replace('.js', '')

    if (fileName && fileName !== 'index') {
        prePath += prePath ? '/' + fileName : fileName
    } else {
        prePath += ''
    }
    require(dir + file)(fRouter)
    console.log('/' + prePath)
    router.use('/' + prePath, fRouter.routes(), fRouter.allowedMethods())
}

module.exports = function(dir){

    const controller_dir = path.resolve(__dirname, '../' + (dir || 'controllers')),
          router = new Router()
    addControllers(router, controller_dir)
    return router;

}
