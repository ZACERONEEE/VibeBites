import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>VibeBites</h2>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px",
    background: "#FF8552",
    color: "white",
    fontWeight: "bold",
  },
  logo: { margin: 0 },
};
