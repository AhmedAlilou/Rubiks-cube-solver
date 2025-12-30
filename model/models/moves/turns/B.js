// helper functions
import rotateFace from "../../helperFunctions/rotateFace.js";
import getRow from "../../helperFunctions/getRow.js";
import getCol from "../../helperFunctions/getCol.js";
import setRow from "../../helperFunctions/setRow.js";
import setCol from "../../helperFunctions/setCol.js";

const B = (clockwise, cube) => {
  // 1. Rotate back face
  const newBack = rotateFace([...cube.back], clockwise);

  // 2. Handle adjacent faces using cycle notation
  const values = {
    top: getRow(cube.top, 0),
    left: getCol(cube.left, 0),
    down: getRow(cube.down, 2),
    right: getCol(cube.right, 2)
  };

  const newCube = { ...cube, back: newBack };
  if (clockwise) {
    // Clockwise: top → left → down → right → top
    newCube.top = setRow(cube.top, 0, values.right);
    newCube.right = setCol(cube.right, 2, values.down.reverse());
    newCube.down = setRow(cube.down, 2, values.left);
    newCube.left = setCol(cube.left, 0, values.top.reverse());

    ("B");
  } else {
    // Anticlockwise: top → right → down → left → top
    newCube.top = setRow(cube.top, 0, values.left.reverse());
    newCube.left = setCol(cube.left, 0, values.down);
    newCube.down = setRow(cube.down, 2, values.right.reverse());
    newCube.right = setCol(cube.right, 2, values.top);
    ("B'");
  }
  newCube;
  return newCube;
};

export default B;
