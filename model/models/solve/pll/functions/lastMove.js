import {
  getSolutionCrossColour,
  getPllSolution,
  setPllSolution
} from "../../../../store/solveStore.js";

import { U } from "../../../moves/turns/index.js";

const lastMove = (cube) => {
  ("AUF");
  let tempCube = cube;

  switch (tempCube["front"][1][1]) {
    case tempCube["right"][0][1]:
      setPllSolution([...getPllSolution(), "U"]);
      tempCube = U(true, tempCube);
      break;
    case tempCube["back"][0][1]:
      setPllSolution([...getPllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
      break;
    case tempCube["left"][0][1]:
      setPllSolution([...getPllSolution(), "U'"]);
      tempCube = U(false, tempCube);
      break;
    case tempCube["front"][0][1]:
      break;
    default:
      break;
  }

  return tempCube;
};

export default lastMove;
