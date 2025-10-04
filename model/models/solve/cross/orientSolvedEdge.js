import { u } from "../../moves/wide/index.js";
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
          const pair = edgePairs[`down[${i}][${j}]`];
          console.log("Pair:", pair);
          console.log(
            "edge piece already solved",
            colour,
            cube[pair.face][pair.row][pair.col]
          );
          if (cube[pair.face][2][1] === cube[pair.face][1][1]) {
            console.log("edge piece oriented correctly");
          } else if (cube[pair.face][2][1] === u(true, cube)[pair.face][1][1]) {
            console.log("do D move");
            setTempCrossSolution([...getTempCrossSolution(), "D"]);
          } else if (
            cube[pair.face][2][1] === u(false, cube)[pair.face][1][1]
          ) {
            console.log("do D' move");
            setTempCrossSolution([...getTempCrossSolution(), "D'"]);
          } else {
            console.log("do D2 move");
            setTempCrossSolution([...getTempCrossSolution(), "D2"]);
          }
          found = true;
        }
      }
    }
  }
};

export default orientSolvedEdge;
