// midleware
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/about' , () =>{
    console.log('about page')
})

app.use((req,res,next) => {
    console.log("mildeware chalo");
    next()
});


app.get(
    '/',
    (req, res) => {
        res.send("hello .com ")
    } 
)

app.listen(port)
