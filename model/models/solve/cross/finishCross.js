import countSolvedPieces from "./countSolvedPieces.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition.js";

const finishCross = (cube, colour) => {
  let toSolve = colourInfo[colour].adjacent; // only need one colour here because the cross colour is given
  const initiallySolved = countSolvedPieces(cube, colour)[1];
  console.log(toSolve, initiallySolved);
  toSolve = toSolve.filter((colour) => !initiallySolved.includes(colour));

  console.log("Pieces to solve:", toSolve);
  // will be doing the below for each and every permutation of unsolved pieces
  for (let i = 0; i < toSolve.length; i++) {
    const targetColour = toSolve[i];
    console.log(colour, targetColour);
    console.log(returnEdgePosition(cube, colour, targetColour));
  }
};

export default finishCross;
