import D from "../turns/D.js";
import y from "../rotation/y.js";

const u = (clockwise, cube) => {
  const newCube = { ...cube };
  newCube = D(clockwise);
  newCube = y(clockwise);
};

export default u;
