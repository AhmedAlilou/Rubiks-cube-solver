import useApplicationStore from "../../store/applicationStore";
import useCubiesStore from "../../store/cubiesStore.js";
const setMoveHistory = useApplicationStore.getState().setMoveHistory;
const PI = Math.PI;
const setDouble = useCubiesStore.getState().setDouble;

const handleM = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated,
  isUndo
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[0] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setDouble(double);
  setCurrentXRotation(
    prime ? currentXRotation - amount : currentXRotation + amount
  );
  setPrime(!prime);
  setButtonsDisabled(true);

  if (!isUndo && !automated) {
    setMoveHistory([
      ...useApplicationStore.getState().moveHistory,
      ["M", double, !prime]
    ]);
  }
};

const handleE = ({
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
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[1] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setDouble(double);
  setCurrentYRotation(
    prime ? currentYRotation - amount : currentYRotation + amount
  );
  setPrime(!prime);
  setButtonsDisabled(true);
  if (!isUndo && !automated) {
    setMoveHistory([
      ...useApplicationStore.getState().moveHistory,
      ["E", double, !prime]
    ]);
  }
};

const handleS = ({
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
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[2] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setDouble(double);
  setCurrentZRotation(
    prime ? currentZRotation + amount : currentZRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  if (!isUndo && !automated) {
    setMoveHistory([
      ...useApplicationStore.getState().moveHistory,
      ["S", double, !prime]
    ]);
  }
};

export { handleM, handleE, handleS };
