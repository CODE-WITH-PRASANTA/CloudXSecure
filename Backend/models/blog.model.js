const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: String,
    author: {
      type: String,
      required: true,
    },
    designation: String,
    content: String,
    quotes: String,
    tags: [String],
    image: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);