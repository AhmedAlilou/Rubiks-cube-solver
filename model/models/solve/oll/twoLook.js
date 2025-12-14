import { getSolutionCrossColour } from "../../../store/solveStore";
import mapOutTopLayer from "./functions/mapOutTopLayer.js";
import checkForAdjacentCorners from "./functions/checkForAdjacentCorners.js";
import checkForOppositeCorners from "./functions/checkForOppositeCorners.js";
import checkForOneSolvedCorner from "./functions/checkForOneSolvedCorner.js";

import dot from "./twoLook/dot.js";
import bar from "./twoLook/bar.js";
import hook from "./twoLook/hook.js";

import blocks from "./twoLook/blocks.js";
import fish from "./twoLook/fish.js";
import cross from "./twoLook/cross.js";

const twoLook = (cube, colour) => {
  let tempCube = cube;
  const crossDone =
    tempCube["top"][0][1] +
      tempCube["top"][1][0] +
      tempCube["top"][1][2] +
      tempCube["top"][2][1] ===
    colour + colour + colour + colour;
  const isDot = ![
    tempCube["top"][0][1],
    tempCube["top"][1][0],
    tempCube["top"][1][2],
    tempCube["top"][2][1]
  ].includes(colour);

  const isBar = Boolean(
    !(crossDone || isDot) &&
      (tempCube["top"][0][1] === tempCube["top"][2][1]) ^
        (tempCube["top"][1][0] === tempCube["top"][1][2])
  );

  const isHook = !(crossDone || isDot || isBar);

  if (isDot) {
    tempCube = dot(tempCube);
  } else if (isBar) {
    tempCube = bar(tempCube, colour);
  } else if (isHook) {
    tempCube = hook(tempCube, colour);
  }

  const mappedOutTopLayer = mapOutTopLayer(tempCube);
  const sideRows = mappedOutTopLayer.sideRows;
  const topCorners = mappedOutTopLayer.corners;
  const isSign = checkForAdjacentCorners(topCorners, colour);
  const isBlocks = checkForOppositeCorners(topCorners, colour);
  const isFish = checkForOneSolvedCorner(topCorners, colour);
  const isCross = !(isSign || isBlocks || isFish);
  console.log("CROSS:", isCross);

  if (isCross) {
    tempCube = cross(tempCube, sideRows, colour);
  } else if (isSign) {
    console.log("SIGN");
  } else if (isBlocks) {
    tempCube = blocks(tempCube, sideRows, colour);
  } else if (isFish) {
    tempCube = fish(tempCube, sideRows, colour);
  }

  return tempCube;
};

export default twoLook;
