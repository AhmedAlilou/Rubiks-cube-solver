import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import {
  getSolutionCrossColour,
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";
import returnCornerPosition from "../../../../helperFunctions/returnCornerPosition.js";

const topColoursDifferent = (cube, corner, edge, cornerTopColour) => {
  ("CORNER DIFFERENT");
  let tempCube = cube;
  const cornerFace = corner.face;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const edgeFace = edge.face;
  const edgeRow = edge.row;
  const edgeCol = edge.col;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };
  const faceConversionClockwise = {
    front: "left",
    left: "back",
    back: "right",
    right: "front"
  };
  const faceConversionAnticlockwise = {
    front: "right",
    right: "back",
    back: "left",
    left: "front"
  };
  // move corner on top of any unsolved slot
  const cornerOnLeft = cornerCol === 0;
  let secondaryEdgeFace = "";
  let turningFace = "";
  if (edgeFace === "top") {
    if (edgeCol === 0) {
      secondaryEdgeFace = "left";
    }
    if (edgeCol === 2) {
      secondaryEdgeFace = "right";
    }
    if (edgeRow === 0) {
      secondaryEdgeFace = "back";
    }
    if (edgeRow === 2) {
      secondaryEdgeFace = "front";
    }
  }

  if (
    cornerFace !== faceConversionClockwise[faceConversionClockwise[edgeFace]] &&
    cornerFace !==
      faceConversionClockwise[faceConversionClockwise[secondaryEdgeFace]]
  ) {
    // if its a 3 move insert then we deal with it outside of here thank you!
    return tempCube;
  }

  // first do appropriate U moves
  if (cornerOnLeft) {
    switch (cornerTopColour) {
      case tempCube[cornerFace][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
        turningFace = faceConversionClockwise[cornerFace];
        break;
      case tempCube[faceConversionClockwise[cornerFace]][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        break;
      case tempCube[
        faceConversionClockwise[faceConversionClockwise[cornerFace]]
      ][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
        turningFace = faceConversionAnticlockwise[cornerFace];
        break;
      default:
        turningFace = cornerFace;
        break;
    }
  } else {
    switch (cornerTopColour) {
      case tempCube[cornerFace][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
        turningFace = faceConversionAnticlockwise[cornerFace];
        break;
      case tempCube[faceConversionAnticlockwise[cornerFace]][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        break;
      case tempCube[
        faceConversionClockwise[faceConversionClockwise[cornerFace]]
      ][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
        turningFace = faceConversionClockwise[cornerFace];
        break;
      default:
        turningFace = cornerFace;
        break;
    }
  }

  if (cornerOnLeft) {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[turningFace] + "'",
      "U",
      faceToNotation[turningFace]
    ]);
    tempCube = faceToMove[turningFace](false, tempCube);
    tempCube = U(true, tempCube);
    tempCube = faceToMove[turningFace](true, tempCube);
  } else {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[turningFace],
      "U'",
      faceToNotation[turningFace] + "'"
    ]);
    tempCube = faceToMove[turningFace](true, tempCube);
    tempCube = U(false, tempCube);
    tempCube = faceToMove[turningFace](false, tempCube);
  }

  return tempCube;
};

export default topColoursDifferent;
