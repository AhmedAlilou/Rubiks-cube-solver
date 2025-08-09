import React from "react";
import "./UI.css"; // Assuming you have some styles for the button
import useCubiesStore from "../../store/cubiesStore.js";
const PI = Math.PI;

function L() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentXRotation = useCubiesStore((state) => state.currentXRotation);
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  );
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );
  const pivotPosition = useCubiesStore((state) => state.pivotPosition);
  const setPivotPosition = useCubiesStore((state) => state.setPivotPosition);

  const handleR = () => {
    const newCubies = {};
    for (const i in cubies) {
      if (cubies[i].position[0] === -1) {
        newCubies[i] = { ...cubies[i], isRotating: true };
      } else {
        newCubies[i] = { ...cubies[i], isRotating: false };
      }
    }
    setCubies(newCubies);
    setCurrentXRotation(currentXRotation + PI / 2);
    setPrime(true);
    setButtonsDisabled(true);
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleR();
        console.log("Current Rotation:", currentXRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      L
    </button>
  );
}

export default L;
