import React, { useState, useEffect } from "react";
import "../UI.css";
import Overview from "./overview";
import useApplicationStore from "../../../store/applicationStore";
import {
  getCrossSolution,
  getF2lSolution,
  getOllSolution,
  getPllSolution,
  subscribeSolveStore
} from "../../../../../model/store/solveStore.js";
import Reset from "./reset.jsx";

function Explanation() {
  const solverMode = useApplicationStore((state) => state.solverMode);

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
    };

    const unsubscribe = subscribeSolveStore(updateSolveData);

    updateSolveData();

    return unsubscribe;
  }, []);

  const isSolveComplete =
    solveData.crossLength > 0 &&
    solveData.f2lLength > 0 &&
    solveData.ollLength > 0 &&
    solveData.pllLength > 0;

  return (
    <div className="explanation">
      Review
      <div className="explanationContent">
        {isSolveComplete && (
          <Overview
            crossLength={solveData.crossLength}
            f2lLength={solveData.f2lLength}
            ollLength={solveData.ollLength}
            pllLength={solveData.pllLength}
          />
        )}
        {solverMode === "review" && <Reset solverMode={solverMode} />}
      </div>
    </div>
  );
}

export default Explanation;
