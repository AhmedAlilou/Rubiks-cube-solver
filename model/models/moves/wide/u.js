import D from "../turns/D.js";
import y from "../rotation/y.js";

const u = (clockwise, cube) => {
  let newCube = { ...cube };
  newCube = D(clockwise, newCube);
  newCube = y(clockwise, newCube);
  return newCube;
};

export default u;
