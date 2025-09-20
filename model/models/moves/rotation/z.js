// helper functions
import rotateFace from "../../helperFunctions/rotateFace.js";

const z = (clockwise, cube) => {
  // 1. Rotate faces on the front and back
  const newFront = rotateFace([...cube.front], clockwise);
  const newBack = rotateFace([...cube.back], !clockwise);

  const newCube = { ...cube, front: newFront, back: newBack };

  if (clockwise) {
    newCube.top = rotateFace([...cube.left], clockwise);
    newCube.right = rotateFace([...cube.top], clockwise);
    newCube.down = rotateFace([...cube.right], clockwise);
    newCube.left = rotateFace([...cube.down], clockwise);
    console.log("z");
  } else {
    newCube.top = rotateFace([...cube.right], clockwise);
    newCube.left = rotateFace([...cube.top], clockwise);
    newCube.down = rotateFace([...cube.left], clockwise);
    newCube.right = rotateFace([...cube.down], clockwise);
    console.log("z'");
  }
  console.log(newCube);
  return newCube;
};

export default z;
