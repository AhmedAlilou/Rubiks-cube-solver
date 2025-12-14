import { B, D, F, L, R, U } from "../../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../../moves/wide/index.js";
import { M, S, E } from "../../../moves/slice/index.js";

import { getOllSolution, setOllSolution } from "../../../../store/solveStore";

const fish = (cube, sideRows, colour) => {
  let tempCube = cube;
  let sune = false;
  let antiSune = false;
  const letterToMove = { F: F, U: U, R: R, L: L };

  for (let i = 0; i < 4; i++) {
    if (sideRows[i].includes(colour)) {
      if (sideRows[i][0] === colour) {
        antiSune = true;
      } else {
        sune = true;
      }
    }
  }

  if (sune) {
    if (!sideRows[0].includes(colour)) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
    } else if (!sideRows[2].includes(colour)) {
      setOllSolution([...getOllSolution(), "U'"]);
      tempCube = U(false, tempCube);
    } else if (!sideRows[3].includes(colour)) {
      setOllSolution([...getOllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    }
  } else {
    if (!sideRows[1].includes(colour)) {
      setOllSolution([...getOllSolution(), "U"]);
      tempCube = U(true, tempCube);
    } else if (!sideRows[3].includes(colour)) {
      setOllSolution([...getOllSolution(), "U'"]);
      tempCube = U(false, tempCube);
    } else if (!sideRows[0].includes(colour)) {
      setOllSolution([...getOllSolution(), "U2"]);
      tempCube = U(true, U(true, tempCube));
    }
  }

  console.log(sune, sideRows);

  const moves = sune
    ? ["R", "U", "R'", "U", "R", "U", "U", "R'"]
    : ["R", "U", "U", "R'", "U'", "R", "U'", "R'"];

  if (sune) {
    setOllSolution([...getOllSolution(), "R", "U", "R'", "U", "R", "U2", "R'"]);
  } else {
    setOllSolution([
      ...getOllSolution(),
      "R",
      "U2",
      "R'",
      "U'",
      "R",
      "U'",
      "R'"
    ]);
  }

  moves.forEach((move) => {
    tempCube = letterToMove[move[0]](move[1] ? false : true, tempCube);
  });

  return tempCube;
};

export default fish;
