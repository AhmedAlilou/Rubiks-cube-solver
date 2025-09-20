import U from "../turns/U.js";
import D from "../turns/D.js";
import y from "../rotation/y.js";

const E = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = U(clockwise, newCube);
  newCube = D(!clockwise, newCube);
  newCube = y(!clockwise, newCube);
  return newCube;
};

export default E;
