

module.exports = function (router) {

    router.get('/:id', async(ctx,next)=>{
        var id = ctx.params.id;
        if(id == 1){
            await ctx.render('temp',{
                id: id*1,
                list: ['asdsad','qweqweq','easfaf','asdsadaf']
            })
        }else if(id == 2){
            await ctx.render('temp',{
                id: id*1,
                list: ['9090090','2432343','124243234','56757654']
            })
        }else{
            ctx.response.body = '<h1>无效ID</h1>'
        }
    })
    
}