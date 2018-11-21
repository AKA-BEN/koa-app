var fn_temp = async(ctx,next)=>{
  ctx.response.body = 'asdsadasdsadasdsadasdsadasdsad'
}

module.exports = {
  'GET /api/test': fn_temp
}