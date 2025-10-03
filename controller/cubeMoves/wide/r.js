import { handler } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import r from "../../../model/models/moves/wide/r.js";

const controllerr = (
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
  handler({
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
  setCube(r(clockwise, getCube()));
  if (double) {
    setCube(r(clockwise, getCube()));
  }
};

export default controllerr;
