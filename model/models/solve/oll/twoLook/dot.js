import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { setOllSolution } from "../../../../store/solveStore";

const dot = (cube) => {
  let tempCube = cube;
  setOllSolution(["F", "R", "U", "R'", "U'", "S", "R", "U", "R'", "U'", "f'"]);
  tempCube = f(
    false,
    U(
      false,
      R(
        false,
        U(
          true,
          R(
            true,
            S(true, U(false, R(false, U(true, R(true, F(true, tempCube))))))
          )
        )
      )
    )
  );

  ("DOT");
  return tempCube;
};

export default dot;
