import { F, U, D, B, L, R } from "./moves/turns/index.js";
import { M, S, E } from "./moves/slice/index.js";
import { x, y, z } from "./moves/rotation/index.js";
import { f, u, d, b, l, r } from "./moves/wide/index.js";
import { setCube, getCube } from "../store/cubeStore.js";

const execute = (moves) => {
  // Map of all move names to their corresponding functions
  const moveFunctions = {
    F,
    U,
    D,
    B,
    L,
    R,
    M,
    S,
    E,
    x,
    y,
    z,
    f,
    u,
    d,
    b,
    l,
    r
  };

  moves.forEach((move) => {
    // Match: base letter + optional 2 or 3 + optional prime
    const match = move.trim().match(/^([A-Za-z])([23]?)(['"]?)$/);

    if (!match) {
      console.warn(`Invalid move format: "${move}"`);
      return;
    }

    const [, base, countStr, prime] = match;

    const fn = moveFunctions[base];
    if (!fn) {
      console.warn(`No function found for move: "${base}"`);
      return;
    }

    const isClockwise = prime !== "'";
    const count = countStr ? parseInt(countStr) : 1;

    for (let i = 0; i < count; i++) {
      const cube = getCube();
      console.log(cube);
      setCube(fn(isClockwise, cube));
    }
  });
};

export default execute;
