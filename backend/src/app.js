const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const moodRoutes = require("./routes/moods");
const recommendRoutes = require("./routes/recommend");

app.use("/api/moods", moodRoutes);
app.use("/api/recommend", recommendRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
