import R from "../turns/R.js";
import x from "../rotation/x.js";

const l = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = R(clockwise, newCube);
  newCube = x(!clockwise, newCube);
  return newCube;
};

export default l;
