import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { E } from "../../../moves/slice/index.js";
import { getTempCrossSolution } from "../../../../store/solveStore.js";
import { setTempCrossSolution } from "../../../../store/solveStore.js";
import edgePairs from "../../../helperFunctions/edgePairs";

const middle = (cube, tileFace, tileCol, pairColour) => {
  let clockwise = true;
  let tempCube = cube;
  let func = "";
  const tilePairInfo = edgePairs[`${tileFace}[${1}][${tileCol}]`];
  const tilePairFace = tilePairInfo.face;
  const tilePairCol = tilePairInfo.col;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };
  clockwise = tilePairCol === 2 ? true : false;
  if (pairColour === cube[tilePairFace][1][1]) {
    setTempCrossSolution([
      ...getTempCrossSolution(),
      faceToNotation[tilePairFace] + (clockwise ? "" : "'")
    ]);
    return faceToMove[tilePairFace](clockwise, cube);
  } else if (pairColour === E(true, cube)[tilePairFace][1][1]) {
    func = faceToMove[tilePairFace];
    setTempCrossSolution([
      ...getTempCrossSolution(),
      "D",
      faceToNotation[tilePairFace] + (clockwise ? "" : "'"),
      "D'"
    ]);
    return D(false, faceToMove[tilePairFace](clockwise, D(true, cube)));
  } else if (pairColour === E(false, cube)[tilePairFace][1][1]) {
    func = faceToMove[tilePairFace];
    setTempCrossSolution([
      ...getTempCrossSolution(),
      "D'",
      faceToNotation[tilePairFace] + (clockwise ? "" : "'"),
      "D"
    ]);
    return D(true, faceToMove[tilePairFace](clockwise, D(false, cube)));
  } else {
    setTempCrossSolution([
      ...getTempCrossSolution(),
      "D2",
      faceToNotation[tilePairFace] + (clockwise ? "" : "'"),
      "D2"
    ]);
    return D(
      true,
      D(true, faceToMove[tilePairFace](clockwise, D(true, D(true, cube))))
    );
  }
};

export default middle;
