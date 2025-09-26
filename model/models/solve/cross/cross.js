import { x, y, z } from "../../moves/rotation/index.js";
import { M, S, E } from "../../moves/slice/index.js";
import { R, L, U, D, F, B } from "../../moves/turns/index.js";
import { r, l, u, d, f, b } from "../../moves/wide/index.js";
import { getCrossColours } from "../../../store/solveStore.js";
import { getCube } from "../../../store/cubeStore.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import rotateFaceToBottom from "../cross/rotateFaceToBottom.js";

const cross = (cube) => {
  let tempCube = getCube();
  const setTempCube = (newCube) => {
    tempCube = newCube;
  };
  const edgesToSolve = [];
  let crossColours = getCrossColours();
  crossColours.map((colour) => {
    // rotate side to bottom
    console.log("doing:", colour, "cross");
    setTempCube(cube); // reset tempCube to current cube state

    tempCube = rotateFaceToBottom(tempCube, colour); // rotate face that needs cross to bottom
    // check for edge pieces of cross colour that are solved
    console.log(colourInfo[colour].adjacent);
    // add all other edge pieces to array to look for
    // for each edge piece in array:
    //  locate edge piece
    //  find where it needs to go
    //  move it there
  });
};

export default cross;
