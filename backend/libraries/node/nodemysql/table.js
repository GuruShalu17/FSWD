var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'siva'
});

con.connect((err)=>{
    if(err)throw err
    console.log("connected to db")
var q="CREATE TABLE students (name VARCHAR(255), address VARCHAR(255))"   

    con.query(q,(err,result)=>{
        if(err)throw err;
        console.log("table created")
    })
})