import React from "react";
import "./UI.css"; // Assuming you have some styles for the button
import useCubiesStore from "../../store/cubiesStore.js";
import F from "./F.jsx";
const PI = Math.PI;

function FPrime() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentZRotation = useCubiesStore((state) => state.currentZRotation);
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  const handleFPrime = () => {
    const newCubies = {};
    for (const i in cubies) {
      if (cubies[i].position[2] === 1) {
        newCubies[i] = { ...cubies[i], isRotating: true };
      } else {
        newCubies[i] = { ...cubies[i], isRotating: false };
      }
    }
    setCubies(newCubies);
    setCurrentZRotation(currentZRotation + PI / 2);
    setPrime(true);
    setButtonsDisabled(true); // Disable buttons during rotation
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleFPrime();
        console.log("Current Rotation:", currentZRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      F'
    </button>
  );
}

export default FPrime;
