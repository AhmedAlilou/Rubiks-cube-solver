import R from "../turns/R.js";
import x from "../rotation/x.js";

const l = (clockwise) => {
  R(clockwise);
  x(!clockwise);
};

export default l;
