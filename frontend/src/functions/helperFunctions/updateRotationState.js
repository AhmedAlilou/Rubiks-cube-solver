import useRotationStore from "../../store/rotationStore.js";

const updateRotationState = (
  axis,
  clockwise,
  numberOfRotations,
  layerValue
) => {
  useRotationStore.getState().setAxis(axis);
  useRotationStore.getState().setClockwise(clockwise);
  useRotationStore.getState().setNumOfRotations(numberOfRotations);
  useRotationStore.getState().setRotating(true);
  useRotationStore.getState().setLayerValue(layerValue);
  useRotationStore.getState().setTarget((Math.PI / 2) * numberOfRotations);
};

export default updateRotationState;
