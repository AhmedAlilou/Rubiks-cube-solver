import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import useApplicationStore from "../../../../store/applicationStore.js";
import controllerb from "../../../../../../controller/cubeMoves/wide/b.js";

function Wb() {
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
        controllerb(
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
      b{double ? "2" : ""}
    </button>
  );
}

export default Wb;
