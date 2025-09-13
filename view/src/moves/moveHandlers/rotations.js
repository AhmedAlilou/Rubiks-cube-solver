import { x, y, z } from "../../../../model/models/moves/rotation/index.js";
const PI = Math.PI;

const handleX = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled
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
  x(!prime);
  if (double) x(!prime);
};

const handleY = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled
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
  y(!prime);
  if (double) y(!prime);
};

const handleZ = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled
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
  z(!prime);
  if (double) z(!prime);
};

export { handleX, handleY, handleZ };
