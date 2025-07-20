import F from "../turns/F.js";
import z from "../rotation/z.js";

const b = (clockwise) => {
  F(clockwise);
  z(!clockwise);
};

export default b;
