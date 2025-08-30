import React from "react";
import useScrambleStore from "../../../store/scrambleStore";

function ScrambleButton(props) {
  const generateScramble = useScrambleStore((state) => state.generateScramble);
  const handleClick = (props) => {
    if (props.type === "generate") {
      generateScramble(20);
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
