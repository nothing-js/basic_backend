// express.js framework

//introduction to express.js:
//express js ek npm pakage h 
//framework - it's work like flow 
//manage everything from reciving  the request and giving respons 
//express.js is a minimal and flexible Node.js web application framework that provides a robust set of features
// mern stack

// setting up a basic express aplication
//step 1: install express.js
//npm init -y
//npm install express
//step 2: create a new file and import express
// const express = require('express');
// const app = express();


//routing
// nothing.com/hello
// routing is the process of determining how an application responds to a client request to a particular endpoint,
// which is a URI (or path) and a specific HTTP request method (such as GET,
// POST, PUT, DELETE, etc.)


// midleware
// middleware functions are functions that have access to the entire request object (req),
// the entire response object (res), and the next middleware function in the application’s request-response cycle
// middleware functions can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.


// request and respons 
// req - request
// res - response
// req.body - body of the request
// req.query - query of the request
// req.params - params of the request
// res.send() - send response
// res.json() - send json response
// res.status() - send status code

// error handling 
// try catch block
// error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send('Something broke!');
// });

