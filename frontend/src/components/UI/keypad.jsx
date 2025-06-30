import React from "react";
import "./keypad.css";
import {
  handleFrontTurn,
  handleUpTurn
} from "../../store/helperFunctions/rotationfunctions.js";

function Keypad() {
  return (
    <div className="keypad">
      <button className="button" onClick={() => handleFrontTurn(true, 1)}>
        F
      </button>
      <button className="button" onClick={() => handleUpTurn(true, 1)}>
        U
      </button>
      <button className="button">R</button>
      <button className="button">L</button>
      <button className="button">B</button>
      <button className="button">D</button>
    </div>
  );
}

export default Keypad;
