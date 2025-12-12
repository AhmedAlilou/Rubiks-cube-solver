import { getSolutionCrossColour } from "../../../store/solveStore";
import dot from "./twoLook/dot.js";
import bar from "./twoLook/bar.js";

const twoLook = (cube, colour) => {
  let tempCube = cube;
  const crossDone =
    tempCube["top"][0][1] +
      tempCube["top"][1][0] +
      tempCube["top"][1][2] +
      tempCube["top"][2][1] ===
    colour + colour + colour + colour;
  const isDot = ![
    tempCube["top"][0][1],
    tempCube["top"][1][0],
    tempCube["top"][1][2],
    tempCube["top"][2][1]
  ].includes(colour);

  const isBar = Boolean(
    !(crossDone || isDot) &&
      (tempCube["top"][0][1] === tempCube["top"][2][1]) ^
        (tempCube["top"][1][0] === tempCube["top"][1][2])
  );

  const hook = !(crossDone || isDot || isBar);

  console.log("cross: ", crossDone);
  console.log("dot: ", isDot);
  console.log("bar: ", isBar);
  console.log("hook: ", hook);

  if (isDot) {
    dot();
  } else if (isBar) {
    bar(tempCube, colour);
  } else if (hook) {
    // TODO: call hook handler when implemented
    console.log("handle hook case");
  }
};

export default twoLook;
