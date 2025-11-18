import { getSolutionCrossColour } from "../../../store/solveStore";
import colourInfo from "../../helperFunctions/colourInfo";

const f2l = (cube) => {
  console.log("F2L");

  let crossColour = getSolutionCrossColour();
  console.log(crossColour);
  const pairs = colourInfo[crossColour].adjacent;
  console.log(pairs);
  return cube;
};

export default f2l;
