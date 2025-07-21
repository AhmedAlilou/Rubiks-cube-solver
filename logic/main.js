import { getCube } from "./store/cubeStore.js";
import execute from "./models/notationMap.js";
const sequence = [
  // double J perm
  "x2",
  "y2",
  "R",
  "U",
  "R'",
  "F'",
  "R",
  "U",
  "R'",
  "U'",
  "R'",
  "F",
  "R2",
  "U'",
  "R'",
  "U'",
  "R",
  "U",
  "R'",
  "F'",
  "R",
  "U",
  "R'",
  "U'",
  "R'",
  "F",
  "R2",
  "U'",
  "R'",
  "U'"
];

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("Initial Cube State:");
console.log(getCube());
execute(sequence);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
