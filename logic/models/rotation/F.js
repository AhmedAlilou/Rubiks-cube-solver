import cubeStore from "../../store/cubeStore.js";

const F = () => {
  // Get current cube state
  const cube = cubeStore.getState().cube;
  const setCube = cubeStore.getState().setCube;
  const bufferCube = cubeStore.getState().bufferCube;
  const setBufferCube = cubeStore.getState().setBufferCube;

  const cubeColours = cubeStore.getState().cubeColours;
  const setCubeColours = cubeStore.getState().setCubeColours;
  const bufferCubeColours = cubeStore.getState().bufferCubeColours;
  const setBufferCubeColours = cubeStore.getState().setBufferCubeColours;
  console.log("Original: ", cube, cubeColours);
  console.log("Turning...");
  // use bufffer as original state, and take pieces from that buffer cube and add to new cube
  // then update buffer cube to be equal to the new cube
  const newCube = {
    front: [
      [bufferCube.front[2][0], bufferCube.front[1][0], bufferCube.front[0][0]],
      [bufferCube.front[2][1], bufferCube.front[1][1], bufferCube.front[0][1]],
      [bufferCube.front[2][2], bufferCube.front[1][2], bufferCube.front[0][2]]
    ],
    back: cube.back,
    left: [
      [bufferCube.left[2][0], bufferCube.left[1][0], bufferCube.left[0][0]],
      [bufferCube.left[2][1], bufferCube.left[1][1], bufferCube.left[0][1]],
      [bufferCube.left[2][2], bufferCube.left[1][2], bufferCube.left[0][2]]
    ],
    right: [
      [bufferCube.right[2][0], bufferCube.right[1][0], bufferCube.right[0][0]],
      [bufferCube.right[2][1], bufferCube.right[1][1], bufferCube.right[0][1]],
      [bufferCube.right[2][2], bufferCube.right[1][2], bufferCube.right[0][2]]
    ],
    top: [
      [bufferCube.top[2][0], bufferCube.top[1][0], bufferCube.top[0][0]],
      [bufferCube.top[2][1], bufferCube.top[1][1], bufferCube.top[0][1]],
      [bufferCube.top[2][2], bufferCube.top[1][2], bufferCube.top[0][2]]
    ],
    down: [
      [bufferCube.down[2][0], bufferCube.down[1][0], bufferCube.down[0][0]],
      [bufferCube.down[2][1], bufferCube.down[1][1], bufferCube.down[0][1]],
      [bufferCube.down[2][2], bufferCube.down[1][2], bufferCube.down[0][2]]
    ]
  };

  setCube(newCube);
  setBufferCube(newCube);

  // COLOURS

  const newCubeColours = {
    front: cubeColours.front,
    back: cubeColours.back,
    left: [
      [
        bufferCubeColours.left[2][0],
        bufferCubeColours.left[1][0],
        bufferCubeColours.down[0][0]
      ],
      [
        bufferCubeColours.left[2][1],
        bufferCubeColours.left[1][1],
        bufferCubeColours.down[0][1]
      ],
      [
        bufferCubeColours.left[2][2],
        bufferCubeColours.left[1][2],
        bufferCubeColours.down[0][2]
      ]
    ],
    right: [
      [
        bufferCubeColours.top[2][0],
        bufferCubeColours.right[2][1],
        bufferCubeColours.right[2][2]
      ],
      [
        bufferCubeColours.top[2][1],
        bufferCubeColours.right[1][1],
        bufferCubeColours.right[0][1]
      ],
      [
        bufferCubeColours.top[2][2],
        bufferCubeColours.right[1][2],
        bufferCubeColours.right[0][2]
      ]
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
        bufferCubeColours.left[2][2],
        bufferCubeColours.left[1][2],
        bufferCubeColours.left[0][2]
      ]
    ],
    down: [
      [
        bufferCubeColours.right[2][0],
        bufferCubeColours.right[1][0],
        bufferCubeColours.right[0][0]
      ],
      [
        bufferCubeColours.down[2][1],
        bufferCubeColours.down[1][1],
        bufferCubeColours.down[0][1]
      ],
      [
        bufferCubeColours.down[2][2],
        bufferCubeColours.down[1][2],
        bufferCubeColours.down[0][2]
      ]
    ]
  };

  setCubeColours(newCubeColours);
  setBufferCubeColours(newCubeColours);

  console.log("New: ", newCube, newCubeColours);
};

export default F;
