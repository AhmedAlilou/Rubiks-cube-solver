import { getCube } from "./store/cubeStore.js";

import { F, U, D, B, L, R } from "./models/turns/index.js";
import { M, S, E } from "./models/slice/index.js";
import { x, y, z } from "./models/rotation/index.js";
import { f, u, d, b, l, r } from "./models/wide/index.js";

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("Initial Cube State:");
console.log(getCube());

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
