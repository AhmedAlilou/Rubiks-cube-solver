import { handlef } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import f from "../../../model/models/moves/wide/f.js";

const controllerf = (
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
  handlef({
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
  setCube(f(clockwise, getCube()));
  if (double) {
    setCube(f(clockwise, getCube()));
  }
};

export default controllerf;
