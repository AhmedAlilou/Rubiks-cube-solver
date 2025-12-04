import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerBottomEdgeTop = (cube, corner, edge) => {
  console.log("CORNER BOTTOM, EDGE TOP");
  let tempCube = cube;

  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const cornerFace = corner.face;
  const edgeFace = edge.face;
  const edgeRow = edge.row;
  const edgeCol = edge.col;

  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };

  return tempCube;
};

export default cornerBottomEdgeTop;
