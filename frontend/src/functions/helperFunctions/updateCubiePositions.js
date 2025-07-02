import useCubiesStore from "../../store/cubiesStore.js";
const setCubies = useCubiesStore.getState().setCubies;

const updateCubiePositions = (axis, layerValue, numOfRotations) => {
  console.log(
    "Updating cubie positions for axis:",
    axis,
    "with rotations:",
    numOfRotations,
    "on layer:",
    layerValue
  );
};

export default updateCubiePositions;
