const PI = Math.PI;

const handleb = ({
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
    if (cubies[i].position[2] === -1 || cubies[i].position[2] === 0) {
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
  setButtonsDisabled(true); // Disable buttons during rotation
};

const handled = ({
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
    if (cubies[i].position[1] === -1 || cubies[i].position[1] === 0) {
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

const handlef = ({
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
    if (cubies[i].position[2] === 1 || cubies[i].position[2] == 0) {
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

const handlel = ({
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
    if (cubies[i].position[0] === -1 || cubies[i].position[0] === 0) {
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

const handler = ({
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
    if (cubies[i].position[0] === 1 || cubies[i].position[0] === 0) {
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
  setButtonsDisabled(true);
};

const handleu = ({
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
    if (cubies[i].position[1] === 1 || cubies[i].position[1] === 0) {
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
  setButtonsDisabled(true);
};

export { handleb, handled, handlef, handlel, handler, handleu };
