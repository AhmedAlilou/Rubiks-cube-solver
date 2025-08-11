const PI = Math.PI;

const handleb = ({
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
    if (cubies[i].position[2] === -1 || cubies[i].position[2] === 0) {
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

const handled = ({
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
    if (cubies[i].position[1] === -1 || cubies[i].position[1] === 0) {
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

const handlef = ({
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
    if (cubies[i].position[2] === 1 || cubies[i].position[2] == 0) {
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

const handlel = ({
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
    if (cubies[i].position[0] === -1 || cubies[i].position[0] === 0) {
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

const handler = ({
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
    if (cubies[i].position[0] === 1 || cubies[i].position[0] === 0) {
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

const handleu = ({
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
    if (cubies[i].position[1] === 1 || cubies[i].position[1] === 0) {
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

export { handleb, handled, handlef, handlel, handler, handleu };
