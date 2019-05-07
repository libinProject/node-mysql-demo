const mysql=require('mysql')

const conn=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'mis',
  database:'zuul-auth'
})

module.exports = conn