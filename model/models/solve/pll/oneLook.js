import { getSolutionCrossColour } from "../../../store/solveStore";
import { setPllSolution, getPllSolution } from "../../../store/solveStore";
import { B, D, F, L, R, U } from "../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../moves/wide/index.js";
import { M, S, E } from "../../moves/slice/index.js";
import { x, y, z } from "../../moves/rotation/index.js";
import colourInfo from "../../helperFunctions/colourInfo";
import formatPll from "./formatPll";
import algs from "./algs";
import cyclicEquality from "./functions/cyclicEquality";

const oneLook = (cube, sideRows) => {
  let tempCube = cube;
  const colour = colourInfo[getSolutionCrossColour()].opposite;
  const formattedSideRows = formatPll(sideRows, colour);
  const letterToMove = {
    F: F,
    U: U,
    R: R,
    L: L,
    D: D,
    r: r,
    l: l,
    S: S,
    M: M,
    x: x,
    y: y
  };
  let moves = [];

  for (const [pllName, pllData] of Object.entries(algs)) {
    const pattern = pllData[0]; // the 2D array
    const alg = pllData[1];

    if (cyclicEquality(formattedSideRows, pattern)[0]) {
      pllName, pattern;
      formattedSideRows;
      moves = alg;
      if (cyclicEquality(formattedSideRows, pattern)[1] === 1) {
        setPllSolution([...getPllSolution(), "U'"]);
        tempCube = U(false, tempCube);
      } else if (cyclicEquality(formattedSideRows, pattern)[1] === 2) {
        setPllSolution([...getPllSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
      } else if (cyclicEquality(formattedSideRows, pattern)[1] === 3) {
        setPllSolution([...getPllSolution(), "U"]);
        tempCube = U(true, tempCube);
      }
    }
  }
  setPllSolution([...getPllSolution(), ...moves]);
  moves.forEach((move) => {
    tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
  });
  return tempCube;
};

export default oneLook;
