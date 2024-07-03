const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },

  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },

  amount: {
    type: Number,
    trim: true,
    required: true
  },

  message: {
    type: String,
    trim: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
