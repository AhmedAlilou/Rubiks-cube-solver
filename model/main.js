import { getCube } from "./store/cubeStore.js";
import execute from "./models/execute.js";
import formatAlg from "./models/formatAlg.js";
import generateScramble from "./models/scramble/generateScramble.js";
import solve from "./models/solve/solve.js";
const alg = "R U R' F' R U R' U' R' F R2 U' R'";
const sequence = generateScramble(25);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
// console.log("Initial Cube State:");
// console.log(getCube());
// execute(sequence);
// console.log(sequence);
console.log("INITIAL CUBE: ", getCube());
execute(sequence);
console.log("SEQUENCE: ", sequence);
console.log(formatAlg("D L2 B' R2 F' D L D' B2 U B2 U2 R2 U F' U2 R B2 L D"));
solve(getCube());

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
