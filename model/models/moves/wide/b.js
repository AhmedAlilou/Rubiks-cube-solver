import F from "../turns/F.js";
import z from "../rotation/z.js";

const b = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = F(clockwise, newCube);
  newCube = z(!clockwise, newCube);
  return newCube;
};

export default b;
