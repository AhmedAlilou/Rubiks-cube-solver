import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getRow from "./helperFunctions/getRow.js";
import setRow from "./helperFunctions/setRow.js";

const U = () => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate top face
  const newTop = rotateFace([...cube.top], true);
  // 2. Handle adjacent faces using cycle notation
  const cycle = {
    from: {
      back: { row: 0, isRow: true },
      right: { row: 0, isRow: true },
      front: { row: 0, isRow: true },
      left: { row: 0, isRow: true }
    }
  };
  // Get values before we change anything
  const values = {
    back: getRow(cube.back, cycle.from.back.row),
    right: getRow(cube.right, cycle.from.right.row),
    front: getRow(cube.front, cycle.from.front.row),
    left: getRow(cube.left, cycle.from.left.row)
  };
  // Rotate values around the cycle
  const newCube = {
    ...cube,
    top: newTop,
    back: setRow(cube.back, cycle.from.back.row, values.left),
    right: setRow(cube.right, cycle.from.right.row, values.back),
    front: setRow(cube.front, cycle.from.front.row, values.right),
    left: setRow(cube.left, cycle.from.left.row, values.front)
  };
  setCube(newCube);
  console.log(newCube);
};

export default U;
