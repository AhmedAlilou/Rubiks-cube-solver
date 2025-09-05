import React from "react";
import generateScramble from "../../../../../model/models/scramble/generateScramble";
import {
  setScramble,
  setScrambling
} from "../../../../../global/store/globalStore";
import useScrambleStore from "../../../store/scrambleStore";
import execute from "../../../functions/execute";
import useCubiesStore from "../../../store/cubiesStore";

function ScrambleButton(props) {
  const setIsScrambling = useScrambleStore((state) => state.setIsScrambling);
  const setMass = useCubiesStore((state) => state.setMass);
  const handleClick = (props) => {
    if (props.type === "generate") {
      setIsScrambling(true);
      setMass(0);
      const newScramble = generateScramble(20);
      setScramble(newScramble);

      execute(newScramble);
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
