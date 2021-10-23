const express = require('express')
const app = express()

require('dotenv').config()
app.set('port',process.env.PORT || 3000)

let router = express.Router()


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



app.listen(app.get('port'), () => {

    console.log(`im listening on Port No ${app.get('port')}`)

})