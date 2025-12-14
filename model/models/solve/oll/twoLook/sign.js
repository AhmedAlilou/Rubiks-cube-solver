import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { getOllSolution, setOllSolution } from "../../../../store/solveStore";

const sign = (cube, sideRows, colour) => {
  let tempCube = cube;
  let front = false;
  let side = false;
  const letterToMove = { F: F, U: U, R: R, L: L, D: D, r: r };

  for (let i = 0; i < 4; i++) {
    if (sideRows[i].includes(colour)) {
      if (sideRows[i][0] === sideRows[i][2] && sideRows[i][0] === colour) {
        front = true;
      } else {
        side = true;
      }
    }
  }

  if (front) {
    if (sideRows[0].includes(colour)) {
      setOllSolution([...getOllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    } else if (sideRows[1].includes(colour)) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
    } else if (sideRows[3].includes(colour)) {
      setOllSolution([...getOllSolution(), "U'"]);
    }
  } else {
    if (sideRows[1][0] === colour) {
      setOllSolution([...getOllSolution(), "U'"]);
      tempCube = U(false, tempCube);
    } else if (sideRows[2][0] === colour) {
      setOllSolution([...getOllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    } else if (sideRows[3][0] === colour) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
    }
  }

  const moves = front
    ? ["R", "R", "D'", "R", "U", "U", "R'", "D", "R", "U", "U", "R"]
    : ["r", "U", "R'", "U'", "r'", "F", "R", "F'"];

  if (front) {
    setOllSolution([
      ...getOllSolution(),
      "R2",
      "D'",
      "R",
      "U2",
      "R'",
      "D",
      "R",
      "U2",
      "R"
    ]);
  } else {
    setOllSolution([
      ...getOllSolution(),
      "r",
      "U",
      "R'",
      "U'",
      "r'",
      "F",
      "R",
      "F'"
    ]);
  }

  moves.forEach((move) => {
    tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
  });

  return tempCube;
};

export default sign;
