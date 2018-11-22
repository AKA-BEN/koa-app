const { dbQuery } = require('../../util/async-db')

module.exports = function (router) {

  router.get('/', async(ctx,next)=>{
    let datas = await dbQuery('SELECT * FROM websites')
    ctx.body =  datas || 'null'
  })

  // 查询数据
  router.get('/get', async (ctx) => {
    let id = ctx.request.query.id
    let datas = await dbQuery('SELECT * FROM websites WHERE id=' + id)
    ctx.body =  datas || 'null'
  })

  // 修改数据
  router.get('/update', async (ctx) => {
    let id = ctx.request.query.id
    let random = Math.round(Math.random() * 100)
    let datas = await dbQuery(`UPDATE websites SET name='修改` + random + `' WHERE id=` + id)
    ctx.body =  datas || 'null'
  })

  // 增加数据
  router.get('/add', async (ctx) => {
    let name = ctx.request.query.name
    let addVal = [name, 'http://eddiez.cn', 'china']
    let datas = await dbQuery(`INSERT INTO websites(name, url, country) VALUES(?,?,?)`, addVal)
    ctx.body =  datas || 'null'
  })

  // 删除数据
  router.get('/del', async (ctx) => {
    let id = ctx.request.query.id
    let datas = await dbQuery('DELETE FROM websites WHERE id=' + id)
    ctx.body =  datas || 'null'
  })

  /*
    获取前两条
    SELECT * FROM websites LIMIT 0,2
    含有e字符 _表示一个 %表示多个
    SELECT * FROM websites WHERE name LIKE '%e%'
    根据表某字段升序 DESC表示降序
    SELECT * FROM websites ORDER BY name ASC
    id不含2,3或者去掉not表示含有
    SELECT * FROM websites WHERE id NOT IN (2, 3)
    添加列
    ALTER TABLE websites add ip int(4) not null
    修改列
    ALTER TABLE websites drop ip
  */

}