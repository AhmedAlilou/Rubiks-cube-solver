import useCubeStore from "./store/cubeStore.js";
import F from "./models/rotation/f.js";
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
console.log("F turn:");
F(false);
B();
F(true);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
