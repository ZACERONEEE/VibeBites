import React from "react";
import { useNavigate } from "react-router-dom";
import MoodCard from "../components/MoodCard";

export default function MoodSelection() {
  const navigate = useNavigate();

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😡", label: "Stressed" },
    { emoji: "⚡", label: "Energetic" },
    { emoji: "😴", label: "Tired" },
    { emoji: "😐", label: "Bored" },
  ];

  const selectMood = (mood) => {
    navigate("/suggestions", { state: { mood } });
  };

  return (
    <div style={styles.container}>
      <h2>How Are You Feeling?</h2>

      <div style={styles.moodGrid}>
        {moods.map((m, i) => (
          <MoodCard
            key={i}
            emoji={m.emoji}
            label={m.label}
            onSelect={() => selectMood(m.label)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  moodGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
