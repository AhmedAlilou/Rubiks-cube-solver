import { x, y, z } from "../../moves/rotation/index.js";
import { M, S, E } from "../../moves/slice/index.js";
import { R, L, U, D, F, B } from "../../moves/turns/index.js";
import { r, l, u, d, f, b } from "../../moves/wide/index.js";
import {
  getCrossColours,
  getTempCrossSolution,
  setTempCrossSolution
} from "../../../store/solveStore.js";
import { getCube } from "../../../store/cubeStore.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import edgePairs from "../../helperFunctions/edgePairs.js";
import execute from "../../execute.js";

import rotateFaceToBottom from "../cross/rotateFaceToBottom.js";
import orientSolvedEdge from "../cross/orientSolvedEdge.js";
import { getCrossSolution } from "../../../store/solveStore.js";
import { setCrossSolution } from "../../../store/solveStore.js";

const cross = (cube) => {
  let tempCube = getCube();
  let tempCrossSolutionLength = 0;
  let crossSolutionLength = 1000;
  const setTempCube = (newCube) => {
    tempCube = newCube;
  };
  let crossColours = getCrossColours();
  crossColours.map((colour) => {
    // for each cross colour
    console.log("doing:", colour, "cross");
    setTempCube(cube); // reset tempCube to current cube state
    tempCube = rotateFaceToBottom(tempCube, colour); // rotate face that needs cross to bottom
    // check for edge pieces of cross colour that are solved
    orientSolvedEdge(tempCube, colour); // orient solved pieces correctly

    // for each edge piece in array:
    // locate edge piece
    // find where it needs to go
    // move it there
    tempCrossSolutionLength = 0;
    for (let i = 0; i < getTempCrossSolution().length; i++) {
      let move = getTempCrossSolution()[i];
      if (
        move === "x" ||
        move === "x'" ||
        move === "x2" ||
        move === "y" ||
        move === "y'" ||
        move === "y2" ||
        move === "z" ||
        move === "z'" ||
        move === "z2"
      ) {
        console.log("ROTATION");
      } else {
        tempCrossSolutionLength += 1;
        console.log("ignoring", move);
      }
    }
    if (tempCrossSolutionLength < crossSolutionLength) {
      setCrossSolution(getTempCrossSolution());
      crossSolutionLength = tempCrossSolutionLength;
    }

    console.log("Temp length:", tempCrossSolutionLength, colour);
    console.log("TEMP SOLUTION:", getTempCrossSolution());
    setTempCrossSolution([]);
  });
  console.log("Cross done, executing these moves: ", getCrossSolution());
  execute(getCrossSolution());
};

export default cross;
