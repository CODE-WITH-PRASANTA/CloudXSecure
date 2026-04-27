const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,  
    },
    company: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ["published", "draft"],
      default: "published",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);