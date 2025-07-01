import initiateRotationState from "./helperFunctions/initiateRotationState";

const handleFrontTurn = (clockwise, numberOfRotations) => {
  initiateRotationState("z", clockwise, numberOfRotations);
};

const handleUpTurn = (clockwise, numberOfRotations) => {
  initiateRotationState("y", clockwise, numberOfRotations);
};

export { handleFrontTurn, handleUpTurn };
