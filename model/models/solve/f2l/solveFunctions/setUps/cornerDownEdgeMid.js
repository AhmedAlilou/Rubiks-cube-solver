import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";
import cornerTopEdgeMid from "./cornerTopEdgeMid.js";

const cornerDownEdgeMid = (cube, corner, edge) => {
  console.log("CORNER DOWN EDGE MID");
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

  const bottomColToFace = {
    0: "left",
    2: "right"
  };

  const turningFace = bottomColToFace[cornerCol];

  if (turningFace === "left") {
    if (cornerRow === 0) {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace] + "'",
        "U",
        faceToNotation[turningFace]
      ]);
      tempCube = faceToMove[turningFace](
        true,
        U(true, faceToMove[turningFace](false, tempCube))
      );
    } else {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace],
        "U'",
        faceToNotation[turningFace] + "'"
      ]);
      tempCube = faceToMove[turningFace](
        false,
        U(false, faceToMove[turningFace](true, tempCube))
      );
    }
  } else {
    if (cornerRow === 0) {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace],
        "U'",
        faceToNotation[turningFace] + "'"
      ]);
      tempCube = faceToMove[turningFace](
        false,
        U(false, faceToMove[turningFace](true, tempCube))
      );
    } else {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace] + "'",
        "U",
        faceToNotation[turningFace]
      ]);
      tempCube = faceToMove[turningFace](
        true,
        U(true, faceToMove[turningFace](false, tempCube))
      );
    }
  }

  return tempCube;
};

export default cornerDownEdgeMid;
