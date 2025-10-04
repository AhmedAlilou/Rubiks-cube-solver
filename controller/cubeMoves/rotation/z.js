import { handleZ } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import z from "../../../model/models/moves/rotation/z.js";

const controllerz = (
  {
    cubies,
    setCubies,
    currentZRotation,
    setCurrentZRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  },
  clockwise
) => {
  handleZ({
    cubies,
    setCubies,
    currentZRotation,
    setCurrentZRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  });
  setCube(z(clockwise, getCube()));
  if (double) {
    setCube(z(clockwise, getCube()));
  }
};

export default controllerz;
