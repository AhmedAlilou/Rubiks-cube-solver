import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handleFPrime } from "../../../../moves/moveHandlers/index.js";

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

  return (
    <button
      className="button"
      onClick={() => {
        handleFPrime({
          cubies,
          setCubies,
          currentZRotation,
          setCurrentZRotation,
          setPrime,
          setButtonsDisabled
        });
        console.log("Current Rotation:", currentZRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      F'
    </button>
  );
}

export default FPrime;
