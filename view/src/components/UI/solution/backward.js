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
  console.log("out of the hood");
  if (movePointer === 0) {
    stepPointer -= 1;
    movePointer = solution[stepPointer].length - 1;
    console.log("good");
  }

  // execute the reverse move
  let move = "";
  if (movePointer !== 0) {
    move = reverse([String(solution[stepPointer][movePointer - 1])])[0];
  } else {
    move = reverse([String(solution[stepPointer - 1][stepPointer.length])])[0];
  }
  const double = move.includes("2");
  const prime = move.includes("'");
  const baseMove = move.replace(/[2']/g, "");
  console.log(move, solution[stepPointer], movePointer);

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

  if (movePointer === 1) {
    setStepPointer(stepPointer - 1);
    setMovePointer(solution[stepPointer - 1].length);
  } else {
    setMovePointer(movePointer - 1);
  }
};

export default backward;
