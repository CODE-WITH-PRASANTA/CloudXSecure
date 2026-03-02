const express = require("express");
const router = express.Router();
const {
  createLead,
  getLeads,
  updateStatus,
  deleteLead,
} = require("../controllers/coldLeadController");

router.post("/", createLead);
router.get("/", getLeads);
router.patch("/:id", updateStatus);
router.delete("/:id", deleteLead);

module.exports = router;