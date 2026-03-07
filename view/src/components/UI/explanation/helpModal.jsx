import React from "react";
import useApplicationStore from "../../../store/applicationStore";
import "./helpModal.css";

function HelpModal() {
  const showHelpModal = useApplicationStore((state) => state.showHelpModal);
  const setShowHelpModal = useApplicationStore(
    (state) => state.setShowHelpModal
  );

  if (!showHelpModal) return null;

  return (
    <div className="helpModalOverlay" onClick={() => setShowHelpModal(false)}>
      <div className="helpModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="helpModalHeader">
          <h2>How to Use the Cube Solver</h2>
          <button
            className="helpModalClose"
            onClick={() => setShowHelpModal(false)}
          >
            ✕
          </button>
        </div>
        <div className="helpModalBody">
          <div className="helpSection">
            <h3>Getting Started</h3>
            <p>
              Input a scramble or generate a random scramble. You can use the
              keypad as well to manipulate the cube. When you're ready, click
              "Solve" on the right to see the solution.
            </p>
          </div>

          <div className="helpSection">
            <h3>Keypad Controls</h3>
            <p>
              Use the keypad on the left to perform cube rotations and turns.
              Each button corresponds to a standard cube notation move.
            </p>
          </div>

          <div className="helpSection">
            <h3>Solving Modes</h3>
            <p>
              <strong>OLL Mode:</strong> Choose between One-Look (faster,
              harder) or Two-Look (easier) method for Orienting the last layer.
            </p>
            <p>
              <strong>PLL Mode:</strong> Select One-Look or Two-Look for the
              final layer permutation.
            </p>
          </div>

          <div className="helpSection">
            <h3>Cube Orientation</h3>
            <p>
              Use the axis helper to visualize the 3D orientation. The blue line
              represents the front face, the red line represents the right face,
              and the green line represents the top face.
            </p>
          </div>

          <div className="helpSection">
            <h3>Algorithm References</h3>
            <p>
              Use "View OLLs" and "View PLLs" to open JPerm's algorithm
              reference sites for learning specific cases.
            </p>
          </div>

          <div className="helpSection">
            <h3>Solution Review</h3>
            <p>
              After solving, review the step-by-step solution on the right side
              to understand each phase of the solve. Use the arrows to navigate
              through the solution steps and moves.
            </p>
          </div>
        </div>
        <div className="helpModalFooter">
          <button
            className="helpModalButton"
            onClick={() => setShowHelpModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
