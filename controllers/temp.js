
const nunjucks_env = require('../nunjucks-env');

var fn_temp = async(ctx,next)=>{
    var id = ctx.params.id;
    if(id == 1){
        ctx.response.body = nunjucks_env.render('temp.html',{
            id: id*1,
            list: ['asdsad','qweqweq','easfaf','asdsadaf']
        })
    }else if(id == 2){
        ctx.response.body = nunjucks_env.render('temp.html',{
            id: id*1,
            list: ['9090090','2432343','124243234','56757654']
        })
    }else{
        ctx.response.body = '<h1>无效ID</h1>'
    }
}

module.exports = {
    'GET /temp/:id': fn_temp
}