import { create } from "zustand";

const useApplicationStore = create((set) => ({
  scramble: "",
  setScramble: (value) => set({ scramble: value }),
  solverMode: "idle",
  setSolverMode: (mode) => set({ solverMode: mode }),
  moveHistory: [],
  setMoveHistory: (value) => set({ moveHistory: value }),
  axisHelper: true,
  setAxisHelper: (value) => set({ axisHelper: value }),
  scrambleLength: 25,
  setScrambleLength: (length) => set({ scrambleLength: length }),
  showHelpModal: false,
  setShowHelpModal: (value) => set({ showHelpModal: value }),
  automaticMovesInProgress: false,
  setAutomaticMovesInProgress: (value) =>
    set({ automaticMovesInProgress: value })
}));

export default useApplicationStore;
