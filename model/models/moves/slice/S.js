import F from "../turns/F.js";
import B from "../turns/B.js";
import z from "../rotation/z.js";

const S = (clockwise, cube) => {
  let newCube = { ...cube };
  newCube = F(!clockwise, newCube);
  newCube = B(clockwise, newCube);
  newCube = z(clockwise, newCube);
  return newCube;
};

export default S;
