const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
  companyName: {
    type: String
  },
  uid: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other fields...
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;
