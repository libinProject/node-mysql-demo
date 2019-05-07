const conn=require('../mysqldb.js')

module.exports={
  queryUserList:(req,res)=>{
    const sql=`select * from rc_role`
    conn.query(sql,(err,result)=>{
      if(err) return res.send({status:500,msg:err.message,data:null})
      res.send({status:200,err:null,data:result})
    })
  }
}
