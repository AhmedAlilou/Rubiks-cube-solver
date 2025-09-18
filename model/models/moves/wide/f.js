import B from "../turns/B.js";
import z from "../rotation/z.js";

const f = (clockwise) => {
  B(clockwise);
  z(clockwise);
};

export default f;
