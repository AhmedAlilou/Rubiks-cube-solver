import countSolvedPieces from "./countSolvedPieces.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition.js";

import top from "./solveFunctions/top.js";

const finishCross = (cube, colour) => {
  let tempCube = cube;
  let toSolve = colourInfo[colour].adjacent; // only need one colour here because the cross colour is given
  const initiallySolved = countSolvedPieces(cube, colour)[1];
  console.log(toSolve, initiallySolved);
  toSolve = toSolve.filter((colour) => !initiallySolved.includes(colour));

  console.log("Pieces to solve:", toSolve);
  // will be doing the below for each and every permutation of unsolved pieces
  for (let i = 0; i < toSolve.length; i++) {
    console.log("solving for:", toSolve[i]);
    const targetColour = toSolve[i];
    console.log(returnEdgePosition(cube, colour, targetColour));
    const face = returnEdgePosition(cube, colour, targetColour).face;
    const row = returnEdgePosition(cube, colour, targetColour).row;
    const col = returnEdgePosition(cube, colour, targetColour).col;
    switch (face) {
      case "top":
        // implement logic for top face
        tempCube = top(tempCube, row, col);
        break;
      case "front":
        // implement logic for front face
        break;
      case "right":
        // implement logic for right face
        break;
      case "back":
        // implement logic for back face
        break;
      case "left":
        // implement logic for left face
        break;
      case "down":
        // implement logic for down face
        break;
      default:
        console.log("Invalid face");
    }
  }
  return tempCube;
};

export default finishCross;
