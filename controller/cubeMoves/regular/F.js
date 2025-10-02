import { handleF } from "../../../view/src/moves/moveHandlers";
import { getCube, setCube } from "../../../model/store/cubeStore.js";
import F from "../../../model/models/moves/turns/F.js";

const controllerF = (
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
  handleF({
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
  setCube(F(clockwise, getCube()));
};

export default controllerF;
