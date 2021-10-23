
const express=require('express')
const router = express.Router()

router.route('/about')
.get((req, res) => {

    res.send("About me Im Venom")

}).put((req, res) => {

    res.send("About me Im Venom")

}).delete((req, res) => {

    res.send("About me Im Venom")

}).post((req, res) => {

    res.send("About me Im Venom")

})