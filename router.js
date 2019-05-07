const express=require('express')
const user=require('./controller/usercontroller.js')

const router=express.Router()

router.get('/getUsers',user.queryUserList)

module.exports = router

