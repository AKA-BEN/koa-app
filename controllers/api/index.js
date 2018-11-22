
module.exports = function (router) {

  router.get('/', async(ctx,next)=>{
    ctx.response.body = 'this is api response data'
  })
  
}