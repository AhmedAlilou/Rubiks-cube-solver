import colourInfo from "../../helperFunctions/colourInfo.js";
import countSolvedPieces from "../cross/countSolvedPieces.js";
import returnEdgePosition from "../../helperFunctions/returnEdgePosition.js";
import top from "./functions/top.js";
import middle from "./functions/middle.js";
import flipped from "./functions/flipped.js";
import wrongPlace from "./functions/wrongPlace.js";
import topLayer from "./functions/topLayer.js";
import edgePairs from "../../helperFunctions/edgePairs.js";

const finishCross = (cube, colour) => {
  let tempCube = cube;
  let toSolve = colourInfo[colour].adjacent;
  const initiallySolved = countSolvedPieces(cube, colour)[1];
  toSolve = toSolve.filter((colour) => !initiallySolved.includes(colour));

  for (let i = 0; i < toSolve.length; i++) {
    const tilePair = toSolve[i];
    const tileFace = returnEdgePosition(tempCube, colour, tilePair).face;
    const tileRow = returnEdgePosition(tempCube, colour, tilePair).row;
    const tileCol = returnEdgePosition(tempCube, colour, tilePair).col;

    const tilePairInfo = edgePairs[`${tileFace}[${tileRow}][${tileCol}]`];
    const tilePairFace = tilePairInfo.face;
    if (tileFace === "top") {
      tempCube = top(tempCube, tileRow, tileCol, tilePairFace, tilePair);
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
      tempCube = topLayer(
        tempCube,
        tileFace,
        tileRow,
        tileCol,
        tilePair,
        colour
      );
    } else if (
      (tileFace === "front" ||
        tileFace === "left" ||
        tileFace === "back" ||
        tileFace === "right") &&
      tileRow === 0
    ) {
      tempCube = topLayer(
        tempCube,
        tileFace,
        tileRow,
        tileCol,
        tilePair,
        colour
      );
      // it is like flipped but its on top row and we have to bring it down back to the middle
    } else if (
      tileFace === "down" &&
      !(tempCube[tilePairFace][1][1] === tempCube[tilePairFace[2][1]])
    ) {
      // do a double move according to face
      // then call top function
      tempCube = wrongPlace(tempCube, tileRow, tileCol);
      tempCube = top(tempCube, tileRow, tileCol, tilePairFace, tilePair);
    } else {
      console.log("I HAVE MISSED A CASE!!!!!");
    }
  }

  return tempCube;
};

export default finishCross;
