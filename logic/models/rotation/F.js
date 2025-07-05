import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getRow from "./helperFunctions/getRow.js";
import getCol from "./helperFunctions/getCol.js";
import setRow from "./helperFunctions/setRow.js";
import setCol from "./helperFunctions/setCol.js";

const F = (clockwise) => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate front face
  const newFront = rotateFace([...cube.front], clockwise);

  // Get values before we change anything
  const values = {
    top: getRow(cube.top, 2),
    right: getCol(cube.right, 0),
    down: getRow(cube.down, 0),
    left: getCol(cube.left, 2)
  };

  // Rotate values around the cycle based on direction
  const newCube = { ...cube, front: newFront };

  if (clockwise) {
    // Clockwise: top → right → down → left → top
    newCube.top = setRow(cube.top, 2, values.left.reverse());
    newCube.right = setCol(cube.right, 0, values.top);
    newCube.down = setRow(cube.down, 0, values.right.reverse());
    newCube.left = setCol(cube.left, 2, values.down);
    console.log("F");
  } else {
    // Anticlockwise: top → left → down → right → top
    newCube.top = setRow(cube.top, 2, values.right);
    newCube.right = setCol(cube.right, 0, values.down.reverse());
    newCube.down = setRow(cube.down, 0, values.left);
    newCube.left = setCol(cube.left, 2, values.top.reverse());
    console.log("F'");
  }

  setCube(newCube);
  console.log(newCube);
};

export default F;
