const mysql = require('mysql')
const config = require('config')

//创建mysql实例
const pool = mysql.createPool(config.get('db'))

// 连接数据库操作数据
let dbQuery = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, function (err,result) {
          if (err) {
            reject(err)
          } else {
            resolve(result || 'success')
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}

module.exports = {dbQuery}
