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
import cornerDownEdgeTop from "./solveFunctions/setUps/cornerDownEdgeTop";
import cornerBottomEdgeTop from "./solveFunctions/setUps/cornerBottomEdgeTop";
import cornerTopEdgeTop from "./solveFunctions/setUps/cornerTopEdgeTop";
import cornerTrios from "../../helperFunctions/cornerTrios";

import cornerFacingUp from "./solveFunctions/inserts/cornerFacingUp";
import topColoursMatch from "./solveFunctions/inserts/topColoursMatch";
import topColoursDifferent from "./solveFunctions/inserts/topColoursDifferent";

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
      edgeFace !== "top" &&
      edgeRow === 1 &&
      cornerFace !== "top" &&
      (!cornerFaces.includes(edgeFace) ||
        !cornerFaces.includes(secondaryEdgeFace))
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
      edgeFace !== "top" &&
      edgeRow === 1 &&
      cornerFace !== "top" &&
      (!cornerFaces.includes(edgeFace) ||
        !cornerFaces.includes(secondaryEdgeFace))
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
    // is corner in top layer
    if (edgeFace === "top" || (edgeRow === 0 && sideFaces.includes(edgeFace))) {
      tempCube = cornerEdgeConnected(tempCube, corner, edge);
    } else {
      tempCube = cornerTopEdgeMid(tempCube, corner, edge);
    }
  } else if (cornerFace === "down") {
    if (edgeFace !== "top" && edgeRow === 1) {
      tempCube = cornerDownEdgeMid(tempCube, corner, edge);
    } else if (edgeFace === "top" || edgeRow === 0) {
      tempCube = cornerDownEdgeTop(tempCube, corner, edge);
    }
  } else if (cornerFace !== "down" && cornerFace !== "top" && cornerRow === 2) {
    if (edgeRow === 1 && edgeFace !== "top") {
      tempCube = cornerBottomEdgeMid(
        tempCube,
        corner,
        edge,
        firstPair,
        secondPair
      );
    } else {
      tempCube = cornerBottomEdgeTop(tempCube, corner, edge);
    }
  } else if (cornerFace === "top") {
    if (edgeFace !== "top" && edgeRow === 1) {
      tempCube = cornerUpEdgeMid(tempCube, corner, edge);
    } else if (edgeFace === "top" || edgeRow === 0) {
      tempCube = cornerTopEdgeTop(cube, corner, edge);
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

  // now look at the pair and check each case
  let edgeTopColour = tempCube["top"][edgeRow][edgeCol];

  if (edgeFace !== "top") {
    switch (edgeFace) {
      case "front":
        edgeTopColour = tempCube["top"][2][1];
        break;
      case "left":
        edgeTopColour = tempCube["top"][1][0];
        break;
      case "back":
        edgeTopColour = tempCube["top"][0][1];
        break;
      case "right":
        edgeTopColour = tempCube["top"][1][2];
        break;
    }
  }
  const edgeSideColour =
    [firstPair, secondPair].find((c) => c !== edgeTopColour) || null;

  // compute cornerTopColour (the sticker of this corner that lies on the top face)
  let cornerTopColour;
  if (cornerFace === "top") {
    cornerTopColour = tempCube["top"][cornerRow][cornerCol];
  } else {
    const cornerKey = `${cornerFace}[${cornerRow}][${cornerCol}]`;
    const trio = cornerTrios[cornerKey];
    if (Array.isArray(trio)) {
      const topInfo = trio.find((t) => t.face === "top");
      if (topInfo) {
        cornerTopColour = tempCube["top"][topInfo.row][topInfo.col];
      }
    }
    if (typeof cornerTopColour === "undefined") {
      console.warn(
        "identifyCase: missing top sticker mapping for corner",
        cornerKey
      );
      cornerTopColour = null;
    }
  }

  // Is corner facing up (4)
  let setUpNeeded = false;
  if (cornerFace === "top") {
    tempCube = cornerFacingUp(
      tempCube,
      corner,
      edge,
      edgeSideColour,
      edgeTopColour
    );
    setUpNeeded = true;
  }
  // does the top of the corner and top of the edge match (4)
  else if (edgeTopColour === cornerTopColour) {
    tempCube = topColoursMatch(
      tempCube,
      corner,
      edge,
      cornerTopColour,
      edgeSideColour
    );
    setUpNeeded = true;
  } else if (
    edgeTopColour !== cornerTopColour &&
    cornerFace !== "top" &&
    cornerFace !== "down"
  ) {
    tempCube = topColoursDifferent(tempCube, corner, edge, cornerTopColour);
    setUpNeeded = true;
  }

  corner = returnCornerPosition(tempCube, crossColour, [firstPair, secondPair]);
  edge = returnEdgePosition(tempCube, firstPair, secondPair);
  cornerFace = corner.face;
  cornerRow = corner.row;
  cornerCol = corner.col;
  edgeFace = edge.face;
  edgeRow = edge.row;
  edgeCol = edge.col;
  const cornerOnRight = cornerCol === 2;

  if (cornerOnRight && setUpNeeded) {
    if (faceConversionClockwise[cornerFace] === edgeFace) {
      // disconnected 3 move insert
    } else {
      // connected pair
    }
  } else if (!cornerOnRight && setUpNeeded) {
    if (faceConversionAnticlockwise[cornerFace] === edgeFace) {
      // disconnected 3 move insert
    } else {
      // connected pair
    }
  }
  // do final insert if pair is connected and not in
  // do final insert if it is a disconnected 3 move insert

  return tempCube;
};

export default identifyCase;
