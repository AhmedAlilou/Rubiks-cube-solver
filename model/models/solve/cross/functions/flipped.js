import {
  getTempCrossSolution,
  setTempCrossSolution
} from "../../../../store/solveStore";
import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { E } from "../../../moves/slice/index.js";
import middle from "./middle.js";
const flipped = (cube, tileFace, tilePair) => {
  let tempCube = cube;
  "FLIPPED TILE FACE", tileFace, tilePair;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };

  setTempCrossSolution([
    ...getTempCrossSolution(),
    faceToNotation[tileFace] + "2"
  ]);
  tempCube = faceToMove[tileFace](true, faceToMove[tileFace](true, tempCube));
  return tempCube;
};

export default flipped;
