const checkForSolved = (sideRows, topLayer, colour) => {
  console.log(topLayer, sideRows);
  for (let i = 0; i < 4; i++) {
    if (sideRows[i].includes(colour)) {
      return false;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (topLayer[i][j] !== colour) {
        return false;
      }
    }
  }
  return true;
};

export default checkForSolved;
