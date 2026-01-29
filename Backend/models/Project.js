const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  liveLink: String,
  githubLink: String,
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
