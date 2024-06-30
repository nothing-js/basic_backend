//mongoDB install
//npm install mongoose
// work - mongoose hume help kerta h node ke server se mongoDB ke server se connect kerne me 
// orm - In summary, ORM is used for relational databases (like MySQL, PostgreSQL) and translates objects to table rows
// odm - ODM is used for document databases (like MongoDB) and translates objects to documents.
//npm install express

//mongoDB connection
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
    });
//mongoDB connection end


// schema
const Schema = mongoose.Schema;


// model
//create 
//read
//update
//delete

