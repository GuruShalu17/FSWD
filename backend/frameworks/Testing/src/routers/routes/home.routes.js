
const express=require('express')
const router = express.Router()

router.route('/home')
.get((req, res) => {

    res.send("Lets Go Home")

}).post((req, res) => {

    res.send("Lets Go Home")

}).put((req, res) => {

    res.send("Lets Go Home")

}).delete((req, res) => {

    res.send("Lets Go Home")

})