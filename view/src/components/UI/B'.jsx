import React from "react";
import "./UI.css"; // Assuming you have some styles for the button
import useCubiesStore from "../../store/cubiesStore.js";
const PI = Math.PI;

function BPrime() {
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

  const handleBPrime = () => {
    const newCubies = {};
    for (const i in cubies) {
      if (cubies[i].position[2] === -1) {
        newCubies[i] = { ...cubies[i], isRotating: true };
      } else {
        newCubies[i] = { ...cubies[i], isRotating: false };
      }
    }
    setCubies(newCubies);
    setCurrentZRotation(currentZRotation - PI / 2);
    setPrime(false);
    setButtonsDisabled(true);
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleBPrime();
        console.log("Current Rotation:", currentZRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      B'
    </button>
  );
}

export default BPrime;
