const Team = require("../models/team.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createMember = async (req, res) => {
  try {
    const member = await Team.create({
      ...req.body,
      image: req.body.image || null,
    });      

    res.status(201).json({
      success: true,
      data: member,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: members,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    if (!member)
      return res.status(404).json({ success: false, message: "Not found" });

    if (member.image) deleteImageFile(member.image);

    await Team.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};