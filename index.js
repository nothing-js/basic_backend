import express from 'express'
const app = express()

// this is use for using midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
    res.send("hello you are in routing")
})

app.listen(3000,() => {
    console.log("it is runing")
})