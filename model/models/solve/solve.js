import { getCube } from "../../store/cubeStore.js";
import cross from "./cross/cross.js";
import f2l from "./f2l/f2l.js";

const solve = (cube) => {
  cross(cube);
  console.log(getCube());
  setTimeout(() => {
    f2l(getCube());
  }, 10000);
};

export default solve;
