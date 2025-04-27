const express = require("express");
const axios = require("axios");
const router = express.Router();

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_NEWS_API_KEY";
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
