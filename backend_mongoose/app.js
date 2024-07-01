const express = require('express')
const app = express();
const userModel = require('./userModel.js')

app.get('/' , (req,res) => {
    res.send('Hello World');
})


// create operation h jisme hum create rout per jake user ko create ker rahe h 
app.get('/create' , async (req,res) => {
    const createdUser = await userModel.create({
        name: 'John',
        email:"mujhemarle.com",
        userName:"dev"
    })

    res.send(createdUser)
})

// update model
app.get('/update' , async (req,res) => {
    // update me hume tin chiz deni hoti h pehele  findone and uske baad update ,new:true
    let updatedUser = await userModel.findOneAndUpdate(
        {username:'jonh'},
        {name:'hello'},
        {new:true}
    )
    res.send(createdUser)
})

// reade model
app.get('/read' , async (req,res) => {
    let readUser = await userModel.findOne({username:'jonh'})
    res.send(readUser)
})

// delete 
app.get('/delete' , async (req,res) => {
    let readUser = await userModel.findOneAndDelete({username:'jonh'})
    res.send(readUser)
})

app.listen(3000,() => {
    console.log('Server is running on port 3000');
})