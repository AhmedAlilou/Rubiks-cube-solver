import U from "../turns/U.js";
import D from "../turns/D.js";
import y from "../rotation/y.js";

const E = (clockwise) => {
  U(clockwise);
  D(!clockwise);
  y(!clockwise);
};

export default E;
