import React from "react";
import useApplicationStore from "../../../store/applicationStore";
import solveCube from "../../../../../controller/solution/solve";
import { getCube } from "../../../../../model/store/cubeStore";
import useCubiesStore from "../../../store/cubiesStore";
import { FaBackward, FaForward } from "react-icons/fa";

function Solve() {
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const cube = getCube();
  const solverMode = useApplicationStore((s) => s.solverMode);
  const setSolverMode = useApplicationStore((s) => s.setSolverMode);

  const startSolve = async () => {
    // set mode to solving and start the solver
    setSolverMode("solving");
    // on success keep arrows visible by setting 'solved'
    try {
      await solveCube(cube);
      setSolverMode("solved");
    } catch (err) {
      // on failure, revert to idle
      setSolverMode("idle");
      throw err;
    }
  };

  if (solverMode === "solving" || solverMode === "solved") {
    return (
      <div className="navButtons" style={{ display: "flex", gap: "0.5rem" }}>
        <button className="solve" aria-label="back">
          <FaBackward />
        </button>
        <button className="solve" aria-label="forward">
          <FaForward />
        </button>
      </div>
    );
  }

  return (
    <button
      className="solve"
      disabled={buttonsDisabled}
      onClick={() => startSolve()}
    >
      Solve
    </button>
  );
}

export default Solve;
