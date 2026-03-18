import generateScramble from "../../../../../model/models/scramble/generateScramble";
import formatAlg from "../../../../../model/models/formatAlg.js";
import useApplicationStore from "../../../store/applicationStore";
import executeScramble from "../../../functions/executeScramble.js";
import useCubiesStore from "../../../store/cubiesStore";

function ScrambleButton(props) {
  const setScramble = useApplicationStore((state) => state.setScramble);
  const scrambleLength = useApplicationStore((state) => state.scrambleLength);
  const automaticMovesInProgress = useApplicationStore(
    (state) => state.automaticMovesInProgress
  );
  const setMass = useCubiesStore((state) => state.setMass);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );
  const handleClick = (props) => {
    setMass(0);
    if (props.type === "generate") {
      const newScramble = generateScramble(scrambleLength);
      setScramble(newScramble);
      setButtonsDisabled(true);
      executeScramble(newScramble);
    } else {
      const newScramble = (props.inputValue || "").trim();
      if (!newScramble) return "no scramble entered";
      setScramble(newScramble);
      setButtonsDisabled(true);
      executeScramble(formatAlg(newScramble));
    }
  };
  return (
    <button
      className="scramblebutton h-[4vh]"
      onClick={() => {
        handleClick(props);
      }}
      disabled={buttonsDisabled || automaticMovesInProgress}
    >
      {props.text}
    </button>
  );
}

export default ScrambleButton;
