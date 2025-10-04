import { handleS } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import S from "../../../model/models/moves/slice/S.js";

const controllerS = (
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
  handleS({
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
  setCube(S(clockwise, getCube()));
  if (double) {
    setCube(S(clockwise, getCube()));
  }
};

export default controllerS;
