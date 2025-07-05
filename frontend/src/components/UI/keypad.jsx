import React from "react";
import "./keypad.css";
import {
  handleFrontTurn,
  handleUpTurn
} from "../../functions/rotationfunctions.js";
import useRotationStore from "../../store/rotationStore.js";
import F from "../../../../logic/models/rotation/F.js";
import U from "../../../../logic/models/rotation/U.js";
import D from "../../../../logic/models/rotation/D.js";
import B from "../../../../logic/models/rotation/B.js";
import L from "../../../../logic/models/rotation/L.js";
import R from "../../../../logic/models/rotation/R.js";

function Keypad() {
  const rotating = useRotationStore((state) => state.rotating);

  return (
    <div className="keypad">
      <button
        className="button"
        onClick={() => {
          handleFrontTurn(true, 1);
          F(true);
        }}
        disabled={rotating}
      >
        F
      </button>
      <button
        className="button"
        onClick={() => {
          handleUpTurn(true, 1);
          U(true);
        }}
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
