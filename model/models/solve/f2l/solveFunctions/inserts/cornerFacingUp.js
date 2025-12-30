import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import {
  getSolutionCrossColour,
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";
import returnCornerPosition from "../../../../helperFunctions/returnCornerPosition.js";

const cornerFacingUp = (cube, corner, edge, edgeSideColour, edgeTopColour) => {
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
  let edgeFaces = [];

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
      turningFace = sideEdgeFace;
      break;
  }
  edgeFaces.push(turningFace);
  // focus on the empty slot that we're tryna get it in
  // make sure when you make the turn it brings the slot up not down
  // identify where the slot it (left or right of the edge in turning face)
  // turn clockwise or anticlockwise depending on previous
  switch (edgeTopColour) {
    case tempCube[faceConversionClockwise[turningFace]][1][1]:
      edgeFaces.push(faceConversionAnticlockwise[turningFace]);
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace]
      ]);
      tempCube = faceToMove[turningFace](true, tempCube);
      break;
    case tempCube[faceConversionAnticlockwise[turningFace]][1][1]:
      edgeFaces.push(faceConversionClockwise[turningFace]);
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace] + "'"
      ]);
      tempCube = faceToMove[turningFace](false, tempCube);
      break;
    default:
      "ERRRRM THATS NOT SUPPOSED TO HAPPEN";
      break;
  }
  // now do U moves until corner matches edge

  const newCorner = returnCornerPosition(tempCube, edgeSideColour, [
    getSolutionCrossColour(),
    edgeTopColour
  ]);
  const newCornerFace = newCorner.face;

  switch (turningFace) {
    case faceConversionClockwise[newCornerFace]:
      setTempF2lSolution([...getTempF2lSolution(), "U"]);
      tempCube = U(true, tempCube);
      break;
    case faceConversionAnticlockwise[newCornerFace]:
      setTempF2lSolution([...getTempF2lSolution(), "U'"]);
      tempCube = U(false, tempCube);
      break;
    case faceConversionClockwise[faceConversionClockwise[newCornerFace]]:
      setTempF2lSolution([...getTempF2lSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
      break;
    default:
      break;
  }

  // then undo the turningFace move
  switch (edgeTopColour) {
    case tempCube[faceConversionClockwise[turningFace]][1][1]:
      edgeFaces.push(faceConversionAnticlockwise[turningFace]);
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace] + "'"
      ]);
      tempCube = faceToMove[turningFace](false, tempCube);
      break;
    case tempCube[faceConversionAnticlockwise[turningFace]][1][1]:
      edgeFaces.push(faceConversionClockwise[turningFace]);
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace]
      ]);
      tempCube = faceToMove[turningFace](true, tempCube);
      break;
    default:
      "ERRRRM THATS NOT SUPPOSED TO HAPPEN";
      break;
  }

  return tempCube;
};

export default cornerFacingUp;
