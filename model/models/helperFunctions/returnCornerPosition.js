import cornerTrios from "./cornerTrios";
const returnCornerPosition = (cube, primaryColour, otherColours) => {
  // this will parallel with the returnEdgePosition func but i need corner triples instead of edgePairs
  for (const face in cube) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== 1 && j !== 1) {
          const tile = cube[face][i][j];
          const otherColourOneInfo = cornerTrios[`${face}[${i}][${j}]`][0];
          const otherColourTwoInfo = cornerTrios[`${face}[${i}][${j}]`][1];
          const otherColourOne =
            cube[otherColourOneInfo.face][otherColourOneInfo.row][
              otherColourOneInfo.col
            ];
          const otherColourTwo =
            cube[otherColourTwoInfo.face][otherColourTwoInfo.row][
              otherColourTwoInfo.col
            ];
          if (
            tile === primaryColour &&
            otherColours.includes(otherColourOne) &&
            otherColours.includes(otherColourTwo)
          ) {
            console.log(primaryColour, otherColours);
            return [face, i, j];
          }
        }
      }
    }
  }
};

export default returnCornerPosition;
