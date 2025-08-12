import { create } from "zustand";

const PI = Math.PI;
const orange = "#DD5500";
const yellow = "#CCCC00";
const red = "#B70000";
const blue = "#0000B7";

const useCubiesStore = create((set) => ({
  cubies: {
    1: {
      position: [0, 0, 1],
      frontColour: "green",
      isRotating: false
    },
    2: {
      position: [1, 0, 1],
      frontColour: "green",
      rightColour: red,
      isRotating: false
    },
    3: {
      position: [0, 1, 1],
      frontColour: "green",
      topColour: "white",
      isRotating: false
    },
    4: {
      position: [-1, 0, 1],
      frontColour: "green",
      leftColour: orange,
      isRotating: false
    },
    5: {
      position: [1, 0, 0],
      rightColour: red,
      isRotating: false
    },
    6: {
      position: [1, 1, 0],
      rightColour: red,
      topColour: "white",
      isRotating: false
    },
    7: {
      position: [1, 0, -1],
      rightColour: red,
      backColour: blue,
      isRotating: false
    },
    8: {
      position: [1, 1, 1],
      rightColour: red,
      topColour: "white",
      frontColour: "green",
      isRotating: false
    },
    9: {
      position: [0, 1, 0],
      topColour: "white",
      isRotating: false
    },
    10: {
      position: [1, 1, -1],
      rightColour: red,
      topColour: "white",
      backColour: blue,
      isRotating: false
    },
    11: {
      position: [0, 1, -1],
      topColour: "white",
      backColour: blue,
      isRotating: false
    },
    12: {
      position: [-1, 1, 0],
      leftColour: orange,
      topColour: "white",
      isRotating: false
    },
    13: {
      position: [-1, 1, -1],
      leftColour: orange,
      topColour: "white",
      backColour: blue,
      isRotating: false
    },
    14: {
      position: [-1, 0, 0],
      leftColour: orange,
      isRotating: false
    },
    15: {
      position: [-1, 0, -1],
      leftColour: orange,
      backColour: blue,
      isRotating: false
    },
    16: {
      position: [0, 0, -1],
      backColour: blue,
      isRotating: false
    },
    17: {
      position: [1, -1, 0],
      rightColour: red,
      bottomColour: yellow,
      isRotating: false
    },
    18: {
      position: [1, -1, 1],
      rightColour: red,
      frontColour: "green",
      bottomColour: yellow,
      isRotating: false
    },
    19: {
      position: [0, -1, 1],
      frontColour: "green",
      bottomColour: yellow,
      isRotating: false
    },
    20: {
      position: [-1, -1, 0],
      leftColour: orange,
      bottomColour: yellow,
      isRotating: false
    },
    21: {
      position: [-1, -1, 1],
      leftColour: orange,
      frontColour: "green",
      bottomColour: yellow,
      isRotating: false
    },
    22: {
      position: [0, -1, 0],
      bottomColour: yellow,
      isRotating: false
    },
    23: {
      position: [1, -1, -1],
      rightColour: red,
      backColour: blue,
      bottomColour: yellow,
      isRotating: false
    },
    24: {
      position: [0, -1, -1],
      backColour: blue,
      bottomColour: yellow,
      isRotating: false
    },
    25: {
      position: [-1, -1, -1],
      leftColour: orange,
      backColour: blue,
      bottomColour: yellow,
      isRotating: false
    },
    26: {
      position: [-1, 1, 1],
      leftColour: orange,
      topColour: "white",
      frontColour: "green"
    }
  },
  setCubies: (newCubies) =>
    set((state) => ({ cubies: { ...state.cubies, ...newCubies } })),
  currentXRotation: 0,
  setCurrentXRotation: (value) => set({ currentXRotation: value }),
  currentYRotation: 0,
  setCurrentYRotation: (value) => set({ currentYRotation: value }),
  currentZRotation: 0,
  setCurrentZRotation: (value) => set({ currentZRotation: value }),
  double: false,
  setDouble: (value) => set({ double: value }),
  prime: false,
  setPrime: (value) => set({ prime: value }),
  buttonsDisabled: false,
  setButtonsDisabled: (value) => set({ buttonsDisabled: value })
}));

export default useCubiesStore;
