const express = require("express");
const router = express.Router();

const {
  createLead,
  getLeads,
  updateStatus,
  updateLead,   // ✅ NEW
  deleteLead,
} = require("../controllers/coldLeadController");

router.post("/", createLead);
router.get("/", getLeads);

// ✅ PATCH → only status
router.put("/:id", updateStatus);

// ✅ PUT → full update
router.put("/:id", updateLead);

// DELETE
router.delete("/:id", deleteLead);

module.exports = router;