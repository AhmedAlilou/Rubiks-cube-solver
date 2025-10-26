import colourInfo from "./colourInfo";
import edgePairs from "./edgePairs";

const returnEdgePosition = (cube, primaryColour, secondaryColour) => {
  // below loop through the faces in cube
  for (const face in cube) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if ((i === 1) ^ (j === 1)) {
          const tile = cube[face][i][j];
          const pair = edgePairs[`${face}[${i}][${j}]`];
          const pairTile = cube[pair.face][pair.row][pair.col];
          if (tile === primaryColour && pairTile === secondaryColour) {
            return { face: face, row: i, col: j };
          }
        }
      }
    }
  }
  return null;
};

export default returnEdgePosition;
