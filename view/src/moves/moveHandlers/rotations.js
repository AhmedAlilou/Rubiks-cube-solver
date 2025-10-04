import useApplicationStore from "../../store/applicationStore";
const setMoveHistory = useApplicationStore.getState().setMoveHistory;
const PI = Math.PI;

const handleX = ({
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
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentXRotation(
    prime ? currentXRotation + amount : currentXRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  if (!isUndo && !automated) {
    setMoveHistory([
      ...useApplicationStore.getState().moveHistory,
      ["x", double, !prime]
    ]);
  }
};

const handleY = ({
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
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentYRotation(
    prime ? currentYRotation + amount : currentYRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  if (!isUndo && !automated) {
    setMoveHistory([
      ...useApplicationStore.getState().moveHistory,
      ["y", double, !prime]
    ]);
  }
};

const handleZ = ({
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
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentZRotation(
    prime ? currentZRotation + amount : currentZRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  if (!isUndo && !automated) {
    setMoveHistory([
      ...useApplicationStore.getState().moveHistory,
      ["z", double, !prime]
    ]);
  }
};

export { handleX, handleY, handleZ };
