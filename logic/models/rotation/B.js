import cubeStore from "../../store/cubeStore.js";

const B = () => {
  const cube = cubeStore.getState().cube;
  const setCube = cubeStore.getState().setCube;
  const bufferCube = cubeStore.getState().bufferCube;
  const setBufferCube = cubeStore.getState().setBufferCube;

  const cubeColours = cubeStore.getState().cubeColours;
  const setCubeColours = cubeStore.getState().setCubeColours;
  const bufferCubeColours = cubeStore.getState().bufferCubeColours;
  const setBufferCubeColours = cubeStore.getState().setBufferCubeColours;

  console.log("Original: ", cube, cubeColours);
  console.log("Turning Back face...");

  const newCube = {
    front: cube.front,
    back: [
      [bufferCube.back[2][0], bufferCube.back[1][0], bufferCube.back[0][0]],
      [bufferCube.back[2][1], bufferCube.back[1][1], bufferCube.back[0][1]],
      [bufferCube.back[2][2], bufferCube.back[1][2], bufferCube.back[0][2]]
    ],
    left: [
      [bufferCube.top[0][0], ...bufferCube.left[0].slice(1)],
      [bufferCube.top[0][1], ...bufferCube.left[1].slice(1)],
      [bufferCube.top[0][2], ...bufferCube.left[2].slice(1)]
    ],
    right: [
      [...bufferCube.right[0].slice(0, -1), bufferCube.down[2][2]],
      [...bufferCube.right[1].slice(0, -1), bufferCube.down[2][1]],
      [...bufferCube.right[2].slice(0, -1), bufferCube.down[2][0]]
    ],
    top: [
      [bufferCube.right[0][2], bufferCube.right[1][2], bufferCube.right[2][2]],
      ...bufferCube.top.slice(1)
    ],
    down: [
      ...bufferCube.down.slice(0, 2),
      [bufferCube.left[2][0], bufferCube.left[1][0], bufferCube.left[0][0]]
    ]
  };

  setCube(newCube);
  setBufferCube(newCube);

  const newCubeColours = {
    front: cubeColours.front,
    back: [
      [
        bufferCubeColours.back[2][0],
        bufferCubeColours.back[1][0],
        bufferCubeColours.back[0][0]
      ],
      [
        bufferCubeColours.back[2][1],
        bufferCubeColours.back[1][1],
        bufferCubeColours.back[0][1]
      ],
      [
        bufferCubeColours.back[2][2],
        bufferCubeColours.back[1][2],
        bufferCubeColours.back[0][2]
      ]
    ],
    left: [
      [bufferCubeColours.top[0][0], ...bufferCubeColours.left[0].slice(1)],
      [bufferCubeColours.top[0][1], ...bufferCubeColours.left[1].slice(1)],
      [bufferCubeColours.top[0][2], ...bufferCubeColours.left[2].slice(1)]
    ],
    right: [
      [
        ...bufferCubeColours.right[0].slice(0, -1),
        bufferCubeColours.down[2][2]
      ],
      [
        ...bufferCubeColours.right[1].slice(0, -1),
        bufferCubeColours.down[2][1]
      ],
      [...bufferCubeColours.right[2].slice(0, -1), bufferCubeColours.down[2][0]]
    ],
    top: [
      [
        bufferCubeColours.right[0][2],
        bufferCubeColours.right[1][2],
        bufferCubeColours.right[2][2]
      ],
      ...bufferCubeColours.top.slice(1)
    ],
    down: [
      ...bufferCubeColours.down.slice(0, 2),
      [
        bufferCubeColours.left[2][0],
        bufferCubeColours.left[1][0],
        bufferCubeColours.left[0][0]
      ]
    ]
  };

  setCubeColours(newCubeColours);
  setBufferCubeColours(newCubeColours);

  console.log("New: ", newCube, newCubeColours);
};

export default B;
