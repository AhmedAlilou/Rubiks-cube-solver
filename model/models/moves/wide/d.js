import U from "../turns/U.js";
import y from "../rotation/y.js";

const d = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = U(clockwise, newCube);
  newCube = y(!clockwise, newCube);
  return newCube;
};

export default d;
