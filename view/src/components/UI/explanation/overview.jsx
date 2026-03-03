import React, { useState, useEffect } from "react";
import {
  getStepPointer,
  subscribeSolveStore
} from "../../../../../model/store/solveStore.js";

function Overview({ crossLength, f2lLength, ollLength, pllLength }) {
  const totalMoves = crossLength + f2lLength + ollLength + pllLength;
  const [stepPointer, setStepPointer] = useState(getStepPointer());

  useEffect(() => {
    // Subscribe to store changes to update step pointer
    const unsubscribe = subscribeSolveStore(() => {
      setStepPointer(getStepPointer());
    });
    return unsubscribe;
  }, []);

  const getStepStyle = (step) => {
    return stepPointer === step ? { color: "#ef4444", fontWeight: "bold" } : {};
  };

  if (totalMoves === 0) {
    return <div>No solve data available</div>;
  }

  return (
    <div className="overview">
      <p style={getStepStyle(0)}>Cross: {crossLength} moves</p>
      <p style={getStepStyle(1)}>F2L: {f2lLength} moves</p>
      <p style={getStepStyle(2)}>OLL: {ollLength} moves</p>
      <p style={getStepStyle(3)}>PLL: {pllLength} moves</p>
      <p className="overviewTotal">
        <strong>Total: {totalMoves} moves</strong>
      </p>
    </div>
  );
}

export default Overview;
