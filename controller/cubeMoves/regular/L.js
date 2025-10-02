import { handleL } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import L from "../../../model/models/moves/turns/L.js";

const controllerL = (
  {
    cubies,
    setCubies,
    currentXRotation,
    setCurrentXRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated
  },
  clockwise
) => {
  handleL({
    cubies,
    setCubies,
    currentXRotation,
    setCurrentXRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated
  });
  setCube(L(clockwise, getCube()));
  if (double) {
    setCube(L(clockwise, getCube()));
  }
};

export default controllerL;
