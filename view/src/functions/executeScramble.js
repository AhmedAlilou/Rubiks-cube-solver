import formatAlg from "../../../model/models/formatAlg";
import {
  handleX,
  handleY,
  handleZ,
  handleM,
  handleE,
  handleS,
  handleb,
  handled,
  handlef,
  handlel,
  handler,
  handleu
} from "../moves/moveHandlers";
import {
  controllerB,
  controllerD,
  controllerF,
  controllerL,
  controllerR,
  controllerU
} from "../../../controller/cubeMoves/regular/index.js";

import useScrambleStore from "../store/applicationStore";
import useCubiesStore from "../store/cubiesStore";

const executeScramble = (sequence) => {
  const setIsScrambling = useScrambleStore.getState().setIsScrambling;
  setIsScrambling(true);
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
            automated: true
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
            automated: true
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
            automated: true
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
            automated: true
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
            automated: true
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
            automated: true
          },
          !prime
        );
        break;
      case "X":
        handleX(double, prime);
        break;
      case "Y":
        handleY(double, prime);
        break;
      case "Z":
        handleZ(double, prime);
        break;
      case "M":
        handleM(double, prime);
        break;
      case "E":
        handleE(double, prime);
        break;
      case "S":
        handleS(double, prime);
        break;
      case "b":
        handleb(double, prime);
        break;
      case "d":
        handled(double, prime);
        break;
      case "f":
        handlef(double, prime);
        break;
      case "l":
        handlel(double, prime);
        break;
      case "r":
        handler(double, prime);
        break;
      case "u":
        handleu(double, prime);
        break;
      default:
        break;
    }

    const waitTime = 100;
    i++;
    setTimeout(nextMove, waitTime);
  }

  nextMove();
};

export default executeScramble;
