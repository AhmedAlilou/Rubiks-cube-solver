import { getCube } from "../../../store/cubeStore.js";
import { setCube } from "../../../store/cubeStore.js";
// helper functions
import rotateFace from "../../helperFunctions/rotateFace.js";
import getRow from "../../helperFunctions/getRow.js";
import setRow from "../../helperFunctions/setRow.js";

const U = (clockwise) => {
  const cube = getCube();

  // 1. Rotate top face
  const newTop = rotateFace([...cube.top], clockwise);
  // 2. Handle adjacent faces using cycle notation
  const values = {
    back: getRow(cube.back, 0),
    right: getRow(cube.right, 0),
    front: getRow(cube.front, 0),
    left: getRow(cube.left, 0)
  };
  // Rotate values around the cycle
  const newCube = { ...cube, top: newTop };
  if (clockwise) {
    // Clockwise: back → right → front → left → back
    newCube.back = setRow(cube.back, 0, values.left);
    newCube.left = setRow(cube.left, 0, values.front);
    newCube.front = setRow(cube.front, 0, values.right);
    newCube.right = setRow(cube.right, 0, values.back);

    console.log("U");
  } else {
    // Anticlockwise: back → left → front → right → back
    newCube.back = setRow(cube.back, 0, values.right);
    newCube.right = setRow(cube.right, 0, values.front);
    newCube.front = setRow(cube.front, 0, values.left);
    newCube.left = setRow(cube.left, 0, values.back);

    console.log("U'");
  }
  setCube(newCube);
  console.log(newCube);
};

export default U;
