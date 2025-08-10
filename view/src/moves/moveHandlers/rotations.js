const PI = Math.PI;

const handleX = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  prime,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentXRotation(
    prime ? currentXRotation + PI / 2 : currentXRotation - PI / 2
  );
  setPrime(prime);
  setButtonsDisabled(true);
};

const handleY = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  prime,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentYRotation(
    prime ? currentYRotation + PI / 2 : currentYRotation - PI / 2
  );
  setPrime(prime);
  setButtonsDisabled(true);
};

const handleZ = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  prime,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    newCubies[i] = { ...cubies[i], isRotating: true };
  }
  setCubies(newCubies);
  setCurrentZRotation(
    prime ? currentZRotation + PI / 2 : currentZRotation - PI / 2
  );
  setPrime(prime);
  setButtonsDisabled(true);
};

export { handleX, handleY, handleZ };
