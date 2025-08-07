import React from "react";
import "./UI.css"; // Assuming you have some styles for the button
import useCubiesStore from "../../store/cubiesStore.js";

function RotateButton() {
  return (
    <button
      className="rotate-button"
      onClick={() => console.log("Button clicked")}
    >
      Rotate Cube
    </button>
  );
}

export default RotateButton;
