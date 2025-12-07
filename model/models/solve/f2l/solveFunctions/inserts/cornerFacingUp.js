import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerFacingUp = (cube, corner, edge, edgeSideColour) => {
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

  const topRowToFace = {
    0: "back",
    2: "front"
  };
  const topColToFace = {
    0: "left",
    2: "right"
  };

  let sideEdgeFace = edgeFace;

  if (edgeFace === "top") {
    switch (edgeCol) {
      case 0:
        sideEdgeFace = "left";
        break;
      case 2:
        sideEdgeFace = "right";
        break;
    }
    switch (edgeRow) {
      case 0:
        sideEdgeFace = "back";
        break;
      case 2:
        sideEdgeFace = "front";
        break;
    }
  }
  let turningFace = "";
  // move edge with U moves so it matches with centre colour
  switch (edgeSideColour) {
    case tempCube[faceConversionClockwise[sideEdgeFace]][1][1]:
      setTempF2lSolution([...getTempF2lSolution(), "U"]);
      tempCube = U(true, tempCube);
      turningFace = faceConversionClockwise[sideEdgeFace];
      break;
    case tempCube[faceConversionAnticlockwise[sideEdgeFace]][1][1]:
      setTempF2lSolution([...getTempF2lSolution(), "U'"]);
      tempCube = U(false, tempCube);
      turningFace = faceConversionAnticlockwise[sideEdgeFace];
      break;
    case tempCube[
      faceConversionClockwise[faceConversionClockwise[sideEdgeFace]]
    ][1][1]:
      setTempF2lSolution([...getTempF2lSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
      turningFace =
        faceConversionAnticlockwise[faceConversionAnticlockwise[sideEdgeFace]];
      break;
    default:
      break;
  }
  // when none of the corner is solved do anticlockwise

  return tempCube;
};

export default cornerFacingUp;
