const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "username is required",
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: "password is required",
    select: false,
    trim: true
  },

  email: {
    type: String,
    required: "email is required",
    trim: true
  },

  accounts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  }],

  account_count: {
    type: Number,
    default: 1,
    max: 5,
    trim: true
  },

  account_type: {
    type: String,
    default: "FREE",
    enum: ["FREE", "PREMIUM"],
    trim: true
  },

  date_created: {
    type: Date,
    default: Date.now
  },

  date_updated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
