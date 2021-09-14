var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});

con.connect((err)=>{
    if(err)throw err
    console.log("connected to db")
    con.query("CREATE DATABASE siva",(err,result)=>{
        if(err)throw err;
        console.log("database created")
    })
})