const mongoose = require("mongoose");
const { transactionSchema } = require("../models/transaction.model");

const accountSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
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

  transactions: [
    transactionSchema
  ],

  date_created: {
    type: Date,
    default: Date.now
  },

  date_updated: {
    type: Date,
    default: Date.now
  }
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
