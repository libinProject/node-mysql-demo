const express=require('express')

const app=express()

const router=require('./router.js')

app.use(router)

app.listen(5000,'127.0.0.1',()=>{
  console.log('server running at http://127.0.0.1:5000')
})