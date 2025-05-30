import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getRow from "./helperFunctions/getRow.js";
import getCol from "./helperFunctions/getCol.js";
import setRow from "./helperFunctions/setRow.js";
import setCol from "./helperFunctions/setCol.js";

const L = () => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate left face
  const newLeft = rotateFace([...cube.left], true);

  // 2. Handle adjacent faces using cycle notation
  const cycle = {
    from: {
      top: { col: 0, isRow: false },
      front: { col: 0, isRow: false },
      down: { col: 0, isRow: false },
      back: { col: 2, isRow: false }
    }
  };

  // Get values before we change anything
  const values = {
    top: getCol(cube.top, cycle.from.top.col),
    front: getCol(cube.front, cycle.from.front.col),
    down: getCol(cube.down, cycle.from.down.col),
    back: getCol(cube.back, cycle.from.back.col)
  };

  // Rotate values around the cycle
  const newCube = {
    ...cube,
    left: newLeft,
    top: setCol(cube.top, cycle.from.top.col, values.back.reverse()),
    front: setCol(cube.front, cycle.from.front.col, values.top),
    down: setCol(cube.down, cycle.from.down.col, values.front.reverse()),
    back: setCol(cube.back, cycle.from.back.col, values.down)
  };

  setCube(newCube);
  console.log(newCube);
};

export default L;
