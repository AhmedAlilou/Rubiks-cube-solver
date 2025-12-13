const checkForOppositeCorners = (corners, colour) => {
  let numOfColour = 0;
  corners.forEach((c) => {
    if (c === colour) {
      numOfColour++;
    }
  });

  if (numOfColour !== 2) {
    return false;
  }
  if (corners[0] === colour) {
    return corners[2] === colour;
  } else if (corners[1] === colour) {
    return corners[3] === colour;
  }
  return false;
};

export default checkForOppositeCorners;
