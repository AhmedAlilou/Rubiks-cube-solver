const findSideByColour = (cube, colour) => {
  for (let side in cube) {
    if (cube[side[1][1] === colour]) {
      console.log(side);
      return side;
    }
  }
};
