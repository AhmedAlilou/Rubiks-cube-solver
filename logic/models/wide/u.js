import D from "../turns/D.js";
import y from "../rotation/y.js";

const u = (clockwise) => {
  D(clockwise);
  y(clockwise);
};

export default u;
