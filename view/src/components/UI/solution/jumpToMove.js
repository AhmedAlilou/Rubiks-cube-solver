import {
  getSolution,
  getStepPointer,
  setStepPointer,
  getMovePointer,
  setMovePointer
} from "../../../../../model/store/solveStore.js";

import reverse from "./reverse.js";
import executeScramble from "../../../functions/executeScramble.js";

const jumpToMove = (targetStep, targetMove) => {
  const solution = getSolution();
  const currentStep = getStepPointer();
  const currentMove = getMovePointer();

  if (currentStep === targetStep && currentMove === targetMove) return;

  const isBehind =
    currentStep > targetStep ||
    (currentStep === targetStep && currentMove > targetMove);

  if (isBehind) {
    const movesToReverse = [];
    for (let i = currentStep; i >= targetStep; i--) {
      const startJ =
        i === currentStep ? currentMove - 1 : solution[i].length - 1;
      for (let j = startJ; j >= 0; j--) {
        if (i === targetStep && j < targetMove) break;
        movesToReverse.unshift(solution[i][j]);
      }
    }

    if (movesToReverse.length > 0) {
      const reversedMoves = reverse(movesToReverse);
      executeScramble(reversedMoves);
    }
  } else {
    const movesToExecute = [];
    for (let i = currentStep; i <= targetStep; i++) {
      const startJ = i === currentStep ? currentMove : 0;
      const endJ = i === targetStep ? targetMove : solution[i].length;
      for (let j = startJ; j < endJ; j++) {
        movesToExecute.push(solution[i][j]);
      }
    }

    if (movesToExecute.length > 0) {
      executeScramble(movesToExecute);
    }
  }

  setStepPointer(targetStep);
  setMovePointer(targetMove);
};

export default jumpToMove;
