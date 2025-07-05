import { create } from "zustand";

const useRotationStore = create((set) => ({
  rotating: false,
  setRotating: (newState) => set({ rotating: newState }),
  axis: null,
  setAxis: (newAxis) => set({ axis: newAxis }),
  layerValue: null,
  setLayerValue: (newValue) => set({ layerValue: newValue }),
  clockwise: null,
  setClockwise: (newDirection) => set({ clockwise: newDirection }),
  numOfRotations: 0,
  setNumOfRotations: (newCount) => set({ numOfRotations: newCount }),
  target: 0,
  setTarget: (newTarget) => set({ target: newTarget }),
  cubieMatrix: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  setCubieMatrix: (newMatrix) => set({ cubieMatrix: newMatrix })
}));

export default useRotationStore;
