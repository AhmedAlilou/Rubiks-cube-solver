import useRotationStore from "../rotationStore";

const handleFrontTurn = (clockwise, numberOfRotations) => {
  const rotating = useRotationStore.getState().rotating;
  useRotationStore.getState().setAxis("z");
  useRotationStore.getState().setClockWise(clockwise);
  useRotationStore.getState().setNumOfRotations(numberOfRotations);
  useRotationStore.getState().setRotating(true);
  useRotationStore.getState().setLayerValue(1);
  useRotationStore.getState().setTarget((Math.PI / 2) * numberOfRotations);
  console.log("turning front face", rotating);
};

const handleUpTurn = (clockwise, numberOfRotations) => {
  const rotating = useRotationStore.getState().rotating;
  useRotationStore.getState().setAxis("y");
  useRotationStore.getState().setClockWise(clockwise);
  useRotationStore.getState().setNumOfRotations(numberOfRotations);
  useRotationStore.getState().setRotating(true);
  useRotationStore.getState().setLayerValue(1);
  useRotationStore.getState().setTarget((Math.PI / 2) * numberOfRotations);
  console.log("turning up face", rotating);
};

export { handleFrontTurn, handleUpTurn };
