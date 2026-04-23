const ColdLead = require("../models/ColdLead");

/* ================= CREATE LEAD ================= */
exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // ✅ validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const lead = await ColdLead.create({
      name,
      email,
      phone,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ALL LEADS ================= */
exports.getLeads = async (req, res) => {
  try {
    const leads = await ColdLead.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE STATUS (PATCH) ================= */
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // ✅ validate status
    if (!["new", "contacted", "converted"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const lead = await ColdLead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: lead,
    });
  } catch (error) {
    console.error("STATUS UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= FULL UPDATE (PUT) ================= */
exports.updateLead = async (req, res) => {
  try {
    const { name, email, phone, service, message, company } = req.body;

    const updatedLead = await ColdLead.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        service,
        message,
        company,
      },
      { new: true, runValidators: true }
    );

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: updatedLead,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE LEAD ================= */
exports.deleteLead = async (req, res) => {
  try {
    const lead = await ColdLead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};