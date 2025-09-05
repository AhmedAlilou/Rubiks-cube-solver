import { create } from "zustand";
import generateScramble from "../../../model/models/scramble/generateScramble";

const useScrambleStore = create((set) => ({
  isScrambling: true,
  setIsScrambling: (value) => set({ scrambling: value })
}));

export default useScrambleStore;
