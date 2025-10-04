import { x, y, z } from "../../moves/rotation/index.js";
import { setCrossSolution } from "../../../store/solveStore.js";

const rotateFaceToBottom = (tempCube, colour) => {
  if (tempCube.down[1][1] !== colour) {
    switch (colour) {
      case tempCube.front[1][1]:
        setCrossSolution((prev) => [...prev, "x'"]);
        return x(false, tempCube);
      case tempCube.right[1][1]:
        setCrossSolution((prev) => [...prev, "z"]);
        return z(true, tempCube);
      case tempCube.back[1][1]:
        setCrossSolution((prev) => [...prev, "x"]);
        return x(true, tempCube);
      case tempCube.left[1][1]:
        setCrossSolution((prev) => [...prev, "z'"]);
        return z(false, tempCube);
      case tempCube.top[1][1]:
        setCrossSolution((prev) => [...prev, "x2"]);
        return x(true, x(true, tempCube)); // to call x twice
      default:
        console.warn("Colour not found on cube:", colour);
        return;
    }
  } else {
    return tempCube;
  }
};

export default rotateFaceToBottom;
