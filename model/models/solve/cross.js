import { x, y, z } from "../moves/rotation/index.js";
import { M, S, E } from "../moves/slice/index.js";
import { R, L, U, D, F, B } from "../moves/turns/index.js";
import { r, l, u, d, f, b } from "../moves/wide/index.js";
import { getCrossColours } from "../../store/solveStore.js";
import { getCube } from "../../store/cubeStore.js";

const cross = (cube) => {
  const tempCube = getCube();
  const setTemptCube = (newCube) => {
    tempCube = newCube;
  };
  let crossColours = getCrossColours();
  crossColours.map((colour) => {
    // rotate side to bottom
    console.log("doing:", colour, "cross");
  });
};

export default cross;
