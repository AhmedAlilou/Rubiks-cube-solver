import React from "react";
import generateScramble from "../../../../../model/models/scramble/generateScramble";
import {
  setScramble,
  setScrambling
} from "../../../../../global/store/globalStore";
import useScrambleStore from "../../../store/applicationStore";
import executeScramble from "../../../functions/executeScramble.js";
import useCubiesStore from "../../../store/cubiesStore";
import { getCube } from "../../../../../model/store/cubeStore";

function ScrambleButton(props) {
  const setScramble = useScrambleStore((state) => state.setScramble);
  const isScrambling = useScrambleStore((state) => state.isScrambling);
  const setIsScrambling = useScrambleStore((state) => state.setIsScrambling);
  const setIsFreePlay = useScrambleStore((state) => state.setIsFreePlay);
  const setMass = useCubiesStore((state) => state.setMass);
  const handleClick = (props) => {
    if (props.type === "generate") {
      setIsScrambling(true);
      setIsFreePlay(false);
      setMass(0);
      const newScramble = generateScramble(25);
      setScramble(newScramble);

      executeScramble(newScramble);
    }
    setTimeout(() => {
      setIsScrambling(false);
    }, 3000);
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
