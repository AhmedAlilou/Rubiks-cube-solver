import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { getOllSolution, setOllSolution } from "../../../../store/solveStore";

const hook = (cube, colour) => {
  let tempCube = cube;
  switch (colour + colour) {
    case tempCube["top"][0][1] + tempCube["top"][1][2]:
      setOllSolution(["U'"]);
      tempCube = U(false, tempCube);
      break;
    case tempCube["top"][2][1] + tempCube["top"][1][2]:
      setOllSolution(["U2"]);
      tempCube = U(true, U(true, tempCube));
      break;
    case tempCube["top"][2][1] + tempCube["top"][1][0]:
      setOllSolution(["U"]);
      tempCube = U(true, tempCube);
      break;
    default:
      break;
  }
  setOllSolution([...getOllSolution(), "F", "U", "R", "U'", "R'", "F'"]);
  tempCube = F(false, R(false, U(false, R(true, U(true, F(true, tempCube))))));

  ("HOOK");
  return tempCube;
};

export default hook;
