import { create } from "zustand";

const useApplicationStore = create((set) => ({
  scramble: "",
  setScramble: (value) => set({ scramble: value }),
  isFreePlay: true,
  setIsFreePlay: (value) => set({ isFreePlay: value }),
  isScrambling: false,
  setIsScrambling: (value) => set({ isScrambling: value }),
  isSolving: false,
  setIsSolving: (value) => set({ solving: value }),
  moveHistory: [],
  setMoveHistory: (value) => set({ moveHistory: value })
}));

export default useApplicationStore;
