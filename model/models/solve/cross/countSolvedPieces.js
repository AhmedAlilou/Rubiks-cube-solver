import edgePairs from "../../helperFunctions/edgePairs";

const countSolvedPieces = (tempCube, colour) => {
  let solvedCount = 0;
  const solvedColours = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if ((i === 1) ^ (j === 1)) {
        // edge piece
        const tile = tempCube.down[i][j];
        const pair = edgePairs[`down[${i}][${j}]`];
        if (
          tempCube[pair.face][1][1] === tempCube[pair.face][2][1] &&
          tile === colour // its a solved piece
        ) {
          solvedCount += 1;
          solvedColours.push(tempCube[pair.face][1][1]);
        }
      }
    }
  }
  return [solvedCount, solvedColours];
};

export default countSolvedPieces;
