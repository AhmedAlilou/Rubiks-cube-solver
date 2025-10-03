import React from "react";
import useCubiesStore from "../../../store/cubiesStore";
import useApplicationStore from "../../../store/applicationStore";
import {
  controllerR,
  controllerL,
  controllerU,
  controllerD,
  controllerF,
  controllerB
} from "../../../../../controller/cubeMoves/regular/index.js";

function Undo() {
  const cubies = useCubiesStore((state) => state.cubies);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const currentXRotation = useCubiesStore((state) => state.currentXRotation);
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  );
  const currentYRotation = useCubiesStore((state) => state.currentYRotation);
  const setCurrentYRotation = useCubiesStore(
    (state) => state.setCurrentYRotation
  );
  const currentZRotation = useCubiesStore((state) => state.currentZRotation);
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );
  const setPrime = useCubiesStore((state) => state.setPrime);
  const buttonsDisabled = useCubiesStore((state) => state.buttonsDisabled);
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );
  const isUndo = true;
  const moveHistory = useApplicationStore((state) => state.moveHistory);
  const setMoveHistory = useApplicationStore((state) => state.setMoveHistory);

  const handleClick = () => {
    if (moveHistory.length === 0 || buttonsDisabled) return;
    console.log("working");
    const [move, double, prime] = moveHistory[moveHistory.length - 1];
    setMoveHistory(moveHistory.slice(0, -1));
    const params = {
      cubies,
      setCubies,
      double,
      prime,
      setPrime,
      setButtonsDisabled,
      automated: false,
      isUndo
    };

    switch (move) {
      case "R":
        controllerR(
          { ...params, currentXRotation, setCurrentXRotation },
          !prime
        );
        break;
      case "L":
        controllerL(
          { ...params, currentXRotation, setCurrentXRotation },
          !prime
        );
        break;
      case "U":
        controllerU(
          { ...params, currentYRotation, setCurrentYRotation },
          !prime
        );
        break;
      case "D":
        controllerD(
          { ...params, currentYRotation, setCurrentYRotation },
          !prime
        );
        break;
      case "F":
        controllerF(
          { ...params, currentZRotation, setCurrentZRotation },
          !prime
        );
        break;
      case "B":
        controllerB(
          { ...params, currentZRotation, setCurrentZRotation },
          !prime
        );
        break;
      default:
        break;
    }
    console.log("moveHistory in Undo: ", moveHistory);
    // call that function that is last in the moveHistory stack with parameters including isUndo = true
  };

  return (
    <button
      className="undo"
      onClick={() => {
        handleClick();
      }}
      disabled={buttonsDisabled || moveHistory.length === 0}
    >
      Undo
    </button>
  );
}

export default Undo;
