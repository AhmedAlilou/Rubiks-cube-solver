import { create } from "zustand";

const PI = Math.PI;
const orange = "#FF6500";

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
      rightColour: "red",
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
      rightColour: "red",
      isRotating: false
    },
    6: {
      position: [1, 1, 0],
      rightColour: "red",
      topColour: "white",
      isRotating: false
    },
    7: {
      position: [1, 0, -1],
      rightColour: "red",
      backColour: "blue",
      isRotating: false
    },
    8: {
      position: [1, 1, 1],
      rightColour: "red",
      topColour: "white",
      frontColour: "green",
      isRotating: false
    }
  },
  setCubies: (newCubies) =>
    set((state) => ({ cubies: { ...state.cubies, ...newCubies } })),
  currentXRotation: 0,
  setCurrentXRotation: (value) => set({ currentXRotation: value }),
  currentYRotation: 0,
  setCurrentYRotation: (value) => set({ currentXRotation: value }),
  currentZRotation: 0,
  setCurrentZRotation: (value) => set({ currentZRotation: value }),
  prime: false,
  setPrime: (value) => set({ prime: value }),
  buttonsDisabled: false,
  setButtonsDisabled: (value) => set({ buttonsDisabled: value })
}));

export default useCubiesStore;
