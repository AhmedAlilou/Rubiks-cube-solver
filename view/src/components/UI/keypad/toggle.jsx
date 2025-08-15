import React from "react";
import useCubiesStore from "../../../store/cubiesStore.js";

function Toggle() {
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const double = useCubiesStore((state) => state.double);
  const setDouble = useCubiesStore((state) => state.setDouble);
  return (
    <button
      className="toggle"
      onClick={() => {
        setDouble(!double);
      }}
      disabled={buttonsDisabled}
    >
      Toggle double
    </button>
  );
}

export default Toggle;
