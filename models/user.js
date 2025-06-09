const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    // age : Number,
    // gender : {
    //     type : String,
    //     enum : ['male', 'female', 'other'],
    // }
})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
// This code defines a Mongoose schema and model for a User in a MongoDB database.