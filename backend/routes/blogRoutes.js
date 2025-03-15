const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// Create Blog
router.post("/", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username");
    res.json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Single Blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "username");
    res.json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Blog
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Blog
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json("Blog Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
