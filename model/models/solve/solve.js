import { getCube } from "../../store/cubeStore.js";
import cross from "./cross/cross.js";
import f2l from "./f2l/f2l.js";

const solve = (cube) => {
  cross(cube);
  f2l(getCube());
};

export default solve;
