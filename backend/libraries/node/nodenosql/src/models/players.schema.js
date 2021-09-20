const mongoose = require('mongoose')
const {Schema} = mongoose

const playerDetails = new Schema({
    name : String,
    position : String,
    age : Number
})

module.exports = mongoose.model('player1',playerDetails)
