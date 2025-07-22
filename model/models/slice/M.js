import R from "../turns/R.js";
import L from "../turns/L.js";
import x from "../rotation/x.js";

const M = (clockwise) => {
  R(clockwise);
  L(!clockwise);
  x(!clockwise);
};

export default M;
