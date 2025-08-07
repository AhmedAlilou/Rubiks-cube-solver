import { create } from "zustand";

const useCubiesStore = create((set) => ({
  cubies: {
    1: {
      position: [0, 0, 1],
      frontColour: "green",
      rotations: [0, 0, Math.PI / 2]
    },
    2: {
      position: [1, 0, 1],
      frontColour: "green",
      rightColour: "red",
      rotations: [0, 0, Math.PI / 2]
    },
    3: {
      position: [0, 1, 1],
      frontColour: "green",
      topColour: "white",
      rotations: [0, 0, Math.PI / 2]
    },
    4: {
      position: [-1, 0, 1],
      frontColour: "green",
      leftColour: "orange",
      rotations: [0, 0, Math.PI / 2]
    }
  },
  setCubies: (newCubies) =>
    set((state) => ({ cubies: { ...state.cubies, ...newCubies } })),
  resetRotations: () =>
    set((state) => {
      const resetCubies = {};
      for (const i in state.cubies) {
        resetCubies[i] = {
          ...state.cubies[i],
          rotations: [0, 0, 0]
        };
      }
      return { cubies: resetCubies };
    })
}));

export default useCubiesStore;
