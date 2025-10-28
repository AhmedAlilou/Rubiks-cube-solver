import { u } from "../../moves/wide/index.js";
import { D } from "../../moves/turns/index.js";
import edgePairs from "../../helperFunctions/edgePairs.js";
import { getTempCrossSolution } from "../../../store/solveStore.js";
import { setTempCrossSolution } from "../../../store/solveStore.js";

const orientSolvedEdge = (cube, colour) => {
  let found = false;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if ((i === 1) ^ (j === 1)) {
        // this means its an edge piece
        if (cube.down[i][j] === colour && !found) {
          console.log("BRUV", i, j, colour, cube);
          const pair = edgePairs[`down[${i}][${j}]`];
          if (cube[pair.face][2][1] === cube[pair.face][1][1]) {
          } else if (cube[pair.face][2][1] === u(true, cube)[pair.face][1][1]) {
            setTempCrossSolution([...getTempCrossSolution(), "D"]);
            return D(true, cube);
          } else if (
            cube[pair.face][2][1] === u(false, cube)[pair.face][1][1]
          ) {
            setTempCrossSolution([...getTempCrossSolution(), "D'"]);
            return D(false, cube);
          } else {
            setTempCrossSolution([...getTempCrossSolution(), "D2"]);
            return D(true, D(true, cube));
          }
          found = true;
        }
      }
    }
  }
  return cube;
};

export default orientSolvedEdge;
