import React from "react";
import "./UI.css"; // Assuming you have some styles for the button

function RotateButton() {
  return (
    <button
      className="rotate-button"
      onClick={() => {
        // Logic to rotate the cube
        console.log("Rotate button clicked");
      }}
    >
      Rotate Cube
    </button>
  );
}

export default RotateButton;
