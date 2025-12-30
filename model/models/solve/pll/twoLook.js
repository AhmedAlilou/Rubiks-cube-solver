import { getSolutionCrossColour } from "../../../store/solveStore";
import { setPllSolution, getPllSolution } from "../../../store/solveStore";
import { B, D, F, L, R, U } from "../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../moves/wide/index.js";
import { M, S, E } from "../../moves/slice/index.js";
import { x, y, z } from "../../moves/rotation/index.js";
import colourInfo from "../../helperFunctions/colourInfo";
import mapOutTopLayer from "../oll/functions/mapOutTopLayer.js";
import formatPll from "./formatPll";
import oneLook from "./oneLook.js";

const twoLook = (cube, sideRows) => {
  let tempCube = cube;
  const colour = colourInfo[getSolutionCrossColour()].opposite;
  const formattedSideRows = formatPll(sideRows, colour);
  const letterToMove = {
    F: F,
    U: U,
    R: R,
    L: L,
    D: D,
    r: r,
    S: S,
    M: M,
    x: x,
    y: y
  };

  // check for bar or headlights, if so get them on the left and do T perm
  // if not then do V perm from any angle
  // loop through side rows to find bar or headlights
  let knownCase = false;
  let count = 0;
  let headlights = false;
  let found = false;
  let moves = [];
  for (const sideRow of sideRows) {
    if (sideRow[0] === sideRow[2] && !found) {
      found = true;
      headlights = true;
    } else if (sideRow[0] === sideRow[2] && found) {
      knownCase = true;
      headlights = false;
    } else if (!found) {
      count++;
    }
  }

  "knownCase:", knownCase, "headlights:", headlights, "count: ", count;

  if (knownCase) {
    tempCube = oneLook(tempCube, sideRows);
  } else if (headlights) {
    // move headlights to left
    if (count !== 1) {
      if (count === 0) {
        setPllSolution(["U"]);
        tempCube = U(true, tempCube);
      } else if (count === 2) {
        setPllSolution(["U'"]);
        tempCube = U(false, tempCube);
      } else if (count === 3) {
        setPllSolution(["U2"]);
        tempCube = U(true, U(true, tempCube));
      }
    }

    setPllSolution([
      ...getPllSolution(),
      "R",
      "U",
      "R'",
      "U'",
      "R'",
      "F",
      "R",
      "R",
      "U'",
      "R'",
      "U'",
      "R",
      "U",
      "R'",
      "F'"
    ]);
    moves = [
      "R",
      "U",
      "R'",
      "U'",
      "R'",
      "F",
      "R",
      "R",
      "U'",
      "R'",
      "U'",
      "R",
      "U",
      "R'",
      "F'"
    ];
    moves.forEach((move) => {
      tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
    });
  } else {
    setPllSolution([
      "F",
      "R",
      "U'",
      "R'",
      "U'",
      "R",
      "U",
      "R'",
      "F'",
      "R",
      "U",
      "R'",
      "U'",
      "R'",
      "F",
      "R",
      "F'"
    ]);
    moves = [
      "F",
      "R",
      "U'",
      "R'",
      "U'",
      "R",
      "U",
      "R'",
      "F'",
      "R",
      "U",
      "R'",
      "U'",
      "R'",
      "F",
      "R",
      "F'"
    ];
    moves.forEach((move) => {
      tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
    });
  }
  const newSideRows = mapOutTopLayer(tempCube).sideRows;
  tempCube = oneLook(tempCube, newSideRows);

  return tempCube;
};

export default twoLook;
