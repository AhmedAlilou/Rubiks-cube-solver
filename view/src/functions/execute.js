import formatAlg from "../../../model/models/formatAlg";
import {
  handleB,
  handleD,
  handleF,
  handleL,
  handleR,
  handleU,
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
} from "../moves/moveHandlers/";
import useScrambleStore from "../store/scrambleStore";

import useCubiesStore from "../store/cubiesStore";

const execute = (sequence) => {
  const setMass = useCubiesStore.getState().setMass;
  setMass(0);

  const list = sequence;

  let i = 0;
  function nextMove() {
    if (i >= list.length) {
      setMass(1);
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
    } = cubiesStore;

    const move = list[i];
    const double = move.includes("2");
    const prime = move.includes("'");
    setDouble(double);

    switch (move[0]) {
      case "B":
        handleB({
          cubies,
          setCubies,
          currentZRotation,
          setCurrentZRotation,
          double: double,
          prime: prime,
          setPrime,
          setButtonsDisabled,
          automated: true
        });
        break;
      case "D":
        handleD({
          cubies,
          setCubies,
          currentYRotation,
          setCurrentYRotation,
          double: double,
          prime: prime,
          setPrime,
          setButtonsDisabled,
          automated: true
        });
        break;
      case "F":
        handleF({
          cubies,
          setCubies,
          currentZRotation,
          setCurrentZRotation,
          double: double,
          prime: prime,
          setPrime,
          setButtonsDisabled,
          automated: true
        });
        break;
      case "L":
        handleL({
          cubies,
          setCubies,
          currentXRotation,
          setCurrentXRotation,
          double: double,
          prime: prime,
          setPrime,
          setButtonsDisabled,
          automated: true
        });
        break;
      case "R":
        handleR({
          cubies,
          setCubies,
          currentXRotation,
          setCurrentXRotation,
          double: double,
          prime: prime,
          setPrime,
          setButtonsDisabled,
          automated: true
        });
        break;
      case "U":
        handleU({
          cubies,
          setCubies,
          currentYRotation,
          setCurrentYRotation,
          double: double,
          prime: prime,
          setPrime,
          setButtonsDisabled,
          automated: true
        });
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

    const waitTime = 200;
    i++;
    setTimeout(nextMove, waitTime);
  }

  nextMove();
};

export default execute;
