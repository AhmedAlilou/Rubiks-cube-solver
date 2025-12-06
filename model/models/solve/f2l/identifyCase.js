import {
  getSolutionCrossColour,
  setTempF2lSolution
} from "../../../store/solveStore";

import returnEdgePosition from "../../helperFunctions/returnEdgePosition";
import returnCornerPosition from "../../helperFunctions/returnCornerPosition";

import moveCornerToTop from "./solveFunctions/setUps/moveCornerToTop";
import cornerTopEdgeMid from "./solveFunctions/setUps/cornerTopEdgeMid";
import cornerUpEdgeMid from "./solveFunctions/setUps/cornerUpEdgeMid";
import cornerEdgeConnected from "./solveFunctions/setUps/cornerEdgeConnected";
import cornerBottomEdgeMid from "./solveFunctions/setUps/cornerBottomEdgeMid";
import cornerDownEdgeMid from "./solveFunctions/setUps/cornerDownEdgeMid";
import cornerBottomEdgeTop from "./solveFunctions/setUps/cornerBottomEdgeTop";

const identifyCase = (cube, firstPair, secondPair) => {
  let tempCube = cube;
  const crossColour = getSolutionCrossColour();
  let edge = returnEdgePosition(tempCube, firstPair, secondPair);
  let corner = returnCornerPosition(tempCube, crossColour, [
    firstPair,
    secondPair
  ]);
  let cornerFace = corner.face;
  let cornerRow = corner.row;
  let cornerCol = corner.col;
  let edgeFace = edge.face;
  let edgeRow = edge.row;
  let edgeCol = edge.col;
  const sideFaces = ["front", "left", "back", "right"];
  const bottomColToFace = {
    0: "left",
    2: "right"
  };
  const bottomRowToFace = {
    0: "front",
    2: "back"
  };
  const faceConversionClockwise = {
    front: "left",
    left: "back",
    back: "right",
    right: "front"
  };
  const faceConversionAnticlockwise = {
    front: "right",
    right: "back",
    back: "left",
    left: "front"
  };
  const edgeOnLeft = edgeCol === 0;
  const cornerOnLeft = cornerCol === 0;
  let cornerFaces = [];

  let secondaryEdgeFace = "";

  if (edgeOnLeft) {
    secondaryEdgeFace = faceConversionClockwise[edgeFace];
  } else {
    secondaryEdgeFace = faceConversionAnticlockwise[edgeFace];
  }

  if (
    cornerFace === "down" &&
    edgeFace !== "top" &&
    secondaryEdgeFace !== "top"
  ) {
    cornerFaces = [bottomColToFace[cornerCol], bottomRowToFace[cornerRow]];
    if (
      !cornerFaces.includes(edgeFace) ||
      !cornerFaces.includes(secondaryEdgeFace)
    ) {
      // now seperate the corner
      tempCube = moveCornerToTop(
        tempCube,
        cornerFace,
        cornerFaces,
        cornerOnLeft
      );
    }
  } else if (
    cornerRow === 2 &&
    edgeFace !== "top" &&
    secondaryEdgeFace !== "top"
  ) {
    cornerFaces = [
      cornerFace,
      cornerOnLeft
        ? faceConversionClockwise[cornerFace]
        : faceConversionAnticlockwise[cornerFace]
    ];
    if (
      !cornerFaces.includes(edgeFace) ||
      !cornerFaces.includes(secondaryEdgeFace)
    ) {
      tempCube = moveCornerToTop(
        tempCube,
        cornerFace,
        cornerFaces,
        cornerOnLeft
      );
    }
  }
  corner = returnCornerPosition(tempCube, crossColour, [firstPair, secondPair]);
  edge = returnEdgePosition(tempCube, firstPair, secondPair);
  cornerFace = corner.face;
  cornerRow = corner.row;
  cornerCol = corner.col;
  edgeFace = edge.face;
  edgeRow = edge.row;
  edgeCol = edge.col;

  if (cornerFace !== "down" && cornerFace !== "top" && cornerRow === 0) {
    // make case here if they are both not in top layer and arent even connected to get just the corner out seperately

    // is corner in top layer
    if (edgeFace === "top" || (edgeRow === 0 && sideFaces.includes(edgeFace))) {
      tempCube = cornerEdgeConnected(tempCube, corner, edge);
    } else {
      tempCube = cornerTopEdgeMid(tempCube, corner, edge);
    }
  } else if (cornerFace === "down") {
    if (edgeFace !== "top" && edgeRow === 1) {
      tempCube = cornerDownEdgeMid(tempCube, corner, edge);
    } else if (edgeFace === "top") {
      console.log("edge in top layer");
    }
    console.log("CORNER FACING DOWN");
  } else if (cornerFace !== "down" && cornerFace !== "top" && cornerRow === 2) {
    if (cornerFace !== "top" && edgeRow === 1) {
      tempCube = cornerBottomEdgeMid(
        tempCube,
        corner,
        edge,
        firstPair,
        secondPair
      );
    } else if (edgeFace === "top" || edgeRow === 0) {
      tempCube = cornerBottomEdgeTop(tempCube, corner, edge);
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
