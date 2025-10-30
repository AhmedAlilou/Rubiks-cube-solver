import {
  getTempCrossSolution,
  setTempCrossSolution
} from "../../../../store/solveStore";
import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { E } from "../../../moves/slice/index.js";
const flipped = (cube, tileFace, tilePair) => {
  let tempCube = cube;
  console.log("FLIPPED TILE FACE", tileFace, tilePair);
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

  if (tilePair === E(true, cube)[tileFace][1][1]) {
    console.log("HEREEEEE");
    setTempCrossSolution([...getTempCrossSolution(), faceToNotation[tileFace]]);
    tempCube = faceToMove[tileFace](true, tempCube);
  }
  console.log(tempCube, "AHAHAHA");
  return tempCube;
};

export default flipped;
