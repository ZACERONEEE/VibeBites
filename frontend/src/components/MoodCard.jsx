import React from "react";

export default function MoodCard({ label, emoji, onSelect }) {
  return (
    <div style={styles.card} onClick={onSelect}>
      <span style={{ fontSize: 50 }}>{emoji}</span>
      <p>{label}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "120px",
    textAlign: "center",
    padding: "20px",
    margin: "10px",
    borderRadius: "15px",
    background: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};
