import { x, y, z } from "../../moves/rotation/index.js";
import { getTempCrossSolution } from "../../../store/solveStore.js";
import { setTempCrossSolution } from "../../../store/solveStore.js";

const rotateFaceToBottom = (tempCube, colour) => {
  if (tempCube.down[1][1] !== colour) {
    switch (colour) {
      case tempCube.front[1][1]:
        setTempCrossSolution([...getTempCrossSolution(), "x'"]);
        return x(false, tempCube);
      case tempCube.right[1][1]:
        setTempCrossSolution([...getTempCrossSolution(), "z"]);
        return z(true, tempCube);
      case tempCube.back[1][1]:
        setTempCrossSolution([...getTempCrossSolution(), "x"]);
        return x(true, tempCube);
      case tempCube.left[1][1]:
        setTempCrossSolution([...getTempCrossSolution(), "z'"]);
        return z(false, tempCube);
      case tempCube.top[1][1]:
        setTempCrossSolution([...getTempCrossSolution(), "x2"]);
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
