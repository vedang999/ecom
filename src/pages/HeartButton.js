import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function HeartButton() {
  const [isClick, setClick] = useState(false);

  const heartButtonStyle = {
    display: "inline-block",
    position: "relative",
    width: "20px",
    height: "20px",
    margin: "0",
    padding: "0",
    background: "none",
    border: "none",
    zIndex: 1, // Ensure it appears above overlay
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay color
    display: isClick ? "block" : "none", // Toggle overlay based on click state
    zIndex: 2, // Ensure it appears above heart button
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Heart
        isClick={isClick}
        onClick={() => setClick(!isClick)}
        style={heartButtonStyle}
      />
      <div style={overlayStyle}></div>
    </div>
  );
}
