import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getCol from "./helperFunctions/getCol.js";
import setCol from "./helperFunctions/setCol.js";

const R = (clockWise) => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate right face
  const newRight = rotateFace([...cube.right], clockWise);

  // 2. Handle adjacent faces using cycle notation
  const values = {
    top: getCol(cube.top, 2),
    back: getCol(cube.back, 0),
    down: getCol(cube.down, 2),
    front: getCol(cube.front, 2)
  };

  // Rotate values around the cycle
  const newCube = { ...cube, right: newRight };
  if (clockWise) {
    // Clockwise: top → back → down → front → top
    newCube.top = setCol(cube.top, 2, values.front);
    newCube.front = setCol(cube.front, 2, values.down);
    newCube.down = setCol(cube.down, 2, values.back.reverse());
    newCube.back = setCol(cube.back, 0, values.top.reverse());
    console.log("R");
  } else {
    // Anticlockwise: top → front → down → back → top
    newCube.top = setCol(cube.top, 2, values.back.reverse());
    newCube.back = setCol(cube.back, 0, values.down.reverse());
    newCube.down = setCol(cube.down, 2, values.front);
    newCube.front = setCol(cube.front, 2, values.top);
    console.log("R'");
  }

  setCube(newCube);
  console.log(newCube);
};

export default R;
