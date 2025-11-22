import React from "react";
import generateScramble from "../../../../../model/models/scramble/generateScramble";
import {
  setScramble,
  setScrambling
} from "../../../../../global/store/globalStore";
import formatAlg from "../../../../../model/models/formatAlg.js";
import useApplicationStore from "../../../store/applicationStore";
import executeScramble from "../../../functions/executeScramble.js";
import useCubiesStore from "../../../store/cubiesStore";
import { getCube } from "../../../../../model/store/cubeStore";

function ScrambleButton(props) {
  const setScramble = useApplicationStore((state) => state.setScramble);
  const setMass = useCubiesStore((state) => state.setMass);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );
  const handleClick = (props) => {
    setMass(0);
    if (props.type === "generate") {
      const newScramble = generateScramble(25);
      setScramble(newScramble);
      setButtonsDisabled(true);
      executeScramble(newScramble);
    } else {
      const newScramble = (props.inputValue || "").trim();
      if (!newScramble) return console.log("no scramble entered");
      setScramble(newScramble);
      setButtonsDisabled(true);
      executeScramble(formatAlg(newScramble));
    }
  };
  return (
    <button
      className="scramblebutton"
      onClick={() => {
        handleClick(props);
      }}
      disabled={buttonsDisabled}
    >
      {props.text}
    </button>
  );
}

export default ScrambleButton;
