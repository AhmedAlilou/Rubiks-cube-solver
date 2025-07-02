import updateRotationState from "./helperFunctions/updateRotationState";

const handleFrontTurn = (clockwise, numberOfRotations) => {
  updateRotationState("z", clockwise, numberOfRotations, 1);
};

const handleUpTurn = (clockwise, numberOfRotations) => {
  updateRotationState("y", clockwise, numberOfRotations, 1);
};

export { handleFrontTurn, handleUpTurn };
