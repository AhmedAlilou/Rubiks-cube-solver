const PI = Math.PI;

const handleB = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentZRotation(currentZRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true); // Disable buttons during rotation
};

const handleBPrime = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleD = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentYRotation(currentYRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleDPrime = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentYRotation(currentYRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleF = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleFPrime = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentZRotation(currentZRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true); // Disable buttons during rotation
};

const handleL = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentXRotation(currentXRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleLPrime = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentXRotation(currentXRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleR = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentXRotation(currentXRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleRPrime = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentXRotation(currentXRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleU = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentYRotation(currentYRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleUPrime = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
  setPrime,
  setButtonsDisabled
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
  setCurrentYRotation(currentYRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

export {
  handleB,
  handleBPrime,
  handleD,
  handleDPrime,
  handleF,
  handleFPrime,
  handleL,
  handleLPrime,
  handleR,
  handleRPrime,
  handleU,
  handleUPrime
};
