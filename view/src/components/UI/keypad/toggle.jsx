import React from "react";
import useCubiesStore from "../../../store/cubiesStore.js";

function Toggle() {
  const disabled = useCubiesStore((state) => state.disabled);
  const double = useCubiesStore((state) => state.double);
  const setDouble = useCubiesStore((state) => state.setDouble);
  return (
    <button
      className="toggle"
      onClick={() => {
        setDouble(!double);
      }}
      disabled={disabled}
    >
      Toggle double
    </button>
  );
}

export default Toggle;
