import { getSolutionCrossColour } from "../../../store/solveStore";

const identifyCase = (cube, corner, edge) => {
  const cornerFace = corner.face;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const edgeFace = edge.face;
  const edgeRow = edge.row;
  const edgeCol = edge.col;
  const crossColour = getSolutionCrossColour();

  if (cornerFace !== "down" && cornerFace !== "top" && cornerRow === 0) {
    // is corner on top layer?
    console.log("CORNER ON TOP ROW");
  } else if (cornerFace === "down") {
    console.log("CORNER FACING DOWN");
  } else if (
    cornerFace !== "down" &&
    !cornerFace !== "top" &&
    cornerRow === 2
  ) {
    console.log("CORNER ON BOTTOM ROW");
  } else if (cornerFace === "top") {
    console.log("CORNER FACING TOP");
  }

  console.log(cornerFace, cornerRow, cornerCol, edgeFace, edgeRow, edgeCol);

  return cube;
};

export default identifyCase;
