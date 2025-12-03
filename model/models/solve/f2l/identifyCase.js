import {
  getSolutionCrossColour,
  setTempF2lSolution
} from "../../../store/solveStore";

import returnEdgePosition from "../../helperFunctions/returnEdgePosition";
import returnCornerPosition from "../../helperFunctions/returnCornerPosition";

import cornerTopEdgeMid from "./solveFunctions/setUps/cornerTopEdgeMid";
import cornerUpEdgeMid from "./solveFunctions/setUps/cornerUpEdgeMid";
import cornerEdgeConnected from "./solveFunctions/setUps/cornerEdgeConnected";
import cornerBottomEdgeMid from "./solveFunctions/setUps/cornerBottomEdgeMid";

const identifyCase = (cube, firstPair, secondPair) => {
  let tempCube = cube;
  const crossColour = getSolutionCrossColour();
  const edge = returnEdgePosition(tempCube, firstPair, secondPair);
  const corner = returnCornerPosition(tempCube, crossColour, [
    firstPair,
    secondPair
  ]);
  const cornerFace = corner.face;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const edgeFace = edge.face;
  const edgeRow = edge.row;
  const edgeCol = edge.col;
  const sideFaces = ["front", "left", "back", "right"];

  if (cornerFace !== "down" && cornerFace !== "top" && cornerRow === 0) {
    // is corner in top layer
    if (edgeFace === "top" || (edgeRow === 0 && sideFaces.includes(edgeFace))) {
      tempCube = cornerEdgeConnected(tempCube, corner, edge);
    } else {
      tempCube = cornerTopEdgeMid(tempCube, corner, edge);
    }
  } else if (cornerFace === "down") {
    if (edgeFace !== "top" && edgeRow === 1) {
      console.log("edge in middle layer");
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
    console.log("CORNER FACING DOWN");
  } else if (cornerFace !== "down" && cornerFace !== "top" && cornerRow === 2) {
    if (cornerFace !== "top" && edgeRow === 1) {
      cornerBottomEdgeMid(tempCube, corner, edge);
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
  } else if (cornerFace === "top") {
    if (edgeFace !== "top" && edgeRow === 1) {
      tempCube = cornerUpEdgeMid(tempCube, corner, edge);
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
  }

  return tempCube;
};

export default identifyCase;
