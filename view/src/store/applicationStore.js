import { create } from "zustand";

const useApplicationStore = create((set) => ({
  scramble: "",
  setScramble: (value) => set({ scramble: value }),
  moveHistory: [],
  setMoveHistory: (value) => set({ moveHistory: value }),
  axisHelper: false,
  setAxisHelper: (value) => set({ axisHelper: value })
}));

export default useApplicationStore;
