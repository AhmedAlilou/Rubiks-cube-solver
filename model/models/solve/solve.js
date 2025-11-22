import { getCube } from "../../store/cubeStore.js";
import cross from "./cross/cross.js";
import f2l from "./f2l/f2l.js";

const solve = async (cube) => {
  await cross(cube);
  console.log(getCube());
  // call f2l once cross has finished executing moves
  f2l(getCube());
};

export default solve;
