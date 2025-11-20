const returnSolvedPairs = (cube) => {
  let solvedPairs = [];
  if (
    cube.front[2][2] === cube.front[1][1] &&
    cube.front[1][1] === cube.front[1][2] &&
    cube.right[2][0] === cube.right[1][1] &&
    cube.right[1][1] === cube.right[1][0]
  ) {
    solvedPairs.push([cube.front[1][1], cube.right[1][1]]);
  }
  if (
    cube.right[2][2] === cube.right[1][1] &&
    cube.right[1][1] === cube.right[1][2] &&
    cube.back[2][0] === cube.back[1][1] &&
    cube.back[1][1] === cube.back[1][0]
  ) {
    solvedPairs.push([cube.right[1][1], cube.back[1][1]]);
  }
  if (
    cube.back[2][2] === cube.back[1][1] &&
    cube.back[1][1] === cube.back[1][2] &&
    cube.left[2][0] === cube.left[1][1] &&
    cube.left[1][1] === cube.left[1][0]
  ) {
    solvedPairs.push([cube.back[1][1], cube.left[1][1]]);
  }
  if (
    cube.left[2][2] === cube.left[1][1] &&
    cube.left[1][1] === cube.left[1][2] &&
    cube.front[2][0] === cube.front[1][1] &&
    cube.front[1][1] === cube.front[1][0]
  ) {
    solvedPairs.push([cube.left[1][1], cube.front[1][1]]);
  }
  return solvedPairs;
};

export default returnSolvedPairs;
