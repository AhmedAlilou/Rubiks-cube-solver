import useCubeStore from "./store/cubeStore.js";
import F from "./models/rotation/F.js";
import U from "./models/rotation/U.js";
import D from "./models/rotation/D.js";
import B from "./models/rotation/B.js";
import L from "./models/rotation/L.js";
import R from "./models/rotation/R.js";
const cube = useCubeStore.getState().cube;
console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("Initial Cube State:");
console.log(cube);
F(true);
R(false);
U(false);
D(true);
B(true);
L(true);
D(false);
R(false);
U(false);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
