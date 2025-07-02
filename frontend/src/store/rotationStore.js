import { create } from "zustand";

const useRotationStore = create((set) => ({
  rotating: false,
  setRotating: (newState) => set({ rotating: newState }),
  axis: null,
  setAxis: (newAxis) => set({ axis: newAxis }),
  layerValue: null,
  setLayerValue: (newValue) => set({ layerValue: newValue }),
  clockWise: null,
  setClockWise: (newDirection) => set({ clockWise: newDirection }),
  numOfRotations: 0,
  setNumOfRotations: (newCount) => set({ numOfRotations: newCount }),
  target: 0,
  setTarget: (newTarget) => set({ target: newTarget })
}));

export default useRotationStore;
