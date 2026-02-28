const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);