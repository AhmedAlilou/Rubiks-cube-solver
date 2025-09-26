import { getCube } from "../../../store/cubeStore.js";
import { setCube } from "../../../store/cubeStore.js";
// helper functions
import rotateFace from "../../helperFunctions/rotateFace.js";

const x = (clockwise, cube) => {
  // 1. Rotate faces on the sides
  const newLeft = rotateFace([...cube.left], !clockwise);
  const newRight = rotateFace([...cube.right], clockwise);

  const newCube = { ...cube, left: newLeft, right: newRight };

  if (clockwise) {
    newCube.top = cube.front;
    newCube.back = rotateFace(
      [...rotateFace([...cube.top], clockwise)],
      clockwise
    );
    newCube.down = rotateFace(
      [...rotateFace([...cube.back], clockwise)],
      clockwise
    );
    newCube.front = cube.down;
    console.log("x");
  } else {
    newCube.front = cube.top;
    newCube.top = rotateFace(
      [...rotateFace([...cube.back], clockwise)],
      clockwise
    );
    newCube.back = rotateFace(
      [...rotateFace([...cube.down], clockwise)],
      clockwise
    );
    newCube.down = cube.front;
    console.log("x'");
  }
  console.log(newCube);
  return newCube;
};

export default x;
