import React from "react";
import useApplicationStore from "../../../store/applicationStore";
import solveCube from "../../../../../controller/solution/solve";
import { getCube } from "../../../../../model/store/cubeStore";

function Solve() {
  const cube = getCube();
  const isScrambling = useApplicationStore((state) => state.isScrambling);
  const isSolving = useApplicationStore((state) => state.isSolving);
  const isFreePlay = useApplicationStore((state) => state.isFreePlay);
  const disabled = isSolving || isScrambling || isFreePlay;
  const handleClick = () => {
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
