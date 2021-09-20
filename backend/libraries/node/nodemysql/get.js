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
// var q="SELECT * FROM `students` WHERE 1"   

var q="SELECT `name`, `address` FROM `students` WHERE name='guru'"

    con.query(q,(err,result)=>{
        if(err)throw err;
        console.log(result)
    })
})