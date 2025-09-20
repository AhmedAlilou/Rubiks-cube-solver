import L from "../turns/L.js";
import x from "../rotation/x.js";

const r = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = L(clockwise);
  newCube = x(clockwise);
  return newCube;
};

export default r;
