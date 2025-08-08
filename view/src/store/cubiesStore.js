import { create } from "zustand";

const PI = Math.PI;

const useCubiesStore = create((set) => ({
  cubies: {
    1: {
      position: [0, 0, 1],
      frontColour: "green",
      isRotating: true,
      rotations: [0, 0, PI / 2]
    },
    2: {
      position: [1, 0, 1],
      frontColour: "green",
      rightColour: "red",
      isRotating: true,
      rotations: [0, 0, PI / 2]
    },
    3: {
      position: [0, 1, 1],
      frontColour: "green",
      topColour: "white",
      isRotating: true,
      rotations: [0, 0, PI / 2]
    },
    4: {
      position: [-1, 0, 1],
      frontColour: "green",
      leftColour: "orange",
      isRotating: true,
      rotations: [0, 0, PI / 2]
    }
  },
  setCubies: (newCubies) =>
    set((state) => ({ cubies: { ...state.cubies, ...newCubies } })),
  currentRotation: 0,
  setCurrentRotation: (value) => set({ currentRotation: value })
}));

export default useCubiesStore;
