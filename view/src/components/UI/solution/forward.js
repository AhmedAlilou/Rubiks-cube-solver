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

const forward = () => {
  const solution = getSolution();
  const stepPointer = getStepPointer();
  const movePointer = getMovePointer();

  if (stepPointer === 3 && movePointer === solution[3].length) {
    return;
  }

  const move = solution[stepPointer][movePointer];
  const double = move.includes("2");
  const prime = move.includes("'");
  const baseMove = move.replace(/[2']/g, "");

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

  if (movePointer === solution[stepPointer].length - 1) {
    setMovePointer(0);
    setStepPointer(stepPointer + 1);
  } else {
    setMovePointer(movePointer + 1);
  }
};

export default forward;
