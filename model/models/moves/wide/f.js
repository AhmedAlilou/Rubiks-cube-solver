import B from "../turns/B.js";
import z from "../rotation/z.js";

const f = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = B(clockwise, newCube);
  newCube = z(clockwise, newCube);
  return newCube;
};

export default f;
