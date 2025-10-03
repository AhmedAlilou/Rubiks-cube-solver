import { handlel } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import l from "../../../model/models/moves/wide/l.js";

const controllerl = (
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
  handlel({
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
  setCube(l(clockwise, getCube()));
  if (double) {
    setCube(l(clockwise, getCube()));
  }
};

export default controllerl;
