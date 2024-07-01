const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/notHing`)

const userSchema = new mongoose.Schema({
    name:String,
    userName:String,
    email:String,
})

// hamesha model ase hi export hote h kiyuki hume iske read create kerna kisi aur rout kerna h 
module.exports = mongoose.model("users",userSchema)