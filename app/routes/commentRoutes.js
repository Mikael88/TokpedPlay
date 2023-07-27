const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Get all comments
router.get("/", commentController.getAllComments);

// Get comments for a specific video
router.get("/video/:videoId", commentController.getCommentsForVideo);

// Create a new comment
router.post("/", commentController.createComment);

module.exports = router;
