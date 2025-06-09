const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost/backend').then(()=> {
    console.log("Connected to MongoDB successfully");
    
})

module.exports = connection;