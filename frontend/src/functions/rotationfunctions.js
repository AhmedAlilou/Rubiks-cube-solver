import updateRotationState from "./helperFunctions/updateRotationState";

const handleFrontTurn = (clockwise, numberOfRotations) => {
  updateRotationState("z", clockwise, numberOfRotations);
};

const handleUpTurn = (clockwise, numberOfRotations) => {
  updateRotationState("y", clockwise, numberOfRotations);
};

export { handleFrontTurn, handleUpTurn };
