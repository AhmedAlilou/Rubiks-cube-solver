import { F, R, B, L, U } from "../../../moves/turns/index.js";
import edgePairs from "../../../helperFunctions/edgePairs";
import {
  setTempCrossSolution,
  getTempCrossSolution
} from "../../../../store/solveStore.js";

const top = (cube, row, col) => {
  switch ((row, col)) {
    case (0, 1):
      console.log(cube);
      if (cube.front[0][1] === cube.front[1][1]) {
        setTempCrossSolution([...getTempCrossSolution(), "F2"]);
        console.log("DOING NOW", cube, row, col);
        return F(true, F(true, cube));
      } else if (cube.front[0][1] === cube.right[1][1]) {
        console.log("DOING NOW", cube, row, col);
        setTempCrossSolution([...getTempCrossSolution(), "U'", "R2"]);
        return R(true, R(true, U(false, cube)));
      } else if (cube.front[0][1] === cube.back[1][1]) {
        console.log("DOING NOW", cube, row, col);
        setTempCrossSolution([...getTempCrossSolution(), "U2", "B2"]);
        return B(true, B(true, U(true, U(true, cube))));
      } else if (cube.front[0][1] === cube.left[1][1]) {
        console.log("DOING NOW", cube, row, col);
        setTempCrossSolution([...getTempCrossSolution(), "U", "L2"]);
        return L(true, L(true, U(false, cube)));
      }
      break;
    case (1, 0):
    case (1, 2):
    case (2, 1):
  }
};

export default top;
