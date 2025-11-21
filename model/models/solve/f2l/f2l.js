import { getSolutionCrossColour } from "../../../store/solveStore";
import colourInfo from "../../helperFunctions/colourInfo";
import returnSolvedPairs from "./functions/returnSolvedPairs";
import returnCornerPosition from "../../helperFunctions/returnCornerPosition";
import { getCube } from "../../../store/cubeStore";

const f2l = (cube) => {
  let tempCube = cube;
  console.log("F2L");
  console.log(tempCube);

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
  console.log(
    returnCornerPosition(tempCube, crossColour, [pairs[0][0], pairs[0][1]])
  );
  // for each pair, locate the edge piece

  console.log("pairs to be solved:", pairs);
};

export default f2l;
