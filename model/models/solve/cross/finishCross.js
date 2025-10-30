import colourInfo from "../../helperFunctions/colourInfo.js";
import countSolvedPieces from "../cross/countSolvedPieces.js";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition.js";
import top from "./functions/top.js";
import middle from "./functions/middle.js";
import flipped from "./functions/flipped.js";

const finishCross = (cube, colour) => {
  let tempCube = cube;
  let toSolve = colourInfo[colour].adjacent;
  const initiallySolved = countSolvedPieces(cube, colour)[1];
  toSolve = toSolve.filter((colour) => !initiallySolved.includes(colour));
  console.log("to solve:", toSolve);

  for (let i = 0; i < toSolve.length; i++) {
    const tilePair = toSolve[i];
    console.log("solving for:", tilePair);
    const tileFace = returnEdgePosition(tempCube, colour, tilePair).face;
    const tileRow = returnEdgePosition(tempCube, colour, tilePair).row;
    const tileCol = returnEdgePosition(tempCube, colour, tilePair).col;
    if (tileFace === "top") {
      tempCube = top(tempCube, tileRow, tileCol, tilePair);
    } else if (
      (tileFace === "front" ||
        tileFace === "left" ||
        tileFace === "back" ||
        tileFace === "right") &&
      tileRow === 1
    ) {
      tempCube = middle(tempCube, tileFace, tileCol, tilePair);
    } else if (
      (tileFace === "front" ||
        tileFace === "left" ||
        tileFace === "back" ||
        tileFace === "right") &&
      tileRow === 2
    ) {
      tempCube = flipped(tempCube, tileFace, tilePair);
      tempCube = middle(tempCube, tileFace, 0, tilePair);
    }
  }

  return tempCube;
};

export default finishCross;
