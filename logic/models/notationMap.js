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

  moves.forEach((move) => {
    // Match: base letter + optional 2 or 3 + optional prime
    const match = move.match(/^([A-Za-z])([23]?)(['"]?)$/);

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
      fn(isClockwise);
    }
  });
};

export default execute;
