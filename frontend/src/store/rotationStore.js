import { create } from "zustand";

export const useRotationStore = create((set) => ({
  rotating: false,
  setRotating: (newRotating) => set({ rotating: newRotating }),
  rotation: 0,
  setRotation: (newRotation) => set({ rotation: newRotation })
}));
