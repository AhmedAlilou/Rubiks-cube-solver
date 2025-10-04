import { handleM } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import M from "../../../model/models/moves/slice/M.js";

const controllerM = (
  {
    cubies,
    setCubies,
    currentXRotation,
    setCurrentXRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  },
  clockwise
) => {
  handleM({
    cubies,
    setCubies,
    currentXRotation,
    setCurrentXRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  });
  setCube(M(clockwise, getCube()));
  if (double) {
    setCube(M(clockwise, getCube()));
  }
};

export default controllerM;
