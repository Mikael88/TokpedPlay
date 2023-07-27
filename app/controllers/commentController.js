const Comment = require("../models/Comment");

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get comments" });
  }
};

// Get comments for a specific video
exports.getCommentsForVideo = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get comments for the video" });
  }
};

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { videoId, username, comment } = req.body;
    const newComment = new Comment({ videoId, username, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};
