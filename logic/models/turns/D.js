import { getCube } from "../../store/cubeStore.js";
import { setCube } from "../../store/cubeStore.js";
// helper functions
import rotateFace from "../helperFunctions/rotateFace.js";
import getRow from "../helperFunctions/getRow.js";
import setRow from "../helperFunctions/setRow.js";

const D = (clockwise) => {
  const cube = getCube();

  // 1. Rotate down face
  const newDown = rotateFace([...cube.down], clockwise);
  // 2. Handle adjacent faces using cycle notation
  const values = {
    front: getRow(cube.front, 2),
    right: getRow(cube.right, 2),
    back: getRow(cube.back, 2),
    left: getRow(cube.left, 2)
  };

  const newCube = { ...cube, down: newDown };
  if (clockwise) {
    // Clockwise: front → right → back → left → front
    newCube.front = setRow(cube.front, 2, values.left);
    newCube.left = setRow(cube.left, 2, values.back);
    newCube.back = setRow(cube.back, 2, values.right);
    newCube.right = setRow(cube.right, 2, values.front);

    console.log("D");
  } else {
    // Anticlockwise: front → left → back → right → front
    newCube.front = setRow(cube.front, 2, values.right);
    newCube.right = setRow(cube.right, 2, values.back);
    newCube.back = setRow(cube.back, 2, values.left);
    newCube.left = setRow(cube.left, 2, values.front);
    console.log("D'");
  }
  setCube(newCube);
  console.log(newCube);
};

export default D;
