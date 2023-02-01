const mongoose = require('mongoose')

const appyFreelancertSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  lnProfile: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  git: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  rCode: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('ApplyFreelancer', appyFreelancertSchema)
