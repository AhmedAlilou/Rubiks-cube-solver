import React from "react";
import "./menu.css";
import useApplicationStore from "../../../store/applicationStore";

function ToggleAxis() {
  const axisHelper = useApplicationStore((state) => state.axisHelper);
  const setAxisHelper = useApplicationStore((state) => state.setAxisHelper);

  const toggle = () => {
    const next = !axisHelper;
    setAxisHelper(next);
  };
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={axisHelper}
        onChange={() => toggle()}
        aria-label="Toggle Axis helper"
      />
      <span className="slider" />
      <span className="labelText">
        Axis helper: {axisHelper ? "On" : "Off"}
      </span>
    </label>
  );
}

export default ToggleAxis;
