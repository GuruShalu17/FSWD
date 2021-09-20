require('./config/db.config')

const Futsal = require('./src/models/players.schema')


// const gurushalu = new Futsal({name:"Karthik",position:"Midfielder",age:23})

// gurushalu.save()

Futsal.findOne({name:'Siva'},(err,resp)=>{
    if(err){
        console.log(err)
    }else{
        console.log(resp)
    }
})