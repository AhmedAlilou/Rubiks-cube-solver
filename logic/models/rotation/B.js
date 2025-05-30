import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getRow from "./helperFunctions/getRow.js";
import getCol from "./helperFunctions/getCol.js";
import setRow from "./helperFunctions/setRow.js";
import setCol from "./helperFunctions/setCol.js";

const B = () => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate back face
  const newBack = rotateFace([...cube.back], true);

  // 2. Handle adjacent faces using cycle notation
  const cycle = {
    from: {
      top: { row: 0, isRow: true },
      left: { col: 0, isRow: false },
      down: { row: 2, isRow: true },
      right: { col: 2, isRow: false }
    }
  };

  // Get values before we change anything
  const values = {
    top: getRow(cube.top, cycle.from.top.row),
    left: getCol(cube.left, cycle.from.left.col),
    down: getRow(cube.down, cycle.from.down.row),
    right: getCol(cube.right, cycle.from.right.col)
  };

  // Rotate values around the cycle
  const newCube = {
    ...cube,
    back: newBack,
    top: setRow(cube.top, cycle.from.top.row, values.right),
    left: setCol(cube.left, cycle.from.left.col, values.top.reverse()),
    down: setRow(cube.down, cycle.from.down.row, values.left),
    right: setCol(cube.right, cycle.from.right.col, values.down.reverse())
  };
  setCube(newCube);
  console.log(newCube);
};

export default B;
