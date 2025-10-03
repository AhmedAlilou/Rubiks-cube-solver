import React from "react";
import "../../UI.css";
import useCubiesStore from "../../../../store/cubiesStore.js";
import controllerf from "../../../../../../controller/cubeMoves/wide/f.js";

function Wf() {
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
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );

  return (
    <button
      className="button"
      onClick={() => {
        controllerf(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            prime,
            double,
            setPrime,
            setButtonsDisabled
          },
          true
        );
      }}
      disabled={buttonsDisabled} // Disable the button if buttonsDisabled is true
    >
      f{double ? "2" : ""}
    </button>
  );
}

export default Wf;
