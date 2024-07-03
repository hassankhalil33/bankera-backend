const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  money: {
    type: Number,
    default: 0,
    trim: true
  },

  is_banned: {
    type: Boolean,
    def: false,
    trim: true
  },

  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }],

  date_created: {
    type: Date,
    default: Date.now
  },

  date_updated: {
    type: Date,
    default: Date.now
  }
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
