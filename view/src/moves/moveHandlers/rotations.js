const PI = Math.PI;

const handleX = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentXRotation(currentXRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleXPrime = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentXRotation(currentXRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleY = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentYRotation(currentYRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleYPrime = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentYRotation(currentYRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleZ = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleZPrime = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

export { handleX, handleXPrime, handleY, handleYPrime, handleZ, handleZPrime };
