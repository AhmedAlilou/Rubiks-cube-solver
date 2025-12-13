import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { getOllSolution, setOllSolution } from "../../../../store/solveStore";

const blocks = (cube, sideRows, colour) => {
  let tempCube = cube;
  const letterToMove = { F: F, U: U, R: R, r: r };

  switch (colour) {
    case sideRows[1][2]:
      setOllSolution([...getOllSolution(), "U'"]);
      tempCube = U(false, tempCube);
      break;
    case sideRows[2][2]:
      setOllSolution([...getOllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
      break;
    case sideRows[3][2]:
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
      break;
    default:
      break;
  }

  const moves = ["F'", "r", "U", "R'", "U'", "r'", "F", "R"];

  setOllSolution([
    ...getOllSolution(),
    "F'",
    "r",
    "U",
    "R'",
    "U'",
    "r'",
    "F",
    "R"
  ]);

  moves.forEach((move) => {
    tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
  });

  return tempCube;
};

export default blocks;
