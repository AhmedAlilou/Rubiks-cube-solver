import {
  getSolution,
  getStepPointer,
  setStepPointer,
  getMovePointer,
  setMovePointer
} from "../../../../../model/store/solveStore.js";
import useCubiesStore from "../../../store/cubiesStore.js";

import {
  controllerB,
  controllerD,
  controllerF,
  controllerL,
  controllerR,
  controllerU
} from "../../../../../controller/cubeMoves/regular/index.js";
import {
  controllerx,
  controllery,
  controllerz
} from "../../../../../controller/cubeMoves/rotation/index.js";
import {
  controllerE,
  controllerS,
  controllerM
} from "../../../../../controller/cubeMoves/slice/index.js";
import {
  controllerb,
  controllerd,
  controllerf,
  controllerl,
  controllerr,
  controlleru
} from "../../../../../controller/cubeMoves/wide/index.js";

const moveMap = {
  B: controllerB,
  D: controllerD,
  F: controllerF,
  L: controllerL,
  R: controllerR,
  U: controllerU,
  x: controllerx,
  y: controllery,
  z: controllerz,
  E: controllerE,
  S: controllerS,
  M: controllerM,
  b: controllerb,
  d: controllerd,
  f: controllerf,
  l: controllerl,
  r: controllerr,
  u: controlleru
};

import reverse from "./reverse.js";

const backward = () => {
  const solution = getSolution();
  let stepPointer = getStepPointer();
  let movePointer = getMovePointer();

  if (stepPointer === 0 && movePointer === 0) {
    return;
  }

  // Determine which move to reverse
  let move;
  if (movePointer > 0) {
    // Undo the previous move in the current step
    move = solution[stepPointer][movePointer - 1];
    movePointer -= 1;
  } else {
    // We're at the start of a step, go back to the last move of the previous step
    stepPointer -= 1;
    movePointer = solution[stepPointer].length - 1;
    move = solution[stepPointer][movePointer];
  }

  const reversedMove = reverse([String(move)])[0];
  const double = reversedMove.includes("2");
  const prime = reversedMove.includes("'");
  const baseMove = reversedMove.replace(/[2']/g, "");

  const {
    cubies,
    setCubies,
    currentXRotation,
    currentYRotation,
    currentZRotation,
    setCurrentXRotation,
    setCurrentYRotation,
    setCurrentZRotation,
    setPrime,
    setButtonsDisabled
  } = useCubiesStore.getState();

  const controller = moveMap[baseMove];
  if (!controller) return;

  controller(
    {
      cubies,
      setCubies,
      currentXRotation,
      currentYRotation,
      currentZRotation,
      setCurrentXRotation,
      setCurrentYRotation,
      setCurrentZRotation,
      double,
      prime,
      setPrime,
      setButtonsDisabled,
      automated: true,
      isUndo: false
    },
    !prime
  );

  // Update pointers
  setStepPointer(stepPointer);
  setMovePointer(movePointer);
};

export default backward;
