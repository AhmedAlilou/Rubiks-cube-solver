import cubeStore from "../../store/cubeStore.js";
// helper functions
import rotateFace from "./helperFunctions/rotateFace.js";
import getRow from "./helperFunctions/getRow.js";
import setRow from "./helperFunctions/setRow.js";

const D = () => {
  const { cube, setCube } = cubeStore.getState();

  // 1. Rotate down face
  const newDown = rotateFace([...cube.down], true);
  // 2. Handle adjacent faces using cycle notation
  const cycle = {
    from: {
      front: { row: 2, isRow: true },
      right: { row: 2, isRow: true },
      back: { row: 2, isRow: true },
      left: { row: 2, isRow: true }
    }
  };
  // Get values before we change anything
  const values = {
    front: getRow(cube.front, cycle.from.front.row),
    right: getRow(cube.right, cycle.from.right.row),
    back: getRow(cube.back, cycle.from.back.row),
    left: getRow(cube.left, cycle.from.left.row)
  };
  // Rotate values around the cycle
  const newCube = {
    ...cube,
    down: newDown,
    front: setRow(cube.front, cycle.from.front.row, values.left),
    right: setRow(cube.right, cycle.from.right.row, values.front),
    back: setRow(cube.back, cycle.from.back.row, values.right),
    left: setRow(cube.left, cycle.from.left.row, values.back)
  };
  setCube(newCube);
  console.log(newCube);
};

export default D;
