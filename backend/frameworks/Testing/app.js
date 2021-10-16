const express = require('express')
const app = express()

require('dotenv').config()
const port=process.env.PORT


app.get('/', (req, res) => {

    res.send("get api it will work only on browser")

})

app.listen(8007, () => {

    console.log(`im listening on Port no ${port}`)

})