const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
const {
  upload,
  convertToWebp,
} = require("../middleware/upload");

/* ================= ROUTES ================= */

router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  blogController.createBlog
);

router.get("/", blogController.getBlogs);

router.get("/:id", blogController.getSingleBlog);

router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  blogController.updateBlog
);

router.delete("/:id", blogController.deleteBlog);

router.patch("/toggle/:id", blogController.toggleStatus);

module.exports = router;