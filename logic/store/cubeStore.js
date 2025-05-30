import { createStore } from "zustand/vanilla";

const useCubeStore = createStore((set) => ({
  cube: {
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
  setCube: (newCube) => set({ cube: newCube })
}));

export default useCubeStore;
