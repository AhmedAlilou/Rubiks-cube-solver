import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import {
  getSolutionCrossColour,
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";
import returnCornerPosition from "../../../../helperFunctions/returnCornerPosition.js";

const otherInsert = (cube, corner, edge) => {
  ("OTHER INSERT");
  let tempCube = cube;
  const cornerFace = corner.face;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  let edgeFace = edge.face;
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
      edgeFace = "left";
    }
    if (edgeCol === 2) {
      edgeFace = "right";
    }
    if (edgeRow === 0) {
      edgeFace = "back";
    }
    if (edgeRow === 2) {
      edgeFace = "front";
    }
  }

  if (cornerOnLeft) {
    switch (tempCube[edgeFace][0][1]) {
      case tempCube[faceConversionAnticlockwise[cornerFace]][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
        turningFace = edgeFace;
        break;
      case tempCube[faceConversionClockwise[cornerFace]][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
        turningFace =
          faceConversionClockwise[faceConversionClockwise[edgeFace]];
        break;
      case tempCube[
        faceConversionClockwise[faceConversionClockwise[cornerFace]]
      ][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        break;
      default:
        turningFace = faceConversionClockwise[edgeFace];
        break;
    }
  } else {
    switch (tempCube[edgeFace][0][1]) {
      case tempCube[faceConversionClockwise[cornerFace]][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
        turningFace = faceConversionClockwise[cornerFace];
        break;
      case tempCube[faceConversionAnticlockwise[cornerFace]][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
        turningFace = faceConversionAnticlockwise[cornerFace];
        break;
      case tempCube[
        faceConversionClockwise[faceConversionClockwise[cornerFace]]
      ][1][1]:
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        break;
      default:
        turningFace = faceConversionAnticlockwise[edgeFace];
        break;
    }
  }

  if (cornerOnLeft) {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[turningFace],
      "U",
      faceToNotation[turningFace] + "'"
    ]);
    tempCube = faceToMove[turningFace](true, tempCube);
    tempCube = U(true, tempCube);
    tempCube = faceToMove[turningFace](false, tempCube);
  } else {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[turningFace] + "'",
      "U'",
      faceToNotation[turningFace]
    ]);
    tempCube = faceToMove[turningFace](false, tempCube);
    tempCube = U(false, tempCube);
    tempCube = faceToMove[turningFace](true, tempCube);
  }

  return tempCube;
};

export default otherInsert;
