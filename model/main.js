import { getCube } from "./store/cubeStore.js";
import execute from "./models/execute.js";
import formatAlg from "./models/formatAlg.js";
import generateScramble from "./models/scramble/generateScramble.js";
import solve from "./models/solve/solve.js";
const sequence = generateScramble(25);

("------------------------------------------------------------------------------------------------------------------------------------------------");
// ("Initial Cube State:");
// (getCube());
// execute(sequence);
// (sequence);
"INITIAL CUBE: ", getCube();
"SEQUENCE: ", sequence;
execute(sequence);
solve(getCube());

("------------------------------------------------------------------------------------------------------------------------------------------------");
