import React from "react";

export default function MealCard({ meal }) {
  return (
    <div style={styles.card}>
      <h3>{meal}</h3>
      <p>Recommended for your mood!</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    margin: "15px 0",
    background: "#F4F4F4",
    borderRadius: "12px",
  },
};
