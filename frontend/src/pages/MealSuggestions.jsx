import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MealCard from "../components/MealCard";

export default function MealSuggestions() {
  const { state } = useLocation();
  const mood = state?.mood;

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood }),
    })
      .then((res) => res.json())
      .then((data) => setMeals(data.suggestions));
  }, [mood]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Meals for: {mood}</h2>

      {meals.map((m, i) => (
        <MealCard key={i} meal={m} />
      ))}
    </div>
  );
}
