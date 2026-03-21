import React from "react";
import useCubiesStore from "../../../store/cubiesStore.js";
import useApplicationStore from "../../../store/applicationStore.js";

function Toggle() {
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const automaticMovesInProgress = useApplicationStore(
    (state) => state.automaticMovesInProgress
  );
  const double = useCubiesStore((state) => state.double);
  const setDouble = useCubiesStore((state) => state.setDouble);
  return (
    <button
      className="toggle"
      onClick={() => {
        setDouble(!double);
      }}
      disabled={buttonsDisabled || automaticMovesInProgress}
    >
      2x
    </button>
  );
}

export default Toggle;
