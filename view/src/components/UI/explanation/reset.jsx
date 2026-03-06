import React from "react";
import "../UI.css";
import useApplicationStore from "../../../store/applicationStore";
import useCubiesStore from "../../../store/cubiesStore";
import { setCube } from "../../../../../model/store/cubeStore";
import {
  setCrossSolution,
  setF2lSolution,
  setOllSolution,
  setPllSolution,
  setStepPointer,
  setMovePointer,
  setSolution,
  setTempCrossSolution,
  setTempF2lSolution
} from "../../../../../model/store/solveStore";

// Initial solved cube state
const SOLVED_CUBE = {
  front: [
    ["g", "g", "g"],
    ["g", "g", "g"],
    ["g", "g", "g"]
  ],
  back: [
    ["b", "b", "b"],
    ["b", "b", "b"],
    ["b", "b", "b"]
  ],
  left: [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]
  ],
  right: [
    ["r", "r", "r"],
    ["r", "r", "r"],
    ["r", "r", "r"]
  ],
  top: [
    ["w", "w", "w"],
    ["w", "w", "w"],
    ["w", "w", "w"]
  ],
  down: [
    ["y", "y", "y"],
    ["y", "y", "y"],
    ["y", "y", "y"]
  ]
};

// Initial cubies state - solved cube
const INITIAL_CUBIES_STATE = {
  1: {
    position: [0, 0, 1],
    frontColour: "green",
    isRotating: false
  },
  2: {
    position: [1, 0, 1],
    frontColour: "green",
    rightColour: "#B70000",
    isRotating: false
  },
  3: {
    position: [0, 1, 1],
    frontColour: "green",
    topColour: "white",
    isRotating: false
  },
  4: {
    position: [-1, 0, 1],
    frontColour: "green",
    leftColour: "#DD5500",
    isRotating: false
  },
  5: {
    position: [1, 0, 0],
    rightColour: "#B70000",
    isRotating: false
  },
  6: {
    position: [1, 1, 0],
    rightColour: "#B70000",
    topColour: "white",
    isRotating: false
  },
  7: {
    position: [1, 0, -1],
    rightColour: "#B70000",
    backColour: "#0000B7",
    isRotating: false
  },
  8: {
    position: [1, 1, 1],
    rightColour: "#B70000",
    topColour: "white",
    frontColour: "green",
    isRotating: false
  },
  9: {
    position: [0, 1, 0],
    topColour: "white",
    isRotating: false
  },
  10: {
    position: [1, 1, -1],
    rightColour: "#B70000",
    topColour: "white",
    backColour: "#0000B7",
    isRotating: false
  },
  11: {
    position: [0, 1, -1],
    topColour: "white",
    backColour: "#0000B7",
    isRotating: false
  },
  12: {
    position: [-1, 1, 0],
    leftColour: "#DD5500",
    topColour: "white",
    isRotating: false
  },
  13: {
    position: [-1, 1, -1],
    leftColour: "#DD5500",
    topColour: "white",
    backColour: "#0000B7",
    isRotating: false
  },
  14: {
    position: [-1, 0, 0],
    leftColour: "#DD5500",
    isRotating: false
  },
  15: {
    position: [-1, 0, -1],
    leftColour: "#DD5500",
    backColour: "#0000B7",
    isRotating: false
  },
  16: {
    position: [0, 0, -1],
    backColour: "#0000B7",
    isRotating: false
  },
  17: {
    position: [1, -1, 0],
    rightColour: "#B70000",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  18: {
    position: [1, -1, 1],
    rightColour: "#B70000",
    frontColour: "green",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  19: {
    position: [0, -1, 1],
    frontColour: "green",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  20: {
    position: [-1, -1, 0],
    leftColour: "#DD5500",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  21: {
    position: [-1, -1, 1],
    leftColour: "#DD5500",
    frontColour: "green",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  22: {
    position: [0, -1, 0],
    bottomColour: "#CCCC00",
    isRotating: false
  },
  23: {
    position: [1, -1, -1],
    rightColour: "#B70000",
    backColour: "#0000B7",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  24: {
    position: [0, -1, -1],
    backColour: "#0000B7",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  25: {
    position: [-1, -1, -1],
    leftColour: "#DD5500",
    backColour: "#0000B7",
    bottomColour: "#CCCC00",
    isRotating: false
  },
  26: {
    position: [-1, 1, 1],
    leftColour: "#DD5500",
    topColour: "white",
    frontColour: "green",
    isRotating: false
  }
};

function Reset({ solverMode }) {
  const setSolverMode = useApplicationStore((state) => state.setSolverMode);
  const setScramble = useApplicationStore((state) => state.setScramble);
  const setMoveHistory = useApplicationStore((state) => state.setMoveHistory);
  const setCubies = useCubiesStore((state) => state.setCubies);
  const setCurrentXRotation = useCubiesStore(
    (state) => state.setCurrentXRotation
  );
  const setCurrentYRotation = useCubiesStore(
    (state) => state.setCurrentYRotation
  );
  const setCurrentZRotation = useCubiesStore(
    (state) => state.setCurrentZRotation
  );
  const setButtonsDisabled = useCubiesStore(
    (state) => state.setButtonsDisabled
  );
  const setDouble = useCubiesStore((state) => state.setDouble);
  const setPrime = useCubiesStore((state) => state.setPrime);
  const setMass = useCubiesStore((state) => state.setMass);

  const handleReset = () => {
    // Immediately disable buttons to stop any pending moves
    setButtonsDisabled(true);
    setDouble(false);
    setPrime(false);
    setMass(0.8);

    // Reset application state
    setSolverMode("idle");
    setScramble("");
    setMoveHistory([]);

    // Reset cube to solved state
    setCube(JSON.parse(JSON.stringify(SOLVED_CUBE)));

    // Reset solve state
    setCrossSolution([]);
    setF2lSolution([]);
    setOllSolution([]);
    setPllSolution([]);
    setTempCrossSolution([]);
    setTempF2lSolution([]);
    setSolution([[], [], [], []]);
    setStepPointer(0);
    setMovePointer(0);

    // Reset cubies to initial state
    setCubies(JSON.parse(JSON.stringify(INITIAL_CUBIES_STATE)));

    // Reset rotations
    setCurrentXRotation(0);
    setCurrentYRotation(0);
    setCurrentZRotation(0);

    // Re-enable buttons after reset
    setButtonsDisabled(false);
  };

  // Only show button when in review mode
  if (solverMode !== "review") {
    return null;
  }

  return (
    <button className="resetButton" onClick={handleReset}>
      RESET
    </button>
  );
}

export default Reset;
