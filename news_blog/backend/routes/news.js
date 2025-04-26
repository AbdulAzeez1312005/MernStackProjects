const express = require("express");
const axios = require("axios");
const router = express.Router();

const NEWS_API_URL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=52e5bca649284c7ca5de4d02c723d5c3"; // Replace with your API key

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching news", error: error.message });
  }
});

module.exports = router;
