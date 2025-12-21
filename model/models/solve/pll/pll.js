import {
  getSolutionCrossColour,
  getPllSolution
} from "../../../store/solveStore";
import colourInfo from "../../helperFunctions/colourInfo";
import mapOutTopLayer from "../oll/functions/mapOutTopLayer";
import oneLook from "./oneLook";
import execute from "../../execute.js";

const pll = async (cube) => {
  let tempCube = cube;
  console.log("PLL INITIATED");
  const topLayerColour = colourInfo[getSolutionCrossColour()].opposite;
  const mappedOutTopLayer = mapOutTopLayer(tempCube);
  const sideRows = mappedOutTopLayer.sideRows;
  // if oneLook PLL
  tempCube = oneLook(tempCube, sideRows);

  await execute(getPllSolution());
};

export default pll;
