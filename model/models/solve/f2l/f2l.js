import {
  getF2lSolution,
  setF2lSolution,
  getTempF2lSolution,
  getSolutionCrossColour
} from "../../../store/solveStore";
import colourInfo from "../../helperFunctions/colourInfo";
import returnSolvedPairs from "./functions/returnSolvedPairs";
import identifyCase from "./identifyCase";
import execute from "../../execute.js";
import removeContradictions from "../../helperFunctions/removeContradictions.js";

const f2l = async (cube) => {
  let tempCube = cube;
  ("F2L");

  let crossColour = getSolutionCrossColour();
  crossColour;
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
    tempCube = identifyCase(tempCube, pair[0], pair[1]);
  }
  // for each pair, locate the edge piece
  setF2lSolution(getTempF2lSolution());
  setF2lSolution(removeContradictions(getF2lSolution()));
  await execute(getF2lSolution());
};

export default f2l;
