// Profile Model
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: String,
  profilePicture: String,
  socialMediaProfiles: [
    {
      name: String,
      link: String,
    },
  ],
  // Other profile fields...
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
