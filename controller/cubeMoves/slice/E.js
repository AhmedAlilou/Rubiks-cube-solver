import { handleE } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import E from "../../../model/models/moves/slice/E.js";

const controllerE = (
  {
    cubies,
    setCubies,
    currentYRotation,
    setCurrentYRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  },
  clockwise
) => {
  handleE({
    cubies,
    setCubies,
    currentYRotation,
    setCurrentYRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  });
  setCube(E(clockwise, getCube()));
  if (double) {
    setCube(E(clockwise, getCube()));
  }
};

export default controllerE;
