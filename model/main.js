import { getCube } from "./store/cubeStore.js";
import execute from "./models/notationMap.js";
import formatAlg from "./models/formatAlg.js";
import generateScramble from "./models/scramble/generateScramble.js";
const alg = "R U R' F' R U R' U' R' F R2 U' R'";
const sequence = generateScramble(25);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("Initial Cube State:");
console.log(getCube());
execute(sequence);
console.log(sequence);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
