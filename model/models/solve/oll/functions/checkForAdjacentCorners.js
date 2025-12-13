const checkForAdjacentCorners = (corners, colour) => {
  let count = 0;
  let largestCount = 0;
  if (corners[3] === colour) {
    count = 1;
    largestCount = 1;
  }

  corners.map((corner) => {
    if (corner === colour) {
      count++;
      if (count > largestCount) {
        largestCount++;
      }
    } else {
      count = 0;
    }
  });
  return largestCount === 2;
};

export default checkForAdjacentCorners;
