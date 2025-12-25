import React, { useEffect, useState } from "react";
import "./menu.css";
import {
  setTwoLookPll,
  getTwoLookPll
} from "../../../../../model/store/solveStore";

function TogglePll() {
  const [twoLook, setTwoLook] = useState(getTwoLookPll());

  useEffect(() => {
    setTwoLook(getTwoLookPll());
  }, []);

  const toggle = () => {
    const next = !twoLook;
    setTwoLookPll(next);
    setTwoLook(next);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={twoLook}
        onChange={() => toggle()}
        aria-label="Toggle PLL mode"
      />
      <span className="slider" />
      <span className="labelText">
        PLL: {twoLook ? "Two-Look" : "One-Look"}
      </span>
    </label>
  );
}

export default TogglePll;
