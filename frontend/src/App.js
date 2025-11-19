import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MoodSelection from "./pages/MoodSelection";
import MealSuggestions from "./pages/MealSuggestions";
import FeedbackPage from "./pages/FeedbackPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moods" element={<MoodSelection />} />
        <Route path="/suggestions" element={<MealSuggestions />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
