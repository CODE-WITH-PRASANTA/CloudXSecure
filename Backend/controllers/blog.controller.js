const Blog = require("../models/blog.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      ...req.body,
      image: req.file ? req.file.path : null, // ✅ FIXED
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
    });

    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ALL ================= */
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ONE ================= */
exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE ================= */
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.title = req.body.title || blog.title;
    blog.category = req.body.category || blog.category;
    blog.author = req.body.author || blog.author;
    blog.designation = req.body.designation || blog.designation;
    blog.content = req.body.content || blog.content;
    blog.quotes = req.body.quotes || blog.quotes;
    blog.status = req.body.status || blog.status;

    if (req.body.tags) {
      blog.tags = JSON.parse(req.body.tags);
    }

    // ✅ FIXED IMAGE UPDATE
    if (req.file) {
      if (blog.image) {
        deleteImageFile(blog.image);
      }
      blog.image = req.file.path;
    }

    await blog.save();

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/* ================= DELETE ================= */
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });

    if (blog.image) {
      deleteImageFile(blog.image);
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= TOGGLE STATUS ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });

    blog.status = blog.status === "published" ? "draft" : "published";

    await blog.save();

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
