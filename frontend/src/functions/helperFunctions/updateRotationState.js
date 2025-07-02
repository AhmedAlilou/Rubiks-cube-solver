import useRotationStore from "../../store/rotationStore.js";

const updateRotationState = (axis, clockwise, numberOfRotations) => {
  useRotationStore.getState().setAxis(axis);
  useRotationStore.getState().setClockWise(clockwise);
  useRotationStore.getState().setNumOfRotations(numberOfRotations);
  useRotationStore.getState().setRotating(true);
  useRotationStore.getState().setLayerValue(1);
  useRotationStore.getState().setTarget((Math.PI / 2) * numberOfRotations);
};

export default updateRotationState;
