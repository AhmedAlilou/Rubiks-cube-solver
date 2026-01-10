import { getCube } from "../../store/cubeStore.js";
import cross from "./cross/cross.js";
import f2l from "./f2l/f2l.js";
import oll from "./oll/oll.js";
import pll from "./pll/pll.js";

const solve = async (cube) => {
  await cross(cube);
  await f2l(getCube());
  await oll(getCube());
  await pll(getCube());
  console.log("HELLO");
};

export default solve;
