import { handleX } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import x from "../../../model/models/moves/rotation/x.js";

const controllerx = (
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
  handleX({
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
  setCube(x(clockwise, getCube()));
  if (double) {
    setCube(x(clockwise, getCube()));
  }
};

export default controllerx;
