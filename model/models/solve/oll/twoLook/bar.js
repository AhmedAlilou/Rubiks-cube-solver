import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { getOllSolution, setOllSolution } from "../../../../store/solveStore";

const dot = (cube, colour) => {
  let tempCube = cube;
  if (tempCube["top"][0][1] === colour) {
    setOllSolution["U"];
    tempCube = U(true, tempCube);
  }
  setOllSolution([...getOllSolution(), "F", "R", "U", "R'", "U'", "F'"]);
  tempCube = F(false, U(false, R(false, U(true, R(true, F(true, tempCube))))));

  console.log("BAR");
  return tempCube;
};

export default dot;
