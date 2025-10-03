import { create } from "zustand";

const useScrambleStore = create((set) => ({
  scramble: "",
  setScramble: (value) => set({ scramble: value }),
  isFreePlay: true,
  setIsFreePlay: (value) => set({ isFreePlay: value }),
  isScrambling: false,
  setIsScrambling: (value) => set({ isScrambling: value }),
  isSolving: false,
  setIsSolving: (value) => set({ solving: value }),
  movesHistory: [],
  setMovesHistory: (value) => set({ movesHistory: value })
}));

export default useScrambleStore;
