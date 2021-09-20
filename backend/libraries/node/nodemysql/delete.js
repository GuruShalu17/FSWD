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

var q="DELETE FROM `students` WHERE name='dev'"

    con.query(q,(err,result)=>{
        if(err)throw err;
        console.log(result)
    })
})