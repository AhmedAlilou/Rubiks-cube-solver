import R from "../turns/R.js";
import L from "../turns/L.js";
import x from "../rotation/x.js";

const M = (clockwise, cube) => {
  let newCube = { ...cube };
  newCube = R(clockwise, newCube);
  newCube = L(!clockwise, newCube);
  newCube = x(!clockwise, newCube);
  return newCube;
};

export default M;
