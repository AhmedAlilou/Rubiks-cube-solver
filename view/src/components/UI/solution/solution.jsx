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
import jumpToMove from "./jumpToMove";

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

  const handleMoveClick = (step, moveIndex) => {
    if (solverMode === "review") {
      jumpToMove(step, moveIndex);
    }
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
          onClick={() => handleMoveClick(step, index)}
          style={{
            color: isCurrentMove ? "#ef4444" : "#d1d5db",
            fontWeight: isCurrentMove ? "bold" : "normal",
            cursor: isReviewMode ? "pointer" : "default",
            transition: "color 0.18s ease"
          }}
          onMouseEnter={(e) => {
            if (isReviewMode && !isCurrentMove) {
              e.currentTarget.style.color = "#f3f4f6";
            }
          }}
          onMouseLeave={(e) => {
            if (isReviewMode && !isCurrentMove) {
              e.currentTarget.style.color = "#d1d5db";
            }
          }}
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
