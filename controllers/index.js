module.exports = function (router) {

  router.get('/', async(ctx,next)=>{
    ctx.response.body = '<h1>this is home page.</h1>'
  })
  
}