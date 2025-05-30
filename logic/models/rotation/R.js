import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getRow from "./helperFunctions/getRow.js";
import getCol from "./helperFunctions/getCol.js";
import setRow from "./helperFunctions/setRow.js";
import setCol from "./helperFunctions/setCol.js";

const R = () => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate right face
  const newRight = rotateFace([...cube.right], true);

  // 2. Handle adjacent faces using cycle notation
  const cycle = {
    from: {
      top: { col: 2, isRow: false },
      back: { col: 0, isRow: false },
      down: { col: 2, isRow: false },
      front: { col: 2, isRow: false }
    }
  };

  // Get values before we change anything
  const values = {
    top: getCol(cube.top, cycle.from.top.col),
    back: getCol(cube.back, cycle.from.back.col),
    down: getCol(cube.down, cycle.from.down.col),
    front: getCol(cube.front, cycle.from.front.col)
  };

  // Rotate values around the cycle
  const newCube = {
    ...cube,
    right: newRight,
    top: setCol(cube.top, cycle.from.top.col, values.front),
    back: setCol(cube.back, cycle.from.back.col, values.top.reverse()),
    down: setCol(cube.down, cycle.from.down.col, values.back.reverse()),
    front: setCol(cube.front, cycle.from.front.col, values.down)
  };

  setCube(newCube);
  console.log(newCube);
};

export default R;
