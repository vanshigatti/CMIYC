const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  from: String,
  to: String,
  value: String,
  txHash: String,
  blockNumber: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Event", eventSchema);
