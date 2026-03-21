import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import useApplicationStore from "../../../../store/applicationStore.js";
import controllerF from "../../../../../../controller/cubeMoves/regular/F.js";

function F() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentZRotation = useCubiesStore((state) => state.currentZRotation);
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );
  const double = useCubiesStore((state) => state.double);
  const prime = false;
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const automaticMovesInProgress = useApplicationStore(
    (state) => state.automaticMovesInProgress
  );
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  return (
    <button
      className="button"
      onClick={() => {
        controllerF(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double,
            prime,
            setPrime,
            setButtonsDisabled,
            automated: false,
            isUndo: false
          },
          true
        );
      }}
      disabled={buttonsDisabled || automaticMovesInProgress} // Disable the button if buttonsDisabled is true
    >
      F{double ? "2" : ""}
    </button>
  );
}

export default F;
