import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handleX } from "../../../../moves/moveHandlers/index.js";

function XPrime() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentXRotation = useCubiesStore((state) => state.currentXRotation);
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  );
  const double = useCubiesStore((state) => state.double);
  const prime = true;
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  return (
    <button
      className="button"
      onClick={() => {
        handleX({
          cubies,
          setCubies,
          currentXRotation,
          setCurrentXRotation,
          double,
          prime,
          setPrime,
          setButtonsDisabled
        });
        console.log("Current Rotation:", currentXRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      x{double ? "2" : ""}'
    </button>
  );
}

export default XPrime;
