const PI = Math.PI;

const handleM = ({
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
    if (cubies[i].position[0] === 0) {
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
};

const handleE = ({
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
    if (cubies[i].position[1] === 0) {
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
};

const handleS = ({
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
    if (cubies[i].position[2] === 0) {
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
};

export { handleM, handleE, handleS };
