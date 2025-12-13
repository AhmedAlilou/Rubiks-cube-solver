const checkForOneSolvedCorner = (corners, colour) => {
  let count = 0;

  corners.forEach((c) => {
    if (c === colour) {
      count++;
    }
  });
  return count === 1;
};

export default checkForOneSolvedCorner;
