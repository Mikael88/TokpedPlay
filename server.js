const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

// Set up routes
const productRoutes = require("./app/routes/productRoutes");
const commentRoutes = require("./app/routes/commentRoutes");
const videoRoutes = require("./app/routes/videoRoutes");

// Set up the base URL for products
app.use("/api/products", productRoutes);
// Set up the base URL for comments
app.use("/api/comments", commentRoutes);
// Set up the base URL for videos
app.use("/api/videos", videoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
