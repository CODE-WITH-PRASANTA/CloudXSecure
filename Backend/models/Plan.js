const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true }, // discounted price
    originalPrice: { type: Number }, // for percentage calculation
    duration: { type: String, default: "Per Month" },
    features: [{ type: String }],
    highlight: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", planSchema);