import { handleu } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import u from "../../../model/models/moves/wide/u.js";

const controlleru = (
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
  handleu({
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
  setCube(u(clockwise, getCube()));
  if (double) {
    setCube(u(clockwise, getCube()));
  }
};

export default controlleru;
