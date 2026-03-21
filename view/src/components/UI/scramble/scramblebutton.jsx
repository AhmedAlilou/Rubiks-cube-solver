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

      const sequence = formatAlg(newScramble).filter((s) => s && s.trim());

      const allowedStarters = new Set([
        "B",
        "D",
        "F",
        "L",
        "R",
        "U",
        "x",
        "y",
        "z",
        "M",
        "E",
        "S",
        "b",
        "d",
        "f",
        "l",
        "r",
        "u"
      ]);

      for (const token of sequence) {
        const starter = token[0];
        if (!allowedStarters.has(starter)) {
          window.alert(`Unknown move: "${token}"`);
          if (props.setInputValue) props.setInputValue("");
          return;
        }
      }

      setScramble(newScramble);
      setButtonsDisabled(true);
      executeScramble(sequence);
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
