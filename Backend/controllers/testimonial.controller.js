const Testimonial = require("../models/testimonial.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create({
      ...req.body,
      image: req.body.image || null,
    });

    res.status(201).json({
      success: true,
      data: testimonial,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteTestimonial = async (req, res) => {
  try {
    const item = await Testimonial.findById(req.params.id);

    if (!item)
      return res.status(404).json({ success: false, message: "Not found" });

    if (item.image) deleteImageFile(item.image);

    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= TOGGLE ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const item = await Testimonial.findById(req.params.id);

    item.status =
      item.status === "published" ? "draft" : "published";

    await item.save();

    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};