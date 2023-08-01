const mongoose = require('mongoose');

const jobs1= new mongoose.Schema({

     jobId: {
    type: String,
    required: true,
  },

  description: {
      type: String,
      required:true,
    },
  link:{type:String,
        required: true
    },
  
  

  

  
})
const jobs = mongoose.model('jobs', jobs1);
module.exports = jobs;