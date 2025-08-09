const PI = Math.PI;

const handleb = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[2] === -1 || cubies[i].position === 0) {
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

const handlebPrime = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
  setPrime,
  setButtonsDisabled
}) => {
  const newCubies = {};
  for (const i in cubies) {
    if (cubies[i].position[2] === -1 || cubies[i].position === 0) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true); // Disable buttons during rotation
};

const handled = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
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
  setCurrentYRotation(currentYRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handledPrime = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
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
  setCurrentYRotation(currentYRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handlef = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
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
  setCurrentZRotation(currentZRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handlefPrime = ({
  cubies,
  setCubies,
  currentZRotation,
  setCurrentZRotation,
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
  setCurrentZRotation(currentZRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handlel = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
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
  setCurrentXRotation(currentXRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handlelPrime = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
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
  setCurrentXRotation(currentXRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handler = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
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
  setCurrentXRotation(currentXRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handlerPrime = ({
  cubies,
  setCubies,
  currentXRotation,
  setCurrentXRotation,
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
  setCurrentXRotation(currentXRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

const handleu = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
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
  setCurrentYRotation(currentYRotation - PI / 2);
  setPrime(false);
  setButtonsDisabled(true);
};

const handleuPrime = ({
  cubies,
  setCubies,
  currentYRotation,
  setCurrentYRotation,
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
  setCurrentYRotation(currentYRotation + PI / 2);
  setPrime(true);
  setButtonsDisabled(true);
};

export {
  handleb,
  handlebPrime,
  handled,
  handledPrime,
  handlef,
  handlefPrime,
  handlel,
  handlelPrime,
  handler,
  handlerPrime,
  handleu,
  handleuPrime
};
