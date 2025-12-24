import {
  getSolutionCrossColour,
  getPllSolution,
  setPllSolution
} from "../../../store/solveStore.js";
import colourInfo from "../../helperFunctions/colourInfo";
import mapOutTopLayer from "../oll/functions/mapOutTopLayer";
import oneLook from "./oneLook";
import execute from "../../execute.js";
import lastMove from "./functions/lastMove.js";
import removeContradictions from "../../helperFunctions/removeContradictions.js";

const pll = async (cube) => {
  let tempCube = cube;
  console.log("PLL INITIATED");
  const mappedOutTopLayer = mapOutTopLayer(tempCube);
  const sideRows = mappedOutTopLayer.sideRows;
  // if oneLook PLL
  tempCube = oneLook(tempCube, sideRows);
  tempCube = lastMove(tempCube);
  // final move

  setPllSolution(removeContradictions(getPllSolution()));

  await execute(getPllSolution());
};

export default pll;
