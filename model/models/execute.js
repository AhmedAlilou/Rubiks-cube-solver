import { F, U, D, B, L, R } from "./moves/turns/index.js";
import { M, S, E } from "./moves/slice/index.js";
import { x, y, z } from "./moves/rotation/index.js";
import { f, u, d, b, l, r } from "./moves/wide/index.js";
import useCubiesStore from "../../view/src/store/cubiesStore.js";

import {
  controllerF,
  controllerU,
  controllerD,
  controllerB,
  controllerL,
  controllerR
  // ...other controllers as needed
} from "../../controller/cubeMoves/regular/index.js";

import {
  controllerM,
  controllerS,
  controllerE
} from "../../controller/cubeMoves/slice/index.js";

import {
  controllerx,
  controllery,
  controllerz
} from "../../controller/cubeMoves/rotation/index.js";

import {
  controllerf,
  controlleru,
  controllerd,
  controllerb,
  controllerl,
  controllerr
} from "../../controller/cubeMoves/wide/index.js";

const controllerFunctions = {
  F: controllerF,
  U: controllerU,
  D: controllerD,
  B: controllerB,
  L: controllerL,
  R: controllerR,
  M: controllerM,
  S: controllerS,
  E: controllerE,
  x: controllerx,
  y: controllery,
  z: controllerz,
  f: controllerf,
  u: controlleru,
  d: controllerd,
  b: controllerb,
  l: controllerl,
  r: controllerr
};

const execute = (moves) => {
  // Map of all move names to their corresponding functions
  ("MOVES:", moves);
  if (moves.length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    let i = 0;
    function nextMove() {
      if (i >= moves.length) {
        resolve();
        return;
      }
      const move = moves[i];
      // Match: base letter + optional 2 or 3 + optional prime
      const match = move.trim().match(/^([A-Za-z])([23]?)(['"]?)$/);

      if (!match) {
        console.warn(`Invalid move format: "${move}"`);
        return;
      }

      const [, base, countStr, prime] = match;

      const controller = controllerFunctions[base];
      if (!controller) {
        console.warn(`No function found for move: "${base}"`);
        return;
      }
      const double = countStr === "2";
      const isPrime = prime === "'";
      const count = countStr ? parseInt(countStr) : 1;

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

      let params = {
        cubies,
        setCubies,
        double: double,
        prime: isPrime,
        setPrime,
        setButtonsDisabled,
        automated: true,
        isUndo: false
      };
      if (
        base === "F" ||
        base === "B" ||
        base === "f" ||
        base === "b" ||
        base === "S" ||
        base === "z"
      ) {
        params.currentZRotation = currentZRotation;
        params.setCurrentZRotation = setCurrentZRotation;
      } else if (
        base === "L" ||
        base === "R" ||
        base === "l" ||
        base === "r" ||
        base === "M" ||
        base === "x"
      ) {
        params.currentXRotation = currentXRotation;
        params.setCurrentXRotation = setCurrentXRotation;
      } else if (
        base === "U" ||
        base === "D" ||
        base === "u" ||
        base === "d" ||
        base === "E" ||
        base === "y"
      ) {
        params.currentYRotation = currentYRotation;
        params.setCurrentYRotation = setCurrentYRotation;
      }
      (isPrime, base, double);
      controller(params, !isPrime);
      i++;
      setTimeout(nextMove, 1000);
    }
    nextMove();
  });
};

export default execute;
