import { handleD } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import D from "../../../model/models/moves/turns/D.js";

const controllerD = (
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
  handleD({
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
  setCube(D(clockwise, getCube()));
  if (double) {
    setCube(D(clockwise, getCube()));
  }
};

export default controllerD;
