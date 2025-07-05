import useCubiesStore from "../../store/cubiesStore.js";
import useRotationStore from "../../store/rotationStore.js";
import rotateFace from "../../../../logic/models/rotation/helperFunctions/rotateFace.js";
const cubies = useCubiesStore.getState().cubies;
const setCubies = useCubiesStore.getState().setCubies;
const cubieMatrix = useRotationStore.getState().cubieMatrix;
const setCubieMatrix = useRotationStore.getState().setCubieMatrix;
const axisMap = {
  x: 0,
  y: 1,
  z: 2
};
let matrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]; // Placeholder for matrix
const updateCubiePositions = (axis, layerValue, numOfRotations, clockwise) => {
  console.log(
    "Updating cubie positions for axis:",
    axis,
    "with rotations:",
    numOfRotations,
    "on layer:",
    layerValue,
    "clockwise:",
    clockwise
  );

  // MATRIX INITIALIZATION
  cubies.map((cubie) => {
    if (layerValue === cubie.position[axisMap[axis]]) {
      // in here are the cubies that are being rotated
      console.log("Cubie before update:", cubie);
      // deal with numOfRotations being 2 here:
      // else it is either 1 or 3:

      if (axis === "x") {
        matrix[cubie.position[1] + 1][cubie.position[2] + 1] = cubie;
      }
      if (axis === "y") {
        matrix[cubie.position[0] + 1][cubie.position[2] + 1] = cubie;
      }
      if (axis === "z") {
        matrix[cubie.position[0] + 1][cubie.position[1] + 1] = cubie;
      }

      // use rotatePosition here to calculate and update new position
    }
  });
  console.log("Matrix after initialization:", matrix);

  // ROTATION LOGIC
  // here we transpose matrix and swap columns depending on numOfRoations and clockwise
  // start with numOfRotations === 1
  if (numOfRotations === 1) {
    matrix = rotateFace(matrix, clockwise);
  }

  // then we use the position in the matrix of the cubie to update that cubie's position
  console.log("Matrix after rotation:", matrix);
};

export default updateCubiePositions;
