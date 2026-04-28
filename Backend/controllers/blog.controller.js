const Blog = require("../models/blog.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createBlog = async (req, res) => {
  try {
    const tags = req.body.tags ? JSON.parse(req.body.tags) : [];

    const blog = await Blog.create({
      title: req.body.title,
      category: req.body.category,
      author: req.body.author,
      designation: req.body.designation,
      content: req.body.content,
      quotes: req.body.quotes,
      status: req.body.status || "draft",
      tags,
      image: req.file ? req.file.filename || req.file.path : null,
    });

    res.status(201).json({
      success: true,
      data: blog,
    });

  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);
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
    console.error("GET BLOG ERROR:", error);
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

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

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

    if (req.file) {
      if (blog.image) deleteImageFile(blog.image);
      blog.image = req.file.filename || req.file.path;
    }

    await blog.save();

    res.json({
      success: true,
      data: blog,
    });

  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);
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

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    if (blog.image) deleteImageFile(blog.image);

    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= TOGGLE ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

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