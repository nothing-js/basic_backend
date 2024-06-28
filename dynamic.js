const express = require('express')
const path = require('path')
const app = express()

// this is use for using midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this line for joinig the folder to file 
//is ka use hum file ko attached kerne ke liye kerte h 

app.use(express.static(path.join(__dirname,'public')))

// this line for ejs file using 
app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.render("view")
})


// this is dyanamic routing 
app.get('/public/:username',(req,res) =>{
    res.send(req.params.username)
})

app.listen(3000,() => {
    console.log("it is runing")
})