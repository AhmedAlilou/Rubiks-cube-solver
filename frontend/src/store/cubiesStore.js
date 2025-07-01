import { create } from "zustand";
import getInitialCubies from "../functions/helperFunctions/getInitialCubies.js";

const useCubiesStore = create((set) => ({
  cubies: getInitialCubies(),
  setCubies: (newCubies) => set({ cubies: newCubies }),
  resetCubies: () => set({ cubies: getInitialCubies() })
}));

export default useCubiesStore;
