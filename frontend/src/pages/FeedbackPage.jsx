import React, { useState } from "react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Rate Your Experience</h2>

      <div style={{ fontSize: "40px", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ color: star <= rating ? "gold" : "gray" }}
          >
            ★
          </span>
        ))}
      </div>

      <button style={btn}>Submit</button>
    </div>
  );
}

const btn = {
  marginTop: "20px",
  padding: "12px 25px",
  background: "#2A9D8F",
  color: "white",
  border: "none",
  borderRadius: "10px",
};
