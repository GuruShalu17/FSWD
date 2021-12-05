const express = require('express')
const app = express()

require('dotenv').config()
app.set('port',process.env.PORT || 3000)

let router = express.Router()


const checkurl=(req,res,next)=>{
    console.log("Im the Middle Ware "+req.originalUrl)
    next()
}

app.use(checkurl)



router.route('/')
.get((req, res) => {

    res.send("get api it will work only on browser")

}).put((req, res) => {

    res.send("get api it will work only on browser")

}).delete((req, res) => {

    res.send("get api it will work only on browser")

}).post((req, res) => {

    res.send("get api it will work only on browser")

})


app.route('/ammas/house/')


.get((req,res)=>{
    res.send("listen to amma advise")
})
.put((req,res)=>{
    res.send("listen to amma advise")
})
.delete((req,res)=>{
    res.send("listen to amma advise")
})
.post((req,res)=>{
    res.send("listen to amma advise")
})



app.get("/amma/:id/:name2",(req,res)=>{
    res.send("vanakam "+req.params.name+" "+req.params.name2)
})


app.get("/g/:s",(req,res)=>{
    res.send("because we getting married ")
})

app.get('*',(req,res)=>{
var obj={
    statuscode:404,
    message:"loco put correct url"
}
res.send(obj)
})



app.listen(app.get('port'), () => {

    console.log(`im listening on Port No ${app.get('port')}`)

})