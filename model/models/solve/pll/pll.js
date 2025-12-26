import {
  getSolutionCrossColour,
  getPllSolution,
  setPllSolution,
  getTwoLookPll
} from "../../../store/solveStore.js";
import colourInfo from "../../helperFunctions/colourInfo";
import mapOutTopLayer from "../oll/functions/mapOutTopLayer";
import oneLook from "./oneLook.js";
import twoLook from "./twoLook.js";
import execute from "../../execute.js";
import lastMove from "./functions/lastMove.js";
import removeContradictions from "../../helperFunctions/removeContradictions.js";

const pll = async (cube) => {
  let tempCube = cube;
  console.log("PLL INITIATED");
  const mappedOutTopLayer = mapOutTopLayer(tempCube);
  const sideRows = mappedOutTopLayer.sideRows;
  // if oneLook PLL
  if (getTwoLookPll()) {
    tempCube = twoLook(tempCube, sideRows);
  } else {
    tempCube = oneLook(tempCube, sideRows);
  }
  tempCube = lastMove(tempCube);
  // final move

  setPllSolution(getPllSolution(), removeContradictions(getPllSolution()));

  await execute(getPllSolution());
};

export default pll;
