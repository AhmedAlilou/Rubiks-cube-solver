import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerTopEdgeMid = (cube, corner, edge) => {
  ("CORNER TOP EDGE MID");
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
    front: "right",
    right: "back",
    back: "left",
    left: "front"
  };
  const faceConversionAnticlockwise = {
    front: "left",
    left: "back",
    back: "right",
    right: "front"
  };
  let secondaryEdgeFace = "";
  if (edgeCol === 2) {
    ("EDGE ON RIGHT");
    secondaryEdgeFace = faceConversionAnticlockwise[edgeFace];
  } else {
    ("EDGE ON LEFT");
    secondaryEdgeFace = faceConversionClockwise[edgeFace];
  }

  // check all combos of corner on right corner on left, edge on right, edge on left
  if (cornerCol === edgeCol) {
    // if both right or both left
    if (cornerFace === edgeFace) {
      setTempF2lSolution([...getTempF2lSolution(), "U"]);
      tempCube = U(true, tempCube);
    } else if (
      faceConversionClockwise[faceConversionClockwise[cornerFace]] === edgeFace
    ) {
      setTempF2lSolution([...getTempF2lSolution(), "U'"]);
      tempCube = U(false, tempCube);
    } else if (faceConversionAnticlockwise[cornerFace] === edgeFace) {
      setTempF2lSolution([...getTempF2lSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    }
  } else if (cornerCol === 0 && edgeCol === 2) {
    // if corner and edge on opposite sides
    if (
      faceConversionClockwise[faceConversionClockwise[cornerFace]] === edgeFace
    ) {
      setTempF2lSolution([...getTempF2lSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    } else if (faceConversionClockwise[cornerFace] === edgeFace) {
      setTempF2lSolution([...getTempF2lSolution(), "U'"]);
      tempCube = U(false, tempCube);
    } else if (faceConversionAnticlockwise[cornerFace] === edgeFace) {
      setTempF2lSolution([...getTempF2lSolution(), "U"]);
      tempCube = U(true, tempCube);
    }
  } else if (cornerCol === 2 && edgeCol === 0) {
    if (
      faceConversionClockwise[faceConversionClockwise[cornerFace]] === edgeFace
    ) {
      setTempF2lSolution([...getTempF2lSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    } else if (faceConversionClockwise[cornerFace] === edgeFace) {
      setTempF2lSolution([...getTempF2lSolution(), "U"]);
      tempCube = U(true, tempCube);
    } else if (faceConversionAnticlockwise[cornerFace] === edgeFace) {
      setTempF2lSolution([...getTempF2lSolution(), "U'"]);
      tempCube = U(false, tempCube);
    }
  } // NOW DO THE ACTUAL MOVES

  if (edgeCol === 2) {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[edgeFace] + "'",
      "U'",
      faceToNotation[edgeFace]
    ]);
    tempCube = faceToMove[edgeFace](false, tempCube);
    tempCube = U(false, tempCube);
    tempCube = faceToMove[edgeFace](true, tempCube);
  } else {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[edgeFace],
      "U",
      faceToNotation[edgeFace] + "'"
    ]);
    tempCube = faceToMove[edgeFace](true, tempCube);
    tempCube = U(true, tempCube);
    tempCube = faceToMove[edgeFace](false, tempCube);
  }
  // move corner on top of edge
  // if both on left: U Move U Move' ✅
  // if corner on left edge on right: U Move' U' Move ✅
  // if corner on right edge on left: U' Move U Move' ✅
  // if both on right: U Move' U' Move ✅
  return tempCube;
};

export default cornerTopEdgeMid;
