import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import controlleru from "../../../../../../controller/cubeMoves/wide/u.js";

function Wu() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentYRotation = useCubiesStore((state) => state.currentYRotation);
  const setCurrentYRotation = useCubiesStore(
    (state) => state.setCurrentYRotation
  );
  const double = useCubiesStore((state) => state.double);
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
        controlleru(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            prime,
            double,
            setPrime,
            setButtonsDisabled,
            automated: false,
            isUndo: false
          },
          true
        );
        "Current Rotation:", currentYRotation;
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      u{double ? "2" : ""}
    </button>
  );
}

export default Wu;
