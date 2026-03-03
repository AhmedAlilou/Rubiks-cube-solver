import React from "react";
import useApplicationStore from "../../../store/applicationStore";
import "./menu.css";

function ScrambleLength() {
  const scrambleLength = useApplicationStore((state) => state.scrambleLength);
  const setScrambleLength = useApplicationStore(
    (state) => state.setScrambleLength
  );

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 25;
    const validValue = Math.max(1, Math.min(value, 75));
    setScrambleLength(validValue);
  };

  return (
    <div className="scrambleLengthContainer">
      <label htmlFor="scrambleLengthInput" className="scrambleLengthLabel">
        Scramble Length
      </label>
      <input
        id="scrambleLengthInput"
        type="number"
        min="1"
        max="75"
        value={scrambleLength}
        onChange={handleChange}
        className="scrambleLengthInput"
      />
    </div>
  );
}

export default ScrambleLength;
