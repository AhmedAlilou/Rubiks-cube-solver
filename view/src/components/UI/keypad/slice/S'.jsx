import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import useApplicationStore from "../../../../store/applicationStore.js";
import { controllerS } from "../../../../../../controller/cubeMoves/slice/index.js";

function SPrime() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentZRotation = useCubiesStore((state) => state.currentZRotation);
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );
  const double = useCubiesStore((state) => state.double);
  const prime = true;
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const automaticMovesInProgress = useApplicationStore((state) => state.automaticMovesInProgress);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  return (
    <button
      className="button"
      onClick={() => {
        controllerS(
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
          false
        );
      }}
      disabled={buttonsDisabled || automaticMovesInProgress} // Disable the button if buttonsDisabled is true
    >
      S{double ? "2" : ""}'
    </button>
  );
}

export default SPrime;
