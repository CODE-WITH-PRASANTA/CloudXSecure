const express = require("express");
const router = express.Router();

const teamController = require("../controllers/team.controller");
const { upload, convertToWebp } = require("../middleware/upload");

router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  teamController.createMember
);

router.get("/", teamController.getMembers);

router.delete("/:id", teamController.deleteMember);

module.exports = router;