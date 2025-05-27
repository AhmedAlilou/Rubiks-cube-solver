import cubeStore from "../../store/cubeStore.js";

const U = () => {
  const cube = cubeStore.getState().cube;
  const setCube = cubeStore.getState().setCube;
  const bufferCube = cubeStore.getState().bufferCube;
  const setBufferCube = cubeStore.getState().setBufferCube;

  const cubeColours = cubeStore.getState().cubeColours;
  const setCubeColours = cubeStore.getState().setCubeColours;
  const bufferCubeColours = cubeStore.getState().bufferCubeColours;
  const setBufferCubeColours = cubeStore.getState().setBufferCubeColours;

  const newCube = {
    front: [
      [bufferCube.right[0][0], bufferCube.right[0][1], bufferCube.right[0][2]],
      ...bufferCube.front.slice(1)
    ],
    back: [
      [bufferCube.left[0][0], bufferCube.left[0][1], bufferCube.left[0][2]],
      ...bufferCube.back.slice(1)
    ],
    left: [
      [bufferCube.front[0][0], bufferCube.front[0][1], bufferCube.front[0][2]],
      ...bufferCube.left.slice(1)
    ],
    right: [
      [bufferCube.back[0][0], bufferCube.back[0][1], bufferCube.back[0][2]],
      ...bufferCube.right.slice(1)
    ],
    top: [
      [bufferCube.top[2][0], bufferCube.top[1][0], bufferCube.top[0][0]],
      [bufferCube.top[2][1], bufferCube.top[1][1], bufferCube.top[0][1]],
      [bufferCube.top[2][2], bufferCube.top[1][2], bufferCube.top[0][2]]
    ],
    down: bufferCube.down
  };

  setCube(newCube);
  setBufferCube(newCube);

  const newCubeColours = {
    front: [
      [
        bufferCubeColours.right[0][0],
        bufferCubeColours.right[0][1],
        bufferCubeColours.right[0][2]
      ],
      ...bufferCubeColours.front.slice(1)
    ],
    back: [
      [
        bufferCubeColours.left[0][0],
        bufferCubeColours.left[0][1],
        bufferCubeColours.left[0][2]
      ],
      ...bufferCubeColours.back.slice(1)
    ],
    left: [
      [
        bufferCubeColours.front[0][0],
        bufferCubeColours.front[0][1],
        bufferCubeColours.front[0][2]
      ],
      ...bufferCubeColours.left.slice(1)
    ],
    right: [
      [
        bufferCubeColours.back[0][0],
        bufferCubeColours.back[0][1],
        bufferCubeColours.back[0][2]
      ],
      ...bufferCubeColours.right.slice(1)
    ],
    top: [
      [
        bufferCubeColours.top[2][0],
        bufferCubeColours.top[1][0],
        bufferCubeColours.top[0][0]
      ],
      [
        bufferCubeColours.top[2][1],
        bufferCubeColours.top[1][1],
        bufferCubeColours.top[0][1]
      ],
      [
        bufferCubeColours.top[2][2],
        bufferCubeColours.top[1][2],
        bufferCubeColours.top[0][2]
      ]
    ],
    down: bufferCubeColours.down
  };

  setCubeColours(newCubeColours);
  setBufferCubeColours(newCubeColours);
};

export default U;
