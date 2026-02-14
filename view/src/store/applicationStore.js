import { create } from "zustand";

const useApplicationStore = create((set) => ({
  scramble: "",
  setScramble: (value) => set({ scramble: value }),
  solverMode: "idle",
  setSolverMode: (mode) => set({ solverMode: mode }),
  moveHistory: [],
  setMoveHistory: (value) => set({ moveHistory: value }),
  axisHelper: true,
  setAxisHelper: (value) => set({ axisHelper: value })
}));

export default useApplicationStore;
