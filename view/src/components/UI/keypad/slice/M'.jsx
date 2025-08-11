import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handleM } from "../../../../moves/moveHandlers/index.js";

function MPrime() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentXRotation = useCubiesStore((state) => state.currentXRotation);
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
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
        handleM({
          cubies,
          setCubies,
          currentXRotation,
          setCurrentXRotation,
          prime,
          setPrime,
          setButtonsDisabled
        });
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      M'
    </button>
  );
}

export default MPrime;
