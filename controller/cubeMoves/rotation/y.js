import { handleY } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import y from "../../../model/models/moves/rotation/y.js";

const controllery = (
  {
    cubies,
    setCubies,
    currentYRotation,
    setCurrentYRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  },
  clockwise
) => {
  handleY({
    cubies,
    setCubies,
    currentYRotation,
    setCurrentYRotation,
    double,
    prime,
    setPrime,
    setButtonsDisabled,
    automated,
    isUndo
  });
  setCube(y(clockwise, getCube()));
  if (double) {
    setCube(y(clockwise, getCube()));
  }
};

export default controllery;
