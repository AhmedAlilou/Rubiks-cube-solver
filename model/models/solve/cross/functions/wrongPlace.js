import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import {
  getTempCrossSolution,
  setTempCrossSolution
} from "../../../../store/solveStore.js";
import edgePairs from "../../../helperFunctions/edgePairs.js";
const wrongPlace = (cube, row, col) => {
  let tempCube = cube;
  console.log("wrong place");
  const tilePairInfo = edgePairs[`down[${row}][${col}]`];
  const tilePairFace = tilePairInfo.face;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };
  setTempCrossSolution([
    ...getTempCrossSolution(),
    faceToNotation[tilePairFace] + "2"
  ]);
  tempCube = faceToMove[tilePairFace](
    true,
    faceToMove[tilePairFace](true, cube)
  );

  return tempCube;
};

export default wrongPlace;
