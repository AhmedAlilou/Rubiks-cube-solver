import { create } from "zustand";

const useKeysStore = create((set) => ({
  materialKey: 0,
  setMaterialKey: (newKey) => set({ materialKey: newKey })
}));

export default useKeysStore;
