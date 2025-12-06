import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerTopEdgeTop = (cube, corner, edge) => {
  console.log("CORNER TOP, EDGE TOP");
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

  const turningFace = sideEdgeFace;
  let clockwise = false;

  if (turningFace === "right") {
    if (cornerRow === 2) {
      clockwise = true;
    }
  } else if (turningFace === "front") {
    if (cornerCol === 0) {
      clockwise = true;
    }
  } else if (turningFace === "left") {
    if (cornerRow === 0) {
      clockwise = true;
    }
  } else {
    if (cornerCol === 2) {
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
