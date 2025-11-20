import { getSolutionCrossColour } from "../../../store/solveStore";
import colourInfo from "../../helperFunctions/colourInfo";
import returnSolvedPairs from "./functions/returnSolvedPairs";
import { getCube } from "../../../store/cubeStore";

const f2l = (cube) => {
  let tempCube = getCube();
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
  console.log("pairs to be solved:", pairs);
};

export default f2l;
