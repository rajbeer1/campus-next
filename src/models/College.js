const mongoose = require('mongoose');
const { isEmail } = require("validator");

const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate:[isEmail,'pls enter valid']
  },
  password: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },

});

const College =  mongoose.models.College||mongoose.model('College', collegeSchema);

module.exports = College;
