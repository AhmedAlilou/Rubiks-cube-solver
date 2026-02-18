import {
  getSolution,
  getStepPointer,
  getMovePointer,
  setMovePointer
} from "../../../model/store/solveStore";

// first check if the step pointer is at 0, and the move pointer is at 0, if so, don't do anything

const backward = () => {
  const solution = getSolution();
  const stepPointer = getStepPointer();
  const movePointer = getMovePointer();
};

export default backward;
