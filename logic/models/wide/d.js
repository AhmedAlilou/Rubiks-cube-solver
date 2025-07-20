import U from "../turns/U.js";
import y from "../rotation/y.js";

const d = (clockwise) => {
  U(clockwise);
  y(!clockwise);
};

export default d;
