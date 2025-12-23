import React from "react";
import useApplicationStore from "../../../store/applicationStore";
import solveCube from "../../../../../controller/solution/solve";
import { getCube } from "../../../../../model/store/cubeStore";
import useCubiesStore from "../../../store/cubiesStore";

function Solve() {
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const cube = getCube();
  const handleClick = () => {
    solveCube(cube);
  };
  return (
    <button
      className="h-[5%]"
      disabled={buttonsDisabled}
      onClick={() => handleClick()}
    >
      Solve (Most of the time)
    </button>
  );
}

export default Solve;
