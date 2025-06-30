import React from "react";
import "./keypad.css";
import {
  handleFrontTurn,
  handleUpTurn
} from "../../store/helperFunctions/rotationfunctions.js";
import useRotationStore from "../../store/rotationStore.js";

function Keypad() {
  const rotating = useRotationStore((state) => state.rotating);

  return (
    <div className="keypad">
      <button
        className="button"
        onClick={() => handleFrontTurn(true, 1)}
        disabled={rotating}
      >
        F
      </button>
      <button
        className="button"
        onClick={() => handleUpTurn(true, 1)}
        disabled={rotating}
      >
        U
      </button>
      <button className="button" disabled={rotating}>
        R
      </button>
      <button className="button" disabled={rotating}>
        L
      </button>
      <button className="button" disabled={rotating}>
        B
      </button>
      <button className="button" disabled={rotating}>
        D
      </button>
    </div>
  );
}

export default Keypad;
