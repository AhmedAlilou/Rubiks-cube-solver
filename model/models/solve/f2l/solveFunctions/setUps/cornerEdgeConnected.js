import { B, D, F, L, R, U } from "../../../../moves/turns/index.js";
import { x, y, z } from "../../../../moves/rotation/index.js";
import { E } from "../../../../moves/slice/index.js";
import {
  getTempF2lSolution,
  setTempF2lSolution
} from "../../../../../store/solveStore.js";

const cornerEdgeConnected = (cube, corner, edge) => {
  console.log("CORNER EDGE CONNECTED");
  let tempCube = cube;
  const cornerFace = corner.face;
  const cornerRow = corner.row;
  const cornerCol = corner.col;
  let edgeFace = edge.face;
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

  const cornerFaces = [
    corner.face,
    cornerCol === 2
      ? faceConversionAnticlockwise[cornerFace]
      : faceConversionClockwise[cornerFace]
  ];
  let secondaryEdgeFace = "top";
  if (edgeFace === "top") {
    if (edgeRow === 0 && edgeCol === 1) {
      secondaryEdgeFace = "back";
    } else if (edgeRow === 1 && edgeCol === 0) {
      secondaryEdgeFace = "left";
    } else if (edgeRow === 1 && edgeCol === 2) {
      secondaryEdgeFace = "right";
    } else {
      secondaryEdgeFace = "front";
    }
  } else {
    secondaryEdgeFace = edgeFace;
    edgeFace = secondaryEdgeFace;
  }
  const cornerOnRight = cornerCol === 2;
  const connectedWeirdly =
    cornerFace === edgeFace || cornerFace === secondaryEdgeFace;
  let turningFace = "";

  // first make sure that it is EITHER weirdly connected or invertedly connected
  // if one of the edge faces mathces one of the corner faces and isnt the same in colour then its fine, else its not

  if (!cornerOnRight) {
    if (
      (cornerFaces[1] === edgeFace &&
        tempCube[edgeFace][0][1] === tempCube[cornerFaces[1]][0][2]) ^
      (cornerFaces[1] === secondaryEdgeFace &&
        tempCube[secondaryEdgeFace][0][1] === tempCube[cornerFaces[1]][0][2])
    ) {
      // or they are connected but correctly which we dont want
      console.log(cornerFaces, edgeFace, secondaryEdgeFace);
      console.log("1");
      return tempCube;
    }
  } else if (cornerOnRight) {
    if (
      (cornerFaces[1] === edgeFace &&
        tempCube[edgeFace][0][1] === tempCube[cornerFaces[1]][0][0]) ^
      (cornerFaces[1] === secondaryEdgeFace &&
        tempCube[secondaryEdgeFace][0][1] === tempCube[cornerFaces[1]][0][0])
    ) {
      // or they are connected but correctly which we dont want
      console.log(cornerFaces, edgeFace, secondaryEdgeFace);
      console.log("1");
      return tempCube;
    }
  }

  // now we know its connected we just need to eliminate it if it is a free pair
  if (cornerFace !== "top") {
    if (!connectedWeirdly && cornerOnRight) {
      if (
        edgeFace !== faceConversionAnticlockwise[cornerFace] &&
        secondaryEdgeFace !== faceConversionAnticlockwise[cornerFace]
      ) {
        return tempCube;
      }
    } else if (!connectedWeirdly && !cornerOnRight) {
      if (
        edgeFace !== faceConversionClockwise[cornerFace] &&
        secondaryEdgeFace !== faceConversionClockwise[cornerFace]
      ) {
        return tempCube;
      }
    }
  }
  // move the corner above the slot it needs to go to first
  // moving the connected pair so that when it is seperated we dont disturb other pairs

  if (connectedWeirdly) {
    console.log("CONNECTED WEIRDLY");
    if (cornerOnRight) {
      if (tempCube[cornerFaces[1]][1][1] === tempCube[cornerFaces[1]][0][0]) {
        turningFace = cornerFace;
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
      } else if (
        tempCube[faceConversionClockwise[cornerFaces[1]]][1][1] ===
        tempCube[cornerFaces[1]][0][0]
      ) {
        turningFace = faceConversionClockwise[cornerFace];
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
      } else if (
        tempCube[
          faceConversionClockwise[faceConversionClockwise[cornerFaces[1]]]
        ][1][1] === tempCube[cornerFaces[1]][0][0]
      ) {
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
      } else {
        turningFace = faceConversionAnticlockwise[cornerFace];
        console.log("DO NOTHING");
      }
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace] + "'",
        "U",
        faceToNotation[turningFace]
      ]);
      tempCube = faceToMove[turningFace](
        true,
        U(true, faceToMove[turningFace](false, tempCube))
      );
    } else {
      if (tempCube[cornerFaces[1]][1][1] === tempCube[cornerFaces[1]][0][2]) {
        turningFace = cornerFace;
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
      } else if (
        tempCube[faceConversionAnticlockwise[cornerFaces[1]]][1][1] ===
        tempCube[cornerFaces[1]][0][2]
      ) {
        turningFace = faceConversionAnticlockwise[cornerFace];
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
      } else if (
        tempCube[
          faceConversionClockwise[faceConversionClockwise[cornerFaces[1]]]
        ][1][1] === tempCube[cornerFaces[1]][0][2]
      ) {
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
      } else {
        turningFace = faceConversionClockwise[cornerFace];
        console.log("DO NOTHING");
      }
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace],
        "U'",
        faceToNotation[turningFace] + "'"
      ]);
      tempCube = faceToMove[turningFace](
        false,
        U(false, faceToMove[turningFace](true, tempCube))
      );
    }
  } else {
    console.log("CONNECTED INVERTEDLY");
    if (cornerOnRight) {
      if (tempCube[cornerFaces[1]][1][1] === tempCube[cornerFaces[1]][0][0]) {
        turningFace = faceConversionAnticlockwise[cornerFace];
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
      } else if (
        tempCube[faceConversionAnticlockwise[cornerFaces[1]]][1][1] ===
        tempCube[cornerFaces[1]][0][0]
      ) {
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
      } else if (
        tempCube[
          faceConversionClockwise[faceConversionClockwise[cornerFaces[1]]]
        ][1][1] === tempCube[cornerFaces[1]][0][0]
      ) {
        turningFace = faceConversionClockwise[cornerFace];
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
      } else {
        turningFace = cornerFace;
        console.log("DO NOTHING");
      }
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace],
        "U'",
        faceToNotation[turningFace] + "'"
      ]);
      tempCube = faceToMove[turningFace](
        false,
        U(false, faceToMove[turningFace](true, tempCube))
      );
    } else {
      if (tempCube[cornerFaces[1]][1][1] === tempCube[cornerFaces[1]][0][2]) {
        turningFace = faceConversionClockwise[cornerFace];
        setTempF2lSolution([...getTempF2lSolution(), "U"]);
        tempCube = U(true, tempCube);
      } else if (
        tempCube[faceConversionClockwise[cornerFaces[1]]][1][1] ===
        tempCube[cornerFaces[1]][0][2]
      ) {
        turningFace =
          faceConversionClockwise[faceConversionClockwise[cornerFace]];
        setTempF2lSolution([...getTempF2lSolution(), "U2"]);
        tempCube = U(true, U(true, tempCube));
      } else if (
        tempCube[
          faceConversionClockwise[faceConversionClockwise[cornerFaces[1]]]
        ][1][1] === tempCube[cornerFaces[1]][0][2]
      ) {
        turningFace = faceConversionAnticlockwise[cornerFace];
        setTempF2lSolution([...getTempF2lSolution(), "U'"]);
        tempCube = U(false, tempCube);
      } else {
        turningFace = cornerFace;
        console.log("DO NOTHING");
      }
      setTempF2lSolution([
        ...getTempF2lSolution(),
        faceToNotation[turningFace] + "'",
        "U",
        faceToNotation[turningFace]
      ]);
      tempCube = faceToMove[turningFace](
        true,
        U(true, faceToMove[turningFace](false, tempCube))
      );
    }
  }

  console.log(cornerFaces);

  return tempCube;
};

export default cornerEdgeConnected;
