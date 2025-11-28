import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { E } from "../../../moves/slice/index.js";
import {
  getTempCrossSolution,
  setTempCrossSolution
} from "../../../../store/solveStore.js";
import edgePairs from "../../../helperFunctions/edgePairs.js";

const top = (cube, row, col, tilePairFace, pairColour) => {
  let tempCube = cube;
  let func = "";
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

  if (pairColour === cube[tilePairFace][1][1]) {
    setTempCrossSolution([
      ...getTempCrossSolution(),
      faceToNotation[tilePairFace] + "2"
    ]);
    // below return the new cube after the apprpriate function has been done
    return faceToMove[tilePairFace](
      true,
      faceToMove[tilePairFace](true, tempCube)
    );
  } else if (pairColour === E(true, tempCube)[tilePairFace][1][1]) {
    console.log("THISSSS");
    func = faceToMove[faceConversionAnticlockwise[tilePairFace]];
    setTempCrossSolution([
      ...getTempCrossSolution(),
      "U",
      faceToNotation[faceConversionAnticlockwise[tilePairFace]] + "2"
    ]);
    tempCube = func(true, func(true, U(true, tempCube)));
  } else if (pairColour === E(false, tempCube)[tilePairFace][1][1]) {
    func = faceToMove[faceConversionClockwise[tilePairFace]];
    setTempCrossSolution([
      ...getTempCrossSolution(),
      "U'",
      faceToNotation[faceConversionClockwise[tilePairFace]] + "2"
    ]);
    tempCube = func(true, func(true, U(false, tempCube)));
  } else if (pairColour === E(false, E(false, tempCube))[tilePairFace][1][1]) {
    func =
      faceToMove[
        faceConversionAnticlockwise[faceConversionAnticlockwise[tilePairFace]]
      ];
    setTempCrossSolution([
      ...getTempCrossSolution(),
      "U2",
      faceToNotation[
        faceConversionAnticlockwise[faceConversionAnticlockwise[tilePairFace]]
      ] + "2"
    ]);
    tempCube = func(true, func(true, U(true, U(true, tempCube))));
  }
  return tempCube;
};

export default top;
