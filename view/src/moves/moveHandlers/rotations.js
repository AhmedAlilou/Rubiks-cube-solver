import { x, y, z } from "../../../../model/models/moves/rotation/index.js";
import { setCube, getCube } from "../../../../model/store/cubeStore.js";
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
  setCube(x(!prime, getCube()));
  if (double) setCube(x(!prime, getCube()));
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
  setCube(y(!prime, getCube()));
  if (double) setCube(y(!prime, getCube()));
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
  setCube(z(!prime, getCube()));
  if (double) setCube(z(!prime, getCube()));
};

export { handleX, handleY, handleZ };
