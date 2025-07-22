import { getCube } from "../../store/cubeStore.js";
import { setCube } from "../../store/cubeStore.js";
// helper functions
import rotateFace from "../helperFunctions/rotateFace.js";
import getCol from "../helperFunctions/getCol.js";
import setCol from "../helperFunctions/setCol.js";

const y = (clockwise) => {
  const cube = getCube();

  // 1. Rotate faces on the top and bottom
  const newTop = rotateFace([...cube.top], clockwise);
  const newDown = rotateFace([...cube.down], !clockwise);

  const newCube = { ...cube, top: newTop, down: newDown };

  if (clockwise) {
    newCube.left = cube.front;
    newCube.back = cube.left;
    newCube.right = cube.back;
    newCube.front = cube.right;
    console.log("y");
  } else {
    newCube.left = cube.back;
    newCube.front = cube.left;
    newCube.right = cube.front;
    newCube.back = cube.right;
    console.log("y'");
  }
  setCube(newCube);
  console.log(newCube);
};

export default y;
