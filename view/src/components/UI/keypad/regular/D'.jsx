import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handleDPrime } from "../../../../moves/moveHandlers/index.js";

function DPrime() {
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

  return (
    <button
      className="button"
      onClick={() => {
        handleDPrime({
          cubies,
          setCubies,
          currentYRotation,
          setCurrentYRotation,
          setPrime,
          setButtonsDisabled
        });
        console.log("Current Rotation:", currentYRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      D'
    </button>
  );
}

export default DPrime;
