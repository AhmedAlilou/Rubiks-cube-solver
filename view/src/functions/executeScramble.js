import {
  controllerB,
  controllerD,
  controllerF,
  controllerL,
  controllerR,
  controllerU
} from "../../../controller/cubeMoves/regular/index.js";
import {
  controllerx,
  controllery,
  controllerz
} from "../../../controller/cubeMoves/rotation/index.js";
import {
  controllerE,
  controllerS,
  controllerM
} from "../../../controller/cubeMoves/slice/index.js";
import {
  controllerb,
  controllerd,
  controllerf,
  controllerl,
  controllerr,
  controlleru
} from "../../../controller/cubeMoves/wide/index.js";

import useCubiesStore from "../store/cubiesStore.js";

const executeScramble = (sequence) => {
  const setButtonsDisabled = useCubiesStore.getState().setButtonsDisabled;
  setButtonsDisabled(true);
  const setMass = useCubiesStore.getState().setMass;
  setMass(0);

  const list = sequence;

  let i = 0;
  function nextMove() {
    if (i >= list.length) {
      setMass(0.8);
      return;
    }

    const cubiesStore = useCubiesStore.getState();
    const {
      cubies,
      setCubies,
      currentXRotation,
      currentYRotation,
      currentZRotation,
      setCurrentXRotation,
      setCurrentYRotation,
      setCurrentZRotation,
      setDouble,
      setPrime,
      setButtonsDisabled
    } = useCubiesStore.getState();

    const move = list[i];
    const double = move.includes("2");
    const prime = move.includes("'");
    setDouble(double);

    switch (move[0]) {
      case "B":
        controllerB(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "D":
        controllerD(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "F":
        controllerF(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "L":
        controllerL(
          {
            cubies,
            setCubies,
            currentXRotation,
            setCurrentXRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "R":
        controllerR(
          {
            cubies,
            setCubies,
            currentXRotation,
            setCurrentXRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "U":
        controllerU(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "x":
        controllerx(
          {
            cubies,
            setCubies,
            currentXRotation,
            setCurrentXRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "y":
        controllery(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "z":
        controllerz(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "M":
        controllerM(
          {
            cubies,
            setCubies,
            currentXRotation,
            setCurrentXRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "E":
        controllerE(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "S":
        controllerS(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "b":
        controllerb(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "d":
        controllerd(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "f":
        controllerf(
          {
            cubies,
            setCubies,
            currentZRotation,
            setCurrentZRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "l":
        controllerl(
          {
            cubies,
            setCubies,
            currentXRotation,
            setCurrentXRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "r":
        controllerr(
          {
            cubies,
            setCubies,
            currentXRotation,
            setCurrentXRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      case "u":
        controlleru(
          {
            cubies,
            setCubies,
            currentYRotation,
            setCurrentYRotation,
            double: double,
            prime: prime,
            setPrime,
            setButtonsDisabled,
            automated: true,
            isUndo: false
          },
          !prime
        );
        break;
      default:
        "WRONG";
        break;
    }

    const waitTime = 100;
    i++;
    setTimeout(nextMove, waitTime);
  }

  nextMove();
};

export default executeScramble;
