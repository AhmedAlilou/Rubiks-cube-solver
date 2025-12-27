import cyclicEquality from "./functions/cyclicEquality";
import formatOll from "./functions/formatOll";
import mapOutTopLayer from "./functions/mapOutTopLayer";
import algs from "./algs";
import { B, D, F, L, R, U } from "../../moves/turns/index.js";
import { b, d, f, l, r, u } from "../../moves/wide/index.js";
import { M, S, E } from "../../moves/slice/index.js";
import { x, y, z } from "../../moves/rotation/index.js";
import { getOllSolution, setOllSolution } from "../../../store/solveStore";

const oneLookOll = (cube, colour) => {
  let moves = [];
  let tempCube = cube;
  const sideRows = mapOutTopLayer(tempCube).sideRows;
  const formattedOll = formatOll(tempCube["top"], sideRows, colour);
  const formattedTop = formattedOll[0];
  const formattedSideRows = formattedOll[1];
  for (let i = 1; i < 59; i++) {
    if (
      cyclicEquality(formattedTop, formattedSideRows, algs[i][0], algs[i][1])[0]
    ) {
      if (
        cyclicEquality(
          formattedTop,
          formattedSideRows,
          algs[i][0],
          algs[i][1]
        )[1] === 1
      ) {
        setOllSolution(["U"]);
        tempCube = U(true, tempCube);
      } else if (
        cyclicEquality(
          formattedTop,
          formattedSideRows,
          algs[i][0],
          algs[i][1]
        )[1] === 2
      ) {
        setOllSolution(["U2"]);
        tempCube = U(true, U(true, tempCube));
      } else if (
        cyclicEquality(
          formattedTop,
          formattedSideRows,
          algs[i][0],
          algs[i][1]
        )[1] === 3
      ) {
        setOllSolution(["U'"]);
        tempCube = U(false, tempCube);
      }
      console.log(
        cyclicEquality(
          formattedTop,
          formattedSideRows,
          algs[i][0],
          algs[i][1]
        )[1]
      );
      if (algs[i][2].length !== 1) {
        moves = algs[i][2];
      }
    }
  }
  setOllSolution([...getOllSolution(), ...moves]);
};

export default oneLookOll;
