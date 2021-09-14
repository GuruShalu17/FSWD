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
var q="INSERT INTO `students`(`name`, `address`) VALUES ('guru','selayang')"   

    con.query(q,(err,result)=>{
        if(err)throw err;
        console.log("insert created")
    })
})