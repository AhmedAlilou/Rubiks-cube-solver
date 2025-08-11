import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handlef } from "../../../../moves/moveHandlers/index.js";

function WfPrime() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentZRotation = useCubiesStore((state) => state.currentZRotation);
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );
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
        handlef({
          cubies,
          setCubies,
          currentZRotation,
          setCurrentZRotation,
          prime,
          setPrime,
          setButtonsDisabled
        });
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      f'
    </button>
  );
}

export default WfPrime;
