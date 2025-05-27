import { createStore } from "zustand/vanilla";

const useCubeStore = createStore((set) => ({
  cubeColours: {
    front: [
      ["g", "g", "g"],
      ["g", "g", "g"],
      ["g", "g", "g"]
    ],
    back: [
      ["b", "b", "b"],
      ["b", "b", "b"],
      ["b", "b", "b"]
    ],
    left: [
      ["o", "o", "o"],
      ["o", "o", "o"],
      ["o", "o", "o"]
    ],
    right: [
      ["r", "r", "r"],
      ["r", "r", "r"],
      ["r", "r", "r"]
    ],
    top: [
      ["w", "w", "w"],
      ["w", "w", "w"],
      ["w", "w", "w"]
    ],
    down: [
      ["y", "y", "y"],
      ["y", "y", "y"],
      ["y", "y", "y"]
    ]
  },
  setCubeColours: (newCubeColours) => set({ cubeColours: newCubeColours })
}));

export default useCubeStore;
