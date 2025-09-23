import L from "../turns/L.js";
import x from "../rotation/x.js";

const r = (clockwise, cube) => {
  let newCube = { ...cube };
  newCube = L(clockwise, newCube);
  newCube = x(clockwise, newCube);
  return newCube;
};

export default r;
