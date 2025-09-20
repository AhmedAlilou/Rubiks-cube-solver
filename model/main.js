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
console.log("AFTER SCRAMBLE: ", getCube());
solve(getCube());

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
