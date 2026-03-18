import rotateFace from "../../helperFunctions/rotateFace.js";
import getRow from "../../helperFunctions/getRow.js";
import getCol from "../../helperFunctions/getCol.js";
import setRow from "../../helperFunctions/setRow.js";
import setCol from "../../helperFunctions/setCol.js";

const F = (clockwise, cube) => {
  const newFront = rotateFace([...cube.front], clockwise);
  const values = {
    top: getRow(cube.top, 2),
    right: getCol(cube.right, 0),
    down: getRow(cube.down, 0),
    left: getCol(cube.left, 2)
  };

  const newCube = { ...cube, front: newFront };

  if (clockwise) {
    newCube.top = setRow(cube.top, 2, values.left.reverse());
    newCube.right = setCol(cube.right, 0, values.top);
    newCube.down = setRow(cube.down, 0, values.right.reverse());
    newCube.left = setCol(cube.left, 2, values.down);
  } else {
    newCube.top = setRow(cube.top, 2, values.right);
    newCube.right = setCol(cube.right, 0, values.down.reverse());
    newCube.down = setRow(cube.down, 0, values.left);
    newCube.left = setCol(cube.left, 2, values.top.reverse());
  }
  return newCube;
};

export default F;
