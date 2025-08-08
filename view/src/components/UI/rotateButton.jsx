import React from "react";
import "./UI.css"; // Assuming you have some styles for the button
import useCubiesStore from "../../store/cubiesStore.js";
const PI = Math.PI;

function RotateButton() {
  const move = useCubiesStore((state) => state.move); // boolean from store
  const setMove = useCubiesStore((state) => state.setMove);
  const currentRotation = useCubiesStore((state) => state.currentRotation);
  const setCurrentRotation = useCubiesStore(
    (state) => state.setCurrentRotation
  );
  // handle cycle of F so 1, 2, 3, 4, then back to 1 if button is clicked again at 4 which will cause change and change rotation based on current state in
  return (
    <button
      onClick={() => {
        setCurrentRotation(currentRotation - PI / 2);
        console.log("Current Rotation:", currentRotation);
      }}
    >
      Rotate F
    </button>
  );
}

export default RotateButton;
