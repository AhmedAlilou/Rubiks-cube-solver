import { x, y, z } from "../../moves/rotation/index.js";
import { M, S, E } from "../../moves/slice/index.js";
import { R, L, U, D, F, B } from "../../moves/turns/index.js";
import { r, l, u, d, f, b } from "../../moves/wide/index.js";
import { getCrossColours } from "../../../store/solveStore.js";
import { getCube } from "../../../store/cubeStore.js";
import colourInfo from "../../helperFunctions/colourInfo.js";
import edgePairs from "../../helperFunctions/edgePairs.js";
import rotateFaceToBottom from "../cross/rotateFaceToBottom.js";

const cross = (cube) => {
  let tempCube = getCube();
  const setTempCube = (newCube) => {
    tempCube = newCube;
  };
  const edgesToSolve = [];
  let crossColours = getCrossColours();
  crossColours.map((colour) => {
    // for each cross colour
    // rotate side to bottom
    console.log("doing:", colour, "cross");
    setTempCube(cube); // reset tempCube to current cube state
    console.log("T:", tempCube);
    tempCube = rotateFaceToBottom(tempCube, colour); // rotate face that needs cross to bottom
    console.log("T:", tempCube);
    // check for edge pieces of cross colour that are solved
    const unsolved = colourInfo[colour].adjacent;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if ((i === 1) ^ (j === 1)) {
          // this means its an edge piece
          if (tempCube.down[i][j] === colour) {
            const pair = edgePairs[`down[${i}][${j}]`];
            console.log("Pair:", pair);
            console.log(
              "edge piece already solved",
              colour,
              tempCube[pair.face][pair.row][pair.col]
            );
            // remove this colour from unsolved
          }
        }
      }
    }
    // for each edge piece in array:
    //  locate edge piece
    //  find where it needs to go
    //  move it there
  });
};

export default cross;
