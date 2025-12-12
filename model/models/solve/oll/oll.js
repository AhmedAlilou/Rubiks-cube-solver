import {
  getOllSolution,
  setOllSolution,
  getSolutionCrossColour
} from "../../../store/solveStore";
import execute from "../../execute.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import twoLook from "./twoLook.js";

const oll = async (cube) => {
  console.log("OLL INITIATED");
  let tempCube = cube;
  const topLayerColour = colourInfo[getSolutionCrossColour()].opposite;

  // two look function
  tempCube = twoLook(tempCube, topLayerColour);
  // one look function
  await execute(getOllSolution());
};

export default oll;
