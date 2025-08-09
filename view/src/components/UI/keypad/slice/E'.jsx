import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handleEPrime } from "../../../../moves/moveHandlers/index.js";

function EPrime() {
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
        handleEPrime({
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
      E'
    </button>
  );
}

export default EPrime;
