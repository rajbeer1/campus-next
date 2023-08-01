const mongoose = require('mongoose');
const { isEmail } = require("validator");


const userSchema = new mongoose.Schema({

    userId:{type: Number,},
    email: { type: String, lowercase: true, unique: true,validate:[isEmail,'pls enter valid']},
    password: { type: String, },
    name: { type: String, },
    image: { type: String },
    gender: {
        type: String, enum: ['male', 'female', 'other']},
    DOB: { type: Date, },
    year: { type: Number },
   
    
    

})
const User = mongoose.models.user || mongoose.model("user", userSchema);
module.exports = User;
