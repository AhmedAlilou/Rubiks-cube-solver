import {
  getCrossColours,
  getTempCrossSolution,
  setTempCrossSolution,
  getCrossSolution,
  setCrossSolution,
  setSolutionCrossColour
} from "../../../store/solveStore.js";
import { getCube } from "../../../store/cubeStore.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import edgePairs from "../../helperFunctions/edgePairs.js";
import execute from "../../execute.js";

import rotateFaceToBottom from "./rotateFaceToBottom.js";
import orientSolvedEdge from "./orientSolvedEdge.js";
import finishCross from "./finishCross.js";
import countSolvedPieces from "./countSolvedPieces.js";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition.js";
import finishCross from "./finishCross.js";

const cross = async (cube) => {
  console.log("THE SCRAMBLED CUBE:", cube);
  let tempCube = getCube();
  let tempCrossSolutionLength = 0;
  let crossSolutionLength = 1000;
  const setTempCube = (newCube) => {
    tempCube = newCube;
  };
  let crossColours = getCrossColours();
  crossColours.map((colour) => {
    // for each cross colour
    setTempCube(cube); // reset tempCube to current cube state
    tempCube = rotateFaceToBottom(tempCube, colour); // rotate face that needs cross to bottom
    tempCube = orientSolvedEdge(tempCube, colour);
    countSolvedPieces(tempCube, colour);
    tempCube = finishCross(tempCube, colour);

    // for each edge piece in array:
    // locate edge piece
    // find where it needs to go
    // move it there
    tempCrossSolutionLength = 0;
    for (let i = 0; i < getTempCrossSolution().length; i++) {
      const move = getTempCrossSolution()[i];
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
      } else {
        tempCrossSolutionLength += 1;
      }
    }
    if (tempCrossSolutionLength < crossSolutionLength) {
      setCrossSolution(getTempCrossSolution());
      crossSolutionLength = tempCrossSolutionLength;
      setSolutionCrossColour(colour);
    }
    setTempCrossSolution([]);
  });
  console.log(getCrossSolution());
  await execute(getCrossSolution());
};

export default cross;
