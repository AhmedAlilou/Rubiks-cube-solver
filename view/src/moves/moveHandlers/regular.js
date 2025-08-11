const PI = Math.PI;

const handleB = ({
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
    if (cubies[i].position[2] === -1) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentZRotation(
    prime ? currentZRotation - PI / 2 : currentZRotation + PI / 2
  );
  setPrime(!prime);
  setButtonsDisabled(true); // Disable buttons during rotation
};

const handleD = ({
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
    if (cubies[i].position[1] === -1) {
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

const handleF = ({
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
    if (cubies[i].position[2] === 1) {
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

const handleL = ({
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
    if (cubies[i].position[0] === -1) {
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

const handleR = ({
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
    if (cubies[i].position[0] === 1) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentXRotation(
    prime ? currentXRotation + PI / 2 : currentXRotation - PI / 2
  );
  setPrime(prime);
  setButtonsDisabled(true);
};

const handleU = ({
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
    if (cubies[i].position[1] === 1) {
      newCubies[i] = { ...cubies[i], isRotating: true };
    } else {
      newCubies[i] = { ...cubies[i], isRotating: false };
    }
  }
  setCubies(newCubies);
  setCurrentYRotation(
    prime ? currentYRotation + PI / 2 : currentYRotation - PI / 2
  );
  setPrime(prime);
  setButtonsDisabled(true);
};

export { handleB, handleD, handleF, handleL, handleR, handleU };
