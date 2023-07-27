const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

// Get all videos
router.get("/", videoController.getAllVideos);

module.exports = router;
