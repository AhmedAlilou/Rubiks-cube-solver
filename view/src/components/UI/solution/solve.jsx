import React from "react";
import useScrambleStore from "../../../store/applicationStore";
import solveCube from "../../../../../controller/solution/solve";
import { getCube } from "../../../../../model/store/cubeStore";

function Solve() {
  const cube = getCube();
  const isScrambling = useScrambleStore((state) => state.isScrambling);
  const isSolving = useScrambleStore((state) => state.isSolving);
  const isFreePlay = useScrambleStore((state) => state.isFreePlay);
  const disabled = isSolving || isScrambling || isFreePlay;
  const handleClick = () => {
    console.log("Solving...");
    solveCube(cube);
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
