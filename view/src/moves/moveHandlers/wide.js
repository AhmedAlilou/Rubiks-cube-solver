import { f, u, d, b, l, r } from "../../../../model/models/moves/wide/index.js";
import { setCube, getCube } from "../../../../model/store/cubeStore.js";
const PI = Math.PI;

const handleb = ({
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
    if (cubies[i].position[2] === -1 || cubies[i].position[2] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentZRotation(
    prime ? currentZRotation - amount : currentZRotation + amount
  );
  setPrime(!prime);
  setButtonsDisabled(true); // Disable buttons during rotation

  setCube(b(!prime, getCube()));
  if (double) setCube(b(!prime, getCube()));
};

const handled = ({
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
    if (cubies[i].position[1] === -1 || cubies[i].position[1] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentYRotation(
    prime ? currentYRotation - amount : currentYRotation + amount
  );
  setPrime(!prime);
  setButtonsDisabled(true);
  setCube(d(!prime, getCube()));
  if (double) setCube(d(!prime, getCube()));
};

const handlef = ({
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
    if (cubies[i].position[2] === 1 || cubies[i].position[2] == 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentZRotation(
    prime ? currentZRotation + amount : currentZRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  setCube(f(!prime, getCube()));
  if (double) setCube(f(!prime, getCube()));
};

const handlel = ({
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
    if (cubies[i].position[0] === -1 || cubies[i].position[0] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentXRotation(
    prime ? currentXRotation - amount : currentXRotation + amount
  );
  setPrime(!prime);
  setButtonsDisabled(true);
  setCube(l(!prime, getCube()));
  if (double) setCube(l(!prime, getCube()));
};

const handler = ({
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
    if (cubies[i].position[0] === 1 || cubies[i].position[0] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentXRotation(
    prime ? currentXRotation + amount : currentXRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  setCube(r(!prime, getCube()));
  if (double) setCube(r(!prime, getCube()));
};

const handleu = ({
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
    if (cubies[i].position[1] === 1 || cubies[i].position[1] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  const amount = double ? PI : PI / 2;
  setCurrentYRotation(
    prime ? currentYRotation + amount : currentYRotation - amount
  );
  setPrime(prime);
  setButtonsDisabled(true);
  setCube(u(!prime, getCube()));
  if (double) setCube(u(!prime, getCube()));
};

export { handleb, handled, handlef, handlel, handler, handleu };
