
const express = require('express')
const router = express.Router()

router.route('/login')
.get((req, res) => {

    res.send("Api only when Login")

}).post((req, res) => {

    res.send("Api only when Login")

}).delete((req, res) => {

    res.send("Api only when Login")

}).put((req, res) => {

    res.send("Api only when Login")

})

