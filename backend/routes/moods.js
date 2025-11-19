const express = require("express");
const router = express.Router();

const moods = [
  "Happy",
  "Sad",
  "Stressed",
  "Energetic",
  "Tired",
  "Bored"
];

router.get("/", (req, res) => {
  res.json({ moods });
});

module.exports = router;
