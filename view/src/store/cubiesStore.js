import { create } from "zustand";

const useCubiesStore = create((set) => ({
  cubies: {
    1: { position: [0, 0, 1], frontColour: "green", rotations: [0, 0, 0] },
    2: {
      position: [1, 0, 0],
      frontColour: "red",
      rotations: [Math.PI / 2, 0, 0]
    },
    3: {
      position: [0, 1, 0],
      frontColour: "blue",
      rotations: [0, Math.PI / 2, 0]
    },
    4: {
      position: [0, 0, -1],
      frontColour: "yellow",
      rotations: [0, 0, Math.PI / 2]
    }
  }
}));

export default useCubiesStore;
