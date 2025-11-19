const express = require("express");
const router = express.Router();

// Simple demo mapping
const moodMeals = {
  Happy: ["Spaghetti", "Burger", "Halo-Halo"],
  Sad: ["Chicken Soup", "Lomi", "Milk Tea"],
  Stressed: ["Salmon", "Vegetable Stir Fry", "Fruit Bowl"],
  Energetic: ["Protein Shake", "Oatmeal", "Grilled Chicken"],
  Tired: ["Congee", "Banana Smoothie", "Pasta"],
  Bored: ["Takoyaki", "Ramen", "Nachos"]
};

router.post("/", (req, res) => {
  const { mood } = req.body;

  if (!moodMeals[mood]) {
    return res.status(400).json({ error: "Invalid mood" });
  }

  res.json({ suggestions: moodMeals[mood] });
});

module.exports = router;
