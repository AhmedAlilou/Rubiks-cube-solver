import React, { useEffect, useState } from "react";
import Solve from "./solve";
import useApplicationStore from "../../../store/applicationStore";
import {
  getCrossSolution,
  getF2lSolution,
  getOllSolution,
  getPllSolution,
  getSolution,
  getStepPointer,
  getMovePointer,
  subscribeSolveStore
} from "../../../../../model/store/solveStore";

function Solution() {
  const scramble = useApplicationStore((state) => state.scramble);
  const solverMode = useApplicationStore((state) => state.solverMode);

  const [solution, setSolution] = useState(getSolution());
  const [stepPointer, setStepPointer] = useState(getStepPointer());
  const [movePointer, setMovePointer] = useState(getMovePointer());

  useEffect(() => {
    // subscribe to store changes
    const unsub = subscribeSolveStore(() => {
      setSolution(getSolution());
      setStepPointer(getStepPointer());
      setMovePointer(getMovePointer());
    });
    return unsub;
  }, []);

  const flattenMoves = (moves) => {
    if (!Array.isArray(moves)) return [moves];
    return moves.flat ? moves.flat() : [].concat(...moves);
  };

  const renderMoves = (moves, step) => {
    if (!moves || moves.length === 0) return "";

    const isReviewMode = solverMode === "review";
    const flattened = flattenMoves(moves);

    return flattened.map((move, index) => {
      const isCurrentMove =
        isReviewMode && stepPointer === step && movePointer === index;
      return (
        <span
          key={`${step}-${index}`}
          style={isCurrentMove ? { color: "#ef4444", fontWeight: "bold" } : {}}
        >
          {move}{" "}
        </span>
      );
    });
  };

  return (
    <div className="solution">
      <div className="mt-[4%] h-[8%]">Scramble: {scramble}</div>
      <div className="step">Cross: {renderMoves(solution[0], 0)}</div>
      <div className="step">F2L: {renderMoves(solution[1], 1)}</div>
      <div className="step">OLL: {renderMoves(solution[2], 2)}</div>
      <div className="step">PLL: {renderMoves(solution[3], 3)}</div>
      <Solve />
    </div>
  );
}

export default Solution;
