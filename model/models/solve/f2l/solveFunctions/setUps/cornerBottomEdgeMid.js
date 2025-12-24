import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerBottomEdgeMid = (cube, corner) => {
  console.log("CORNER BOTTOM EDGE MID");
  let tempCube = cube;
  const cornerFace = corner.face;
  const cornerCol = corner.col;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };

  const cornerSide = cornerCol === 0 ? "left" : "right";

  // turn the face of the corner clockwise if on left, anticlockwise if on right
  // do U' if on left and U if on right
  // UNDO THE FIRST MOVE

  if (cornerSide === "left") {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[cornerFace],
      "U'",
      faceToNotation[cornerFace] + "'"
    ]);
    tempCube = faceToMove[cornerFace](
      false,
      U(false, faceToMove[cornerFace](true, tempCube))
    );
  } else {
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[cornerFace] + "'",
      "U",
      faceToNotation[cornerFace]
    ]);
    tempCube = faceToMove[cornerFace](
      true,
      U(true, faceToMove[cornerFace](false, tempCube))
    );
  }
  return tempCube;
};
export default cornerBottomEdgeMid;
