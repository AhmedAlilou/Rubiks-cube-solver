const PI = Math.PI;

const handleM = ({
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
    if (cubies[i].position[0] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentXRotation(
    prime ? currentXRotation - PI / 2 : currentXRotation + PI / 2
  );
  setPrime(!prime);
  setButtonsDisabled(true);
};

const handleE = ({
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
    if (cubies[i].position[1] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentYRotation(
    prime ? currentYRotation - PI / 2 : currentYRotation + PI / 2
  );
  setPrime(!prime);
  setButtonsDisabled(true);
};

const handleS = ({
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
    if (cubies[i].position[2] === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentZRotation(
    prime ? currentZRotation + PI / 2 : currentZRotation - PI / 2
  );
  setPrime(prime);
  setButtonsDisabled(true);
};

export { handleM, handleE, handleS };
