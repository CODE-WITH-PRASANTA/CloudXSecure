const express = require("express");
const router = express.Router();

const controller = require("../controllers/testimonial.controller");
const { upload, convertToWebp } = require("../middleware/upload");

router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  controller.createTestimonial
);

router.get("/", controller.getTestimonials);

router.delete("/:id", controller.deleteTestimonial);

router.put("/toggle/:id", controller.toggleStatus);

module.exports = router;