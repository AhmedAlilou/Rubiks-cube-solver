const checkForAdjacentCorners = (corners, colour) => {
  let count = 0;
  let largestCount = 0;
  if (corners[3] === colour) {
    count = 1;
    largestCount = 1;
  }

  for (let i = 0; i < 4; i++) {
    if (corners[i] === colour) {
      count++;
      if (count > largestCount) {
        largestCount = count;
      }
    } else {
      count = 0;
    }
  }
  console.log(corners, count, largestCount);
  return largestCount === 2;
};

export default checkForAdjacentCorners;
