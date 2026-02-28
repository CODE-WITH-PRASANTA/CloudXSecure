const express = require("express");
const router = express.Router();
const {
  saveContact,
  getContact,
} = require("../controllers/contactController");

router.get("/", getContact);
router.post("/", saveContact);

module.exports = router;