import { getCube } from "../../store/cubeStore.js";
import cross from "./cross/cross.js";
import f2l from "./f2l/f2l.js";
import oll from "./oll/oll.js";

const solve = async (cube) => {
  await cross(cube);
  // call f2l once cross has finished executing moves
  await f2l(getCube());
  oll(getCube());
};

export default solve;
