import { getCube } from "../../store/cubeStore.js";
import {
  getCrossSolution,
  getF2lSolution,
  getOllSolution,
  getPllSolution,
  getSolution,
  setSolution
} from "../../store/solveStore.js";
import cross from "./cross/cross.js";
import f2l from "./f2l/f2l.js";
import oll from "./oll/oll.js";
import pll from "./pll/pll.js";
import useApplicationStore from "../../../view/src/store/applicationStore.js";

const solve = async (cube) => {
  await cross(cube);
  await f2l(getCube());
  await oll(getCube());
  await pll(getCube());
  console.log("HELLO");
  setSolution([
    [...getCrossSolution()],
    [...getF2lSolution()],
    [...getOllSolution()],
    [...getPllSolution()]
  ]);
  console.log(getSolution());
  if (typeof useApplicationStore.getState === "function") {
    const { setSolverMode } = useApplicationStore.getState();
    setSolverMode && setSolverMode("review");
    console.log(useApplicationStore.getState()?.solverMode);
    console.log(useApplicationStore.getState().solverMode);
  } else if (typeof useApplicationStore.setState === "function") {
    useApplicationStore.setState({ solverMode: "review" });
    console.log(useApplicationStore.getState?.().solverMode);
  }
};

export default solve;
