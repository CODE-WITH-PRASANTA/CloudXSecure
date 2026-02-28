const express = require("express");
const router = express.Router();
const {
  createPlan,
  getPlans,
  deletePlan,
} = require("../controllers/planController");

router.post("/", createPlan);
router.get("/", getPlans);
router.put("/:id", updatePlan);
router.delete("/:id", deletePlan);

module.exports = router;