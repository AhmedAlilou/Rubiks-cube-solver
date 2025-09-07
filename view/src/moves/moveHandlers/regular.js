import { x, y, z } from "../../../../model/models/rotation/index.js";
import { M, S, E } from "../../../../model/models/slice/index.js";
import { F, U, D, B, L, R } from "../../../../model/models/turns/index.js";
import { f, u, d, b, l, r } from "../../../../model/models/wide/index.js";

const PI = Math.PI;

const handleB = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[2] === -1) {
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
  if (!automated) {
    setButtonsDisabled(true);
  }

  B(!prime);
  if (double) B(!prime);
};

const handleD = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[1] === -1) {
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
  if (!automated) {
    setButtonsDisabled(true);
  }

  D(!prime);
  if (double) D(!prime);
};

const handleF = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[2] === 1) {
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
  if (!automated) {
    setButtonsDisabled(true);
  }

  F(!prime);
  if (double) F(!prime);
};

const handleL = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[0] === -1) {
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
  if (!automated) {
    setButtonsDisabled(true);
  }

  L(!prime);
  if (double) L(!prime);
};

const handleR = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[0] === 1) {
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
  if (!automated) {
    setButtonsDisabled(true);
  }

  R(!prime);
  if (double) R(!prime);
};

const handleU = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  double,
  prime,
  setPrime,
  setButtonsDisabled,
  automated
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[1] === 1) {
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
  if (!automated) {
    setButtonsDisabled(true);
  }

  U(!prime);
  if (double) U(!prime);
};

export { handleB, handleD, handleF, handleL, handleR, handleU };
