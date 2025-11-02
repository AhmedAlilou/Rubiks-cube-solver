import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { E } from "../../../moves/slice/index.js";
import { getTempCrossSolution } from "../../../../store/solveStore.js";
import { setTempCrossSolution } from "../../../../store/solveStore.js";
import edgePairs from "../../../helperFunctions/edgePairs";

const topLayer = (
  cube,
  tileFace,
  tileRow,
  tileCol,
  pairColour,
  crossColour
) => {
  let tempCube = cube;
  console.log("TOP LAYER");
  const tilePairInfo = edgePairs[`${tileFace}[${tileRow}][${tileCol}]`];
  const tilePairRow = tilePairInfo.row;
  const tilePairCol = tilePairInfo.col;
  const bottomLayerPairInfo = edgePairs[`${tileFace}[${2}][${1}]`];
  const bottomLayerPairRow = bottomLayerPairInfo.row;
  const bottomLayerPairCol = bottomLayerPairInfo.row;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };
  let displacing = false;
  let clockwise = false;
  let endFace = "";
  let targetFaces = [];
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

  switch (pairColour) {
    case cube["front"][1][1]:
      endFace = "front";
      targetFaces = ["left", "right"];
      console.log("TARGET FACES", targetFaces);
      break;
    case cube["right"][1][1]:
      endFace = "right";
      targetFaces = ["front", "back"];
      console.log("TARGET FACES", targetFaces);
      break;
    case cube["back"][1][1]:
      endFace = "back";
      targetFaces = ["left", "right"];
      console.log("TARGET FACES", targetFaces);
      break;
    case cube["left"][1][1]:
      endFace = "left";
      targetFaces = ["front", "back"];
      console.log("TARGET FACES", targetFaces);
      break;
  }
  if (
    tempCube[tileFace][1][1] === tempCube[tileFace][2][1] &&
    crossColour === tempCube["down"][bottomLayerPairRow][bottomLayerPairCol]
  ) {
    // checking if it will be displacing a solved cross edge
    displacing = true;
    console.log("WOULD DISPLACE A SOLVED CROSS EDGE");
  }
  if (!targetFaces.includes(tileFace)) {
    // Do an extra U move first
    setTempCrossSolution([...getTempCrossSolution(), "U"]);
    tempCube = U(true, cube);
    tileFace = faceConversionAnticlockwise[tileFace];
  }
  // set up moves
  clockwise = faceConversionClockwise[tileFace] === endFace;
  setTempCrossSolution([
    ...getTempCrossSolution(),
    faceToNotation[tileFace] + (clockwise ? "" : "'")
  ]);
  tempCube = faceToMove[tileFace](clockwise, cube);

  setTempCrossSolution([
    ...getTempCrossSolution(),
    faceToNotation[endFace] + (clockwise ? "'" : "")
  ]);
  tempCube = faceToMove[endFace](!clockwise, cube);

  if (displacing) {
    setTempCrossSolution([
      ...getTempCrossSolution(),
      faceToNotation[tileFace] + (clockwise ? "'" : "")
    ]);
    tempCube = faceToMove[tileFace](!clockwise, cube);
  }

  return tempCube;
};

export default topLayer;
