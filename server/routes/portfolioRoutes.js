const express = require("express");
const Portfolio = require("../models/Portfolio");

const router = express.Router();

// Create Portfolio
router.post("/", async (req, res) => {
  const { userId, assets } = req.body;
  try {
    const portfolio = new Portfolio({ userId, assets });
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get User Portfolio
router.get("/:userId", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ userId: req.params.userId });
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
