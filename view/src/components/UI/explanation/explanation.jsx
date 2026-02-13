import React, { useState, useEffect } from "react";
import "../UI.css";
import Overview from "./overview";
import {
  getCrossSolution,
  getF2lSolution,
  getOllSolution,
  getPllSolution,
  subscribeSolveStore
} from "../../../../../model/store/solveStore.js";

function Explanation() {
  const [solveData, setSolveData] = useState({
    crossLength: 0,
    f2lLength: 0,
    ollLength: 0,
    pllLength: 0
  });

  useEffect(() => {
    const updateSolveData = () => {
      const crossLength = getCrossSolution()?.length || 0;
      const f2lLength = getF2lSolution()?.length || 0;
      const ollLength = getOllSolution()?.length || 0;
      const pllLength = getPllSolution()?.length || 0;

      setSolveData({ crossLength, f2lLength, ollLength, pllLength });

      console.log(
        "Cross:",
        crossLength,
        "F2L:",
        f2lLength,
        "OLL:",
        ollLength,
        "PLL:",
        pllLength
      );
    };

    // Subscribe to store changes
    const unsubscribe = subscribeSolveStore(updateSolveData);

    // Initial call
    updateSolveData();

    // Cleanup subscription
    return unsubscribe;
  }, []);

  const isSolveComplete =
    solveData.crossLength > 0 &&
    solveData.f2lLength > 0 &&
    solveData.ollLength > 0 &&
    solveData.pllLength > 0;

  return (
    <div className="explanation">
      Explanation
      {isSolveComplete && (
        <Overview
          crossLength={solveData.crossLength}
          f2lLength={solveData.f2lLength}
          ollLength={solveData.ollLength}
          pllLength={solveData.pllLength}
        />
      )}
    </div>
  );
}

export default Explanation;
