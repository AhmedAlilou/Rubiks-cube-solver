import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const moveCornerToTop = (cube, cornerFace, cornerFaces, cornerOnLeft) => {
  ("Removing Corner");
  let cornerOnRight = !cornerOnLeft;
  let tempCube = cube;
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

  let turningFace = "";

  if (cornerFace === "down") {
    if (cornerFaces.includes("right")) {
      turningFace = "right";
      if (cornerFaces.includes("front")) {
        cornerOnRight = false;
      }
    } else {
      turningFace = "left";
      if (cornerFaces.includes("front")) {
        cornerOnRight = true;
      }
    }
  } else {
    turningFace = cornerFace;
  }
  setTempF2lSolution([
    ...getTempF2lSolution(),
    faceToNotation[turningFace] + (cornerOnRight ? "'" : ""),
    "U",
    faceToNotation[turningFace] + (!cornerOnRight ? "'" : "")
  ]);

  tempCube = faceToMove[turningFace](
    cornerOnRight,
    U(true, faceToMove[turningFace](!cornerOnRight, tempCube))
  );
  return tempCube;
};

export default moveCornerToTop;
