import { create } from "zustand";
import generateScramble from "../../../model/models/scramble/generateScramble";

const useScrambleStore = create((set) => ({
  scramble: [],
  setScramble: (newScramble) => set({ scramble: newScramble }),
  generateScramble: (length) => set({ scramble: generateScramble(length) })
}));

export default useScrambleStore;
