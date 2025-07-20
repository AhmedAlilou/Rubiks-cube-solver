import F from "../turns/F.js";
import B from "../turns/B.js";
import z from "../rotation/z.js";

const S = (clockwise) => {
  F(!clockwise);
  B(clockwise);
  z(clockwise);
};

export default S;
