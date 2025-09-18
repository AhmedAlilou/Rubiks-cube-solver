import { getCube } from "../../../store/cubeStore.js";
import { setCube } from "../../../store/cubeStore.js";
// helper functions
import rotateFace from "../../helperFunctions/rotateFace.js";
import getCol from "../../helperFunctions/getCol.js";
import setCol from "../../helperFunctions/setCol.js";

const L = (clockwise) => {
  const cube = getCube();

  // 1. Rotate left face
  const newLeft = rotateFace([...cube.left], clockwise);

  // Get values before we change anything
  const values = {
    top: getCol(cube.top, 0),
    front: getCol(cube.front, 0),
    down: getCol(cube.down, 0),
    back: getCol(cube.back, 2)
  };

  // Rotate values around the cycle
  const newCube = { ...cube, left: newLeft };

  if (clockwise) {
    // Clockwise: top → front → down → back → top
    newCube.top = setCol(cube.top, 0, values.back.reverse());
    newCube.back = setCol(cube.back, 2, values.down.reverse());
    newCube.down = setCol(cube.down, 0, values.front);
    newCube.front = setCol(cube.front, 0, values.top);

    console.log("L");
  } else {
    // Anticlockwise: top → back → down → front → top
    newCube.top = setCol(cube.top, 0, values.front);
    newCube.front = setCol(cube.front, 0, values.down);
    newCube.down = setCol(cube.down, 0, values.back.reverse());
    newCube.back = setCol(cube.back, 2, values.top.reverse());
    console.log("L'");
  }

  setCube(newCube);
  console.log(newCube);
};

export default L;
