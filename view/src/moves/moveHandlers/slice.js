const PI = Math.PI;

const handleM = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
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
  setCurrentXRotation(currentXRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleMPrime = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
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
  setCurrentXRotation(currentXRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleE = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
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
  setCurrentYRotation(currentYRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleEPrime = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
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
  setCurrentYRotation(currentYRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleS = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
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
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleSPrime = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
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
  setCurrentZRotation(currentZRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

export { handleM, handleMPrime, handleE, handleEPrime, handleS, handleSPrime };
