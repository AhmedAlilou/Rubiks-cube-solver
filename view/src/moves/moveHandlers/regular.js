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
  console.log(automated);
  if (!automated) {
    setButtonsDisabled(true);
  }
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
};

export { handleB, handleD, handleF, handleL, handleR, handleU };
