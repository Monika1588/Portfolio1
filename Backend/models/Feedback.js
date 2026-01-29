const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Feedback", feedbackSchema);
