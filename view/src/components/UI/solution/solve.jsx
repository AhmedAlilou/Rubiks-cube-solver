import React from "react";
import useApplicationStore from "../../../store/applicationStore";
import solveCube from "../../../../../controller/solution/solve";
import { getCube } from "../../../../../model/store/cubeStore";
import {
  getSolution,
  getStepPointer,
  setStepPointer,
  getMovePointer,
  setMovePointer
} from "../../../../../model/store/solveStore.js";
import useCubiesStore from "../../../store/cubiesStore";
import { FaBackward, FaForward, FaUndo } from "react-icons/fa";
import "../UI.css";
import backward from "./backward";
import forward from "./forward";

function Solve() {
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const cube = getCube();
  const solverMode = useApplicationStore((s) => s.solverMode);
  const setSolverMode = useApplicationStore((s) => s.setSolverMode);

  const startSolve = async () => {
    setSolverMode("solving");
    try {
      await solveCube(cube);
      setSolverMode("review");
    } catch (err) {
      setSolverMode("idle");
      throw err;
    }
  };

  if (solverMode === "solving" || solverMode === "review") {
    return (
      <div className="navButtons">
        <button
          className="reviewButton"
          aria-label="return-to-start"
          disabled={solverMode !== "review"}
        >
          <FaUndo />
        </button>
        <button
          className="reviewButton"
          aria-label="back"
          disabled={
            solverMode !== "review" ||
            (getStepPointer() === 0 && getMovePointer() === 0)
          }
          onClick={() => {
            backward();
          }}
        >
          <FaBackward />
        </button>
        <button
          className="reviewButton"
          aria-label="forward"
          disabled={
            solverMode !== "review" ||
            (getStepPointer() === 3 &&
              getMovePointer() === getSolution()[3].length)
          }
          onClick={() => {
            forward();
          }}
        >
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
