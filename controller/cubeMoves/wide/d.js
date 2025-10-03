import { handled } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import d from "../../../model/models/moves/wide/d.js";

const controllerd = (
  {
    cubies,
    setCubies,
    currentYRotation,
    setCurrentYRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated
  },
  clockwise
) => {
  handled({
    cubies,
    setCubies,
    currentYRotation,
    setCurrentYRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated
  });
  setCube(d(clockwise, getCube()));
  if (double) {
    setCube(d(clockwise, getCube()));
  }
};

export default controllerd;
