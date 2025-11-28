import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerTopEdgeMid = (cube, corner, edge) => {
  let tempCube = cube;
  const cornerFace = corner.face;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const edgeFace = edge.face;
  const edgeRow = edge.row;
  const edgeCol = edge.col;
  console.log("CORNER TOP EDGE MID ");
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };
  const faceConversionClockwise = {
    front: "right",
    right: "back",
    back: "left",
    left: "front"
  };
  const faceConversionAnticlockwise = {
    front: "left",
    left: "back",
    back: "right",
    right: "front"
  };
  let secondaryEdgeFace = "";
  if (edgeCol === 2) {
    console.log("EDGE ON RIGHT");
    secondaryEdgeFace = faceConversionAnticlockwise[edgeFace];
  } else {
    console.log("EDGE ON LEFT");
    secondaryEdgeFace = faceConversionClockwise[edgeFace];
  }
  if (
    (cornerFace === edgeFace && cornerCol == edgeCol) ||
    (cornerFace === secondaryEdgeFace && cornerCol !== edgeCol)
  ) {
    setTempF2lSolution([...getTempF2lSolution(), "U"]);
    tempCube = U(true, tempCube);
  }

  // convert the following into one big if else statement with edgeCol ===2 and else:
  if (edgeCol === 2) {
    console.log("EDGE ON RIGHT");
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[edgeFace] + "'"
    ]);
    tempCube = faceToMove[edgeFace](false, tempCube);
    setTempF2lSolution([...getTempF2lSolution(), "U'"]);
    tempCube = U(false, tempCube);

    setTempF2lSolution([...getTempF2lSolution(), faceToNotation[edgeFace]]);
    tempCube = faceToMove[edgeFace](true, tempCube);
  } else {
    console.log("EDGE ON LEFT");
    setTempF2lSolution([...getTempF2lSolution(), faceToNotation[edgeFace]]);
    tempCube = faceToMove[edgeFace](true, tempCube);
    setTempF2lSolution([...getTempF2lSolution(), "U"]);
    tempCube = U(true, tempCube);
    setTempF2lSolution([
      ...getTempF2lSolution(),
      faceToNotation[edgeFace] + "'"
    ]);
    tempCube = faceToMove[edgeFace](false, tempCube);
  }
  // MOVE EDGE TO TOP LAYER
  // identify move needed to put edge on top.
  // make sure that the corner is not on top of the edge by doing a U move
  // if the edge on the right then the move will be anticlockwise
  // if the edge on the left then the move will be clockwise
  // if the edge on the right then do U'
  // if the edge on the left then do U
  // WORRY ABOUT KEYHOLE LATER
};

export default cornerTopEdgeMid;
