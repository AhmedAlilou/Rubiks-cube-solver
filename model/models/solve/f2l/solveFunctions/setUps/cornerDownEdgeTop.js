import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerDownEdgeTop = (cube, corner, edge) => {
  ("CORNER DOWN, EDGE TOP");
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

  let cornerFaces = [];
  let turningFace = "";

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

  cornerFaces = [bottomColToFace[cornerCol], bottomRowToFace[cornerRow]];
  let cornerOnLeft = false;
  cornerFaces;
  if (cornerFaces.includes("left")) {
    if (cornerFaces.includes("back")) {
      cornerOnLeft = true;
    } else {
      cornerOnLeft = false;
    }
    turningFace = "left";
  } else {
    if (cornerFaces.includes("back")) {
      cornerOnLeft = false;
    } else {
      cornerOnLeft = true;
    }
    turningFace = "right";
  }
  cornerOnLeft;
  "TURNING FACE: ", turningFace;

  // place edge in correct spot first:
  if (turningFace === faceConversionClockwise[sideEdgeFace]) {
    setTempF2lSolution([...getTempF2lSolution(), "U"]);
    tempCube = U(true, tempCube);
  } else if (turningFace === faceConversionAnticlockwise[sideEdgeFace]) {
    setTempF2lSolution([...getTempF2lSolution(), "U'"]);
    tempCube = U(false, tempCube);
  } else if (
    turningFace ===
    faceConversionClockwise[faceConversionClockwise[sideEdgeFace]]
  ) {
    setTempF2lSolution([...getTempF2lSolution(), "U2"]);
    tempCube = U(true, U(true, tempCube));
  }

  setTempF2lSolution([
    ...getTempF2lSolution(),
    faceToNotation[turningFace] + (!cornerOnLeft ? "'" : ""),
    !cornerOnLeft ? "U'" : "U",
    faceToNotation[turningFace] + (cornerOnLeft ? "'" : "")
  ]);
  tempCube = faceToMove[turningFace](
    !cornerOnLeft,
    U(cornerOnLeft, faceToMove[turningFace](cornerOnLeft, tempCube))
  );

  return tempCube;
};

export default cornerDownEdgeTop;
