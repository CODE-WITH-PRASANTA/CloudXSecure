const mongoose = require("mongoose");

const coldLeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please use a valid email address",
      ],
      index: true, // 🔥 faster search
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      match: [
        /^[0-9]{10}$/,
        "Phone must be a valid 10-digit number",
      ],
      index: true,
    },

    company: {
      type: String,
      trim: true,
      default: "",
      maxlength: 100,
    },

    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      default: "",
      maxlength: 500,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new",
      index: true,
    },

    // 🔥 optional future use
    source: {
      type: String,
      default: "website",
    },
  },
  {
    timestamps: true,
  }
);

/* ================= INDEXES ================= */

// Compound index for sorting/filtering
coldLeadSchema.index({ createdAt: -1 });

/* ================= EXPORT ================= */

module.exports = mongoose.model("ColdLead", coldLeadSchema);