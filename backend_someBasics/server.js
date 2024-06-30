const express = require('express')

const app = express();

//routs

app.get('/', (req,res) => {
  res.send('Welcome to my API');
})

app.get('/api', (req,res) => {
  res.send("what are you doning here ")
})

app.listen(8000)