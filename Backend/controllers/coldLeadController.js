const ColdLead = require("../models/ColdLead");

/* CREATE LEAD */
exports.createLead = async (req, res) => {
  try {
    const lead = await ColdLead.create(req.body);
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* GET ALL LEADS */
exports.getLeads = async (req, res) => {
  try {
    const leads = await ColdLead.find().sort({ createdAt: -1 });
    res.json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* UPDATE STATUS */
exports.updateStatus = async (req, res) => {
  try {
    const lead = await ColdLead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* DELETE LEAD */
exports.deleteLead = async (req, res) => {
  try {
    await ColdLead.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Lead deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};