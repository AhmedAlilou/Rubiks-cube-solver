import { create } from "zustand";

const useApplicationStore = create((set) => ({
  scramble: "",
  setScramble: (value) => set({ scramble: value }),
  moveHistory: [],
  setMoveHistory: (value) => set({ moveHistory: value })
}));

export default useApplicationStore;
