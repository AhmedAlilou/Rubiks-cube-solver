import { F, U, D, B, L, R } from "./turns/index.js";
import { M, S, E } from "./slice/index.js";
import { x, y, z } from "./rotation/index.js";
import { f, u, d, b, l, r } from "./wide/index.js";

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

  // Loop through and execute each move
  moves.forEach((move) => {
    const match = move.match(/^([A-Za-z])([2]?)(['"]?)$/);

    if (!match) {
      console.warn(`Invalid move format: "${move}"`);
      return;
    }

    const [, base, double, prime] = match;

    const fn = moveFunctions[base];
    if (!fn) {
      console.warn(`No function found for move: "${base}"`);
      return;
    }

    const isClockwise = prime !== "'";
    const repetitions = double === "2" ? 2 : 1;

    for (let i = 0; i < repetitions; i++) {
      fn(isClockwise);
    }
  });
};

export default execute;
