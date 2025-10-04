import React from "react";
import generateScramble from "../../../../../model/models/scramble/generateScramble";
import {
  setScramble,
  setScrambling
} from "../../../../../global/store/globalStore";
import useApplicationStore from "../../../store/applicationStore";
import executeScramble from "../../../functions/executeScramble.js";
import useCubiesStore from "../../../store/cubiesStore";
import { getCube } from "../../../../../model/store/cubeStore";

function ScrambleButton(props) {
  const setScramble = useApplicationStore((state) => state.setScramble);
  const setIsScrambling = useApplicationStore((state) => state.setIsScrambling);
  const setIsFreePlay = useApplicationStore((state) => state.setIsFreePlay);
  const setMass = useCubiesStore((state) => state.setMass);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );
  const handleClick = (props) => {
    if (props.type === "generate") {
      setIsScrambling(true);
      setIsFreePlay(false);
      setMass(0);
      const newScramble = generateScramble(25);
      setScramble(newScramble);
      setButtonsDisabled(true);
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
      disabled={buttonsDisabled}
    >
      {props.text}
    </button>
  );
}

export default ScrambleButton;
