import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerUpEdgeMid = (cube, corner, edge) => {
  console.log("CORNER UP EDGE MID");
  let tempCube = cube;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  const edgeFace = edge.face;
  const edgeRow = edge.row;
  const edgeCol = edge.col;
  const faceToMove = { front: F, left: L, back: B, right: R };
  const faceToNotation = { front: "F", left: "L", back: "B", right: "R" };
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

  const rowToFace = {
    0: "back",
    2: "front"
  };
  const colToFace = {
    0: "left",
    2: "right"
  };

  const cornerFaces = [rowToFace[cornerRow], colToFace[cornerCol]];
  console.log(cornerFaces);
  let secondaryEdgeFace = "";
  if (edgeCol === 2) {
    console.log("EDGE ON RIGHT");
    secondaryEdgeFace = faceConversionAnticlockwise[edgeFace];
  } else {
    console.log("EDGE ON LEFT");
    secondaryEdgeFace = faceConversionClockwise[edgeFace];
  }

  // move corner above the edge no matter orientation

  if (
    cornerFaces.includes(edgeFace) &&
    cornerFaces.includes(secondaryEdgeFace)
  ) {
    // do nothing
    console.log("corner already above edge");
  } else if (
    (faceConversionClockwise[cornerFaces[0]] === edgeFace &&
      faceConversionClockwise[cornerFaces[1]] === secondaryEdgeFace) ||
    (faceConversionClockwise[cornerFaces[0]] === secondaryEdgeFace &&
      faceConversionClockwise[cornerFaces[1]] === edgeFace)
  ) {
    setTempF2lSolution([...getTempF2lSolution(), "U"]);
    tempCube = U(true, tempCube);
  } else if (
    (faceConversionAnticlockwise[cornerFaces[0]] === edgeFace &&
      faceConversionAnticlockwise[cornerFaces[1]] === secondaryEdgeFace) ||
    (faceConversionAnticlockwise[cornerFaces[0]] === secondaryEdgeFace &&
      faceConversionAnticlockwise[cornerFaces[1]] === edgeFace)
  ) {
    setTempF2lSolution([...getTempF2lSolution(), "U'"]);
    tempCube = U(false, tempCube);
  } else {
    setTempF2lSolution([...getTempF2lSolution(), "U2"]);
    tempCube = U(true, U(true, tempCube));
  }

  let connected = false;
  // now check if the pair is connected properly or not
  connected =
    tempCube[edgeFace][1][edgeCol] === tempCube[edgeFace][0][edgeCol]
      ? true
      : false;

  if (connected) {
    if (edgeCol === 2) {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[edgeFace] + "'",
        "U",
        faceToNotation[edgeFace]
      ]);
      tempCube = faceToMove[edgeFace](
        true,
        U(true, faceToMove[edgeFace](false, tempCube))
      );
    } else {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[edgeFace],
        "U'",
        faceToNotation[edgeFace] + "'"
      ]);
      tempCube = faceToMove[edgeFace](
        false,
        U(false, faceToMove[edgeFace](true, tempCube))
      );
    }
  } else {
    if (edgeCol === 2) {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[edgeFace] + "'",
        "U'",
        faceToNotation[edgeFace],
        "U",
        faceToNotation[edgeFace] + "'",
        "U'",
        faceToNotation[edgeFace]
      ]);
      tempCube = faceToMove[edgeFace](false, tempCube);
      tempCube = U(false, tempCube);
      tempCube = faceToMove[edgeFace](true, tempCube);
      tempCube = U(true, tempCube);
      tempCube = faceToMove[edgeFace](false, tempCube);
      tempCube = U(false, tempCube);
      tempCube = faceToMove[edgeFace](true, tempCube);
    } else {
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[edgeFace],
        "U",
        faceToNotation[edgeFace] + "'",
        "U'",
        faceToNotation[edgeFace],
        "U",
        faceToNotation[edgeFace] + "'"
      ]);
      tempCube = faceToMove[edgeFace](true, tempCube);
      tempCube = U(true, tempCube);
      tempCube = faceToMove[edgeFace](false, tempCube);
      tempCube = U(false, tempCube);
      tempCube = faceToMove[edgeFace](true, tempCube);
      tempCube = U(true, tempCube);
      tempCube = faceToMove[edgeFace](false, tempCube);
    }
  }
  return tempCube;
};

export default cornerUpEdgeMid;
