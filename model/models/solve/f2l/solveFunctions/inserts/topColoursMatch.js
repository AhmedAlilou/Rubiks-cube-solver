import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import {
  getSolutionCrossColour,
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";
import returnCornerPosition from "../../../../helperFunctions/returnCornerPosition.js";
import returnEdgePosition from "../../../../helperFunctions/returnEdgePosition.js";

const topColoursMatch = (
  cube,
  corner,
  edge,
  cornerTopColour,
  edgeSideColour
) => {
  console.log("COLOURS MATCH");
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
  let turningFace = "";
  const oneMover =
    edgeFace === faceConversionClockwise[faceConversionClockwise[cornerFace]];

  const edgePos = returnEdgePosition(tempCube, edgeSideColour, cornerTopColour);
  const edgeSideFace = edgePos.face;
  console.log("PLEEEAAASEEEE:", cornerOnLeft, edgeSideFace, cornerFace);
  if (cornerOnLeft) {
    if (edgeSideFace === faceConversionClockwise[cornerFace]) {
      return tempCube;
    }
  } else {
    if (edgeSideFace === faceConversionAnticlockwise[cornerFace]) {
      return tempCube;
    }
  }

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
      oneMover ? "U'" : "U2",
      faceToNotation[turningFace]
    ]);
    tempCube = faceToMove[turningFace](false, tempCube);
    tempCube = oneMover ? U(false, tempCube) : U(true, U(true, tempCube));
    tempCube = faceToMove[turningFace](true, tempCube);
  } else {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[turningFace],
      oneMover ? "U" : "U2",
      faceToNotation[turningFace] + "'"
    ]);
    tempCube = faceToMove[turningFace](true, tempCube);
    tempCube = oneMover ? U(true, tempCube) : U(true, U(true, tempCube));
    tempCube = faceToMove[turningFace](false, tempCube);
  }
  // if the cornerCol on left
  // turn new cornerFace anticlockwise
  // Do either U' or U2
  // turn new cornerFace clockwise

  // if the cornerCol on right
  // turn new cornerFace clockwise
  // Do either U or U2
  // turn new cornerFace anticlockwise
  return tempCube;
};

export default topColoursMatch;
