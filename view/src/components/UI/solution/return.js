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
import executeScramble from "../../../functions/executeScramble.js";

const returnToStart = () => {
  const solution = getSolution();
  const stepPointer = getStepPointer();
  const movePointer = getMovePointer();
  const movesToReverse = [];

  if (stepPointer === 0 && movePointer === 0) return;

  for (let i = 0; i <= stepPointer; i++) {
    for (let j = 0; j < solution[i].length; j++) {
      if (
        (i === stepPointer && j >= movePointer) ||
        (i !== stepPointer && j >= solution[i].length)
      ) {
        break;
      } else {
        movesToReverse.push(solution[i][j]);
      }
    }
  }
  const reversedMoves = reverse(movesToReverse);
  executeScramble(reversedMoves);
  setStepPointer(0);
  setMovePointer(0);
};

export default returnToStart;
