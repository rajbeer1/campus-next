const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

     postId: {
    type: String
  },

  posts: {
    type: Object,
    default: [],
  },

  comments: {
    type: Object,
    default: [],
  },

  like: {
    type: Object,
    default: [],
  },

  
})
const post = mongoose.model('post', postSchema);
module.exports = post;