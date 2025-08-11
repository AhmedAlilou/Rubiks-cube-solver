import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import { handleR } from "../../../../moves/moveHandlers/index.js";

function R() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentXRotation = useCubiesStore((state) => state.currentXRotation);
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  );
  const prime = false;
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  return (
    <button
      className="button"
      onClick={() => {
        handleR({
          cubies,
          setCubies,
          currentXRotation,
          setCurrentXRotation,
          prime,
          setPrime,
          setButtonsDisabled
        });
        console.log("Current Rotation:", currentXRotation);
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      R
    </button>
  );
}

export default R;
