import edgePairs from "../../helperFunctions/edgePairs";

const countSolvedPieces = (tempCube, colour) => {
  console.log("TEMP CUBE IN COUNT FUNCTION", tempCube);
  let solvedCount = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if ((i === 1) ^ (j === 1)) {
        // edge piece
        const tile = tempCube.down[i][j];
        const pair = edgePairs[`down[${i}][${j}]`];
        if (
          tempCube[pair.face][1][1] === tempCube[pair.face][2][1] &&
          tile === colour
        ) {
          console.log(tempCube[pair.face][1][1], tempCube[pair.face][2][1]);
          solvedCount += 1;
        }
      }
    }
  }
  console.log("Solved Count:", solvedCount, "for colour:", colour);
};

export default countSolvedPieces;
