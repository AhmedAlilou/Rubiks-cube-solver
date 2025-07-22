import L from "../turns/L.js";
import x from "../rotation/x.js";

const r = (clockwise) => {
  L(clockwise);
  x(clockwise);
};

export default r;
