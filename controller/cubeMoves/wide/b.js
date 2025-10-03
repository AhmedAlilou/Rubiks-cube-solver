import { handleb } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import b from "../../../model/models/moves/wide/b.js";

const controllerb = (
  {
    cubies,
    setCubies,
    currentZRotation,
    setCurrentZRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated
  },
  clockwise
) => {
  handleb({
    cubies,
    setCubies,
    currentZRotation,
    setCurrentZRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated
  });
  setCube(b(clockwise, getCube()));
  if (double) {
    setCube(b(clockwise, getCube()));
  }
};

export default controllerb;
