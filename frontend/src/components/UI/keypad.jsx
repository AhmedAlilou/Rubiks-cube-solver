import React from "react";
import "./keypad.css";
import F from "../../../../logic/models/rotation/F.js";
import U from "../../../../logic/models/rotation/U.js";
import D from "../../../../logic/models/rotation/D.js";
import B from "../../../../logic/models/rotation/B.js";
import L from "../../../../logic/models/rotation/L.js";
import R from "../../../../logic/models/rotation/R.js";

function Keypad() {
  return (
    <div className="keypad">
      <button className="button">F</button>
      <button className="button">U</button>
      <button className="button">R</button>
      <button className="button">L</button>
      <button className="button">B</button>
      <button className="button">D</button>
    </div>
  );
}

export default Keypad;
