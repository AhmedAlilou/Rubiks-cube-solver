import {
  handleB,
  handleD,
  handleF,
  handleL,
  handleR,
  handleU
} from "../../../view/src/moves/moveHandlers/index.js";

import { F, U, D, B, L, R } from "../../../model/models/moves/turns/index.js";

import { getCube, setCube } from "../../store/cubeStore.js";

// use this to do view turn which then does both the view and model update because in the view turn we call the model turn functions
