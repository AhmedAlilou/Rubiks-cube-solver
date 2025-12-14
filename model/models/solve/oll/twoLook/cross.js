import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { getOllSolution, setOllSolution } from "../../../../store/solveStore";

const cross = (cube, sideRows, colour) => {
  let tempCube = cube;
  let front = true;
  let side = false;
  const letterToMove = { F: F, U: U, R: R, L: L };

  for (let i = 0; i < 4; i++) {
    if (sideRows[i].includes(colour)) {
      if (sideRows[i][0] !== sideRows[i][2] && sideRows[i][0] === colour) {
        side = true;
        front = false;
      }
    }
  }

  if (front) {
    if (!sideRows[0].includes(colour)) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
    } else if (!sideRows[2].includes(colour)) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(false, tempCube);
    }
  } else {
    if (!sideRows[1].includes(colour)) {
      setOllSolution([...getOllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    } else if (!sideRows[0].includes(colour)) {
      setOllSolution([...getOllSolution(), "U'"]);
      tempCube = U(false, tempCube);
    } else if (!sideRows[2].includes(colour)) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
    }
  }

  console.log(front, side, sideRows);

  const moves = front
    ? ["R", "U", "U", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "R'"]
    : ["R", "U", "U", "R", "R", "U'", "R", "R", "U'", "R", "R", "U", "U", "R"];

  if (front) {
    setOllSolution([
      ...getOllSolution(),
      "R",
      "U2",
      "R'",
      "U'",
      "R",
      "U",
      "R'",
      "U'",
      "R",
      "U'",
      "R'"
    ]);
  } else {
    setOllSolution([
      ...getOllSolution(),
      "R",
      "U2",
      "R2",
      "U'",
      "R2",
      "U'",
      "R2",
      "U2",
      "R"
    ]);
  }

  moves.forEach((move) => {
    tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
  });

  return tempCube;
};

export default cross;
