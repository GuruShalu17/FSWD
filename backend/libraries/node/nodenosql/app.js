require('./config/db.config')

const Futsal = require('./src/models/players.schema')


const gurushalu = new Futsal({name:"Siva",position:"Defender",age:31})

gurushalu.save()

// Futsal.findOne({name:'Siva'},(err,resp)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(resp)
//     }
// })

// Futsal.findOneAndUpdate({name:'Karthik'},
// {position:'Striker'},
// {overwrite:false,new:true},

// (err,resp)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(resp)
//     }
// })

// Futsal.findOneAndDelete({name:'Siva'},(err,resp)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(resp)
//     }
// })