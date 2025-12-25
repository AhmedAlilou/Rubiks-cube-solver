import React, { useEffect, useState } from "react";
import Solve from "./solve";
import useApplicationStore from "../../../store/applicationStore";
import {
  getCrossSolution,
  getF2lSolution,
  getOllSolution,
  getPllSolution,
  subscribeSolveStore
} from "../../../../../model/store/solveStore";

function Solution() {
  const scramble = useApplicationStore((state) => state.scramble);

  const [cross, setCross] = useState(getCrossSolution());
  const [f2l, setF2l] = useState(getF2lSolution());
  const [oll, setOll] = useState(getOllSolution());
  const [pll, setPll] = useState(getPllSolution());

  useEffect(() => {
    // subscribe to store changes
    const unsub = subscribeSolveStore(() => {
      setCross(getCrossSolution());
      setF2l(getF2lSolution());
      setOll(getOllSolution());
      setPll(getPllSolution());
    });
    return unsub;
  }, []);

  const renderMoves = (moves) => {
    if (!moves) return "";
    if (Array.isArray(moves)) {
      // flatten nested arrays (f2l might be nested)
      const flattened = moves.flat ? moves.flat() : [].concat(...moves);
      return flattened.join(" ");
    }
    return String(moves);
  };

  return (
    <div className="solution flex flex-col">
      <div className="mt-[4%] h-[15%]">Scramble: {scramble}</div>
      <div>Cross: {renderMoves(cross)}</div>
      <div>F2L: {renderMoves(f2l)}</div>
      <div>OLL: {renderMoves(oll)}</div>
      <div>PLL: {renderMoves(pll)}</div>
      <Solve />
    </div>
  );
}

export default Solution;
