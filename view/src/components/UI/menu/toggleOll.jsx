import React, { useEffect, useState } from "react";
import "./menu.css";
import {
  setTwoLookOll,
  getTwoLookOll
} from "../../../../../model/store/solveStore";

function ToggleOll() {
  const [twoLook, setTwoLook] = useState(getTwoLookOll());

  useEffect(() => {
    // keep local state in sync if something else changes the store
    setTwoLook(getTwoLookOll());
  }, []);

  const toggle = () => {
    const next = !twoLook;
    setTwoLookOll(next);
    setTwoLook(next);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={twoLook}
        onChange={() => toggle()}
        aria-label="Toggle OLL mode"
      />
      <span className="slider" />
      <span className="labelText">
        OLL: {twoLook ? "Two-Look" : "One-Look"}
      </span>
    </label>
  );
}

export default ToggleOll;
