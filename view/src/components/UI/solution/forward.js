import {
  getSolution,
  getStepPointer,
  getMovePointer,
  setMovePointer
} from "../../../model/store/solveStore";

// first check if the step pointer is 3 and the move pointer is at the end of the PLL solution, if so, don't do anything

const forward = () => {
  const solution = getSolution();
  const stepPointer = getStepPointer();
  const movePointer = getMovePointer();
};

export default forward;
