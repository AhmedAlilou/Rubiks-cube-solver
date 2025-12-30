import {
  getOllSolution,
  setOllSolution,
  getSolutionCrossColour,
  getTwoLookOll
} from "../../../store/solveStore";
import execute from "../../execute.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import removeContradictions from "../../helperFunctions/removeContradictions.js";
import twoLook from "./twoLook.js";
import oneLookOll from "./oneLook.js";

const oll = async (cube) => {
  ("OLL INITIATED");
  let tempCube = cube;
  tempCube, cube;
  const topLayerColour = colourInfo[getSolutionCrossColour()].opposite;

  if (getTwoLookOll()) {
    twoLook(tempCube, topLayerColour);
    ("TWO LOOK OLL");
  } else {
    oneLookOll(tempCube, topLayerColour);
  }

  setOllSolution(removeContradictions(getOllSolution()));
  await execute(getOllSolution());
};

export default oll;
