import { x, y, z } from "../../moves/rotation/index.js";

const rotateFaceToBottom = (tempCube, colour) => {
  if (tempCube.down[1][1] !== colour) {
    switch (colour) {
      case tempCube.front[1][1]:
        return x(false, tempCube);
      case tempCube.right[1][1]:
        return z(true, tempCube);
      case tempCube.back[1][1]:
        return x(true, tempCube);
      case tempCube.left[1][1]:
        return z(false, tempCube);
      case tempCube.top[1][1]:
        return x(true, x(true, tempCube)); // to call x twice
      default:
        console.warn("Colour not found on cube:", colour);
        return;
    }
  }
};

export default rotateFaceToBottom;
