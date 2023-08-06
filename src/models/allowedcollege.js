const mongoose = require('mongoose');
const { isEmail } = require("validator");

const  allowedcollegeSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
  }

});

const allowedCollege =  mongoose.models.allowedCollege||mongoose.model('allowedCollege', allowedcollegeSchema);

module.exports = allowedCollege;
