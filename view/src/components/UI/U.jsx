import React from "react";
import "./UI.css"; // Assuming you have some styles for the button
import useCubiesStore from "../../store/cubiesStore.js";
const PI = Math.PI;

function U() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentYRotation = useCubiesStore((state) => state.currentYRotation);
  const setCurrentYRotation = useCubiesStore(
    (state) => state.setCurrentYRotation
  );
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  const handleU = () => {
    const newCubies = {};
    for (const i in cubies) {
      if (cubies[i].position[1] === 1) {
        newCubies[i] = { ...cubies[i], isRotating: true };
      } else {
        newCubies[i] = { ...cubies[i], isRotating: false };
      }
    }
    setCubies(newCubies);
    setCurrentYRotation(currentYRotation - PI / 2);
    setPrime(false);
    setButtonsDisabled(true);
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleU();
        console.log("Current Rotation:", currentYRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      U
    </button>
  );
}

export default U;
