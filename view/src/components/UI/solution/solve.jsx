import React from "react";
import useScrambleStore from "../../../store/applicationStore";

function Solve() {
  const isScrambling = useScrambleStore((state) => state.isScrambling);
  const isSolving = useScrambleStore((state) => state.isSolving);
  const isFreePlay = useScrambleStore((state) => state.isFreePlay);
  const disabled = isSolving || isScrambling || isFreePlay;
  const handleClick = () => {
    console.log("Solving...");
  };
  return (
    <button
      className="h-[5%]"
      disabled={disabled}
      onClick={() => handleClick()}
    >
      Solve
    </button>
  );
}

export default Solve;
