import colourInfo from "../../helperFunctions/colourInfo.js";
import countSolvedPieces from "../cross/countSolvedPieces.js";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition.js";
import top from "./functions/top.js";

const finishCross = (cube, colour) => {
  let tempCube = cube;
  let toSolve = colourInfo[colour].adjacent;
  const initiallySolved = countSolvedPieces(cube, colour)[1];
  toSolve = toSolve.filter((colour) => !initiallySolved.includes(colour));

  for (let i = 0; i < toSolve.length; i++) {
    console.log("solving for:", toSolve[i]);
    const tilePair = toSolve[i];
    const tileFace = returnEdgePosition(tempCube, colour, tilePair).face;
    const tileRow = returnEdgePosition(tempCube, colour, tilePair).row;
    const tileCol = returnEdgePosition(tempCube, colour, tilePair).col;
    if (tileFace === "top") {
      tempCube = top(tempCube, tileRow, tileCol, tilePair);
    }
  }

  return tempCube;
};

export default finishCross;
