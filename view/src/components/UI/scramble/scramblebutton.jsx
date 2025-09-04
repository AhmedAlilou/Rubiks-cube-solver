import React from "react";
import generateScramble from "../../../../../model/models/scramble/generateScramble";
import {
  getScramble,
  setScramble,
  setScrambling
} from "../../../../../global/store/globalStore";
import execute from "../../../functions/execute";

function ScrambleButton(props) {
  const handleClick = (props) => {
    if (props.type === "generate") {
      setScrambling(true);
      const newScramble = generateScramble(20);
      setScramble(newScramble);

      execute(newScramble);
      setScrambling(false);
    }
  };
  return (
    <button
      className="scramblebutton"
      onClick={() => {
        handleClick(props);
      }}
    >
      {props.text}
    </button>
  );
}

export default ScrambleButton;
