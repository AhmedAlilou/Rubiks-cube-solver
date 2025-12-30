import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getSolutionCrossColour,
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";
import returnCornerPosition from "../../../../helperFunctions/returnCornerPosition.js";

const cornerTopEdgeTop = (cube, corner, edge, firstPair, secondPair) => {
  ("CORNER TOP, EDGE TOP");
  let tempCube = cube;

  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const cornerFace = corner.face;
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

  const bottomColToFace = {
    0: "left",
    2: "right"
  };
  const bottomRowToFace = {
    0: "front",
    2: "back"
  };

  let sideEdgeFace = "";

  if (edgeFace === "top") {
    if (edgeCol === 0) {
      sideEdgeFace = "left";
    } else if (edgeCol === 2) {
      sideEdgeFace = "right";
    } else if (edgeRow === 0) {
      sideEdgeFace = "back";
    } else {
      sideEdgeFace = "front";
    }
  } else {
    sideEdgeFace = edgeFace;
  }

  let turningFace = sideEdgeFace;
  let clockwise = false;

  const topColToFace = {
    0: "left",
    2: "right"
  };

  const topRowToFace = {
    0: "back",
    2: "front"
  };

  const cornerFaces = [topColToFace[cornerCol], topRowToFace[cornerRow]];
  if (!cornerFaces.includes(turningFace)) {
    return tempCube;
  }
  const firstCorner = returnCornerPosition(tempCube, firstPair, [
    secondPair,
    getSolutionCrossColour()
  ]);
  let firstCornerFace = firstCorner.face;
  const firstCornerOnRight = firstCorner.col === 2;
  const secondCorner = returnCornerPosition(tempCube, secondPair, [
    firstPair,
    getSolutionCrossColour()
  ]);
  let secondCornerFace = secondCorner.face;

  // do U moves until its on top of its slot
  let valid = false;

  "FLA:JFLKAJLKFAJALK:", firstCorner, secondCorner;
  turningFace;

  while (!valid) {
    if (firstCornerOnRight) {
      if (
        !(
          tempCube[firstCornerFace][1][2] === tempCube[firstCornerFace][2][2] &&
          tempCube[firstCornerFace][2][2] === tempCube[firstCornerFace][1][1]
        ) &&
        tempCube[secondCornerFace][1][0] === tempCube[secondCornerFace][2][0] &&
        tempCube[secondCornerFace][2][0] === tempCube[secondCornerFace][1][1]
      ) {
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
        firstCornerFace = faceConversionClockwise[firstCornerFace];
        secondCornerFace = faceConversionClockwise[secondCornerFace];
        turningFace = faceConversionClockwise[turningFace];
        turningFace;
      } else {
        valid = true;
      }
    } else {
      if (
        tempCube[secondCornerFace][1][2] === tempCube[secondCornerFace][2][2] &&
        tempCube[secondCornerFace][2][2] === tempCube[secondCornerFace][1][1] &&
        tempCube[firstCornerFace][1][0] === tempCube[firstCornerFace][2][0] &&
        tempCube[firstCornerFace][2][0] === tempCube[firstCornerFace][1][1]
      ) {
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
        firstCornerFace = faceConversionClockwise[firstCornerFace];
        secondCornerFace = faceConversionClockwise[secondCornerFace];
        turningFace = faceConversionClockwise[turningFace];
        turningFace;
      } else {
        valid = true;
      }
    }
  }

  // update this cornerCol and cornerRow

  const newCornerRow = returnCornerPosition(
    tempCube,
    getSolutionCrossColour(),
    [firstPair, secondPair]
  ).row;
  const newCornerCol = returnCornerPosition(
    tempCube,
    getSolutionCrossColour(),
    [firstPair, secondPair]
  ).col;
  turningFace;
  if (turningFace === "right") {
    if (newCornerRow === 2) {
      clockwise = true;
    }
  } else if (turningFace === "front") {
    if (newCornerCol === 0) {
      clockwise = true;
    }
  } else if (turningFace === "left") {
    if (newCornerRow === 0) {
      clockwise = true;
    }
  } else {
    if (newCornerCol === 2) {
      clockwise = true;
    }
  }

  setTempF2lSolution([
    ...getTempF2lSolution(),
    faceToNotation[turningFace] + (!clockwise ? "'" : ""),
    "U" + (clockwise ? "'" : ""),
    faceToNotation[turningFace] + (clockwise ? "'" : "")
  ]);

  tempCube = faceToMove[turningFace](
    !clockwise,
    U(!clockwise, faceToMove[turningFace](clockwise, tempCube))
  );

  return tempCube;
};

export default cornerTopEdgeTop;
