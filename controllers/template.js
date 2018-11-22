

module.exports = function (router) {

    router.get('/:id', async(ctx,next)=>{
        var id = ctx.params.id;
        if(id == 1){
            await ctx.render('template',{
                id: id*1,
                list: ['vue','react','angular']
            })
        }else if(id == 2){
            await ctx.render('template',{
                id: id*1,
                list: ['koa','express','egg','think']
            })
        }else{
            ctx.response.body = '<h1>无效ID</h1>'
        }
    })
    
}