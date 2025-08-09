import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handledPrime } from "../../../../moves/moveHandlers/index.js";

function WdPrime() {
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
        handledPrime({
          cubies,
          setCubies,
          currentYRotation,
          setCurrentYRotation,
          setPrime,
          setButtonsDisabled
        });
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      d'
    </button>
  );
}

export default WdPrime;
