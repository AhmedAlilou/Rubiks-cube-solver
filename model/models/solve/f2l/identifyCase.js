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
    if (edgeFace !== "top" && edgeRow === 1) {
      console.log("edge in middle layer");
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }

    console.log("CORNER ON TOP LAYER");
  } else if (cornerFace === "down") {
    if (edgeFace !== "top" && edgeRow === 1) {
      console.log("edge in middle layer");
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
    console.log("CORNER FACING DOWN");
  } else if (
    cornerFace !== "down" &&
    !cornerFace !== "top" &&
    cornerRow === 2
  ) {
    if (edgeFace !== "top" && edgeRow === 1) {
      console.log("edge in middle layer");
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
    console.log("CORNER ON BOTTOM LAYER");
  } else if (cornerFace === "top") {
    if (edgeFace !== "top" && edgeRow === 1) {
      console.log("edge in middle layer");
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
    console.log("CORNER FACING TOP");
  }

  return cube;
};

export default identifyCase;
