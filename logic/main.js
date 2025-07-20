import { getCube } from "./store/cubeStore.js";

import F from "./models/turns/F.js";
import U from "./models/turns/U.js";
import D from "./models/turns/D.js";
import B from "./models/turns/B.js";
import L from "./models/turns/L.js";
import R from "./models/turns/R.js";

import x from "./models/rotation/x.js";
import y from "./models/rotation/y.js";
import z from "./models/rotation/z.js";

import f from "./models/wide/f.js";
import u from "./models/wide/u.js";
import d from "./models/wide/d.js";
import b from "./models/wide/b.js";
import l from "./models/wide/l.js";
import r from "./models/wide/r.js";

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
console.log("Initial Cube State:");

b(false);
f(true);
l(true);
d(false);
r(false);
u(false);
r(true);

console.log(
  "------------------------------------------------------------------------------------------------------------------------------------------------"
);
