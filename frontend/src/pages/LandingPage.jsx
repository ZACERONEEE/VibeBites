import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>VibeBites</h1>
      <p>Eat What You Feel</p>
      <button style={styles.btn} onClick={() => navigate("/moods")}>
        Start Now
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "100px" },
  btn: {
    background: "#FF8552",
    color: "white",
    padding: "15px 30px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
};
