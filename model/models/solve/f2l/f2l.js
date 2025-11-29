import {
  getF2lSolution,
  setF2lSolution,
  getTempF2lSolution,
  setTempF2lSolution,
  getSolutionCrossColour
} from "../../../store/solveStore";
import colourInfo from "../../helperFunctions/colourInfo";
import returnSolvedPairs from "./functions/returnSolvedPairs";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition";
import returnCornerPosition from "../../helperFunctions/returnCornerPosition";
import identifyCase from "./identifyCase";
import execute from "../../execute.js";
import { getCube } from "../../../store/cubeStore";

const f2l = async (cube) => {
  let tempCube = cube;
  console.log("F2L");

  let crossColour = getSolutionCrossColour();
  console.log(crossColour);
  let pairs = colourInfo[crossColour].adjacent;
  pairs = [
    [pairs[0], pairs[1]],
    [pairs[3], pairs[0]],
    [pairs[1], pairs[2]],
    [pairs[2], pairs[3]] // in the order from left to right / anticlockwise looking from above
  ];
  // return solved pairs with a function that checks for any
  const solvedPairs = returnSolvedPairs(tempCube);
  // filter out the solved pairs from the list
  pairs = pairs.filter(
    (p) => !solvedPairs.some((sp) => sp[0] === p[0] && sp[1] === p[1])
  );
  // for each pair, locate the corner piece, specifically where the cross colour of that piece is
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    console.log(pair);
    console.log(returnCornerPosition(tempCube, crossColour, pair));
    console.log(returnEdgePosition(tempCube, pair[0], pair[1]));
    tempCube = identifyCase(tempCube, pair[0], pair[1]);
  }
  // for each pair, locate the edge piece
  // FOR NOW LEAVE THIS CODE UNTIL I PICK THE BEST TEMPSOLUTION OR WHATEVER
  setF2lSolution(getTempF2lSolution());
  await execute(getF2lSolution());
  console.log("pairs to be solved:", pairs);
};

export default f2l;
